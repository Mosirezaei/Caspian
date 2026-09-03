// src/data/blogPosts.js
// رجیستری مرکزی مقالات وبلاگ — هم برای صفحه‌ی آرشیو (/blog) و هم برای RelatedContent استفاده می‌شه.
// وقتی مقاله‌ی جدیدی (مرحله ۵) نوشته می‌شه، یک آبجکت اینجا اضافه کن؛ همون‌جا خودکار تو آرشیو و در نتیجه‌ها ظاهر می‌شه.
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
      title: 'هزینه زندگی در ایروان — راهنمای کامل ایرانیان',
      excerpt: 'هزینه اجاره خانه، خواروبار، حمل‌ونقل و بودجه ماهانه در ایروان. راهنمای عملی برای کسانی که قصد مهاجرت به ارمنستان دارن.',
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
      excerpt: 'مسیرهای یافتن شغل، مشاغل پرتقاضا و بازه حقوق، و مراحل قانونی دریافت مجوز کار و اقامت کاری در ارمنستان.',
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
      excerpt: 'از میدان‌ها و کاسکید ایروان تا صومعه‌های صخره‌ای، دریاچه سوان و تاتو — همه‌ی جاذبه‌های اصلی ارمنستان با عکس و توضیحات کامل.',
    },
    en: {
      title: 'Complete Guide to Armenia\'s Top Attractions',
      excerpt: 'From Yerevan\'s squares and Cascade to rock-hewn monasteries, Lake Sevan and Tatev — Armenia\'s main sights with photos and full descriptions.',
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
      title: 'فستیوال‌های سالانه ارمنستان، کنسرت‌های پیش رو و اخبار مهاجرتی',
      excerpt: 'تقویم کامل فستیوال‌های سالانه ارمنستان، کنسرت‌های تا سه ماه آینده در ایروان، و آخرین اخبار روابط ارمنستان و اتحادیه اروپا.',
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
    thumbnail: '/images/company/yerevan-bank-building.webp',
    tags: ['company', 'residency', 'armenia', 'investment', 'business'],
    date: '2026-09-03',
    fa: {
      title: 'راهنمای ثبت شرکت در ارمنستان: هزینه، مراحل و مالیات',
      excerpt: 'ثبت LLC در ۳ روز، مالیات ۵٪، حساب بانکی بین‌المللی — راهنمای واقعی هزینه‌ها و مراحل ثبت شرکت ارمنستان برای ایرانیان.',
    },
    en: {
      title: 'Company Registration in Armenia: Costs, Steps & Taxes',
      excerpt: 'LLC registration in 3 days, 5% tax, international bank account — a practical guide for Iranians.',
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
      title: 'تحصیل در ارمنستان: مدارس ایرانی، دانشگاه\u200cها و هزینه\u200cها',
      excerpt: 'راهنمای کامل مدارس ایرانی ایروان، دانشگاه\u200cهای برتر ارمنستان، شهریه و هزینه\u200cی زندگی دانشجویی برای ایرانیان.',
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
