# نقشه راه پروژه کاسپین — تبدیل به سایت تخصصی ارمنستان + روسیه

> این فایل تنها مرجع ادامه کاره. هر نشست هوش مصنوعی (حتی با اکانت دیگه، بدون حافظه از نشست‌های قبل)
> باید این فایل رو بخونه، ببینه دقیقاً کجای کاره، و از همون نقطه ادامه بده.
> بعد از هر تغییر، این فایل آپدیت میشه: چک‌مارک ✅ بزن، تاریخ و جزئیات دقیق بنویس.

**آخرین آپدیت:** 2026-09-02
**Repo:** Mosirezaei/caspian (branch: main) — Next.js 15 App Router

---

## وضعیت کلی — ۵ مرحله

- [x] مرحله ۱ — حذف کشورهای غیر از ارمنستان/روسیه (تکمیل شد 2026-09-02)
- [x] مرحله ۲ — منوی جدید (GlobalNavbar.jsx) — تکمیل شد 2026-09-02
- [ ] مرحله ۳ — صفحه آرشیو وبلاگ (/blog)
- [ ] مرحله ۴ — کامپوننت RelatedContent (تگ‌محور، رندوم)
- [ ] مرحله ۵ — نوشتن محتوای ۲۴ صفحه (یکی‌یکی)

---

## مرحله ۱ — حذف کشورهای غیر از ارمنستان/روسیه ✅ تکمیل شد

**کامیت:** (به‌زودی بعد از پوش، SHA اینجا نوشته میشه)

### صفحات و کامپوننت‌های حذف‌شده (23 فایل):
- app/visa/embassy-usa/page.jsx + src/views/service/EmbassyAppointment.jsx
- app/visa/embassy-canada/page.jsx (از همون EmbassyAppointment.jsx استفاده می‌کرد)
- app/visa/schengen/page.jsx + src/views/service/VisaSchengen.jsx
- app/visa/romania/page.jsx + src/views/service/VisaRomania.jsx
- app/visa/south-america/page.jsx + src/views/service/VisaSouthAmerica.jsx
- app/student-visa/turkey/page.jsx + src/views/service/StudentVisaTurkey.jsx
- app/student-visa/schengen/page.jsx + src/views/service/StudentVisaSchengen.jsx
- app/student-visa/romania/page.jsx + src/views/service/StudentVisaRomania.jsx
- app/student-visa/georgia/page.jsx + src/views/service/StudentVisaGeorgia.jsx
- app/residency/turkey/page.jsx + src/views/service/ResidencyTurkey.jsx
- app/residency/oman/page.jsx + src/views/service/ResidencyOman.jsx
- app/residency/uae/page.jsx + src/views/service/ResidencyUAE.jsx

### فایل‌هایی که آپدیت شدن (لینک‌های شکسته حذف شد):
- public/sitemap.xml — همه URL های حذف‌شده برداشته شد
- src/components/shared/SeoFooterLinks.jsx — بخش «ویزا» به «روسیه» تغییر نام گرفت، لینک‌های مرده حذف شد (fa/en/ru)
- src/components/home/ServicesSection.jsx — serviceRoutes[0] از /visa/schengen به /visa/russia تغییر کرد
- src/data/servicesContent.js — کامنت راهنما آپدیت شد
- app/student-visa/page.jsx — متادیتا (title/description) فقط ارمنستان+روسیه
- src/views/service/StudentVisa.jsx — بازنویسی کامل، فقط ارمنستان+روسیه (بخش شینگن/ترکیه حذف شد)

### باقی‌مونده صفحات ویزا/اقامت (این‌ها دست نخوردن):
- /visa/russia, /residency/armenia, /residency/work, /residency/business, /residency/student
- /student-visa, /student-visa/armenia, /student-visa/russia
- /services/company-registration, /services/student-admission (این دو ارمنستان‌محورن، حذف نشدن)

