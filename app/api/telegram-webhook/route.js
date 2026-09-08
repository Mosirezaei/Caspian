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
  await fetch(`https://api.telegram.org/bot${botToken}/${method}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
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

// Receives Telegram updates for two admin actions:
//  1. Tapping "✅ تایید" / "❌ رد" under a comment notification (callback_query)
//  2. Replying (Telegram "Reply") to a comment notification with the answer
//     text (message.reply_to_message)
// Both are matched back to a row purely via telegram_message_id -- the id
// of the notification message Telegram is reacting to -- so no extra state
// needs to be tracked here.
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
      const action = cq.data === 'approve' ? 'approved' : cq.data === 'reject' ? 'rejected' : null;
      const messageId = cq.message?.message_id;

      if (action && messageId) {
        await supabase.rpc('moderate_page_comment', {
          p_telegram_message_id: messageId,
          p_action: action,
          p_secret: secret,
        });

        const statusLine = action === 'approved' ? '\n\n✅ منتشر شد' : '\n\n❌ رد شد';
        await callTelegram('editMessageText', {
          chat_id: chatId,
          message_id: messageId,
          text: (cq.message?.text || '') + statusLine,
        });
      }

      await callTelegram('answerCallbackQuery', {
        callback_query_id: cq.id,
        text: action === 'approved' ? 'تایید شد' : action === 'rejected' ? 'رد شد' : undefined,
      });
    } else if (update.message?.reply_to_message) {
      const replyText = update.message.text;
      const originalMessageId = update.message.reply_to_message.message_id;

      if (replyText) {
        await supabase.rpc('reply_page_comment', {
          p_telegram_message_id: originalMessageId,
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
