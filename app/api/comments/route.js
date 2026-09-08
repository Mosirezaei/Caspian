import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Accepts a new page comment/question, stores it as 'pending' via the
// submit_page_comment() RPC (this route only ever holds the public anon
// key, same pattern as /api/cron/sync-events), then notifies the admin on
// Telegram with Approve/Reject buttons. Nothing becomes visible on the site
// until the admin approves it from Telegram -- see /api/telegram-webhook.
export async function POST(request) {
  try {
    const body = await request.json();
    const { page_path, lang, name, message, website } = body || {};

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

    const { data: newId, error: insertError } = await supabase.rpc('submit_page_comment', {
      p_page_path: page_path || '/',
      p_lang: lang || 'fa',
      p_name: name || null,
      p_message: message,
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
        const text = [
          '💬 نظر/سوال جدید',
          `صفحه: ${page_path || '/'}`,
          name ? `اسم: ${name}` : null,
          '',
          message,
        ].filter(Boolean).join('\n');

        const tgRes = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text,
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
