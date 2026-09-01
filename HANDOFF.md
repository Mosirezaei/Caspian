# Caspian.am — AI Handoff Document
> آخرین آپدیت: سپتامبر ۲۰۲۶

## اطلاعات پروژه

- **ریپو:** `Mosirezaei/caspian` (branch: main)
- **GitHub Token:** در GitHub Settings → Developer Settings → Personal Access Tokens بساز (scope: repo)
- **Supabase:** `mxgxbkzpghoteaqzhfpf` — ACTIVE_HEALTHY
- **دامنه:** `caspian.am` — Vercel (Next.js 15 App Router)
- **Git email:** `mosirezaei63@gmail.com`

---

## معماری پروژه

- **Framework:** Next.js 15 App Router (SSR/Static)
- **Language:** JSX (نه TypeScript)
- **Styling:** Tailwind CSS + CSS Variables
- **Font:** Vazirmatn از Google Fonts (در `app/layout.jsx`)
- **Multi-language:** fa/en/ru از طریق `LanguageContext`

### ساختار فایل‌ها
```
app/                    ← Next.js routes (App Router)
  layout.jsx            ← Root layout + font + metadata
  page.jsx              ← Homepage
  travel/hotel/         ← /travel/hotel
  travel/apartment/     ← /travel/apartment
  residency/armenia/    ← /residency/armenia
  ...
  blog/                 ← بلاگ (اضافه شد)
  admin/dashboard/task/ ← پنل ادمین (رمز: M@Caspian)

src/
  views/                ← کامپوننت‌های صفحات
    Home.jsx
    travel/Hotel.jsx
    ...
    blog/               ← مقالات بلاگ (اضافه شد)
  components/
    shared/GlobalNavbar.jsx
    shared/SeoFooterLinks.jsx
    home/
      HeroSection.jsx
      ServicesSection.jsx
      AboutSection.jsx
      ArticlesSection.jsx   ← اضافه شد (جایگزین Disco)
  lib/
    LanguageContext.jsx
    translations.js
```

---

## کارهای انجام‌شده

### SEO
- Title/Description همه ۳۸+ صفحه بهینه‌شد (35-65 کاراکتر)
- JSON-LD Schema: hotel، apartment، residency، visa، service
- RelatedServices component در همه صفحات
- SeoFooterLinks: 64+ لینک داخلی
- sitemap.xml: 40+ URL
- llms.txt برای AI crawlers
- canonical URL در همه صفحات

### فنی
- حذف `useSEO` از 14+ فایل
- حذف `LanguageProvider` wrapper از همه views
- Text selection fix
- Desktop dropdown: CSS pure `group-hover:block` (بدون JS)
- `overflow-hidden` حذف از nav container
- www→non-www redirect حذف (redirect loop می‌ساخت)
- JSON-LD critical error در apartment/page.jsx fix شد
- آخرین commit: `448377e`

### محتوا
- صفحه `app/retro/page.jsx` (فستیوال Disco Legends)
- صفحه `app/admin/dashboard/task/page.jsx`
- صفحه `app/travel/armenia-guide/page.jsx`
- بلاگ: `/blog/living-cost-yerevan`
- بلاگ: `/blog/armenia-visa-documents`
- بخش Articles در صفحه اصلی (جایگزین Disco Legends)

### Google Search Console
- sitemap ثبت: `https://caspian.am/sitemap.xml`
- Request Indexing برای 10 صفحه اصلی

---

## کارهای باقیمانده

### باید خودت انجام بدی
- [ ] Vercel Dashboard → Domains → www redirect روشن کن
- [ ] GSC → Request Indexing برای صفحات بلاگ جدید
- [ ] بک‌لینک از انجمن‌های ایرانی مهاجرت

### کد — اولویت بعدی
- [ ] بازنویسی `StudentVisaGeorgia.jsx` (717 کاراکتر — نازک)
- [ ] بازنویسی `StudentVisaTurkey.jsx` (783 کاراکتر — نازک)
- [ ] بازنویسی `Services.jsx` (488 کاراکتر — خیلی نازک)
- [ ] اضافه کردن مقالات بیشتر به بلاگ

### مقالات پیشنهادی (SEO — کم رقیب)
- هزینه اجاره خانه در ارمنستان
- هزینه راه‌اندازی کسب‌وکار در ارمنستان
- اجاره مغازه یا دفتر در ارمنستان
- تحصیل در ارمنستان
- خرید و فروش بیزینس در ارمنستان
- جاذبه‌های دیدنی ارمنستان
- ویزای طلایی ارمنستان
- مالیات در ارمنستان برای ایرانیان

---

## نکات فنی مهم

### Deploy
```bash
git add -A
git commit -m "message"
git push origin main
# Vercel خودکار deploy میکنه
```

### Build local test
```bash
echo "NEXT_PUBLIC_SUPABASE_URL=https://x.supabase.co" > .env.local
echo "NEXT_PUBLIC_SUPABASE_ANON_KEY=test" >> .env.local
npm run build
rm .env.local
```

### اضافه کردن صفحه جدید
1. فایل `app/[route]/page.jsx` بساز با `export const metadata`
2. فایل `src/views/[name].jsx` بساز برای محتوا
3. لینک رو به `src/components/shared/SeoFooterLinks.jsx` اضافه کن
4. URL رو به `public/sitemap.xml` اضافه کن

### مشکلات شناخته‌شده
- GSC: 4 صفحه Redirect Error — احتمالاً cache قدیمی، خودبه‌خود حل میشه
- font Vazirmatn در build local بدون اینترنت fail میکنه — نرمال است

---

## پروژه دوم: beep.am

ریپو جداست: `Mosirezaei/beep`
برای handoff اون پروژه فایل مشابه توی همون ریپو وجود داره.
