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
      titleFa="ترانسفر فرودگاهی ایروان" titleEn="Yerevan Airport Transfer" titleRu="Трансфер из аэропорта Еревана"
      subtitleFa="سرویس VIP از فرودگاه زوارتنوتس (EVN) مستقیم تا مقصد — ۲۴ ساعته"
      subtitleEn="VIP transfer from Zvartnots Airport (EVN) direct to destination — 24/7"
      subtitleRu="VIP-трансфер из аэропорта Звартноц (EVN) до места назначения — 24/7"
      heroImage="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&q=75"
      serviceType="transfer">

      {isFa && <>
        <InfoBlock title="فرودگاه زوارتنوتس ایروان (EVN)">
          <p>فرودگاه بین‌المللی زوارتنوتس (Zvartnots International Airport) تنها فرودگاه بین‌المللی ایروان و اصلی‌ترین دروازه ورود مسافران هوایی به ارمنستان است. این فرودگاه در فاصله حدود ۱۲ کیلومتری غرب مرکز شهر ایروان قرار دارد و از طریق بزرگراه M5 به مرکز شهر متصل است. زمان طی مسیر تا مرکز شهر با ماشین معمولاً ۱۵ تا ۳۰ دقیقه است (بسته به ترافیک).</p>
        </InfoBlock>

        <InfoBlock title="خدمات ترانسفر کاسپین گروپ">
          <CheckList items={[
            'ترانسفر VIP از فرودگاه زوارتنوتس مستقیم به هتل، آپارتمان یا هر آدرس در ایروان',
            'ترانسفر برگشت از ایروان به فرودگاه — با زمان‌بندی دقیق بر اساس ساعت پرواز',
            'انواع خودرو: سواری معمولی، ون، مینی‌بوس برای گروه‌ها',
            'رانندگان فارسی‌زبان یا آشنا به زبان فارسی',
            'تابلو استقبال با نام مسافر در ترمینال خروج',
            'سرویس ۲۴ ساعته — حتی برای پروازهای ساعت‌های اولیه بامداد',
            'رزرو واتساپ — فقط پرواز و تعداد مسافر اعلام کنید',
          ]} />
        </InfoBlock>

        <InfoBlock title="گزینه‌های دیگر از فرودگاه به مرکز ایروان">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">تاکسی آنلاین (Yandex Go / GG Taxi)</h3>
          <p className="mb-3">ارزان‌ترین گزینه — معمولاً ۵٬۰۰۰ تا ۷٬۰۰۰ درام (~۱۳ تا ۱۸ دلار). نیاز به نصب اپلیکیشن و کارت بانکی محلی یا پرداخت نقد دارد. در ساعات شلوغ و شب ممکن است تأخیر داشته باشد.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">اتوبوس فرودگاهی</h3>
          <p className="mb-3">خط اتوبوس بین فرودگاه و ایستگاه مترو میدان جمهوری، ساعات ۷ تا ۲۳، هر ۳۰ دقیقه یک‌بار. قیمت بسیار پایین (۱۵۰ درام). مناسب مسافران تنها با چمدان کم — ولی شب‌های دیر یا برای خانواده‌ها توصیه نمی‌شود.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">تاکسی رسمی فرودگاه</h3>
          <p>جلوی در ترمینال خروج. گران‌تر از تاکسی آنلاین ولی بدون نیاز به اپ. معمولاً ۶٬۰۰۰ تا ۱۰٬۰۰۰ درام.</p>
        </InfoBlock>

        <InfoBlock title="چرا ترانسفر کاسپین به‌صرفه‌تر است؟">
          <p>بسیاری از مسافران فکر می‌کنند ترانسفر از طریق آژانس گران‌تر از تاکسی آنلاین است — ولی وقتی هزینه کل سفر (هتل، آپارتمان، ویزا) از طریق کاسپین رزرو می‌شود، ترانسفر فرودگاهی معمولاً با قیمت مناسب یا رایگان تامین می‌شود. همچنین برای گروه‌های خانوادگی با چند چمدان، ون کاسپین ارزان‌تر از چند تاکسی جداگانه تمام می‌شود.</p>
        </InfoBlock>

        <InfoBlock title="نحوه رزرو ترانسفر">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>شماره پرواز و ساعت ورود را از طریق واتساپ ارسال کنید</li>
            <li>تعداد مسافران و مقصد در ایروان را اعلام کنید</li>
            <li>نوع خودرو (سواری، ون) و قیمت تأیید می‌شود</li>
            <li>راننده در ساعت مقرر با تابلو نام شما در ترمینال خروج منتظر است</li>
          </ol>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Zvartnots International Airport (EVN)">
          <p>Zvartnots International Airport is Yerevan's only international airport, located ~12km west of the city center. Travel time to the center is typically 15–30 minutes via the M5 highway.</p>
        </InfoBlock>
        <InfoBlock title="Caspian Transfer Services">
          <CheckList items={[
            'VIP transfer from Zvartnots Airport directly to your hotel, apartment, or any Yerevan address',
            'Return transfer from Yerevan to the airport — timed to your flight',
            'Vehicle options: sedan, van, minibus for groups',
            'Persian-speaking drivers',
            'Name board greeting at arrival terminal',
            '24/7 service — including early morning flights',
            'WhatsApp booking — just send your flight number and passenger count',
          ]} />
        </InfoBlock>
        <InfoBlock title="Other Airport-to-City Options">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Online Taxi (Yandex Go / GG)</h3>
          <p className="mb-2">Cheapest option: 5,000–7,000 AMD (~$13–18). Requires app and local payment.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Airport Bus</h3>
          <p>Route to Republic Square Metro, 07:00–23:00, every 30 minutes. Very cheap (150 AMD). Fine for solo travelers with little luggage.</p>
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Аэропорт Звартноц (EVN)">
          <p>Международный аэропорт Звартноц — единственный международный аэропорт Еревана, расположенный в ~12 км к западу от центра города. Время в пути до центра — 15–30 минут по шоссе M5.</p>
        </InfoBlock>
        <InfoBlock title="Услуги трансфера Caspian">
          <CheckList items={[
            'VIP-трансфер из аэропорта Звартноц до вашего отеля или квартиры',
            'Обратный трансфер в аэропорт по времени вылета',
            'Типы транспорта: легковые, минивэн, микроавтобус для групп',
            'Русскоговорящие водители',
            'Встреча с табличкой в зале прилёта',
            'Круглосуточно — включая ранние рейсы',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
