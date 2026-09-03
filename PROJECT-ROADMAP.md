# نقشه راه پروژه کاسپین — تبدیل به سایت تخصصی ارمنستان + روسیه

> این فایل تنها مرجع ادامه کاره. هر نشست هوش مصنوعی (حتی با اکانت دیگه، بدون حافظه از نشست‌های قبل)
> باید این فایل رو بخونه، ببینه دقیقاً کجای کاره، و از همون نقطه ادامه بده.
> بعد از هر تغییر، این فایل آپدیت میشه: چک‌مارک ✅ بزن، تاریخ و جزئیات دقیق بنویس.

**آخرین آپدیت:** 2026-09-02 (نشست جدید — Composio/GitHub)
**Repo:** Mosirezaei/caspian (branch: main) — Next.js 15 App Router

---

## وضعیت کلی — ۵ مرحله

- [x] مرحله ۱ — حذف کشورهای غیر از ارمنستان/روسیه (تکمیل شد 2026-09-02)
- [x] مرحله ۲ — منوی جدید (GlobalNavbar.jsx) — تکمیل شد 2026-09-02
- [x] مرحله ۳ — صفحه آرشیو وبلاگ (/blog) — تکمیل شد 2026-09-02
- [x] مرحله ۴ — کامپوننت RelatedContent (تگ‌محور، رندوم) — تکمیل شد 2026-09-02
- [~] مرحله ۵ — نوشتن محتوای ۲۴ صفحه — ۲۱ از ۲۴ تکمیل شد، فقط ۳ مقاله‌ی وبلاگ (۱۷/۲۰/۲۲) مونده

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

## مرحله ۳ — صفحه آرشیو وبلاگ (/blog) ✅ تکمیل شد

**کامیت:** (بعد از پوش این نشست، SHA اینجا نوشته می‌شه)

- `src/data/blogPosts.js` — رجیستری مرکزی مقالات (slug, href, category, tags, date, fa/en/ru{title,excerpt}).
  وقتی مقاله‌ی جدید نوشته می‌شه (مرحله ۵)، فقط باید یک آبجکت اینجا اضافه بشه — خودکار تو آرشیو و RelatedContent ظاهر می‌شه.
- `app/blog/page.jsx` + `src/views/blog/BlogArchive.jsx` — صفحه‌ی مجله‌ای با فیلتر دسته (پیل‌های بالای صفحه)،
  از `?category=` (همون که BlogMegaMenu تو ناوبار می‌فرسته) هم می‌خونه. طراحی هماهنگ با تم گلس‌پنل/کهربایی سایت،
  نه کپی از رقیب. اضافه شد به sitemap.xml (`/blog`, priority 0.7).
- دو مقاله‌ی موجود (`armenia-visa-documents`, `living-cost-yerevan`) به رجیستری اضافه شدن با category/tags مناسب.

## مرحله ۴ — RelatedContent.jsx ✅ تکمیل شد

- `src/components/shared/RelatedContent.jsx` — می‌گیره `currentTags` + `currentPath`، از `blogPosts.js` بر اساس
  تعداد تگ مشترک امتیازدهی و مرتب می‌کنه (رندوم برای هم‌امتیازها)، ۳ تا نتیجه نشون می‌ده.
- فعلاً منبع داده فقط `blogPosts.js` هست (صفحات سرویس هنوز فیلد tags ندارن). به هر دو مقاله‌ی موجود اضافه شد
  (بالای `RelatedServices` قبلی — که دست نخورده باقی موند، هر دو با هم کار می‌کنن).
- ⚠️ **برای نشست بعدی:** وقتی مقالات مرحله ۵ نوشته می‌شن، هر کدوم باید `<RelatedContent currentTags={[...]} currentPath="/blog/..." />`
  رو با تگ‌های خودشون اضافه کنن (از رجیستری `blogPosts.js` هم یک آیتم متناظر اضافه بشه). اگه بعداً خواستیم صفحات
  سرویس (هتل، تور، اقامت و غیره) هم وارد این چرخه بشن، باید یک فیلد tags به `servicesContent.js` اضافه بشه و
  آرایه‌ی دومی به RelatedContent پاس داده بشه — این کار عمداً به مرحله ۵ یا بعدش موکول شد.

## مرحله ۵ — محتوای ۲۴ صفحه (یکی‌یکی، با کامیت جدا)

⚠️ هر صفحه: بنویس → کامیت → پوش → این فایل رو آپدیت کن (✅) → برو سراغ بعدی.

