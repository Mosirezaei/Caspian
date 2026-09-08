import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Minimal HTML-entity escaping for values interpolated into a Telegram
// message sent with parse_mode: 'HTML' -- without this, a comment
// containing "<" or "&" would break the message's formatting (and in
// principle let someone inject fake tags/links into what you read).
function escapeHtml(str) {
  return String(str)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

// Turns "/blog/armenia-tourism-guide" into a short clickable label
// ("armenia-tourism-guide") linking to the full page. Falls back to the
// site root for an empty/root path.
function pageLink(pagePath) {
  const path = pagePath || '/';
  const segments = path.split('/').filter(Boolean);
  const label = segments.length ? segments[segments.length - 1] : 'صفحه اصلی';
  const url = `https://caspian.am${path}`;
  return `<a href="${url}">${escapeHtml(label)}</a>`;
}

// Accepts a new page comment/question, stores it as 'pending' via the
// submit_page_comment() RPC (this route only ever holds the public anon
// key, same pattern as /api/cron/sync-events), then notifies the admin on
// Telegram with Approve/Reject buttons. Nothing becomes visible on the site
// until the admin approves it from Telegram -- see /api/telegram-webhook.
export async function POST(request) {
  try {
    const body = await request.json();
    const { page_path, lang, name, message, website, telegram_id, whatsapp, email } = body || {};

    // Honeypot: a real visitor never fills this hidden field. Bots that
    // blindly fill every input will trip it -- return a plain 200 so the
    // bot can't tell it was silently dropped.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json({ error: 'message required' }, { status: 400 });
    }
    if (message.length > 2000) {
      return NextResponse.json({ error: 'message too long' }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
      return NextResponse.json({ error: 'server not configured' }, { status: 500 });
    }
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Contact fields (telegram_id/whatsapp/email) are stored in the
    // separate page_comment_contacts table, which has RLS enabled with NO
    // policies at all -- unlike page_comments, there is no way to read it
    // through the public anon key, from any client, ever. Only this
    // SECURITY DEFINER function can write to it.
    const { data: newId, error: insertError } = await supabase.rpc('submit_page_comment', {
      p_page_path: page_path || '/',
      p_lang: lang || 'fa',
      p_name: name || null,
      p_message: message,
      p_telegram_id: telegram_id || null,
      p_whatsapp: whatsapp || null,
      p_email: email || null,
    });

    if (insertError) {
      return NextResponse.json({ error: insertError.message }, { status: 500 });
    }

    // Notify on Telegram with Approve/Reject buttons. If this fails, the
    // comment still exists in Supabase as 'pending' -- it just won't be
    // moderatable until someone checks the DB directly, so we log but don't
    // fail the request (the visitor already succeeded in submitting).
    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;
    if (botToken && chatId) {
      try {
        const lines = [
          '💬 نظر/سوال جدید',
          `صفحه: ${pageLink(page_path)}`,
          `اسم: ${escapeHtml(name || '-')}`,
          `متن پیام: "${escapeHtml(message)}"`,
        ];

        const contactLines = [
          telegram_id ? `آیدی تلگرام: ${escapeHtml(telegram_id)}` : null,
          whatsapp ? `واتساپ: ${escapeHtml(whatsapp)}` : null,
          email ? `ایمیل: ${escapeHtml(email)}` : null,
        ].filter(Boolean);

        if (contactLines.length) {
          lines.push('', '📞 اطلاعات تماس (فقط برای شما — کاربر نمی‌بینه):', ...contactLines);
        }

        const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: lines.join('\n'),
            parse_mode: 'HTML',
            reply_markup: {
              inline_keyboard: [[
                { text: '✅ تایید', callback_data: 'approve' },
                { text: '❌ رد', callback_data: 'reject' },
              ]],
            },
          }),
        });
        const tgData = await tgRes.json();
        const telegramMessageId = tgData?.result?.message_id;

        if (telegramMessageId) {
          await supabase.rpc('set_comment_telegram_message_id', {
            p_id: newId,
            p_message_id: telegramMessageId,
            p_secret: process.env.TELEGRAM_WEBHOOK_SECRET,
          });
        }
      } catch (tgErr) {
        console.error('Telegram notify failed:', tgErr);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
