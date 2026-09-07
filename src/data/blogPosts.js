// src/data/blogPosts.js
// رجیستری مرکزی مقالات وبلاگ — هم برای صفحه‌ی آرشیو (/blog) و هم برای RelatedContent استفاده می‌شه.
// وقتی مقاله‌ی جدیدی نوشته می‌شه، یک آبجکت اینجا اضافه کن؛ همون‌جا خودکار تو آرشیو و در نتیجه‌ها ظاهر می‌شه.
//
// category باید یکی از این ۷ تا باشه (دقیقاً هماهنگ با blogCategories تو GlobalNavbar.jsx):
// residency | company | work | life | education | tourism | news

export const blogPosts = [
  {
    slug: 'armenia-visa-documents',
    href: '/blog/armenia-visa-documents',
    category: 'residency',
    thumbnail: 'https://images.unsplash.com/photo-1487274910620-1add53247020?w=400&q=75',
    tags: ['visa', 'documents', 'residency', 'armenia'],
    date: '2025-09-01',
    fa: {
      title: 'مدارک ویزای ارمنستان — راهنمای کامل ۱۴۰۴',
      excerpt: 'همه مدارک لازم برای ویزا و اقامت ارمنستان. ورود بدون ویزا، پاسپورت، عکس، رزرو هتل، و اقامت‌نامه که مورد نیازه.',
    },
    en: {
      title: 'Armenia Visa Documents — Complete Guide',
      excerpt: 'All the documents required for an Armenia visa and residency: visa-free entry, passport, photo, hotel booking, and required paperwork.',
    },
  },
  {
    slug: 'living-cost-yerevan',
    href: '/blog/living-cost-yerevan',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1622219999459-ab5b14e5f45a?w=400&q=75',
    tags: ['yerevan', 'cost-of-living', 'residency', 'life'],
    date: '2025-09-01',
    fa: {
      title: 'هزینه‌های زندگی در ایروان — راهنمای کامل ماهانه',
      excerpt: 'هزینه‌های اجاره خانه، خواروبار، حمل‌ونقل و بودجه ماهانه در ایروان. راهنمای عملی برای برنامه‌ریزی مهاجرت به ارمنستان.',
    },
    en: {
      title: 'Cost of Living in Yerevan — Complete Guide',
      excerpt: 'Rent, groceries, transport, and monthly budget in Yerevan. A practical guide for anyone planning to move to Armenia.',
    },
  },
  {
    slug: 'jobs-in-armenia',
    href: '/blog/jobs-in-armenia',
    category: 'work',
    thumbnail: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&q=75',
    tags: ['jobs', 'employment', 'work-permit', 'armenia'],
    date: '2026-09-02',
    fa: {
      title: 'راهنمای جامع اشتغال و کاریابی در ارمنستان برای متقاضیان ایرانی',
      excerpt: 'مسیرهای یافتن شغل، مشاغل پرتقاضا و بازه حقوقی و مراحل قانونی مجوز کار و اقامت کاری در ارمنستان.',
    },
    en: {
      title: 'Jobs & Employment in Armenia — Guide for Iranian Applicants',
      excerpt: 'Where to find jobs in Armenia, in-demand fields and salary ranges, and the legal steps for a work permit and residency.',
    },
  },
  {
    slug: 'yandex-taxi-armenia',
    href: '/blog/yandex-taxi-armenia',
    category: 'work',
    thumbnail: 'https://images.unsplash.com/photo-1576668273152-af97d33cada5?w=400&q=75',
    tags: ['yandex', 'taxi', 'work', 'armenia', 'employment'],
    date: '2026-09-04',
    fa: {
      title: 'کار با یاندکس تاکسی در ارمنستان: شرایط، درآمد و ثبت‌نام',
      excerpt: 'راهنمای کامل کار با یاندکس Go در ایروان: مدارک لازم، درآمد روزانه ۱۵ تا ۳۰ هزار درام، کمیسیون پلتفرم و الزامات قانونی برای مهاجران.',
    },
    en: {
      title: 'Working with Yandex Taxi in Armenia: Requirements, Income & Registration',
      excerpt: 'Complete guide to driving for Yandex Go in Yerevan: required documents, daily income 15–30k AMD, platform commission and legal requirements.',
    },
  },
  {
    slug: 'yandex-delivery-armenia',
    href: '/blog/yandex-delivery-armenia',
    category: 'work',
    thumbnail: '/images/delivery/yandex-delivery-scooter.webp',
    tags: ['yandex', 'delivery', 'work', 'armenia', 'courier'],
    date: '2026-09-04',
    fa: {
      title: 'کار با یاندکس دلیوری در ارمنستان: پیک موتوری، درآمد و ثبت‌نام',
      excerpt: 'پیک موتوری، دوچرخه یا خودرو با یاندکس Eats و Delivery در ایروان: درآمد ۸ تا ۱۵ هزار درام روزانه، مدارک لازم و نکات عملی.',
    },
    en: {
      title: 'Yandex Delivery in Armenia: Courier Work, Income & How to Register',
      excerpt: 'Motorbike, bicycle or car courier with Yandex Eats & Delivery in Yerevan: daily income 8–15k AMD, required documents and practical tips.',
    },
  },
  {
    slug: 'armenia-tourism-guide',
    href: '/blog/armenia-tourism-guide',
    category: 'tourism',
    thumbnail: '/images/tourism/yerevan-cascade.webp',
    tags: ['tourism', 'yerevan', 'sightseeing', 'armenia'],
    date: '2026-09-02',
    fa: {
      title: 'راهنمای کامل جاهای دیدنی ارمنستان',
      excerpt: 'از میدان‌ها و کاسکید ایروان تا صخره‌های دیرینه، دریاچه سوان و تاتو — همه‌جا همراه عکس و توضیح کامل.',
    },
    en: {
      title: "Complete Guide to Armenia's Top Attractions",
      excerpt: "From Yerevan's squares and Cascade to rock-hewn monasteries, Lake Sevan and Tatev — Armenia's main sights with photos and full descriptions.",
    },
  },
  {
    slug: 'armenia-festivals-events-news',
    href: '/blog/armenia-festivals-events-news',
    category: 'news',
    thumbnail: 'https://images.unsplash.com/photo-1768053921689-1bc09db904c9?w=400&q=75',
    tags: ['festivals', 'events', 'concerts', 'news', 'eu', 'armenia'],
    date: '2026-09-02',
    fa: {
      title: 'فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش‌رو و اخبار مهاجرت',
      excerpt: 'تقویم کامل فستیوال‌های سالانه ارمنستان، کنسرت‌ها تا سه ماه آینده در ایروان، و آخرین اخبار روابط اروپا و ارمنستان.',
    },
    en: {
      title: "Armenia's Annual Festivals, Upcoming Concerts & Migration News",
      excerpt: "A full calendar of Armenia's annual festivals, concerts in Yerevan over the next three months, and the latest on Armenia-EU relations.",
    },
  },
  {
    slug: 'company-registration-armenia',
    href: '/blog/company-registration-armenia',
    category: 'company',
    thumbnail: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=400&q=75',
    tags: ['company', 'residency', 'armenia', 'investment', 'business'],
    date: '2026-09-03',
    fa: {
      title: 'راهنمای ثبت شرکت در ارمنستان: هزینه، مراحل و مالیات',
      excerpt: 'ثبت LLC در ۳ روز، مالیات ۵٪، حساب بانکی بین‌المللی — راهنمای واقعی و هزینه‌ها برای ایرانیان.',
    },
    en: {
      title: 'Company Registration in Armenia: Costs, Steps & Taxes',
      excerpt: 'LLC registration in 3 days, 5% tax, international bank account — a practical guide for Iranians.',
    },
  },
  {
    slug: 'company-registration-steps-armenia',
    href: '/blog/company-registration-steps-armenia',
    category: 'company',
    thumbnail: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=400&q=75',
    tags: ['company', 'registration', 'documents', 'armenia', 'LLC'],
    date: '2026-09-03',
    fa: {
      title: 'ثبت شرکت در ارمنستان: مراحل، مدارک و زمان‌بندی کامل',
      excerpt: 'مدارک لازم، فرایند اداره ثبت، وکالت‌نامه از راه دور و اقدامات ضروری پس از دریافت شماره ثبت — راهنمای گام‌به‌گام.',
    },
    en: {
      title: 'Company Registration in Armenia: Steps, Documents & Timeline',
      excerpt: 'Required documents, registration process, remote power of attorney, and post-registration steps — a complete step-by-step guide.',
    },
  },
  {
    slug: 'company-legal-structures-armenia',
    href: '/blog/company-legal-structures-armenia',
    category: 'company',
    thumbnail: 'https://images.unsplash.com/photo-1618771623063-6c3faa854a61?w=400&q=75',
    tags: ['LLC', 'IE', 'CJSC', 'legal-structure', 'armenia', 'company'],
    date: '2026-09-03',
    fa: {
      title: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟',
      excerpt: 'مقایسه کامل LLC، IE و CJSC: مزایا، مسئولیت مالی و اینکه کدام ساختار برای فریلنسر، استارتاپ یا شرکت بازرگانی مناسب‌تر است.',
    },
    en: {
      title: 'Legal Structures in Armenia: LLC, IE or CJSC?',
      excerpt: 'Full comparison of LLC, IE and CJSC: benefits, liability and which structure suits freelancers, startups or trading companies.',
    },
  },
  {
    slug: 'company-costs-tax-banking-armenia',
    href: '/blog/company-costs-tax-banking-armenia',
    category: 'company',
    thumbnail: 'https://images.unsplash.com/photo-1622219999459-ab5b14e5f45a?w=400&q=75',
    tags: ['cost', 'tax', 'bank', 'armenia', 'company', 'finance'],
    date: '2026-09-03',
    fa: {
      title: 'هزینه ثبت شرکت در ارمنستان، مالیات و افتتاح حساب بانکی',
      excerpt: 'هزینه واقعی راه‌اندازی ۱۰۰۰ تا ۱۶۰۰ دلار، رژیم مالیاتی ۱۸٪ یا گردش مالی، شرایط KYC بانک و چرا حسابداری منظم ضروری است.',
    },
    en: {
      title: 'Company Registration Costs, Tax & Banking in Armenia',
      excerpt: 'Real setup cost $1,000-$1,600, 18% or turnover tax regime, KYC banking requirements and why regular accounting is essential.',
    },
  },
  {
    slug: 'residency-via-company-registration',
    href: '/blog/residency-via-company-registration',
    category: 'company',
    thumbnail: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?w=400&q=75',
    tags: ['residency', 'company', 'armenia', 'immigration', 'EAEU'],
    date: '2026-09-03',
    fa: {
      title: 'اقامت ارمنستان از طریق ثبت شرکت: شرایط، مراحل و نکات مهم',
      excerpt: 'اقامت با فعالیت واقعی شرکت — چرا ثبت صوری کافی نیست، چه مدارکی لازم است و Caspian Group چطور کل مسیر را پشتیبانی می‌کند.',
    },
    en: {
      title: 'Armenia Residency Through Company Registration: Conditions & Steps',
      excerpt: 'Residency through real business activity — why paper-only registration fails, what documents you need and how Caspian Group supports the full journey.',
    },
  },
  {
    slug: 'education-armenia',
    href: '/blog/education-armenia',
    category: 'education',
    tags: ['education', 'student', 'armenia', 'residency'],
    thumbnail: 'https://images.unsplash.com/photo-1758270704524-596810e891b5?w=400&q=75',
    date: '2026-09-03',
    fa: {
      title: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه‌ها و هزینه‌ها',
      excerpt: 'راهنمای کامل مدارس ایرانی در ایروان، برتر دانشگاه‌های ارمنستان، شهریه و هزینه‌های زندگی دانشجویی برای ایرانیان.',
    },
    en: {
      title: 'Studying in Armenia: Iranian Schools, Universities & Costs',
      excerpt: 'A complete guide to Iranian schools in Yerevan, top Armenian universities, tuition and student living costs.',
    },
  },
  {
    slug: 'armenia-immigration-law-changes',
    href: '/blog/armenia-immigration-law-changes',
    category: 'residency',
    thumbnail: 'https://images.unsplash.com/photo-1618771623063-6c3faa854a61?w=400&q=75',
    tags: ['residency', 'immigration', 'armenia', 'work-visa', 'law'],
    date: '2026-09-04',
    fa: {
      title: 'قوانین جدید مهاجرتی ارمنستان: تحولات اساسی در اقامت و مهاجرت',
      excerpt: 'تحلیل کامل اصلاحات جدید قانون اتباع خارجی: دیجیتالی‌سازی، حداقل سرمایه ثبتی، قانون ۱۸۰ روز مالیات، حذف اقامت ۱۰ ساله، ویزای ورود کاری و سهمیه‌بندی سالانه.',
    },
    en: {
      title: 'Armenia\'s New Immigration Law: Major Reforms Explained',
      excerpt: 'Full breakdown of the new foreign-nationals law: digitalization, minimum registered capital, the 180-day tax rule, the end of the 10-year permit, the Work Entry Visa, and annual quotas.',
    },
  },
  {
    slug: 'apartment-rental-yerevan-guide',
    href: '/blog/apartment-rental-yerevan-guide',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?w=400&q=75',
    tags: ['rental', 'apartment', 'yerevan', 'life'],
    date: '2026-09-01',
    fa: {
      title: 'راهنمای اجاره آپارتمان در ایروان',
      excerpt: 'بازه قیمت اجاره، تفاوت کوتاه‌مدت و بلندمدت، هزینه‌های جانبی و نکات کلیدی برای ایرانیان.',
    },
    en: {
      title: 'Renting an Apartment in Yerevan — Complete Guide',
      excerpt: 'Rental price ranges, short-term vs long-term differences, extra costs, and key tips for Iranians.',
    },
  },
  {
    slug: 'best-neighborhoods-yerevan-rent',
    href: '/blog/best-neighborhoods-yerevan-rent',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?w=400&q=75',
    tags: ['yerevan', 'neighborhoods', 'rental', 'life'],
    date: '2026-09-01',
    fa: {
      title: 'بهترین محله‌های ایروان برای اجاره',
      excerpt: 'مقایسه محله‌های کنترون، عربکیر و داوتاشن از نظر قیمت، دسترسی و امکانات.',
    },
    en: {
      title: 'Best Neighborhoods in Yerevan for Renting',
      excerpt: 'Comparing Kentron, Arabkir, and Davtashen by price, access, and amenities.',
    },
  },
  {
    slug: 'best-time-visit-armenia-souvenirs',
    href: '/blog/best-time-visit-armenia-souvenirs',
    category: 'tourism',
    thumbnail: 'https://images.unsplash.com/photo-1710794710424-3bda41ac54f1?w=400&q=75',
    tags: ['tourism', 'souvenirs', 'armenia', 'travel'],
    date: '2026-09-01',
    fa: {
      title: 'بهترین زمان سفر به ارمنستان و سوغاتی‌ها',
      excerpt: 'راهنمای فصل‌به‌فصل آب‌وهوا، بهترین سوغاتی‌های ارمنی و نکات گمرکی.',
    },
    en: {
      title: 'Best Time to Visit Armenia & Souvenirs Guide',
      excerpt: 'A season-by-season weather guide, the best Armenian souvenirs, and customs tips.',
    },
  },
  {
    slug: 'medical-universities-armenia',
    href: '/blog/medical-universities-armenia',
    category: 'education',
    thumbnail: 'https://images.unsplash.com/photo-1697980825665-10b25a70bd1d?w=400&q=75',
    tags: ['education', 'medical', 'university', 'armenia'],
    date: '2026-09-02',
    fa: {
      title: 'دانشگاه‌های پزشکی ارمنستان: شرایط پذیرش و شهریه',
      excerpt: 'معرفی دانشگاه‌های پزشکی معتبر ارمنستان، شرایط پذیرش دانشجوی خارجی و شهریه هر رشته.',
    },
    en: {
      title: 'Medical Universities in Armenia: Admission & Tuition',
      excerpt: "An overview of Armenia's accredited medical universities, international admission requirements, and tuition fees.",
    },
  },
  {
    slug: 'rental-contract-armenia-guide',
    href: '/blog/rental-contract-armenia-guide',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?w=400&q=75',
    tags: ['rental-contract', 'deposit', 'legal', 'life'],
    date: '2026-09-02',
    fa: {
      title: 'قرارداد اجاره خانه در ارمنستان: مدارک، ودیعه و نکاتی که باید قبل از امضا بدانید',
      excerpt: 'از پیدا کردن آگهی معتبر تا تحویل کلید؛ مدارک لازم، بندهای ضروری قرارداد و نشانه‌های آگهی مشکوک.',
    },
    en: {
      title: 'Rental Contracts in Armenia: Documents, Deposit & What to Check Before Signing',
      excerpt: 'From finding a legitimate listing to key handover: required documents, essential contract clauses, and red flags to watch for.',
    },
  },
  {
    slug: 'rental-contract-tips-armenia',
    href: '/blog/rental-contract-tips-armenia',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?w=400&q=75',
    tags: ['rental-contract', 'deposit', 'legal', 'tips'],
    date: '2026-09-02',
    fa: {
      title: 'قرارداد اجاره در ارمنستان | ودیعه و نکات حقوقی',
      excerpt: 'همه چیز درباره قرارداد اجاره، ودیعه، کمیسیون آژانس، مدارک لازم و نشانه‌های آگهی مشکوک.',
    },
    en: {
      title: 'Rental Agreements in Armenia — Deposit & Legal Tips',
      excerpt: 'Everything about rental contracts, deposits, agency commission, required documents, and warning signs of scam listings.',
    },
  },
  {
    slug: 'residency-paths-comparison-armenia',
    href: '/blog/residency-paths-comparison-armenia',
    category: 'residency',
    thumbnail: 'https://images.unsplash.com/photo-1487274910620-1add53247020?w=400&q=75',
    tags: ['residency', 'comparison', 'armenia'],
    date: '2026-09-02',
    fa: {
      title: 'مقایسه مسیرهای اقامت ارمنستان',
      excerpt: 'مقایسه کامل اقامت کاری، تحصیلی، سرمایه‌گذاری و تولد فرزند: هزینه، زمان و مدارک.',
    },
    en: {
      title: "Comparing Armenia's Residency Paths",
      excerpt: 'A full comparison of work, student, investment, and childbirth residency routes: cost, timeline, and documents.',
    },
  },
  {
    slug: 'simcard-internet-apps-yerevan',
    href: '/blog/simcard-internet-apps-yerevan',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1562774555-079298a31cbe?w=400&q=75',
    tags: ['simcard', 'internet', 'apps', 'yerevan'],
    date: '2026-09-01',
    fa: {
      title: 'سیم‌کارت، اینترنت و اپلیکیشن‌های ضروری ایروان',
      excerpt: 'همه چیز درباره‌ی خرید سیم‌کارت، اینترنت خانگی و اپ‌هایی که بدونشون نمی‌تونید تو ایروان زندگی کنید.',
    },
    en: {
      title: 'SIM Cards, Internet & Essential Apps in Yerevan',
      excerpt: "Everything about buying a SIM card, home internet, and the apps you can't live without in Yerevan.",
    },
  },
  {
    slug: 'startup-tech-ecosystem-yerevan',
    href: '/blog/startup-tech-ecosystem-yerevan',
    category: 'work',
    thumbnail: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&q=75',
    tags: ['startup', 'tech', 'yerevan', 'work'],
    date: '2026-09-02',
    fa: {
      title: 'اکوسیستم استارتاپ و فناوری ایروان',
      excerpt: 'فرصت‌ها برای توسعه‌دهندگان، فریلنسرها و کارآفرینان ایرانی در هاب فناوری ایروان.',
    },
    en: {
      title: "Yerevan's Startup & Tech Ecosystem",
      excerpt: "Opportunities for developers, freelancers, and Iranian entrepreneurs in Yerevan's growing tech hub.",
    },
  },
  {
    slug: 'work-without-degree-armenia',
    href: '/blog/work-without-degree-armenia',
    category: 'work',
    thumbnail: 'https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=400&q=75',
    tags: ['work', 'no-degree', 'armenia', 'jobs'],
    date: '2026-09-02',
    fa: {
      title: 'کار بدون مدرک تحصیلی در ارمنستان',
      excerpt: 'حوزه‌های کاری بدون مدرک دانشگاهی، حقوق تقریبی و شرایط مجوز کار.',
    },
    en: {
      title: 'Working in Armenia Without a Degree',
      excerpt: 'Job fields open without a university degree, approximate salaries, and work permit requirements.',
    },
  },
];

export const CATEGORY_LABELS = {
  fa: {
    residency: 'اقامت و مهاجرت', company: 'ثبت شرکت و مالی', work: 'کار و اشتغال',
    life: 'زندگی در ایروان', education: 'تحصیل', tourism: 'گردشگری و دیدنی‌ها', news: 'اخبار و فستیوال‌ها',
  },
  en: {
    residency: 'Residency & Immigration', company: 'Company Registration & Finance', work: 'Work & Employment',
    life: 'Life in Yerevan', education: 'Education', tourism: 'Tourism & Sights', news: 'News & Festivals',
  },
  ru: {
    residency: 'ВНЖ и миграция', company: 'Регистрация компаний и финансы', work: 'Работа и трудоустройство',
    life: 'Жизнь в Ереване', education: 'Образование', tourism: 'Туризм и достопримечательности', news: 'Новости и фестивали',
  },
};
