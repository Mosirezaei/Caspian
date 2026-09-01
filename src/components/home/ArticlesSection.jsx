'use client';
import { useLang } from '@/lib/LanguageContext';

const articles = [
  {
    href: '/blog/living-cost-yerevan',
    emoji: '💰',
    titleFa: 'هزینه زندگی در ایروان ۱۴۰۴',
    titleEn: 'Cost of Living in Yerevan 2025',
    titleRu: 'Стоимость жизни в Ереване 2025',
    descFa: 'راهنمای کامل هزینه اجاره، خواربار، حمل‌ونقل و قبوض در ارمنستان',
    descEn: 'Complete guide to rent, groceries, transport and bills in Armenia',
    descRu: 'Полное руководство по аренде, продуктам и коммунальным услугам',
    tag: 'راهنمای مهاجرت',
  },
  {
    href: '/blog/armenia-visa-documents',
    emoji: '📋',
    titleFa: 'مدارک ویزای ارمنستان',
    titleEn: 'Armenia Visa Documents',
    titleRu: 'Документы для визы в Армению',
    descFa: 'همه مدارک لازم برای ورود، اقامت، تحصیل و ثبت شرکت در ارمنستان',
    descEn: 'All documents for entry, residence, study and company registration',
    descRu: 'Документы для въезда, проживания, учёбы и регистрации компании',
    tag: 'ویزا و اقامت',
  },
  {
    href: '/residency/armenia',
    emoji: '🏡',
    titleFa: 'اقامت ارمنستان',
    titleEn: 'Armenia Residency',
    titleRu: 'ВНЖ Армении',
    descFa: 'راه‌های اخذ اقامت دائم و موقت ارمنستان برای ایرانیان',
    descEn: 'Ways to obtain temporary and permanent residency in Armenia',
    descRu: 'Способы получения временного и постоянного ВНЖ в Армении',
    tag: 'اقامت',
  },
  {
    href: '/residency/business',
    emoji: '🏢',
    titleFa: 'ثبت شرکت در ارمنستان',
    titleEn: 'Company Registration in Armenia',
    titleRu: 'Регистрация компании в Армении',
    descFa: 'ثبت شرکت در ۳ روز، مالیات پایین و دسترسی به بازار اروپا',
    descEn: 'Register a company in 3 days, low taxes and access to European market',
    descRu: 'Регистрация за 3 дня, низкие налоги и доступ к европейскому рынку',
    tag: 'کسب‌وکار',
  },
  {
    href: '/services/student-admission',
    emoji: '🎓',
    titleFa: 'تحصیل در ارمنستان',
    titleEn: 'Study in Armenia',
    titleRu: 'Обучение в Армении',
    descFa: 'پذیرش در دانشگاه‌های معتبر ارمنستان با شهریه مناسب',
    descEn: 'Admission to top Armenian universities with affordable tuition',
    descRu: 'Поступление в ведущие вузы Армении с доступными ценами',
    tag: 'تحصیل',
  },
  {
    href: '/travel/armenia-guide',
    emoji: '🗺️',
    titleFa: 'جاذبه‌های دیدنی ارمنستان',
    titleEn: 'Armenia Travel Guide',
    titleRu: 'Достопримечательности Армении',
    descFa: 'معبد گارنی، کلیسای گغارد، دریاچه سوان و بهترین مقاصد گردشگری',
    descEn: 'Garni Temple, Geghard Monastery, Lake Sevan and top tourist spots',
    descRu: 'Храм Гарни, Гехард, озеро Севан и лучшие туристические места',
    tag: 'گردشگری',
  },
];

export default function ArticlesSection() {
  const { lang } = useLang();

  const getTitle = (a) => lang === 'en' ? a.titleEn : lang === 'ru' ? a.titleRu : a.titleFa;
  const getDesc = (a) => lang === 'en' ? a.descEn : lang === 'ru' ? a.descRu : a.descFa;

  const heading = {
    fa: 'راهنما و اطلاعات',
    en: 'Guides & Resources',
    ru: 'Руководства и ресурсы',
  };
  const subheading = {
    fa: 'همه آنچه برای زندگی، سفر و کسب‌وکار در ارمنستان نیاز دارید',
    en: 'Everything you need for life, travel and business in Armenia',
    ru: 'Всё что нужно для жизни, путешествий и бизнеса в Армении',
  };

  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8" dir={lang === 'en' || lang === 'ru' ? 'ltr' : 'rtl'}>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full uppercase tracking-wider">
            {lang === 'en' ? 'Knowledge Base' : lang === 'ru' ? 'База знаний' : 'پایگاه دانش'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-foreground mt-4">
            {heading[lang] || heading.fa}
          </h2>
          <p className="text-foreground/50 mt-2 text-sm sm:text-base max-w-xl mx-auto">
            {subheading[lang] || subheading.fa}
          </p>
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {articles.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="group flex flex-col p-5 rounded-2xl border border-white/8 hover:border-primary/25 transition-all hover:bg-primary/3 bg-white/2"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-2xl">{a.emoji}</span>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] text-primary/60 font-semibold bg-primary/8 px-2 py-0.5 rounded-full">
                    {a.tag}
                  </span>
                  <h3 className="text-sm font-bold text-foreground mt-1.5 group-hover:text-primary transition-colors leading-snug">
                    {getTitle(a)}
                  </h3>
                </div>
              </div>
              <p className="text-xs text-foreground/50 leading-relaxed flex-1">
                {getDesc(a)}
              </p>
              <div className="flex items-center gap-1 mt-3 text-primary/60 text-xs font-semibold">
                <span>{lang === 'ru' ? 'Читать' : lang === 'en' ? 'Read more' : 'مطالعه'}</span>
                <span className={lang === 'fa' ? 'rotate-180' : ''}>→</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