### نکته مهم برای نشست بعدی:
- منوی GlobalNavbar.jsx هنوز به لینک‌های حذف‌شده اشاره می‌کنه (schengen, romania, south-america, embassy-usa/canada,
  student-visa/turkey|schengen|romania|georgia, residency/turkey|oman|uae) — این تو **مرحله ۲** کامل جایگزین میشه،
  پس عمداً تو مرحله ۱ دست نخورد (تا دوبار کار نشه).
- app/services/page.jsx و src/views/Services.jsx بررسی شد — لینک شکسته به کشورهای حذف‌شده نداشتن.
- src/data/staticContent.js (serviceLabels) عمداً دست نخورد — این لیبل‌ها برای نمایش رزروهای قدیمی تو پنل ادمینه
  (بوکینگ‌های ثبت‌شده تو دیتابیس با اسلاگ visa-schengen و غیره)، نه صفحات سایت. حذفش باعث میشه رزروهای قدیمی
  تو ادمین لیبل نداشته باشن. اگه لازم شد بعداً پاکسازی بشه، جدا از این پروژه.

---

## مرحله ۲ — منوی جدید یکجا (GlobalNavbar.jsx) ✅ تکمیل شد

**کامیت:** 541a49b

navLinks کامل بازنویسی شد برای fa/en/ru با ساختار دقیق درخواستی:
صفحه اصلی، خدمات مسافرتی، اقامت، روسیه، وبلاگ (مگامنو گرید)، درباره کاسپین.

بخش وبلاگ به‌صورت `BlogMegaMenu` — کامپوننت جدا با گرید ۲ستونه + آیکون (lucide-react:
Home, Building2, Briefcase, MapPin, GraduationCap, Compass, Newspaper) برای ۷ دسته،
هماهنگ با تم تیره+کهربایی+گلس‌پنل سایت. دراپ‌داون‌های دیگه همون ساختار قبلی (DropdownItem) رو دارن.

### نکته مهم — لینک‌های در انتظار محتوا (باید تو مرحله ۵ ساخته بشن):
- `/visa/russia/business` (ویزای تجاری روسیه) — صفحه هنوز وجود نداره، تو منو لینک شده. آیتم ۱۳ مرحله ۵.
- `/visa/russia/multi` (ویزای مولتی روسیه) — صفحه هنوز وجود نداره. آیتم ۱۴ مرحله ۵.
- `/residency/child-birth` (اقامت از طریق تولد فرزند) — صفحه هنوز وجود نداره. آیتم ۵ مرحله ۵.
- `/residency/investment` (اقامت از طریق سرمایه‌گذاری) — صفحه هنوز وجود نداره. آیتم ۶ مرحله ۵.
- بخش‌های مگامنوی وبلاگ همه به `/blog?category=...` لینک شدن؛ چون `/blog` (مرحله ۳) و مقالات
  (مرحله ۵) هنوز ساخته نشدن. بعد از ساخت صفحه بلاگ، پارامتر `?category=` رو باید توش handle کنی.
- `/visa/russia` (ویزای توریستی روسیه) و `/student-visa/russia` (ویزای تحصیلی روسیه) از قبل وجود دارن — سالمن.

⚠️ **تا وقتی این صفحات ساخته نشن، این چند لینک تو منو 404 میدن.** این عمدیه — طبق دستور کاربر
منو یکجا ساخته شد و محتوا تو مرحله ۵ به‌ترتیب پر میشه. نشست بعدی باید یا این صفحات رو بسازه
(طبق اولویت مرحله ۵) یا حداقل بدونه این وضعیت موقتیه.

## مرحله ۳ — صفحه آرشیو وبلاگ (/blog)

- [ ] app/blog/page.jsx بساز — استایل مجله‌ای، کارت با تصویر/برچسب دسته/عنوان/خلاصه/تاریخ/دکمه
- [ ] طراحی اورجینال با تم کاسپین (نه کپی رقیب)

## مرحله ۴ — RelatedContent.jsx