- [x] ۱. اقامت ارمنستان — نیازی به صفحه‌ی جدا نبود؛ آیتم منوی «اقامت» خودش با ۴ زیرمجموعه (کار/تحصیلی/تولد فرزند/سرمایه‌گذاری) این نقش رو ایفا می‌کنه (تأیید کاربر 2026-09-02)
- [x] ۲. ثبت شرکت ارمنستان — از قبل موجود بود، در /residency/business (کامپوننت CompanyReg)
- [x] ۳. اقامت کاری ارمنستان — از قبل موجود، /residency/work
- [x] ۴. اقامت تحصیلی — از قبل موجود، /residency/student
- [x] ۵. اقامت ارمنستان از طریق تولد فرزند — تکمیل شد 2026-09-02، /residency/child-birth (ResidencyChildBirth.jsx)
- [x] ۶. اقامت از طریق سرمایه‌گذاری — تکمیل شد 2026-09-02، /residency/investment (ResidencyInvestment.jsx)
- [x] ۷. تورهای ارمنستان — از قبل موجود، /travel/tour
- [x] ۸. رزرو هتل — از قبل موجود، /travel/hotel
- [x] ۹. رزرو آپارتمان — از قبل موجود، /travel/apartment
- [x] ۱۰. بلیط هوایی و زمینی — از قبل موجود، /travel/flight
- [x] ۱۱. ترانسفر فرودگاهی — از قبل موجود، /travel/transfer
- [x] ۱۲. ویزای توریستی روسیه — از قبل موجود، /visa/russia
- [x] ۱۳. ویزای تجاری روسیه — تکمیل شد 2026-09-02، /visa/russia/business (VisaRussiaBusiness.jsx)
- [x] ۱۴. ویزای مولتی روسیه — تکمیل شد 2026-09-02، /visa/russia/multi (VisaRussiaMulti.jsx)
- [x] ۱۵. ویزای تحصیلی روسیه — از قبل موجود، /student-visa/russia
- [x] ۱۶. مقالات وبلاگ — اقامت و مهاجرت — از قبل موجود (armenia-visa-documents)
- [x] ۱۷. مقالات وبلاگ — ثبت شرکت و مالی — تکمیل شد 2026-09-03، /blog/company-registration-armenia (۳ عکس واقعی ویکی‌مدیا: مرکز شهر ایروان، ساختمان بانکی، درام ارمنی)
- [x] ۱۸. مقالات وبلاگ — کار و اشتغال — تکمیل شد 2026-09-02، /blog/jobs-in-armenia
- [x] ۱۹. مقالات وبلاگ — زندگی در ایروان — از قبل موجود (living-cost-yerevan)
- [x] ۲۰. مقالات وبلاگ — تحصیل — تکمیل شد 2026-09-03، /blog/education-armenia (مدارس ایرانی، دانشگاه‌ها، هزینه‌ها، مدارک لازم — داده‌ها از AUA, YSU, university.im, cisarmenia.com, studyabroadaide)
- [x] ۲۱. مقالات وبلاگ — گردشگری و دیدنی‌ها — تکمیل شد 2026-09-02، /blog/armenia-tourism-guide (با ۱۰ عکس واقعی از ویکی‌مدیا کامنز، بهینه‌شده به webp)
- [x] ۲۲. مقالات وبلاگ — اخبار و فستیوال‌ها (کاربر دسته رو از «اخبار و رویدادها» به این تغییر داد 2026-09-02) — تکمیل شد، /blog/armenia-festivals-events-news (تقویم کامل فستیوال‌های سالانه + کنسرت‌های پیش‌رو تا ۳ ماه آینده با جست‌وجوی وب واقعی + اخبار مذاکرات لغو ویزای ارمنستان-اتحادیه اروپا). لیبل دسته و آیکون (Newspaper→PartyPopper) هم تو GlobalNavbar.jsx و blogPosts.js و BlogArchive.jsx آپدیت شد.
- [x] ۲۳. درباره ما — از قبل موجود، /about
- [x] ۲۴. تماس با ما — از قبل موجود، /contact

**✅ تمام ۲۴ آیتم مرحله‌ی ۵ تکمیل شدن! (2026-09-03)**

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


- [x] 2026-09-02 — بیلد بازم fail شد بعد از فیکس اول، چون یه باگ *دیگه* (مستقل، قبل از کار ما) تو همون
  فایل بود: دو تا `':\'0 (company)\''` و `':\'0 (free 365d)\''` تو جدول مقایسه (خط ~۵۴۰) —
  بک‌اسلش قبل از کوتیشن بیرون از هر رشته‌ای بود (نه escape معتبر، سینتکس‌اررور). حذف شد.
  کامیت فیکس دوم: `57dc80a`. کل فایل بعدش با regex برای بک‌اسلش باقی‌مونده و balance تگ‌های JSX
  چک شد — چیز مشکوک دیگه‌ای پیدا نشد. نمی‌تونستیم بیلد واقعی Next.js رو تو سندباکس اجرا کنیم
  (npm install شبکه‌اش خیلی کند/timeout می‌خورد)، پس این تضمین قطعی نیست — اگه بازم fail شد،
  همین‌جا لاگ خطای جدید رو بذار.


---

## ⚠️ یادداشت مهم برای نشست بعدی (اضافه‌شده 2026-09-02)

این فایل قبلاً (تو استیج ۱) نوشته بود `/residency/armenia` حذف نشده و نگه داشته شده. اما موقع
بررسی واقعی کد در این نشست، اون مسیر اصلاً وجود نداشت (احتمالاً یه پاکسازی جداگانه‌ی بعدی
حذفش کرده بود). کاربر توضیح داد که این صفحه لازم نیست — چون آیتم منوی «اقامت» خودش (با ۴
زیرمجموعه‌ی کار/تحصیلی/تولد فرزند/سرمایه‌گذاری) نقش صفحه‌ی اصلی گروه اقامت رو بازی می‌کنه.
پس آیتم ۱ از چک‌لیست، به این شکل تکمیل‌شده در نظر گرفته شد — نه با ساخت صفحه‌ی جدا.

همچنین: `public/sitemap.xml` بعد از هر تغییر باید آپدیت بشه (دستور صریح کاربر) — این کار تو
همین نشست برای همه‌ی صفحات جدید (child-birth, investment, visa/russia/business, visa/russia/multi,
blog/jobs-in-armenia, blog/armenia-tourism-guide) انجام شد و باید برای هر صفحه‌ی جدید بعدی هم تکرار بشه.

باقی‌مونده‌ی واقعی مرحله ۵: فقط ۳ مقاله‌ی وبلاگ —
۱۷ (ثبت شرکت و مالی)، ۲۰ (تحصیل)، ۲۲ (اخبار و رویدادها).
