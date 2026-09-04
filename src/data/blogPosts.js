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
    slug: 'company-registration-steps-armenia',
    href: '/blog/company-registration-steps-armenia',
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
    slug: 'company-legal-structures-armenia',
    href: '/blog/company-legal-structures-armenia',
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
    slug: 'company-costs-tax-banking-armenia',
    href: '/blog/company-costs-tax-banking-armenia',
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
    slug: 'residency-via-company-registration',
    href: '/blog/residency-via-company-registration',
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
    en: {
      title: 'Apartment Rental in Yerevan: Prices, Stay Length & Housing Types',
      excerpt: 'Short-term or long-term, apartment or villa — rental price ranges, deposits, and extra costs in Yerevan.',
    },
  },
  {
    en: {
      title: "Best Neighborhoods to Rent in Yerevan: Kentron, Arabkir, Komitas & Budget Options",
      excerpt: 'Comparing Yerevan neighborhoods for renting — access, cost and quality of life across Kentron, Arabkir, Komitas, Davtashen and Cascade.',
    },
  },
  {
    slug: 'rental-contract-armenia-guide',
    href: '/blog/rental-contract-armenia-guide',
    category: 'apartment',
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
  {
    slug: 'apartment-rental-yerevan-guide',
    href: '/blog/apartment-rental-yerevan-guide',
    category: 'apartment',
    tags: ['apartment', 'yerevan', 'accommodation', 'life', 'cost-of-living'],
    thumbnail: '/images/hotel.webp',
    date: '2026-09-03',
    fa: {
      title: 'راهنمای اجاره آپارتمان در ایروان: قیمت\u200cها و نکات کلیدی',
      excerpt: 'بازه قیمت اجاره، تفاوت کوتاه\u200cمدت و بلندمدت، هزینه\u200cهای جانبی و نکات مهم برای ایرانیان.',
    },
    en: {
      title: 'Yerevan Apartment Rental Guide: Prices & Key Tips',
      excerpt: 'Rental price ranges, short-term vs long-term, utility costs and essential tips for Iranians.',
    },
  },
  {
    slug: 'best-neighborhoods-yerevan-rent',
    href: '/blog/best-neighborhoods-yerevan-rent',
    category: 'apartment',
    tags: ['apartment', 'yerevan', 'accommodation', 'life'],
    thumbnail: '/images/tourism/yerevan-republic-square.webp',
    date: '2026-09-03',
    fa: {
      title: 'بهترین محله\u200cهای ایروان برای اجاره خانه',
      excerpt: 'مقایسه محله\u200cهای کنترون، آرابگیر و داوتاشن از نظر قیمت، دسترسی و امکانات.',
    },
    en: {
      title: 'Best Yerevan Neighborhoods for Renting',
      excerpt: 'Comparing Kentron, Arabkir, Komitas and Davtashen by price, access and amenities.',
    },
  },
  {
    slug: 'rental-contract-tips-armenia',
    href: '/blog/rental-contract-tips-armenia',
    category: 'apartment',
    tags: ['apartment', 'armenia', 'life', 'residency'],
    thumbnail: '/images/company/yerevan-bank-building.webp',
    date: '2026-09-03',
    fa: {
      title: 'قرارداد اجاره در ارمنستان: ودیعه، مدارک و نکات حقوقی',
      excerpt: 'همه چیز درباره قرارداد اجاره، ودیعه، کمیسیون آژانس و نشانه\u200cهای آگهی مشکوک.',
    },
    en: {
      title: 'Rental Contracts in Armenia: Deposits, Documents & Legal Tips',
      excerpt: 'Everything about rental contracts, deposits, agency fees and suspicious listing red flags.',
    },
  },
  {
    slug: 'residency-paths-comparison-armenia',
    href: '/blog/residency-paths-comparison-armenia',
    category: 'residency',
    tags: ['residency', 'armenia', 'work', 'education', 'investment', 'family'],
    thumbnail: '/images/Yerevan_Residency.webp',
    date: '2026-09-04',
    fa: {
      title: '\u0645\u0642\u0627\u06cc\u0633\u0647 \u0645\u0633\u06cc\u0631\u0647\u0627\u06cc \u0627\u0642\u0627\u0645\u062a \u0627\u0631\u0645\u0646\u0633\u062a\u0627\u0646: \u06a9\u0627\u0631\u06cc\u060c \u062a\u062d\u0635\u06cc\u0644\u06cc\u060c \u0633\u0631\u0645\u0627\u06cc\u0647\u200c\u06af\u0630\u0627\u0631\u06cc \u06cc\u0627 \u062a\u0648\u0644\u062f \u0641\u0631\u0632\u0646\u062f',
      excerpt: '\u0645\u0642\u0627\u06cc\u0633\u0647\u200c\u06cc \u06a9\u0627\u0645\u0644 \u0686\u0647\u0627\u0631 \u0631\u0648\u0634 \u0627\u0642\u0627\u0645\u062a \u0627\u0631\u0645\u0646\u0633\u062a\u0627\u0646: \u0647\u0632\u06cc\u0646\u0647\u060c \u0645\u062f\u062a \u0632\u0645\u0627\u0646\u060c \u0645\u062f\u0627\u0631\u06a9 \u0648 \u0645\u0632\u0627\u06cc\u0627/\u0645\u0639\u0627\u06cc\u0628 \u0647\u0631 \u0645\u0633\u06cc\u0631.',
    },
    en: {
      title: 'Armenia Residency Paths Compared: Work, Study, Investment or Child Birth',
      excerpt: 'Full comparison of four residency routes: cost, timeline, documents and pros/cons.',
    },
  },
  {
    slug: 'best-time-visit-armenia-souvenirs',
    href: '/blog/best-time-visit-armenia-souvenirs',
    category: 'tourism',
    tags: ['tourism', 'armenia', 'sightseeing', 'festivals'],
    thumbnail: '/images/tourism/noravank-monastery.webp',
    date: '2026-09-04',
    fa: {
      title: '\u0628\u0647\u062a\u0631\u06cc\u0646 \u0632\u0645\u0627\u0646 \u0633\u0641\u0631 \u0628\u0647 \u0627\u0631\u0645\u0646\u0633\u062a\u0627\u0646 \u0648 \u0633\u0648\u063a\u0627\u062a\u06cc\u200c\u0647\u0627\u06cc \u0627\u0631\u0645\u0646\u06cc',
      excerpt: '\u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0641\u0635\u0644\u200c\u0628\u0647\u200c\u0641\u0635\u0644 \u0633\u0641\u0631\u060c \u0622\u0628\u200c\u0648\u200c\u0647\u0648\u0627 \u0648 \u0628\u0647\u062a\u0631\u06cc\u0646 \u0633\u0648\u063a\u0627\u062a\u06cc\u200c\u0647\u0627\u06cc \u0627\u0631\u0645\u0646\u0633\u062a\u0627\u0646 \u0628\u0631\u0627\u06cc \u0627\u06cc\u0631\u0627\u0646\u06cc\u0627\u0646.',
    },
    en: {
      title: 'Best Time to Visit Armenia & Armenian Souvenirs',
      excerpt: 'Season-by-season travel guide, weather and best Armenian souvenirs for Iranians.',
    },
  },
  {
    slug: 'work-without-degree-armenia',
    href: '/blog/work-without-degree-armenia',
    category: 'work',
    tags: ['work', 'employment', 'armenia', 'jobs'],
    thumbnail: '/images/company/yerevan-city-center.webp',
    date: '2026-09-04',
    fa: {
      title: '\u06a9\u0627\u0631 \u0628\u062f\u0648\u0646 \u0645\u062f\u0631\u06a9 \u062a\u062d\u0635\u06cc\u0644\u06cc \u062f\u0631 \u0627\u0631\u0645\u0646\u0633\u062a\u0627\u0646: \u0641\u0631\u0635\u062a\u200c\u0647\u0627 \u0648 \u0648\u0627\u0642\u0639\u06cc\u062a\u200c\u0647\u0627',
      excerpt: '\u0686\u0647 \u06a9\u0627\u0631\u0647\u0627\u06cc\u06cc \u0628\u062f\u0648\u0646 \u0645\u062f\u0631\u06a9 \u062f\u0627\u0646\u0634\u06af\u0627\u0647\u06cc \u062f\u0631 \u0627\u0631\u0645\u0646\u0633\u062a\u0627\u0646 \u0645\u0648\u062c\u0648\u062f\u0647\u061f \u062d\u0642\u0648\u0642\u060c \u0634\u0631\u0627\u06cc\u0637 \u0648 \u0631\u0627\u0647\u0646\u0645\u0627\u06cc \u0639\u0645\u0644\u06cc.',
    },
    en: {
      title: 'Working in Armenia Without a Degree: Opportunities & Realities',
      excerpt: 'What jobs are available without a university degree? Salaries, conditions and practical guide.',
    },
  },
  {
    slug: 'simcard-internet-apps-yerevan',
    href: '/blog/simcard-internet-apps-yerevan',
    category: 'life',
    tags: ['yerevan', 'life', 'cost-of-living', 'armenia'],
    thumbnail: '/images/tourism/yerevan-republic-square.webp',
    date: '2026-09-04',
    fa: {
      title: 'سیم\u200cکارت، اینترنت و اپلیکیشن\u200cهای ضروری ایروان',
      excerpt: 'راهنمای خرید سیم\u200cکارت، اینترنت خانگی، اپ\u200cهای تاکسی و پرداخت و نکات پرداخت بدون نقد.',
    },
    en: {
      title: 'SIM Cards, Internet & Essential Apps in Yerevan',
      excerpt: 'Guide to buying a SIM card, home internet, taxi apps, payment apps and going cashless.',
    },
  },
  {
    slug: 'medical-universities-armenia',
    href: '/blog/medical-universities-armenia',
    category: 'education',
    tags: ['education', 'student', 'armenia', 'residency'],
    thumbnail: '/images/residency.webp',
    date: '2026-09-04',
    fa: {
      title: 'دانشگاه\u200cهای پزشکی ارمنستان: شرایط پذیرش و شهریه',
      excerpt: 'پزشکی به زبان انگلیسی با شهریه\u200cی $۴,۰۰۰/سال — شرایط YSMU، مدارک لازم و نکات مهم.',
    },
    en: {
      title: 'Medical Universities in Armenia: Admission & Tuition',
      excerpt: 'Study medicine in English for $4,000/year — YSMU admission, documents and key tips.',
    },
  },
  {
    slug: 'startup-tech-ecosystem-yerevan',
    href: '/blog/startup-tech-ecosystem-yerevan',
    category: 'news',
    tags: ['company', 'work', 'armenia', 'business'],
    thumbnail: '/images/company/yerevan-city-center.webp',
    date: '2026-09-04',
    fa: {
      title: 'اکوسیستم استارتاپ و فناوری ایروان: فرصت\u200cها برای ایرانیان',
      excerpt: 'چرا ایروان سیلیکون\u200cولی قفقاز شده؟ کوورکینگ، مالیات IT و فرصت\u200cهای فریلنسری و استارتاپ.',
    },
    en: {
      title: "Yerevan's Startup & Tech Ecosystem: Opportunities for Iranians",
      excerpt: "Why Yerevan became the Caucasus Silicon Valley — coworking, IT tax and freelancing opportunities.",
    },
  },
];

export const CATEGORY_LABELS = {
  fa: {
    residency: 'اقامت و مهاجرت', company: 'ثبت شرکت و مالی', work: 'کار و اشتغال',
    life: 'زندگی در ایروان', education: 'تحصیل', tourism: 'گردشگری و دیدنی‌ها', news: 'اخبار و فستیوال‌ها',
    apartment: 'اجاره و خرید ملک',
  },
  en: {
    residency: 'Residency & Immigration', company: 'Company Registration & Finance', work: 'Work & Employment',
    life: 'Life in Yerevan', education: 'Education', tourism: 'Tourism & Sights', news: 'News & Festivals',
    apartment: 'Rental & Purchase',
  },
  ru: {
    residency: 'ВНЖ и миграция', company: 'Регистрация компаний и финансы', work: 'Работа и трудоустройство',
    life: 'Жизнь в Ереване', education: 'Образование', tourism: 'Туризм и достопримечательности', news: 'Новости и фестивали',
    apartment: 'Аренда и покупка',
  },
};
