'use client';
import { createClient } from '@supabase/supabase-js';

// Lazy singleton — only create when actually used (client-side)
let _client = null;

function getClient() {
  if (_client) return _client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
  if (!url || !key) {
    // Return a dummy that won't crash during SSR/prerender
    return { from: () => ({ select: () => Promise.resolve({ data: null, error: null }), insert: () => Promise.resolve({ data: null, error: null }), update: () => Promise.resolve({ data: null, error: null }), delete: () => Promise.resolve({ data: null, error: null }) }), auth: { getUser: () => Promise.resolve({ data: null }) } };
  }
  _client = createClient(url, key);
  return _client;
}

// Proxy that lazily initializes
export const supabase = new Proxy({}, {
  get(_, prop) {
    return getClient()[prop];
  }
});
