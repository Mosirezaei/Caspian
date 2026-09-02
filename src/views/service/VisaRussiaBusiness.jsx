'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  return (
    <ServicePageLayout
      titleFa="ویزای تجاری روسیه" titleEn="Russia Business Visa" titleRu="Деловая виза в Россию"
      subtitleFa="ویزای روسیه برای سفرهای کاری، مذاکرات تجاری و شرکت در نمایشگاه‌ها"
      subtitleEn="Russian visa for business trips, negotiations, and trade fairs"
      subtitleRu="Виза в Россию для деловых поездок и переговоров"
      heroImage="https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80"
      serviceType="visa-russia">

      {isFa && <>
        <InfoBlock title="ویزای تجاری روسیه چیه؟">
          <p>ویزای تجاری برای افرادی صادر می‌شه که هدف سفرشون به روسیه مذاکره‌ی تجاری، بازدید از شرکای کاری، شرکت در نمایشگاه یا کنفرانس، یا انجام امور اداری/حقوقی برای شرکته — نه اقامت یا اشتغال دائم. برخلاف ویزای توریستی eVisa که فقط تا ۱۶ روز اعتبار داره، ویزای تجاری معمولاً اعتبار و مدت اقامت بیشتری می‌ده.</p>
        </InfoBlock>

        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'دعوت‌نامه‌ی رسمی از یک شرکت یا اتاق بازرگانی روسی (Invitation Letter)',
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار از تاریخ ورود',
            'فرم درخواست ویزا تکمیل‌شده',
            'عکس بیومتریک استاندارد',
            'بیمه‌ی مسافرتی معتبر برای مدت اقامت',
            'مدارک شغلی/شرکتی متقاضی (نامه از شرکت ایرانی طرف قرارداد)',
          ]} />
        </InfoBlock>

        <InfoBlock title="انواع اعتبار و مدت اقامت">
          <CheckList items={[
            'ویزای تجاری تک‌ورودی — معمولاً تا ۳۰ روز اقامت',
            'ویزای تجاری چندبار ورود کوتاه‌مدت — تا ۶ ماه اعتبار',
            'ویزای تجاری بلندمدت (برای همکاری‌های مستمر) — تا ۱ سال اعتبار با محدودیت روزهای اقامت در هر بازه',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل درخواست">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>دریافت دعوت‌نامه‌ی رسمی از طرف روسی (شرکت، اتاق بازرگانی یا نهاد دولتی)</li>
            <li>تکمیل فرم آنلاین درخواست ویزای روسیه</li>
            <li>ارائه‌ی مدارک و بیومتریک در کنسولگری یا مرکز ویزا</li>
            <li>پرداخت هزینه‌ی کنسولی</li>
            <li>دریافت ویزا (زمان رسیدگی معمولاً ۴ تا ۱۰ روز کاری)</li>
          </ol>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="What Is a Russia Business Visa?">
          <p>The business visa is issued for those traveling to Russia for business negotiations, meeting partners, attending trade fairs or conferences, or handling administrative/legal company matters — not permanent residency or employment. It typically allows a longer stay than the 16-day tourist eVisa.</p>
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'Official invitation letter from a Russian company or chamber of commerce',
            'Valid passport with at least 6 months validity from entry date',
            'Completed visa application form',
            'Standard biometric photo',
            'Valid travel insurance for the stay',
            "Applicant's employment/company documents",
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Что такое деловая виза в Россию?">
          <p>Деловая виза выдаётся для деловых переговоров, встреч с партнёрами, участия в выставках или конференциях — не для постоянного проживания. Обычно даёт более длительный срок пребывания, чем 16-дневная туристическая eVisa.</p>
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Официальное приглашение от российской компании или ТПП',
            'Действующий паспорт (не менее 6 месяцев)',
            'Заполненная анкета на визу',
            'Биометрическое фото',
            'Действующая медицинская страховка',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
