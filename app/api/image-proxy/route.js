import { NextResponse } from 'next/server';

// Proxies images from tomsarkgh.am. Their server checks the Referer/Origin
// header and blocks/breaks requests that don't come from tomsarkgh.am itself,
// which is why <img src="https://www.tomsarkgh.am/..."> often fails to load
// directly in the browser. Fetching it here (server-side, with a same-site
// Referer) and streaming the bytes back avoids that.
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const src = searchParams.get('src');

  if (!src || !src.startsWith('https://www.tomsarkgh.am/thumbnails/')) {
    return NextResponse.json({ error: 'Invalid src' }, { status: 400 });
  }

  try {
    const res = await fetch(src, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Referer': 'https://www.tomsarkgh.am/',
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return NextResponse.json({ error: 'Upstream fetch failed' }, { status: 502 });

    const buf = await res.arrayBuffer();
    return new NextResponse(buf, {
      headers: {
        'Content-Type': res.headers.get('content-type') || 'image/jpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
