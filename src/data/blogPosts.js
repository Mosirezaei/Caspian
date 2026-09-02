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
];

export const CATEGORY_LABELS = {
  fa: {
    residency: 'اقامت و مهاجرت', company: 'ثبت شرکت و مالی', work: 'کار و اشتغال',
    life: 'زندگی در ایروان', education: 'تحصیل', tourism: 'گردشگری و دیدنی‌ها', news: 'اخبار و رویدادها',
  },
  en: {
    residency: 'Residency & Immigration', company: 'Company Registration & Finance', work: 'Work & Employment',
    life: 'Life in Yerevan', education: 'Education', tourism: 'Tourism & Sights', news: 'News & Events',
  },
  ru: {
    residency: 'ВНЖ и миграция', company: 'Регистрация компаний и финансы', work: 'Работа и трудоустройство',
    life: 'Жизнь в Ереване', education: 'Образование', tourism: 'Туризм и достопримечательности', news: 'Новости и события',
  },
};
