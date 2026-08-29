'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';
import Link from 'next/link';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  return (
    <ServicePageLayout titleFa="ویزای تحصیلی خارج از کشور" titleEn="International Student Visas" titleRu="Учебные визы за рубеж"
      subtitleFa="ارمنستان، روسیه، اروپا، ترکیه — مدارک، مراحل و هزینه هر کشور"
      subtitleEn="Armenia, Russia, Europe, Turkey — documents, steps, costs"
      subtitleRu="Армения, Россия, Европа, Турция — документы, этапы, стоимость"
      heroImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=75"
      serviceType="student-visa">

      {isFa && <>
        <InfoBlock title="چرا برای ویزای تحصیلی از ارمنستان اقدام کنید؟">
          <p>سفارتخانه‌های کشورهای مختلف در ایروان معمولاً وقت سفارت سریع‌تر و نرخ تأیید بالاتری نسبت به دفاتر داخل ایران دارند. کاسپین گروپ با تجربه در اخذ ویزای تحصیلی از ایروان، از آماده‌سازی مدارک پذیرش دانشگاه تا تحویل ویزا را پیگیری می‌کند.</p>
        </InfoBlock>
        <InfoBlock title="مقایسه ویزای تحصیلی کشورها">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ارمنستان — ساده‌ترین و سریع‌ترین</h3>
          <p className="mb-2">بدون مصاحبه، شهریه از ۱۵۰۰ دلار، کارت اقامت دانشجویی. مناسب پزشکی، مهندسی، علوم انسانی.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">روسیه — دانشگاه‌های رتبه‌بندی‌شده</h3>
          <p className="mb-2">MSU، RUDN، SPbU. ویزای تحصیلی از سفارت ایروان. مدت پردازش ۲ تا ۴ هفته. بورسیه دولتی موجود.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">اروپا (شینگن) — اعتبار جهانی</h3>
          <p className="mb-2">آلمان، فرانسه، ایتالیا. نیاز به پذیرش از دانشگاه معتبر. مدت پردازش ۳ تا ۸ هفته. بعضی کشورها آزمون زبان الزامی دارند.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">ترکیه — نزدیک و مقرون‌به‌صرفه</h3>
          <p>ویزای دانشجویی ترکیه از سفارت ایروان. شهریه‌های پایین در دانشگاه‌های دولتی. پردازش ۱ تا ۲ هفته.</p>
        </InfoBlock>
        <InfoBlock title="مدارک مشترک برای اکثر ویزاهای تحصیلی">
          <CheckList items={[
            'پاسپورت معتبر با حداقل ۱۸ ماه اعتبار باقیمانده',
            'نامه پذیرش رسمی از دانشگاه (Letter of Acceptance)',
            'ریزنمرات دیپلم یا لیسانس — ترجمه رسمی',
            'گواهی بانکی یا اسپانسر مالی',
            'بیمه مسافرتی یا درمانی',
            'عکس بیومتریک',
            'فرم درخواست ویزای هر کشور (متفاوت)',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین برای ویزای تحصیلی">
          <CheckList items={[
            'مشاوره انتخاب کشور و دانشگاه بر اساس رشته و بودجه',
            'پیگیری پذیرش از دانشگاه‌های طرف قرارداد',
            'ترجمه رسمی مدارک تحصیلی',
            'آماده‌سازی پرونده ویزا',
            'هماهنگی وقت سفارت در ایروان',
            'پشتیبانی تا دریافت ویزا و عزیمت',
          ]} />
        </InfoBlock>
        <div className="grid grid-cols-2 gap-3 mt-6">
          {[
            { label: 'ویزای تحصیلی ارمنستان', href: '/student-visa/armenia' },
            { label: 'ویزای تحصیلی روسیه', href: '/student-visa/russia' },
            { label: 'ویزای تحصیلی شینگن', href: '/student-visa/schengen' },
            { label: 'ویزای تحصیلی ترکیه', href: '/student-visa/turkey' },
          ].map(l => (
            <Link key={l.href} href={l.href} className="glass-panel rounded-xl p-3 border border-white/10 hover:border-primary/40 text-center text-sm font-medium text-foreground/80 hover:text-primary transition-all">
              {l.label}
            </Link>
          ))}
        </div>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Apply for a Student Visa from Yerevan?">
          <p>Embassies in Yerevan typically offer faster appointment slots and higher approval rates than offices inside Iran. Caspian handles the full process from university admission to visa delivery.</p>
        </InfoBlock>
        <InfoBlock title="Student Visa Comparison">
          <CheckList items={[
            'Armenia — Easiest & fastest: no interview, from $1,500/year tuition',
            'Russia — Ranked universities (MSU, RUDN), government scholarships available',
            'Europe (Schengen) — Global recognition; 3–8 weeks processing',
            'Turkey — Affordable state universities; 1–2 weeks processing from Yerevan',
          ]} />
        </InfoBlock>
      </>}
      {isRu && <>
        <InfoBlock title="Учебные визы из Еревана">
          <p>Посольства в Ереване предлагают более быстрые записи и более высокий процент одобрения. Caspian ведёт весь процесс от поступления до получения визы.</p>
        </InfoBlock>
        <InfoBlock title="Сравнение учебных виз">
          <CheckList items={[
            'Армения — самый простой вариант: без собеседования, от $1500/год',
            'Россия — МГУ, РУДН; государственные стипендии',
            'Европа (Шенген) — международное признание; 3–8 недель',
            'Турция — доступные вузы; 1–2 недели из Еревана',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}
export default Content;
