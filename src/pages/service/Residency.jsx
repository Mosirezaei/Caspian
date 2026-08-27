import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  
  useSEO({
    title: lang === 'fa' ? 'اقامت ارمنستان | کاسپین گروپ' : 
           lang === 'ru' ? 'ВНЖ Армении | Caspian Group' : 
           'Armenia Residency | Caspian Group',
    description: lang === 'fa' ? 'اقامت ارمنستان - سریع‌ترین اقامت اروپایی برای ایرانیان. ثبت شرکت در ۳ روز، هزینه پایین، مالیات ۱۰٪.' :
                 lang === 'ru' ? 'ВНЖ Армении - самый быстрый европейский ВНЖ. Регистрация компании за 3 дня, низкие налоги 10%.' :
                 'Armenia Residency - Fastest European residency for Iranians. Company registration in 3 days, 10% tax rate.',
    keywords: lang === 'fa' ? 'اقامت ارمنستان، کارت اقامت، ثبت شرکت، کاسپین' :
              lang === 'ru' ? 'ВНЖ Армения, виза Армении, регистрация компании' :
              'Armenia residency, residency card, company registration',
    ogImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80',
    path: '/residency/armenia',
    schema: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: lang === 'fa' ? 'اقامت ارمنستان' : 'Armenia Residency',
      description: lang === 'fa' ? 'خدمات اقامت ارمنستان برای ایرانیان' : 'Armenia Residency Services',
      provider: {
        '@type': 'Organization',
        name: 'Caspian Group',
        url: 'https://caspian.am'
      },
      areaServed: 'Iran'
    }
  });
  
  return (
    <ServicePageLayout titleFa="اقامت ارمنستان" titleEn="Armenia Residency" titleRu="ВНЖ Армении" serviceType="residency"
      subtitleFa="سریع‌ترین و مقرون‌به‌صرفه‌ترین اقامت اروپایی"
      subtitleEn="The fastest and most affordable European residency"
      subtitleRu="Самый быстрый и доступный европейский ВНЖ"
      heroImage="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&q=80">

      {/* Armenia flag & cityscape image */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
       <img src="/images/Yerevan_Residency.webp" alt="Yerevan Armenia" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="/images/am.webp" alt="Armenia flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">ایروان، ارمنستان</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <div className="glass-panel rounded-2xl p-6 mb-6 border border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-transparent">
          <span className="inline-block text-xs font-bold text-amber-400 bg-amber-400/15 rounded-full px-3 py-1 mb-3">📌 به‌روزرسانی مهم — قانون جدید اتباع خارجی</span>
          <h2 className="text-lg font-black text-foreground mb-2">تغییرات قانون اقامت ارمنستان از ۱ نوامبر ۲۰۲۶</h2>
          <p className="text-sm text-foreground/70 leading-relaxed mb-3">دولت ارمنستان اصلاحیه جدید «قانون اتباع خارجی» را تصویب کرده که اجرای آن از ۱ اوت به ۱ نوامبر ۲۰۲۶ موکول شده است. مهم‌ترین تغییرات:</p>
          <CheckList items={[
            'ثبت‌نام کاملاً الکترونیک و صدور کارت اقامت بیومتریک',
            'افزایش هزینه‌های دولتی: اقامت یک‌ساله ۱۵۰,۰۰۰ درام، اقامت دائم ۵ساله ۲۵۰,۰۰۰ درام (غیرقابل استرداد در صورت رد درخواست)',
            'سهمیه سالانه برای صدور هر نوع اقامت',
            'برای اقامت از طریق فعالیت اقتصادی/ثبت شرکت، نیاز به گردش مالی یا موجودی حساب حداقل ۱ میلیون درام',
            'الزام حضور فیزیکی؛ غیبت بیش از ۱۸۳ روز در سال می‌تواند به لغو اقامت منجر شود',
            'اقامت دائم ۵ساله جایگزین وضعیت قبلی «اقامت ویژه ۱۰ساله» می‌شود و نیازمند ۳ سال سابقه اقامت موقت است',
          ]} />
          <p className="text-xs text-foreground/50 mt-3 italic">تا پیش از اجرای قانون جدید، روند فعلی (شرح‌داده‌شده در ادامه همین صفحه) هنوز ساده‌تر است — برای برنامه‌ریزی دقیق با کارشناسان کاسپین در واتساپ مشورت کنید.</p>
        </div>

        <InfoBlock title="چرا اقامت ارمنستان؟">
          <p>ارمنستان یکی از بهترین گزینه‌ها برای اقامت خارج از کشور برای ایرانیان است. این کشور عضو اتحادیه اروپایی نیست، اما دارای روابط بسیار خوبی با اروپا، روسیه و کشورهای CIS است. هزینه زندگی پایین، مردم مهمان‌نواز، فرهنگ مشابه و محیط امن، ارمنستان را به مقصد ایده‌آلی برای ایرانیان تبدیل کرده است.</p>
        </InfoBlock>
        <InfoBlock title="روش‌های دریافت اقامت ارمنستان">
          <CheckList items={[
            'ثبت شرکت در ارمنستان ',
            'سرمایه‌گذاری در ارمنستان',
            'اشتغال در شرکت ارمنستانی',
            'ازدواج با شهروند ارمنستانی',
            'تحصیل در دانشگاه‌های ارمنستان',
            'اقامت بشردوستانه',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای اقامت ارمنستان">
          <CheckList items={[
            'اخذ اقامت در کمتر از ۳۰ روز',
            'هزینه پایین نسبت به سایر کشورهای اروپایی',
            'دسترسی به بازارهای اروپایی و CIS',
            'محیط امن و آرام برای زندگی',
            'امکان تحصیل فرزندان در سیستم آموزشی ارمنستان',
            'مالیات پایین — ۱۰٪ مالیات فردی',
            'پل ارتباطی برای اقامت‌های بزرگ‌تر در آینده',
          ]} />
        </InfoBlock>
        <InfoBlock title="مراحل دریافت اقامت از طریق کاسپین گروه">
          <CheckList items={[
            'مشاوره رایگان و بررسی وضعیت',
            'آماده‌سازی مدارک لازم',
            'ثبت شرکت یا انجام روش انتخابی',
            'ثبت محل سکونت',
            'درخواست کارت اقامت (ID)',
            'دریافت کارت اقامت ارمنستان',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <div className="glass-panel rounded-2xl p-6 mb-6 border border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-transparent">
          <span className="inline-block text-xs font-bold text-amber-400 bg-amber-400/15 rounded-full px-3 py-1 mb-3">📌 Important Update — New Law on Foreigners</span>
          <h2 className="text-lg font-black text-foreground mb-2">Armenia Residency Law Changes from November 1, 2026</h2>
          <p className="text-sm text-foreground/70 leading-relaxed mb-3">Armenia has approved amendments to its Law on Foreigners, with implementation delayed from August 1 to November 1, 2026. Key changes:</p>
          <CheckList items={[
            'Fully electronic application process and biometric residence cards',
            'Higher government fees: 150,000 AMD for 1-year residency, 250,000 AMD for 5-year permanent residency (non-refundable if rejected)',
            'Annual quotas introduced for each residency category',
            'Business/entrepreneur-based residency now requires minimum turnover or account balance of 1,000,000 AMD',
            'Physical presence requirement — absence of more than 183 days per year may result in revocation',
            'The 5-year permanent residence permit replaces the former 10-year special-residence status and requires 3 years of prior temporary residence',
          ]} />
          <p className="text-xs text-foreground/50 mt-3 italic">Until the new law takes effect, the current process described below remains simpler — contact Caspian's team on WhatsApp for up-to-date guidance.</p>
        </div>

        <InfoBlock title="Why Armenia Residency?">
          <p>Armenia is one of the best options for Iranians seeking residency abroad. Although not an EU member, it has excellent relations with Europe, Russia and CIS countries. Low cost of living, welcoming people, similar culture, and a safe environment make Armenia an ideal destination.</p>
        </InfoBlock>
        <InfoBlock title="Methods to Obtain Armenia Residency">
          <CheckList items={[
            'Company registration in Armenia (fastest — 3 days)',
            'Investment in Armenia',
            'Employment at an Armenian company',
            'Marriage to an Armenian citizen',
            'Study at Armenian universities',
          ]} />
        </InfoBlock>
        <InfoBlock title="Benefits of Armenia Residency">
          <CheckList items={[
            'Obtain residency in less than 30 days',
            'Low cost compared to other European countries',
            'Access to European and CIS markets',
            'Safe and peaceful living environment',
            'Children can study in Armenian education system',
            'Low taxes — 10% personal income tax',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <div className="glass-panel rounded-2xl p-6 mb-6 border border-amber-400/40 bg-gradient-to-br from-amber-400/10 to-transparent">
          <span className="inline-block text-xs font-bold text-amber-400 bg-amber-400/15 rounded-full px-3 py-1 mb-3">📌 Важное обновление — новый Закон об иностранцах</span>
          <h2 className="text-lg font-black text-foreground mb-2">Изменения в законе о ВНЖ Армении с 1 ноября 2026 года</h2>
          <p className="text-sm text-foreground/70 leading-relaxed mb-3">Правительство Армении утвердило поправки к Закону об иностранцах, вступление в силу перенесено с 1 августа на 1 ноября 2026 года. Основные изменения:</p>
          <CheckList items={[
            'Полностью электронная подача документов и биометрические карты ВНЖ',
            'Повышение госпошлин: 150 000 драм за годовой ВНЖ, 250 000 драм за постоянный (5-летний) ВНЖ, без возврата при отказе',
            'Введение ежегодных квот по каждой категории ВНЖ',
            'Для ВНЖ через бизнес/ИП — требуется оборот или остаток на счёте не менее 1 000 000 драм',
            'Отсутствие в стране более 183 дней в году может привести к аннулированию ВНЖ',
            '5-летний постоянный ВНЖ заменяет прежний специальный статус на 10 лет и требует 3 года предыдущего временного ВНЖ',
          ]} />
        </div>

        <InfoBlock title="Почему ВНЖ Армении?">
          <p>Армения — один из лучших вариантов для иностранцев, желающих получить ВНЖ. Низкая стоимость жизни, безопасная обстановка и хорошие отношения с Европой и СНГ делают её привлекательным выбором.</p>
        </InfoBlock>
        <InfoBlock title="Способы получения ВНЖ Армении">
          <CheckList items={[
            'Регистрация компании (самый быстрый способ — 3 дня)',
            'Инвестиции в Армению',
            'Трудоустройство в армянской компании',
            'Брак с гражданином Армении',
            'Обучение в университетах Армении',
          ]} />
        </InfoBlock>
        <InfoBlock title="Преимущества ВНЖ Армении">
          <CheckList items={[
            'Получение ВНЖ менее чем за 30 дней',
            'Низкие расходы по сравнению с другими европейскими странами',
            'Низкие налоги — 10% подоходный налог',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function Residency() {
  return <LanguageProvider><Content /></LanguageProvider>;
}
