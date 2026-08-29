'use client';
import { useEffect } from 'react';

const BASE_DOMAIN = 'https://caspian.am';

/**
 * useSEO — Dynamic SEO hook for SPA pages
 *
 * هر بار که کاربر به یک route جدید می‌رود این hook فعال می‌شود و:
 * 1. عنوان صفحه را آپدیت می‌کند
 * 2. meta description، keywords، canonical و OG tags را تنظیم می‌کند
 * 3. JSON-LD schema را inject می‌کند
 * 4. یک CustomEvent می‌فیرد که prerender tools برای تشخیص "ready" به آن نیاز دارند
 */
export function useSEO({
  title,
  description,
  keywords,
  ogImage,
  schema,
  path = ''
}) {
  useEffect(() => {
    const canonicalPath = path || window.location.pathname;
    const canonicalUrl = `${BASE_DOMAIN}${canonicalPath}`;

    // ─── Title ───
    document.title = title;

    // ─── Meta helpers ───
    const setMeta = (selector, attr, value) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [key, val] = attr.split('=').map(s => s.trim());
        if (key === 'property') el.setAttribute('property', val.replace(/"/g,''));
        else el[key] = val.replace(/"/g,'');
        document.head.appendChild(el);
      }
      el.content = value;
    };

    // ─── Description ───
    setMeta('meta[name="description"]', 'name=description', description);

    // ─── Keywords ───
    if (keywords) setMeta('meta[name="keywords"]', 'name=keywords', keywords);

    // ─── OG Title ───
    setMeta('meta[property="og:title"]', 'property=og:title', title);

    // ─── OG Description ───
    setMeta('meta[property="og:description"]', 'property=og:description', description);

    // ─── OG URL ───
    setMeta('meta[property="og:url"]', 'property=og:url', canonicalUrl);

    // ─── OG Image ───
    if (ogImage) setMeta('meta[property="og:image"]', 'property=og:image', ogImage);

    // ─── Twitter Title ───
    setMeta('meta[name="twitter:title"]', 'name=twitter:title', title);

    // ─── Twitter Description ───
    setMeta('meta[name="twitter:description"]', 'name=twitter:description', description);

    // ─── Canonical ───
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // ─── JSON-LD Schema ───
    if (schema) {
      let schemaScript = document.querySelector('script[data-seo="page"]');
      if (schemaScript) schemaScript.remove();
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'page');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    // ─── BreadcrumbList Schema (automatic per path) ───
    const segments = canonicalPath.split('/').filter(Boolean);
    if (segments.length > 0) {
      const crumbs = [
        { '@type': 'ListItem', position: 1, name: 'خانه', item: BASE_DOMAIN + '/' },
        ...segments.map((seg, i) => ({
          '@type': 'ListItem',
          position: i + 2,
          name: seg.replace(/-/g, ' '),
          item: `${BASE_DOMAIN}/${segments.slice(0, i + 1).join('/')}`,
        })),
      ];
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs,
      };
      let breadScript = document.querySelector('script[data-seo="breadcrumb"]');
      if (breadScript) breadScript.remove();
      const bs = document.createElement('script');
      bs.type = 'application/ld+json';
      bs.setAttribute('data-seo', 'breadcrumb');
      bs.textContent = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(bs);
    }

    // ─── Signal to prerender tools that the page is ready ───
    // react-snap, prerender.io و ابزارهای مشابه منتظر این event هستند
    document.dispatchEvent(new Event('render-event'));

  }, [title, description, keywords, ogImage, schema, path]);
}
