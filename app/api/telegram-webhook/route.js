import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// The name shown next to a Telegram reply on the site. There's only one
// admin using the bot today; if that changes, this can become a lookup by
// Telegram user id instead of a single constant.
const ADMIN_NAME = 'سحر';

function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return createClient(supabaseUrl, supabaseKey);
}

async function callTelegram(method, payload) {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const res = await fetch(`https://api.telegram.org/bot${botToken}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  return res.json();
}

// One-time setup helper: visit
//   https://caspian.am/api/telegram-webhook?key=<TELEGRAM_WEBHOOK_SECRET>
// once after deploy (or after rotating the bot token) to (re)register this
// route as the bot's webhook. Gated by the same secret so a random visitor
// can't repoint the bot's webhook elsewhere.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const key = searchParams.get('key');
  if (!key || key !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const res = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      url: 'https://caspian.am/api/telegram-webhook',
      secret_token: process.env.TELEGRAM_WEBHOOK_SECRET,
      allowed_updates: ['message', 'callback_query'],
    }),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

// Receives Telegram updates for the moderation flow:
//
//  1. Tapping "✅ تایید" under a comment -> approve it, edit the message to
//     show "✅ منتشر شد", and swap the buttons for a single
//     "✍️ پاسخ به این نظر" button.
//  2. Tapping "❌ رد" -> reject it, edit the message to show "❌ رد شد",
//     remove the buttons entirely. Nothing further happens.
//  3. Tapping "✍️ پاسخ به این نظر" -> send a new force-reply prompt message
//     (as a reply to the comment message) and remember its id on that
//     comment's row (reply_prompt_message_id).
//  4. The admin's next message, sent into that force-reply box, arrives as
//     message.reply_to_message pointing at the *prompt* message (not the
//     original comment) -- matched back to the right row via
//     reply_prompt_message_id. This is what makes replying to several
//     comments in any order, in parallel, unambiguous: each prompt message
//     is tied to exactly one comment.
export async function POST(request) {
  const secretHeader = request.headers.get('x-telegram-bot-api-secret-token');
  if (secretHeader !== process.env.TELEGRAM_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const update = await request.json();
  const supabase = getSupabase();
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  try {
    if (update.callback_query) {
      const cq = update.callback_query;
      const messageId = cq.message?.message_id;
      const baseText = cq.message?.text || '';

      if (cq.data === 'approve' || cq.data === 'reject') {
        const action = cq.data === 'approve' ? 'approved' : 'rejected';
        await supabase.rpc('moderate_page_comment', {
          p_telegram_message_id: messageId,
          p_action: action,
          p_secret: secret,
        });

        if (action === 'approved') {
          await callTelegram('editMessageText', {
            chat_id: chatId,
            message_id: messageId,
            text: `${baseText}\n\n✅ منتشر شد`,
          });
          await callTelegram('editMessageReplyMarkup', {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: { inline_keyboard: [[{ text: '✍️ پاسخ به این نظر', callback_data: 'reply' }]] },
          });
        } else {
          await callTelegram('editMessageText', {
            chat_id: chatId,
            message_id: messageId,
            text: `${baseText}\n\n❌ رد شد`,
          });
          await callTelegram('editMessageReplyMarkup', {
            chat_id: chatId,
            message_id: messageId,
            reply_markup: { inline_keyboard: [] },
          });
        }

        await callTelegram('answerCallbackQuery', {
          callback_query_id: cq.id,
          text: action === 'approved' ? 'تایید شد' : 'رد شد',
        });
      } else if (cq.data === 'reply') {
        const prompt = await callTelegram('sendMessage', {
          chat_id: chatId,
          reply_to_message_id: messageId,
          text: '✍️ پاسخ‌تون رو همین‌جا بنویسید:',
          reply_markup: { force_reply: true, selective: true },
        });
        const promptMessageId = prompt?.result?.message_id;

        if (promptMessageId) {
          await supabase.rpc('set_reply_prompt_message_id', {
            p_telegram_message_id: messageId,
            p_prompt_message_id: promptMessageId,
            p_secret: secret,
          });
        }

        await callTelegram('answerCallbackQuery', { callback_query_id: cq.id });
      }
    } else if (update.message?.reply_to_message) {
      const replyText = update.message.text;
      const promptMessageId = update.message.reply_to_message.message_id;

      if (replyText) {
        await supabase.rpc('reply_page_comment_by_prompt', {
          p_prompt_message_id: promptMessageId,
          p_reply: replyText,
          p_admin_name: ADMIN_NAME,
          p_secret: secret,
        });

        await callTelegram('sendMessage', {
          chat_id: chatId,
          reply_to_message_id: update.message.message_id,
          text: '✅ جواب ثبت و منتشر شد',
        });
      }
    }
  } catch (error) {
    console.error('telegram-webhook error:', error);
  }

  // Telegram just needs a fast 200 -- it doesn't care about the body.
  return NextResponse.json({ ok: true });
}
