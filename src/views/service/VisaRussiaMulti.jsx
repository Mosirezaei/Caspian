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
      titleFa="ویزای مولتی روسیه" titleEn="Russia Multi-Entry Visa" titleRu="Многократная виза в Россию"
      subtitleFa="ویزای چندبار ورود برای مسافرانی که مکرر بین ایران و روسیه رفت‌وآمد دارن"
      subtitleEn="Multi-entry visa for frequent travelers between Iran and Russia"
      subtitleRu="Многократная виза для часто путешествующих между Ираном и Россией"
      heroImage="https://images.unsplash.com/photo-1523995462485-3d171b5c8fa9?w=1200&q=80"
      serviceType="visa-russia">

      {isFa && <>
        <InfoBlock title="ویزای مولتی چیه و چه فرقی با ویزای معمولی داره؟">
          <p>ویزای مولتی (چندبار ورود) به دارنده اجازه می‌ده در طول دوره‌ی اعتبار ویزا، چندین بار وارد و خارج از روسیه بشه — بدون نیاز به درخواست جداگانه برای هر سفر. این نوع ویزا برای بازرگانانی که به‌صورت مکرر سفر می‌کنن، صاحبان کسب‌وکار با شریک روسی، یا افرادی که خانواده/ملک در روسیه دارن مناسبه.</p>
        </InfoBlock>

        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'دعوت‌نامه‌ی معتبر (تجاری، خصوصی یا توریستی بسته به نوع مولتی)',
            'پاسپورت با حداقل ۶ ماه اعتبار و صفحات خالی کافی برای مهرهای مکرر',
            'فرم درخواست ویزا و عکس بیومتریک',
            'بیمه‌ی مسافرتی برای کل دوره‌ی اعتبار',
            'سابقه‌ی سفر قبلی به روسیه (در صورت وجود، شانس تأیید رو بالا می‌بره)',
          ]} />
        </InfoBlock>

        <InfoBlock title="دوره‌های اعتبار رایج">
          <CheckList items={[
            'مولتی ۶ ماهه — چند سفر کوتاه در بازه‌ی نیم‌سال',
            'مولتی ۱ ساله — برای بازرگانان و شرکای تجاری با رفت‌وآمد منظم',
            'مولتی تا ۳ ساله — معمولاً برای موارد خاص تجاری/خانوادگی با سابقه‌ی مستمر',
          ]} />
          <p className="mt-2 text-xs text-foreground/50">در هر بازه‌ی ورود، معمولاً حداکثر مدت اقامت مجاز (مثلاً ۹۰ روز از هر ۱۸۰ روز) محدود می‌مونه؛ جزئیات دقیق به نوع دعوت‌نامه بستگی داره.</p>
        </InfoBlock>

        <InfoBlock title="مراحل درخواست">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>مشخص‌کردن نوع دعوت‌نامه (تجاری/خصوصی/توریستی) و دریافتش از طرف روسی</li>
            <li>تکمیل فرم آنلاین درخواست ویزا با درخواست صریح نوع «چندبار ورود»</li>
            <li>ارائه‌ی مدارک و بیومتریک در کنسولگری یا مرکز ویزا</li>
            <li>پرداخت هزینه‌ی کنسولی (متناسب با مدت اعتبار)</li>
            <li>دریافت ویزا و برنامه‌ریزی سفرها با رعایت سقف روزهای اقامت مجاز</li>
          </ol>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="What Is a Multi-Entry Visa?">
          <p>A multi-entry visa lets the holder enter and exit Russia multiple times during its validity period without applying separately for each trip — suited to frequent business travelers, business owners with Russian partners, or those with family or property in Russia.</p>
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            'A valid invitation (business, private, or tourist depending on the visa type)',
            'Passport with at least 6 months validity and blank pages for multiple stamps',
            'Visa application form and biometric photo',
            'Travel insurance covering the full validity period',
            'Prior travel history to Russia (if any) strengthens the application',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Что такое многократная виза?">
          <p>Многократная виза позволяет въезжать и выезжать из России несколько раз в течение срока действия без отдельной подачи заявления на каждую поездку.</p>
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Действующее приглашение (деловое, частное или туристическое)',
            'Паспорт со сроком действия не менее 6 месяцев',
            'Анкета на визу и биометрическое фото',
            'Страховка на весь срок действия визы',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
