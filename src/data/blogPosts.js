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
    thumbnail: '/images/Yerevan_Residency.webp',
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
    thumbnail: '/images/tourism/yerevan-republic-square.webp',
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
    thumbnail: '/images/company/yerevan-city-center.webp',
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
    thumbnail: '/images/fest.png',
    tags: ['festivals', 'events', 'concerts', 'news', 'eu', 'armenia'],
    date: '2026-09-02',
    fa: {
      title: 'فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش‌رو و اخبار مهاجرت',
      excerpt: 'تقویم کامل فستیوال‌های سالانه ارمنستان، کنسرت‌های تا سه ماه آینده در ایروان، و آخرین اخبار روابط اروپا و ارمنستان.',
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
    thumbnail: '/images/company/armenian-dram-currency.webp',
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
    slug: 'sabt-sherktat-armenia-marahel',
    href: '/blog/sabt-sherktat-armenia-marahel',
    category: 'company',
    thumbnail: '/images/company/yerevan-city-center.webp',
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
    slug: 'sakhtare-hoqooqi-sherktat-armenia',
    href: '/blog/sakhtare-hoqooqi-sherktat-armenia',
    category: 'company',
    thumbnail: '/images/company.webp',
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
    slug: 'hazine-maliyat-bank-armenia',
    href: '/blog/hazine-maliyat-bank-armenia',
    category: 'company',
    thumbnail: '/images/company/yerevan-bank-building.webp',
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
    slug: 'eqamat-armenia-az-tarigh-sherktat',
    href: '/blog/eqamat-armenia-az-tarigh-sherktat',
    category: 'company',
    thumbnail: '/images/Yerevan_Residency.webp',
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
    slug: 'apartment-rental-yerevan-guide',
    href: '/blog/apartment-rental-yerevan-guide',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1730569000295-49a648e4f1e3?w=800&q=80',
    tags: ['yerevan', 'apartment', 'rent', 'life', 'residency'],
    date: '2026-09-03',
    fa: {
      title: 'اجاره آپارتمان در ایروان: راهنمای قیمت، مدت اقامت و انواع مسکن',
      excerpt: 'کوتاه\u200cمدت یا بلندمدت، آپارتمان یا خانه ویلایی؛ بازه قیمت اجاره، ودیعه و هزینه\u200cهای جانبی در ایروان.',
    },
    en: {
      title: 'Apartment Rental in Yerevan: Prices, Stay Length & Housing Types',
      excerpt: 'Short-term or long-term, apartment or villa — rental price ranges, deposits, and extra costs in Yerevan.',
    },
  },
  {
    slug: 'best-neighborhoods-yerevan-rent',
    href: '/blog/best-neighborhoods-yerevan-rent',
    category: 'life',
    thumbnail: '/images/tourism/yerevan-republic-square.webp',
    tags: ['yerevan', 'neighborhoods', 'apartment', 'life', 'kentron'],
    date: '2026-09-03',
    fa: {
      title: 'بهترین محله\u200cهای ایروان برای اجاره: کِنترون، عربکیر، کومیتاس و گزینه\u200cهای اقتصادی',
      excerpt: 'مقایسه محله\u200cهای ایروان برای اجاره خانه — دسترسی، هزینه و کیفیت زندگی در کِنترون، عربکیر، کومیتاس، داوتاشن و کاسکاد.',
    },
    en: {
      title: "Best Neighborhoods to Rent in Yerevan: Kentron, Arabkir, Komitas & Budget Options",
      excerpt: 'Comparing Yerevan neighborhoods for renting — access, cost and quality of life across Kentron, Arabkir, Komitas, Davtashen and Cascade.',
    },
  },
  {
    slug: 'rental-contract-armenia-guide',
    href: '/blog/rental-contract-armenia-guide',
    category: 'life',
    thumbnail: 'https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?w=800&q=80',
    tags: ['yerevan', 'contract', 'deposit', 'life', 'rent'],
    date: '2026-09-03',
    fa: {
      title: 'قرارداد اجاره خانه در ارمنستان: مدارک، ودیعه و نکاتی که باید قبل از امضا بدانید',
      excerpt: 'از پیدا کردن آگهی معتبر تا تحویل کلید؛ مدارک لازم، بندهای ضروری قرارداد و نشانه\u200cهای آگهی مشکوک.',
    },
    en: {
      title: 'Rental Contract in Armenia: Documents, Deposit & What to Check Before Signing',
      excerpt: 'From finding a legitimate listing to key handover — required documents, essential contract clauses and warning signs.',
    },
  },
  {
    slug: 'education-armenia',
    href: '/blog/education-armenia',
    category: 'education',
    tags: ['education', 'student', 'armenia', 'residency'],
    thumbnail: '/images/residency.webp',
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
