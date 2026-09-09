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
      subtitleFa="ترانسفر رایگان فرودگاه یا ترمینال برای مشتریان خدمات اقامتی و مسافرتی کاسپین"
      subtitleEn="Complimentary airport or terminal transfer for Caspian accommodation and travel-service clients"
      subtitleRu="Бесплатный трансфер из аэропорта или терминала для клиентов Caspian"
      heroImage="/images/transfer/caspian-airport-taxi.webp"
      serviceType="transfer">

      {isFa && <>
        <InfoBlock title="فرودگاه زوارتنوتس ایروان (EVN)">
          <p>فرودگاه بین‌المللی زوارتنوتس (Zvartnots International Airport) تنها فرودگاه بین‌المللی ایروان و اصلی‌ترین دروازه ورود مسافران هوایی به ارمنستان است. این فرودگاه در فاصله حدود ۱۲ کیلومتری غرب مرکز شهر ایروان قرار دارد و از طریق بزرگراه M5 به مرکز شهر متصل است. زمان طی مسیر تا مرکز شهر با ماشین معمولاً ۱۵ تا ۳۰ دقیقه است (بسته به ترافیک).</p>
        </InfoBlock>

        <InfoBlock title="ترانسفر رایگان برای مشتریان کاسپین">
          <p className="mb-4">کاسپین خدمات «ترانسفر خالی» یا تاکسی مستقل ارائه نمی‌کند. ترانسفر فرودگاهی یا ترمینال به‌صورت رایگان برای مشتریانی انجام می‌شود که از کاسپین هتل، آپارتمان یا خدمات هماهنگ‌شده دیگر دریافت کرده‌اند. زمان و محل ترانسفر هم‌زمان با همان رزرو با شما هماهنگ می‌شود.</p>
          <img src="/images/transfer/caspian-airport-van.webp" alt="ون ترانسفر فرودگاهی کاسپین برای مشتریان هتل و آپارتمان" className="w-full h-48 sm:h-64 object-cover rounded-xl mb-4" loading="lazy" />
          <CheckList items={[
            'ترانسفر رایگان فرودگاه یا ترمینال برای رزروهای واجد شرایط کاسپین',
            'هماهنگی رفت یا برگشت بر اساس ساعت ورود، خروج یا برنامه سفر شما',
            'امکان هماهنگی سواری یا ون با توجه به تعداد مسافران و چمدان‌ها',
            'هماهنگی جزئیات ترانسفر از طریق پشتیبانی همان رزرو',
          ]} />
        </InfoBlock>

        <InfoBlock title="ترانسفر برای مشتریان کاسپین">
          <p className="mb-4">کاسپین ترانسفر خالی یا تاکسی مستقل انجام نمی‌دهد. اگر هتل، آپارتمان یا دیگر خدمات سفر خود را از کاسپین دریافت کنید، ترانسفر فرودگاه یا ترمینال شما به‌صورت رایگان و هماهنگ‌شده انجام می‌شود.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">تاکسی‌های اینترنتی</h3>
          <p className="mb-4">در یاندکس، هزینه با توجه به مسیر، ترافیک شهری و ساعت‌های مختلف روز متغیر است. مبلغ نهایی را پیش از تأیید سفر در خود اپلیکیشن بررسی کنید.</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a href="https://play.google.com/store/apps/details?id=com.yandex.yandexgo" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90">
              دانلود Yandex Go برای اندروید
            </a>
            <a href="https://apps.apple.com/app/yandex-go-taxi-and-delivery/id472650686" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-xl border border-primary/40 px-4 py-3 text-sm font-bold text-foreground transition-colors hover:bg-primary/10">
              دانلود Yandex Go برای آیفون
            </a>
          </div>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">تاکسی‌های فرودگاه</h3>
          <p>تاکسی‌های خروجی فرودگاه نیز نرخ ثابت و یکسانی ندارند و مبلغ پیشنهادی ممکن است از راننده‌ای به راننده دیگر متفاوت باشد. مانند هر فرودگاه دیگری، پیش از حرکت مقصد و قیمت نهایی را با راننده قطعی کنید.</p>
        </InfoBlock>

        <InfoBlock title="ترانسفر در کنار خدمات اقامتی و سفر">
          <p>وقتی هتل، آپارتمان یا خدمات سفر خود را از کاسپین دریافت می‌کنید، نیاز ورود و خروج شما از ابتدا در همان برنامه دیده می‌شود. این هماهنگی به‌ویژه برای خانواده‌ها، گروه‌ها و مسافرانی که چمدان بیشتری دارند، تجربه ورود و خروج منظم‌تری ایجاد می‌کند.</p>
        </InfoBlock>

        <InfoBlock title="نحوه هماهنگی ترانسفر رایگان">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>هتل، آپارتمان یا خدمت موردنیاز خود را با کاسپین هماهنگ کنید</li>
            <li>اطلاعات ورود یا خروج، تعداد مسافران و چمدان‌ها را در همان رزرو اعلام کنید</li>
            <li>تیم کاسپین زمان و محل ترانسفر فرودگاه یا ترمینال را تأیید می‌کند</li>
          </ol>
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Zvartnots International Airport (EVN)">
          <p>Zvartnots International Airport is Yerevan's only international airport, located ~12km west of the city center. Travel time to the center is typically 15–30 minutes via the M5 highway.</p>
        </InfoBlock>
        <InfoBlock title="Complimentary Transfer for Caspian Clients">
          <p className="mb-4">Caspian does not provide stand-alone taxi or transfer bookings. Airport or terminal transfer is complimentary for eligible clients who book accommodation or coordinated travel services through Caspian.</p>
          <CheckList items={[
            'Complimentary airport or terminal transfer with eligible Caspian bookings',
            'Arrival or departure timing coordinated with your travel plan',
            'Sedan or van arranged according to passenger and luggage needs',
          ]} />
        </InfoBlock>
        <InfoBlock title="If You Need a Stand-Alone Transfer">
          <p className="mb-2">Use official airport taxis or ride-hailing apps directly; those services are booked and paid for independently.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Online Taxi (Yandex Go / GG)</h3>
          <p className="mb-2">Availability, pricing and payment methods depend on the live app conditions.</p>
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">Official Airport Taxi</h3>
          <p>Available near the terminal exit; confirm your destination and fare before departure.</p>
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Аэропорт Звартноц (EVN)">
          <p>Международный аэропорт Звартноц — единственный международный аэропорт Еревана, расположенный в ~12 км к западу от центра города. Время в пути до центра — 15–30 минут по шоссе M5.</p>
        </InfoBlock>
        <InfoBlock title="Бесплатный трансфер для клиентов Caspian">
          <p className="mb-4">Caspian не предоставляет отдельный заказ такси или трансфера. Трансфер из аэропорта или терминала предоставляется бесплатно клиентам с подходящим бронированием проживания или услуг Caspian.</p>
          <CheckList items={[
            'Бесплатный трансфер при подходящем бронировании Caspian',
            'Согласование времени прибытия или выезда',
            'Легковой автомобиль или минивэн по числу пассажиров и багажу',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
