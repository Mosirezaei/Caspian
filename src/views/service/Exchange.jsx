'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

const API_KEY = process.env.NEXT_PUBLIC_EXCHANGE_RATE_API_KEY;

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  return (
    <ServicePageLayout
      titleFa="صرافی و رمزارز در ایروان" titleEn="Currency & Crypto Exchange in Yerevan" titleRu="Обмен валюты и криптовалюты в Ереване"
      subtitleFa="تبدیل ریال، دلار، یورو، درام و USDT — بدون واسطه، شفاف و امن"
      subtitleEn="Rial, USD, EUR, AMD & USDT exchange — direct, transparent, secure"
      subtitleRu="Риал, USD, EUR, AMD и USDT — прямо, прозрачно, безопасно"
      heroImage="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=75"
      serviceType="exchange">

      {isFa && <>
        <InfoBlock title="چرا تبدیل ارز در ایروان؟">
          <p>ایروان به یکی از مراکز اصلی تبادل مالی ایرانیان در خارج از کشور تبدیل شده است. بدون محدودیت‌های بانکی داخل ایران، بدون نیاز به حساب بانکی خارجی، و با نرخ‌هایی که معمولاً از حواله‌های داخل ایران مناسب‌تر هستند — صرافی‌های ایرانی در ایروان راه‌حلی عملی برای انتقال پول و تبدیل ارز فراهم می‌کنند.</p>
        </InfoBlock>

        <InfoBlock title="خدمات صرافی کاسپین در ایروان">
          <CheckList items={[
            'تبدیل ریال ایران به درام ارمنستان (AMD) — بدون نیاز به خروج نقد از ایران',
            'خرید و فروش دلار آمریکا (USD) و یورو (EUR) در ایروان',
            'خرید و فروش رمزارز USDT (TRC-20 و ERC-20)',
            'انتقال وجه از ایران به ارمنستان و بالعکس (حواله)',
            'تامین هزینه‌های زندگی، اجاره، شهریه دانشگاه و ثبت شرکت از طریق کاسپین',
            'نرخ اعلام‌شده پیش از انجام معامله — بدون کارمزد مخفی',
          ]} />
        </InfoBlock>

        <InfoBlock title="روش‌های انتقال پول از ایران به ارمنستان">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">حواله ریالی (ساده‌ترین روش)</h3>
          <p className="mb-3">مبلغ را به حساب داخل ایران واریز می‌کنید و معادل آن به درام یا دلار در ایروان دریافت می‌شود. این روش نیاز به کارت بانکی بین‌المللی ندارد و برای اکثر ایرانیان قابل استفاده است. زمان انتقال معمولاً همان روز یا روز کاری بعد است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">رمزارز USDT</h3>
          <p className="mb-3">برای کسانی که کیف پول رمزارز دارند، ارسال USDT به آدرس کاسپین و دریافت معادل آن به درام یا دلار نقد در ایروان امکان‌پذیر است. این روش سریع‌ترین و بی‌واسطه‌ترین گزینه است.</p>

          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">دلار نقد</h3>
          <p>اگر دلار نقد دارید، می‌توانید آن را در ایروان به درام، ریال یا سایر ارزها تبدیل کنید. نرخ تبدیل نقد معمولاً از حواله بهتر است.</p>
        </InfoBlock>

        <InfoBlock title="درام ارمنستان — آنچه باید بدانید">
          <p className="mb-3">واحد پول رسمی ارمنستان «درام» (AMD) است. زندگی روزمره در ایروان بدون درام نقد تقریباً غیرممکن است — از سوپرمارکت و تاکسی تا بازار سنتی. قیمت‌ها معمولاً به درام اعلام می‌شوند.</p>
          <CheckList items={[
            'هزینه اتوبوس شهری: ۱۵۰ درام (~۰.۳۸ دلار)',
            'هزینه مترو: ۱۵۰ درام',
            'تاکسی از فرودگاه تا مرکز شهر: ۵٬۰۰۰ تا ۷٬۰۰۰ درام (~۱۳ تا ۱۸ دلار)',
            'نهار متوسط در رستوران: ۳٬۰۰۰ تا ۸٬۰۰۰ درام',
            'ATM ها در سراسر ایروان در دسترس هستند ولی کارت ایرانی نمی‌پذیرند',
          ]} />
        </InfoBlock>

        <InfoBlock title="چرا از کاسپین؟">
          <CheckList items={[
            'نرخ روز پیش از معامله اعلام می‌شود — بدون کارمزد مخفی',
            'امکان تامین درام نقد، دلار و یورو در ایروان',
            'تجربه چندساله در خدمات مالی برای ایرانیان در ارمنستان',
            'پشتیبانی واتساپ فارسی ۷ روز هفته',
            'برای مبالغ بالا، امکان مذاکره نرخ ویژه وجود دارد',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Currency Exchange & Money Transfer in Yerevan">
          <p>Yerevan has become a major financial hub for Iranians abroad. No international banking restrictions, no need for foreign cards — Iranian-friendly exchange offices in Yerevan offer practical solutions for money transfers and currency exchange at competitive rates.</p>
        </InfoBlock>
        <InfoBlock title="Caspian Exchange Services in Yerevan">
          <CheckList items={[
            'Iranian Rial → Armenian Dram (AMD) — no need to carry cash out of Iran',
            'Buy/sell USD and EUR in Yerevan',
            'Buy/sell USDT (TRC-20 and ERC-20)',
            'Money transfer from Iran to Armenia and vice versa',
            'Rate quoted before transaction — no hidden fees',
          ]} />
        </InfoBlock>
        <InfoBlock title="Armenian Dram — What You Need to Know">
          <CheckList items={[
            'City bus/metro: 150 AMD (~$0.38)',
            'Airport taxi to city center: 5,000–7,000 AMD (~$13–18)',
            'Average restaurant lunch: 3,000–8,000 AMD',
            'ATMs available everywhere but do not accept Iranian cards',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Обмен валюты и переводы в Ереване">
          <p>Ереван стал крупным финансовым центром для иранцев. Без банковских ограничений, без международных карт — иранские обменники в Ереване предлагают практичные решения для переводов и обмена валюты.</p>
        </InfoBlock>
        <InfoBlock title="Услуги Caspian по обмену валюты">
          <CheckList items={[
            'Иранский риал → армянский драм (AMD)',
            'Покупка/продажа USD и EUR в Ереване',
            'Покупка/продажа USDT (TRC-20 и ERC-20)',
            'Денежные переводы Иран ↔ Армения',
            'Курс объявляется до сделки — без скрытых комиссий',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
