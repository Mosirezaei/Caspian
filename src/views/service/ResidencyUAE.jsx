'use client';
import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  return (
    <ServicePageLayout
      titleFa="اقامت امارات" titleEn="UAE Residency" titleRu="ВНЖ ОАЭ"
      subtitleFa="اقامت طلایی در مرکز تجاری خاورمیانه"
      subtitleEn="Golden residency in the Middle East's business hub"
      subtitleRu="Золотой ВНЖ в деловом центре Ближнего Востока"
      heroImage="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80"
      serviceType="residency"
    >
      {/* UAE flag & Dubai skyline */}
      <div className="rounded-2xl overflow-hidden mb-6 aspect-video relative">
        <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80" alt="Dubai UAE" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        <div className="absolute bottom-4 start-4 flex items-center gap-2">
          <img src="https://flagcdn.com/w80/ae.webp" alt="UAE flag" className="h-6 rounded shadow" />
          <span className="text-sm font-bold text-white drop-shadow">دبی، امارات</span>
        </div>
      </div>

      {lang === 'fa' && <>
        <InfoBlock title="چرا اقامت امارات؟">
          <p>امارات متحده عربی یکی از پیشرفته‌ترین و مدرن‌ترین کشورهای خاورمیانه است. دبی و ابوظبی به عنوان مراکز تجاری جهانی شناخته می‌شوند. با اقامت امارات می‌توانید از مزایای یک اقتصاد جهانی، زیرساخت‌های فوق‌العاده و بدون مالیات بر درآمد بهره‌مند شوید.</p>
        </InfoBlock>
        <InfoBlock title="انواع اقامت امارات">
          <CheckList items={[
            'ویزای طلایی (Golden Visa) ۱۰ ساله از طریق خرید ملک به ارزش حداقل ۲ میلیون درهم',
            'ویزای سرمایه‌گذار ملکی ۲ ساله (جدید، از آوریل ۲۰۲۶) — بدون حداقل ارزش برای مالک منفرد، یا حداقل ۴۰۰,۰۰۰ درهم سهم هر مالک در ملک مشترک',
            'اقامت از طریق سرمایه‌گذاری در کسب‌وکار (حداقل ۲ میلیون درهم)',
            'اقامت از طریق اشتغال در شرکت‌های امارات',
            'اقامت دانشجویی',
            'اقامت از طریق تأسیس شرکت در فری‌زون',
          ]} />
        </InfoBlock>
        <InfoBlock title="تغییرات ۲۰۲۶ ویزای طلایی ملکی">
          <CheckList items={[
            'حذف الزام پرداخت ۵۰٪ پیش‌پرداخت برای ملک‌های در حال ساخت (پیش‌فروش)',
            'ملک‌های رهنی (وام‌دار) نیز در صورت رسیدن ارزش کل به ۲ میلیون درهم واجد شرایط هستند',
            'امکان ترکیب چند ملک برای رسیدن به سقف ۲ میلیون درهم',
          ]} />
        </InfoBlock>
        <InfoBlock title="مزایای اقامت امارات">
          <CheckList items={[
            'بدون مالیات بر درآمد شخصی و شرکتی',
            'دسترسی به یکی از بزرگ‌ترین فرودگاه‌های جهان',
            'سیستم بانکی بین‌المللی پیشرفته',
            'امکان اقامت خانواده',
            'محیط کاری چندملیتی و بین‌المللی',
            'زیرساخت‌های مدرن و کلاس جهانی',
            'امنیت بالا و کیفیت زندگی عالی',
          ]} />
        </InfoBlock>
        <InfoBlock title="ویزای طلایی امارات">
          <CheckList items={[
            'اعتبار ۵ یا ۱۰ ساله قابل تمدید',
            'بدون نیاز به کفیل (Sponsor)',
            'امکان زندگی ۶ ماه خارج از امارات بدون لغو ویزا',
            'شامل همسر و فرزندان',
            'مناسب برای سرمایه‌گذاران، کارآفرینان و متخصصان',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین گروه در امارات">
          <CheckList items={[
            'مشاوره رایگان و انتخاب نوع اقامت مناسب',
            'راهنمایی در خرید ملک یا سرمایه‌گذاری',
            'ثبت شرکت در فری‌زون‌های دبی',
            'آماده‌سازی مدارک و هماهنگی با اداره هجرة',
            'پیگیری تا دریافت اقامت',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why UAE Residency?">
          <p>The UAE is one of the most advanced countries in the Middle East. Dubai and Abu Dhabi are recognized as global business centers. With UAE residency, you can benefit from a global economy, outstanding infrastructure, and no personal income tax.</p>
        </InfoBlock>
        <InfoBlock title="Types of UAE Residency">
          <CheckList items={[
            '10-year Golden Visa through property purchase worth at least AED 2 million',
            'New 2-year Property Investor Visa (from April 2026) — no minimum for sole owners, or at least AED 400,000 per owner for jointly-owned property',
            'Business Investment Residency (minimum AED 2 million)',
            'Employment Residency',
            'Student Residence Permit',
            'Free Zone Company Setup',
          ]} />
        </InfoBlock>
        <InfoBlock title="2026 Golden Visa Property Updates">
          <CheckList items={[
            'The 50% upfront payment requirement for off-plan properties has been removed',
            'Mortgaged properties now qualify once the certified value reaches AED 2 million',
            'Multiple properties can be combined to reach the AED 2 million threshold',
          ]} />
        </InfoBlock>
        <InfoBlock title="Benefits of UAE Residency">
          <CheckList items={[
            'No personal or corporate income tax',
            'Access to one of the world\'s largest airports',
            'Advanced international banking system',
            'Family residency sponsorship',
            'Multicultural international work environment',
            'World-class infrastructure and security',
          ]} />
        </InfoBlock>
        <InfoBlock title="UAE Golden Visa">
          <CheckList items={[
            '5 or 10-year renewable validity',
            'No sponsor (kafeel) required',
            'Stay abroad up to 6 months without visa cancellation',
            'Includes spouse and children',
            'Suitable for investors, entrepreneurs and professionals',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'ru' && <>
        <InfoBlock title="Почему ВНЖ ОАЭ?">
          <p>ОАЭ — одна из самых развитых стран Ближнего Востока. Дубай и Абу-Даби признаны мировыми деловыми центрами. ВНЖ ОАЭ даёт доступ к мировой экономике, передовой инфраструктуре и отсутствию подоходного налога.</p>
        </InfoBlock>
        <InfoBlock title="Виды ВНЖ ОАЭ">
          <CheckList items={[
            'Золотая виза на 10 лет через покупку недвижимости от 2 млн дирхамов',
            'Новая 2-летняя инвесторская виза (с апреля 2026) — без минимума для единственного владельца или от 400 000 дирхамов на совладельца',
            'ВНЖ через инвестиции в бизнес',
            'ВНЖ через трудоустройство',
            'Студенческий ВНЖ',
          ]} />
        </InfoBlock>
        <InfoBlock title="Преимущества ВНЖ ОАЭ">
          <CheckList items={[
            'Отсутствие подоходного налога',
            'Передовая банковская система',
            'Мировая инфраструктура',
            'Высокий уровень безопасности',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