- [ ] فیلد tags به دیتای مقالات/سرویس‌ها اضافه بشه
- [ ] src/components/shared/RelatedContent.jsx بساز — فیلتر بر اساس تگ مشترک + انتخاب رندوم ۳-۴ تا
- [ ] در پایین هر صفحه سرویس و هر مقاله صدا زده بشه

## مرحله ۵ — محتوای ۲۴ صفحه (یکی‌یکی، با کامیت جدا)

⚠️ هر صفحه: بنویس → کامیت → پوش → این فایل رو آپدیت کن (✅) → برو سراغ بعدی.

- [ ] ۱. اقامت ارمنستان (صفحه اصلی گروه اقامت)
- [ ] ۲. ثبت شرکت ارمنستان
- [ ] ۳. اقامت کاری ارمنستان
- [ ] ۴. اقامت تحصیلی
- [ ] ۵. اقامت ارمنستان از طریق تولد فرزند
- [ ] ۶. اقامت از طریق سرمایه‌گذاری
- [ ] ۷. تورهای ارمنستان
- [ ] ۸. رزرو هتل
- [ ] ۹. رزرو آپارتمان
- [ ] ۱۰. بلیط هوایی و زمینی
- [ ] ۱۱. ترانسفر فرودگاهی
- [ ] ۱۲. ویزای توریستی روسیه
- [ ] ۱۳. ویزای تجاری روسیه
- [ ] ۱۴. ویزای مولتی روسیه
- [ ] ۱۵. ویزای تحصیلی روسیه
- [ ] ۱۶. مقالات وبلاگ — اقامت و مهاجرت
- [ ] ۱۷. مقالات وبلاگ — ثبت شرکت و مالی
- [ ] ۱۸. مقالات وبلاگ — کار و اشتغال
- [ ] ۱۹. مقالات وبلاگ — زندگی در ایروان
- [ ] ۲۰. مقالات وبلاگ — تحصیل
- [ ] ۲۱. مقالات وبلاگ — گردشگری و دیدنی‌ها
- [ ] ۲۲. مقالات وبلاگ — اخبار و رویدادها
- [ ] ۲۳. درباره ما
- [ ] ۲۴. تماس با ما

**نکته محتوا:** عنوان مقالات نباید عیناً کپی عنوان رقیب باشه — کوتاه‌تر و اورجینال.
هر مقاله: عنوان + خلاصه متا (سئو) + متن با H2/H3 + کامپوننت RelatedContent در پایان.

---

## اطلاعات فنی مرجع (از HANDOFF.md قبلی)

- Framework: Next.js 15 App Router, JSX (not TS), Tailwind + CSS vars, فونت Vazirmatn
- چندزبانه: fa/en/ru از طریق LanguageContext
- هر روت دو فایل داره: app/[route]/page.jsx (متادیتا + import) و src/views/.../[Name].jsx (محتوای واقعی)
- Deploy: git push به main → Vercel خودکار دیپلوی می‌کنه
- پروژه دوم (بدون ربط به این کار): Mosirezaei/beep — دست نزن


---

## فیکس جانبی — باگ بیلد (خارج از ۵ مرحله)

- [x] 2026-09-02 — `src/views/service/Residency.jsx` بیلد رو می‌شکست: ۴ تا آپاستروف escape‌نشده
  تو رشته‌های تک‌کوتیشن انگلیسی (`'Armenia's parliament...'`, `'...it's a real...'`,
  `'Armenia's passport...'`, `'What happens if I'm...'`). این فایل قبل از شروع کار ما وجود داشت،
  ربطی به تغییرات مرحله ۱/۲ نداشت. کامیت فیکس: `9e37a75`.
  فایل‌های نوشته‌شده تو مرحله ۱ و ۲ (GlobalNavbar, SeoFooterLinks, ServicesSection, StudentVisa,
  sitemap, servicesContent) چک شدن و این باگ رو ندارن.
