'use client';
import { Suspense, useMemo, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowLeft, ArrowRight, Calendar } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import SeoFooterLinks from '@/components/shared/SeoFooterLinks.jsx';
import { blogPosts, CATEGORY_LABELS } from '@/data/blogPosts';

function BlogArchiveInner() {
  const { lang } = useLang();
  const isRtl = lang === 'fa';
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const catLabels = CATEGORY_LABELS[lang] || CATEGORY_LABELS.fa;
  const categoryKeys = Object.keys(catLabels);

  const t = {
    fa: { title: 'وبلاگ کاسپین', subtitle: 'راهنمای اقامت، مهاجرت، سفر و زندگی در ارمنستان و روسیه', all: 'همه مطالب', empty: 'در این دسته هنوز مطلبی منتشر نشده — به‌زودی اضافه می‌شود.', readMore: 'ادامه مطلب' },
    en: { title: 'Caspian Blog', subtitle: 'A guide to residency, immigration, travel, and life in Armenia and Russia', all: 'All Posts', empty: 'No articles in this category yet — coming soon.', readMore: 'Read more' },
    ru: { title: 'Блог Caspian', subtitle: 'ВНЖ, миграция, путешествия и жизнь в Армении и России', all: 'Все статьи', empty: 'В этой категории пока нет статей — скоро появятся.', readMore: 'Читать' },
  }[lang] || {};

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return blogPosts;
    return blogPosts.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  const Arrow = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="min-h-screen" dir={isRtl ? 'rtl' : 'ltr'}>
      <GlobalNavbar />
      <main className="max-w-5xl mx-auto px-4 py-12 sm:py-20">

        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-black text-foreground leading-tight">{t.title}</h1>
          <p className="text-foreground/60 mt-3 text-lg">{t.subtitle}</p>
        </div>

        {/* Category filter pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button onClick={() => setActiveCategory('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition ${activeCategory === 'all' ? 'bg-primary text-black border-primary' : 'border-white/15 text-foreground/60 hover:border-primary/40 hover:text-primary'}`}>
            {t.all}
          </button>
          {categoryKeys.map(key => (
            <button key={key} onClick={() => setActiveCategory(key)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition ${activeCategory === key ? 'bg-primary text-black border-primary' : 'border-white/15 text-foreground/60 hover:border-primary/40 hover:text-primary'}`}>
              {catLabels[key]}
            </button>
          ))}
        </div>

        {/* Posts grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-foreground/40 text-sm border border-dashed border-white/10 rounded-2xl">
            {t.empty}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {filtered.map(post => {
              const c = post[lang] || post.fa;
              return (
                <Link key={post.slug} href={post.href}
                  className="group block p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition">
                  <span className="text-[11px] font-semibold text-primary/80">{catLabels[post.category]}</span>
                  <h2 className="text-lg font-bold text-foreground mt-2 mb-2 leading-snug group-hover:text-primary transition-colors">
                    {c.title}
                  </h2>
                  <p className="text-sm text-foreground/55 leading-relaxed line-clamp-3 mb-3">{c.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs text-foreground/35">
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-primary/70 font-medium">
                      {t.readMore} <Arrow className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </main>
      <SeoFooterLinks />
    </div>
  );
}

export default function BlogArchive() {
  return (
    <Suspense fallback={null}>
      <BlogArchiveInner />
    </Suspense>
  );
}
