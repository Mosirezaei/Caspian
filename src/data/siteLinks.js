import { blogPosts } from './blogPosts';

// همه‌ی صفحات سرویس سایت (به‌جز صفحه اصلی، درباره ما، تماس با ما — طبق درخواست کاربر از
// «لینک‌های مفید» حذف شدن). هر کدوم چندتا tag دارن که برای امتیازدهی ارتباط با صفحه‌ی فعلی
// استفاده می‌شه (همون منطق RelatedContent/RelatedServices).
export const SERVICE_LINKS = [
  { href: '/residency/work', tags: ['residency', 'work', 'employment', 'armenia'],
    fa: { label: 'اقامت کاری ارمنستان' }, en: { label: 'Armenia Work Residency' }, ru: { label: 'Рабочий ВНЖ Армении' } },
  { href: '/residency/business', tags: ['residency', 'company', 'armenia'],
    fa: { label: 'ثبت شرکت ارمنستان' }, en: { label: 'Armenia Company Registration' }, ru: { label: 'Регистрация компании в Армении' } },
  { href: '/residency/student', tags: ['residency', 'education', 'armenia', 'student'],
    fa: { label: 'اقامت تحصیلی ارمنستان' }, en: { label: 'Armenia Student Residency' }, ru: { label: 'Учебный ВНЖ Армении' } },
  { href: '/residency/child-birth', tags: ['residency', 'armenia', 'family'],
    fa: { label: 'اقامت از طریق تولد فرزند' }, en: { label: 'Residency via Child Birth' }, ru: { label: 'ВНЖ через рождение ребёнка' } },
  { href: '/residency/investment', tags: ['residency', 'company', 'armenia', 'investment'],
    fa: { label: 'اقامت از طریق سرمایه‌گذاری' }, en: { label: 'Residency via Investment' }, ru: { label: 'ВНЖ через инвестиции' } },
  { href: '/visa/russia', tags: ['visa', 'russia', 'tourism'],
    fa: { label: 'ویزای توریستی روسیه' }, en: { label: 'Russia Tourist Visa' }, ru: { label: 'Туристическая виза в Россию' } },
  { href: '/visa/russia/business', tags: ['visa', 'russia', 'business'],
    fa: { label: 'ویزای تجاری روسیه' }, en: { label: 'Russia Business Visa' }, ru: { label: 'Деловая виза в Россию' } },
  { href: '/visa/russia/multi', tags: ['visa', 'russia'],
    fa: { label: 'ویزای مولتی روسیه' }, en: { label: 'Russia Multi-Entry Visa' }, ru: { label: 'Многократная виза в Россию' } },
  { href: '/student-visa/russia', tags: ['visa', 'russia', 'education', 'student'],
    fa: { label: 'ویزای تحصیلی روسیه' }, en: { label: 'Russia Student Visa' }, ru: { label: 'Студенческая виза России' } },
  { href: '/travel/tour', tags: ['tourism', 'armenia', 'sightseeing'],
    fa: { label: 'تور ارمنستان' }, en: { label: 'Armenia Tours' }, ru: { label: 'Туры по Армении' } },
  { href: '/travel/hotel', tags: ['tourism', 'armenia', 'accommodation'],
    fa: { label: 'رزرو هتل ایروان' }, en: { label: 'Yerevan Hotel Booking' }, ru: { label: 'Бронирование отеля в Ереване' } },
  { href: '/travel/apartment', tags: ['tourism', 'armenia', 'accommodation', 'life'],
    fa: { label: 'اجاره آپارتمان مبله' }, en: { label: 'Furnished Apartment Rental' }, ru: { label: 'Аренда квартиры в Ереване' } },
  { href: '/travel/flight-bus', tags: ['tourism', 'armenia', 'transport'],
    fa: { label: 'بلیط هوایی و زمینی' }, en: { label: 'Flight & Ground Tickets' }, ru: { label: 'Авиа и наземные билеты' } },
  { href: '/travel/transfer', tags: ['tourism', 'armenia', 'transport'],
    fa: { label: 'ترانسفر فرودگاهی ایروان' }, en: { label: 'Yerevan Airport Transfer' }, ru: { label: 'Трансфер из аэропорта Еревана' } },
];

const BLOG_LINKS = blogPosts.map(p => ({
  href: p.href,
  tags: p.tags,
  fa: { label: p.fa.title },
  en: { label: (p.en || p.fa).title },
  ru: { label: (p.ru || p.en || p.fa).title },
}));

// همه‌ی صفحات محتوایی سایت (سرویس‌ها + مقالات وبلاگ) — منبع واحد برای «لینک‌های مفید».
// عمداً صفحه اصلی، درباره ما و تماس با ما توش نیستن.
export const ALL_SITE_LINKS = [...SERVICE_LINKS, ...BLOG_LINKS];

// نگاشت serviceType (همون کلیدهایی که تو RelatedServices.RELATED_MAP هست) به تگ‌های معادل،
// برای صفحاتی که مستقیم tags ندارن (صفحات سرویس) ولی serviceType دارن.
export const SERVICE_TYPE_TAGS = {
  residency: ['residency', 'armenia'],
  company: ['residency', 'company', 'armenia'],
  'visa-russia': ['visa', 'russia'],
  'student-visa': ['visa', 'russia', 'education'],
  hotel: ['tourism', 'armenia', 'accommodation'],
  apartment: ['tourism', 'armenia', 'accommodation', 'life'],
  tour: ['tourism', 'armenia', 'sightseeing'],
  transfer: ['tourism', 'armenia', 'transport'],
  default: ['armenia'],
};
