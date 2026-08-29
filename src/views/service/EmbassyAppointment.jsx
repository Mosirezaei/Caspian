'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  return (
    <ServicePageLayout titleFa="وقت سفارت از ایروان" titleEn="Embassy Appointment from Yerevan" titleRu="Запись в посольство из Еревана"
      subtitleFa="آمریکا، کانادا و سایر سفارتخانه‌ها — هماهنگی وقت و مشاوره مدارک"
      subtitleEn="USA, Canada & other embassies — appointment coordination & document guidance"
      subtitleRu="США, Канада и другие посольства — запись и подготовка документов"
      heroImage="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=75"
      serviceType="visa-russia">

      {isFa && <>
        <InfoBlock title="چرا از ایروان برای وقت سفارت اقدام کنیم؟">
          <p>ایروان یکی از نزدیک‌ترین و در دسترس‌ترین شهرها برای ایرانیانی است که می‌خواهند در سفارتخانه‌های غیر از تهران اقدام کنند. سفارتخانه‌های آمریکا، کانادا، بریتانیا و اکثر کشورهای اروپایی در ایروان نمایندگی فعال دارند و وقت سفارت معمولاً سریع‌تر از شهرهای دیگر گرفته می‌شود.</p>
        </InfoBlock>
        <InfoBlock title="سفارت آمریکا در ایروان">
          <p className="mb-3">سفارت ایالات متحده در ایروان یکی از فعال‌ترین سفارتخانه‌های آمریکا در منطقه است. ایرانیان دارای اقامت ارمنستان یا در حال سفر می‌توانند برای ویزای B1/B2 (توریستی-تجاری) اقدام کنند.</p>
          <CheckList items={[
            'تکمیل فرم DS-160 آنلاین — دقیق و بدون خطا',
            'پرداخت هزینه کنسولی ۱۸۵ دلار',
            'رزرو وقت مصاحبه در سامانه رسمی',
            'حضور در سفارت با مدارک کامل',
            'مدت انتظار برای جواب: ۳ تا ۱۴ روز کاری',
          ]} />
        </InfoBlock>
        <InfoBlock title="سفارت کانادا در ایروان">
          <p className="mb-3">سفارت کانادا در ایروان ویزای توریستی (TRV) و برخی ویزاهای تحصیلی را پردازش می‌کند. فرآیند آنلاین است و در اکثر موارد نیاز به حضور نیست.</p>
          <CheckList items={[
            'ثبت‌نام در سامانه IRCC آنلاین',
            'آپلود مدارک دیجیتال',
            'بیومتریک در مراکز مجاز کانادا (در ایروان موجود است)',
            'مدت پردازش: ۴ تا ۸ هفته',
          ]} />
        </InfoBlock>
        <InfoBlock title="مدارک مشترک برای اکثر سفارتخانه‌ها">
          <CheckList items={[
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار و ۲ صفحه خالی',
            'عکس بیومتریک استاندارد',
            'گواهی بانکی — موجودی کافی برای مدت سفر',
            'رزرو هتل یا دعوتنامه',
            'بیمه مسافرتی',
            'بلیط رفت‌وبرگشت',
            'برای برخی ویزاها: گواهی کار یا تحصیل',
          ]} />
        </InfoBlock>
        <InfoBlock title="خدمات کاسپین برای وقت سفارت">
          <CheckList items={[
            'مشاوره رایگان — کدام سفارت برای وضعیت شما مناسب‌تر است',
            'رزرو هتل با واچر رسمی برای پرونده ویزا',
            'راهنمایی تکمیل فرم‌های آنلاین',
            'بررسی مدارک قبل از ارسال',
            'اطلاع‌رسانی وضعیت پرونده',
          ]} />
        </InfoBlock>
      </>}
      {lang === 'en' && <>
        <InfoBlock title="Why Apply from Yerevan?">
          <p>Yerevan is one of the closest and most accessible cities for Iranians seeking embassy appointments outside Tehran. US, Canadian, British, and most European embassies are active in Yerevan with faster appointment availability.</p>
        </InfoBlock>
        <InfoBlock title="US Embassy in Yerevan">
          <CheckList items={[
            'Complete DS-160 form online',
            'Pay $185 consular fee',
            'Schedule interview at the official portal',
            'Attend with complete documents',
            'Decision: 3–14 business days',
          ]} />
        </InfoBlock>
        <InfoBlock title="Common Documents for Most Embassies">
          <CheckList items={[
            'Valid passport (6+ months validity, 2 blank pages)',
            'Biometric photo',
            'Bank statement with sufficient funds',
            'Hotel reservation or invitation letter',
            'Travel insurance',
            'Round-trip flight ticket',
          ]} />
        </InfoBlock>
      </>}
      {isRu && <>
        <InfoBlock title="Почему из Еревана?">
          <p>Ереван — один из ближайших городов для иранцев, желающих получить визу за пределами Ирана. Посольства США, Канады, Великобритании и Европы в Ереване работают активно с более быстрыми записями.</p>
        </InfoBlock>
        <InfoBlock title="Основные документы">
          <CheckList items={[
            'Действующий паспорт (от 6 мес., 2 чистые страницы)',
            'Биометрическое фото',
            'Выписка из банка',
            'Бронь отеля или приглашение',
            'Медстраховка и авиабилеты',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}
export default Content;
