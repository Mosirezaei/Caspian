'use client';

import React from 'react';
import Link from 'next/link';
import { Clock, Backpack, Phone, MessageCircle, MapPin } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices';
import RelatedContent from '@/components/shared/RelatedContent';
import TourBookingWidget from '@/components/shared/TourBookingWidget';

export default function KhorVirapTour() {
  return (
    <div dir="rtl" className="min-h-screen bg-background">
      <GlobalNavbar />
      <main className="container mx-auto px-4 py-8 lg:py-12">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 min-h-[360px] flex items-end bg-black/40">
          <img src="https://images.unsplash.com/photo-1677864109159-34eb97228c65?w=1600&q=85&auto=format&fit=crop" alt="صومعه خور ویراپ و کوه آرارات" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="relative z-10 p-6 md:p-10 text-white max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/90 text-black px-4 py-1.5 text-sm font-black mb-4">تور یک‌روزه ارمنستان</span>
            <h1 className="text-3xl md:text-5xl font-black leading-tight">تور یک‌روزه صومعه تاریخی خور ویراپ و چشم‌انداز باشکوه کوه آرارات</h1>
            <p className="mt-4 text-lg md:text-xl text-white/85 font-bold">صومعه تاریخی با چشم‌انداز مستقیم کوه آرارات</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-6 mt-8">
          <article className="space-y-6">
            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8">
              <p className="text-xl font-black leading-9">🏔️ سفر به قلب معنویت و تاریخ کهن ارمنستان؛ جایی که یکی از باشکوه‌ترین قاب‌های کوه آرارات پیش چشمان شما نقش می‌بندد! 😍📜</p>
              <h2 className="text-2xl font-black mt-8 mb-4">در این تور چه می‌بینیم؟</h2>
              <div className="space-y-4 text-foreground/80 leading-8">
                <p>⛪ <strong>صومعه تاریخی خور ویراپ:</strong> صومعه‌ای تاریخی بر فراز تپه‌های دشت آرارات که با تاریخ مسیحیت ارمنستان و داستان گریگور روشنگر پیوندی عمیق دارد.</p>
                <p>🕳️ <strong>چاه سیاه‌چال گریگور روشنگر:</strong> بازدید از محل تاریخی حبس گریگور روشنگر و تجربه فرود به فضای زیرزمینی صومعه.</p>
                <p>🏔️ <strong>چشم‌انداز کوه آرارات:</strong> منظره‌ای باز و تماشایی از آرارات که یکی از جذاب‌ترین سوژه‌های عکاسی در اطراف ایروان است.</p>
                <p>🍇 <strong>باغات انگور و دشت آرارات:</strong> مسیر و چشم‌اندازهای سرسبز دشت حاصلخیز آرارات، در کنار روستاها و باغ‌های منطقه.</p>
              </div>

              <h2 className="text-2xl font-black mt-8 mb-4">خدمات تور</h2>
              <ul className="space-y-3 text-foreground/80 leading-8">
                <li>🚐 ترانسفر رفت‌وبرگشت توریستی با خودرو راحت و مجهز به تهویه مطبوع</li>
                <li>🗣️ راهنمای باتجربه با توضیحات تاریخی، مذهبی و جغرافیایی</li>
                <li>🍱 ناهار کامل ارمنی در رستوران سنتی محلی</li>
                <li>☕ آب معدنی، پشتیبانی و بیمه سفر</li>
              </ul>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5"><Clock className="w-5 h-5 text-primary mb-2" /><strong>حرکت:</strong> ۰۹:۳۰ از ایروان</div>
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5"><MapPin className="w-5 h-5 text-primary mb-2" /><strong>بازگشت:</strong> حدود ساعت ۱۵:۳۰</div>
              </div>

              <div className="mt-8 rounded-2xl bg-primary/10 border border-primary/20 p-5">
                <h3 className="font-black text-lg mb-3">🎒 پیشنهاد برای سفر</h3>
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/75">
                  <li>👟 کفش راحت و مناسب پیاده‌روی</li><li>🧥 پوشش مناسب برای ورود به مکان مذهبی</li>
                  <li>🕶️ عینک آفتابی و کلاه</li><li>📱 تلفن یا دوربین با شارژ کافی</li>
                </ul>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <TourBookingWidget tourName="تور یک‌روزه خور ویراپ" adultPrice={25000} childPrice={19000} currency="درام" whatsappNumber="37433149327" />
                <a href="https://wa.me/37433149327" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3.5 font-bold hover:bg-white/5"><MessageCircle className="w-5 h-5" /> مشاوره در واتساپ</a>
              </div>
            </section>

            <section className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 prose prose-invert max-w-none">
              <h2>خور ویراپ؛ روایت تاریخ، ایمان و آرارات</h2>
              <p>خور ویراپ به معنای «گودال عمیق» یا «سیاه‌چال عمیق» است و نام آن با یکی از مهم‌ترین روایت‌های تاریخ مسیحیت ارمنستان گره خورده است. این صومعه در دشت آرارات قرار دارد و چشم‌انداز کوه آرارات، فضای تاریخی آن را برای گردشگران بسیار منحصربه‌فرد کرده است.</p>
              <h3>۱. پیشینه تاریخی و مسیحی‌شدن ارمنستان</h3>
              <p>بر اساس روایت سنتی، تیرِدات سوم، پادشاه ارمنستان، گریگور روشنگر را به دلیل ایمان مسیحی‌اش در سیاه‌چال خور ویراپ زندانی کرد. در روایت‌های تاریخی و مذهبی، گریگور سال‌ها در این زندان زیرزمینی محبوس بود تا اینکه پس از بیماری پادشاه، برای درمان او فراخوانده شد.</p>
              <p>گریگور توانست پادشاه را درمان کند و پس از آن روند مسیحی‌شدن ارمنستان آغاز شد. سال ۳۰۱ میلادی معمولاً در سنت تاریخی ارمنی به عنوان تاریخ رسمی پذیرش مسیحیت در ارمنستان شناخته می‌شود؛ از همین رو خور ویراپ یکی از مهم‌ترین مکان‌های زیارتی و تاریخی کشور است.</p>
              <h3>۲. معماری صومعه و سیاه‌چال</h3>
              <p>ساختمان‌های خور ویراپ در دوره‌های مختلف بازسازی شده‌اند و مجموعه امروزی نتیجه چندین مرحله ساخت‌وساز و مرمت است. کلیسای اصلی با نام سورب آستواتساتسین در سده هفدهم میلادی ساخته شد و کلیسای کوچک‌تر سنت گریگور نیز در مجموعه قرار دارد.</p>
              <p>یکی از جذاب‌ترین بخش‌های بازدید، دسترسی عمودی به سیاه‌چال تاریخی است؛ فضایی زیرزمینی که روایت حبس گریگور روشنگر با آن پیوند خورده و تجربه‌ای متفاوت از یک بازدید معمول گردشگری ایجاد می‌کند.</p>
              <h3>۳. قاب مشهور کوه آرارات</h3>
              <p>یکی از دلایل اصلی محبوبیت خور ویراپ، چشم‌انداز گسترده آن به آرارات است. در روزهای صاف می‌توان نمای باشکوه ماسیس، یعنی آرارات بزرگ، و سیس، آرارات کوچک، را در افق دید. صبح‌ها معمولاً برای عکاسی و دید بهتر شرایط مناسبی دارند، هرچند شفافیت منظره به آب‌وهوا وابسته است.</p>
              <h3>۴. آرتاشات؛ پایتخت باستانی در نزدیکی خور ویراپ</h3>
              <p>در اطراف خور ویراپ بقایای آرتاشات، یکی از پایتخت‌های مهم ارمنستان باستان، قرار دارد. این شهر در سده دوم پیش از میلاد در دوره آرتاشس یکم شکل گرفت و در تاریخ ارمنستان جایگاه مهمی داشت. قرار گرفتن این محوطه تاریخی در نزدیکی خور ویراپ، این سفر یک‌روزه را برای علاقه‌مندان به تاریخ و تمدن جذاب‌تر می‌کند.</p>
              <h3>جمع‌بندی</h3>
              <p>خور ویراپ ترکیبی از تاریخ، معنویت، معماری و طبیعت است؛ مقصدی که در یک سفر کوتاه از ایروان می‌توان در آن با بخشی از تاریخ مسیحیت ارمنستان آشنا شد، فضای سیاه‌چال تاریخی را دید و در هوای صاف از چشم‌انداز کوه آرارات لذت برد.</p>
            </section>
          </article>

          <aside className="lg:sticky lg:top-24 h-fit space-y-5">
            <PageSidebar tags={['خور ویراپ', 'کوه آرارات', 'تور یک‌روزه', 'تاریخ ارمنستان', 'جاذبه‌های ارمنستان']} />
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <Phone className="w-5 h-5 text-primary mb-2" />
              <p className="font-bold mb-3">برای هماهنگی و مشاوره تور</p>
              <a href="tel:+37433149327" className="font-black text-primary">+374 33 149327</a>
            </div>
          </aside>
        </div>

        <div className="mt-10"><RelatedServices /></div>
        <div className="mt-10"><RelatedContent /></div>
      </main>
    </div>
  );
}
