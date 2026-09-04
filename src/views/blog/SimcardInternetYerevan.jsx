'use client';
import { Smartphone, Wifi, Download, CreditCard, MapPin, MessageCircle } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import PageSidebar from '@/components/shared/PageSidebar';
import RelatedServices from '@/components/shared/RelatedServices.jsx';

export default function SimcardInternetYerevan() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
        <section className="mb-8">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">زندگی در ایروان</span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">سیم\u200cکارت، اینترنت و اپلیکیشن\u200cهای ضروری ایروان</h1>
          <p className="text-foreground/60 mt-3 text-lg">همه چیز درباره\u200cی خرید سیم\u200cکارت، اینترنت خانگی و اپ\u200cهایی که بدونشون نمی\u200cتونید تو ایروان زندگی کنید</p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۵</p>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5" /> اپراتورهای موبایل ارمنستان</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>ارمنستان سه اپراتور اصلی داره. سیم\u200cکارت رو با پاسپورت از هر فروشگاه رسمی می\u200cتونید بخرید — فرودگاه زواتنوتس هم غرفه داره.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
              <h3 className="font-bold text-foreground mb-1">Viva-MTS (ویوا)</h3>
              <p className="text-xs text-foreground/60 mb-2">بزرگ\u200cترین اپراتور — بهترین پوشش شهری و جاده\u200cای</p>
              <div className="text-primary font-bold text-sm">~$۵–$۱۵/ماه</div>
              <p className="text-[10px] text-foreground/40 mt-1">بسته\u200cی ۱۰–۳۰ گیگ دیتا + تماس نامحدود</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20">
              <h3 className="font-bold text-foreground mb-1">Team Telecom (تیم)</h3>
              <p className="text-xs text-foreground/60 mb-2">قدیمی\u200cترین اپراتور — پوشش روستایی خوب</p>
              <div className="text-primary font-bold text-sm">~$۴–$۱۲/ماه</div>
              <p className="text-[10px] text-foreground/40 mt-1">ارزان\u200cترین بسته\u200cهای دیتا</p>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/20">
              <h3 className="font-bold text-foreground mb-1">Ucom (یوکام)</h3>
              <p className="text-xs text-foreground/60 mb-2">جدیدترین — سریع\u200cترین 4G/LTE ایروان</p>
              <div className="text-primary font-bold text-sm">~$۶–$۲۰/ماه</div>
              <p className="text-[10px] text-foreground/40 mt-1">بسته\u200cهای ترکیبی موبایل+خانگی</p>
            </div>
          </div>
          <p className="text-xs text-foreground/50 mt-3">نکته: سیم\u200cکارت پیش\u200cپرداخت (prepaid) رو از فرودگاه بخرید — فقط پاسپورت لازمه. بعداً از اپلیکیشن اپراتور شارژ کنید.</p>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Wifi className="w-5 h-5" /> اینترنت خانگی</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-3">
            <p>اینترنت خانگی تو ایروان فیبر نوری (FTTH) داره و سرعتش عالیه — معمولاً ۵۰ تا ۲۰۰ مگابیت. قیمت ماهانه:</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۱۰–$۱۵</div>
                <div className="text-[10px] text-foreground/50 mt-1">۲۰–۵۰ مگابیت</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۱۵–$۲۵</div>
                <div className="text-[10px] text-foreground/50 mt-1">۱۰۰ مگابیت</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="text-primary font-bold">$۲۵–$۳۵</div>
                <div className="text-[10px] text-foreground/50 mt-1">۲۰۰+ مگابیت</div>
              </div>
            </div>
            <p>Ucom و Rostelecom (Team) اصلی\u200cترین ارائه\u200cدهنده\u200cهای فیبره. نصب معمولاً ۱ تا ۳ روز طول می\u200cکشه و هزینه\u200cی نصب اولیه حدود $۱۰–$۳۰ داره.</p>
            <p>نکته\u200cی مهم: VPN تو ارمنستان لازم نیست — اینستاگرام، یوتیوب، تلگرام، واتساپ و همه\u200cی سرویس\u200cها بدون فیلتر کار می\u200cکنن.</p>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-xl font-black text-primary mb-4 flex items-center gap-2"><Download className="w-5 h-5" /> اپلیکیشن\u200cهای ضروری زندگی در ایروان</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">\ud83d\ude95 GG Taxi / Yandex Go</h4>
              <p className="text-xs text-foreground/60">تاکسی آنلاین — GG محلیه و ارزان\u200cتره، Yandex هم محبوبه. کرایه\u200cی شهری ۱,۰۰۰ تا ۳,۰۰۰ درام (~$۲.۵ تا $۸).</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">\ud83d\udcb3 IDram / Telcell</h4>
              <p className="text-xs text-foreground/60">کیف پول دیجیتال — پرداخت قبوض، شارژ موبایل، انتقال پول. IDram محبوب\u200cترینه و با شماره موبایل ارمنی فعال می\u200cشه.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">\ud83d\udccd 2GIS</h4>
              <p className="text-xs text-foreground/60">نقشه\u200cی آفلاین ایروان — آدرس\u200cها، شماره تلفن مغازه\u200cها، مسیریابی. از Google Maps دقیق\u200cتره برای ایروان.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">\ud83d\uded2 Menu.am / Glovo</h4>
              <p className="text-xs text-foreground/60">سفارش غذا آنلاین — Menu.am محلیه و رستوران\u200cهای بیشتری داره، Glovo سوپرمارکت هم داره.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">\ud83c\udfe6 اپ بانکی</h4>
              <p className="text-xs text-foreground/60">بعد از افتتاح حساب، اپ بانک رو نصب کنید (Ameria, Ardshin, Converse). انتقال فوری و رایگان بین حساب\u200cها.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-bold text-foreground text-sm mb-1">\ud83d\udce6 Wildberries / Ozon</h4>
              <p className="text-xs text-foreground/60">خرید آنلاین — هر دو به ارمنستان ارسال دارن. از لباس تا لوازم خونه، ۳ تا ۱۰ روز تحویل.</p>
            </div>
          </div>
        </section>

        <section className="glass-panel rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-black text-primary mb-3 flex items-center gap-2"><CreditCard className="w-5 h-5" /> پرداخت بدون نقد</h2>
          <div className="text-sm text-foreground/70 leading-7 space-y-2">
            <p>ایروان تقریباً کاملاً cashless شده — از تاکسی تا نانوایی، همه\u200cجا کارت می\u200cپذیرن. اما:</p>
            <p>\u2714 کارت ایرانی کار نمی\u200cکنه — باید کارت بانکی ارمنی بگیرید (Visa/Mastercard ظرف ۱ ساعت صادر می\u200cشه)</p>
            <p>\u2714 Apple Pay و Google Pay با کارت ارمنی کار می\u200cکنه</p>
            <p>\u2714 IDram برای پرداخت\u200cهای کوچک (پارکینگ، اتوبوس، خرید از بقالی) عالیه</p>
            <p>\u2714 دلار نقد برای روزهای اول لازمه — صرافی\u200cها تو خیابان مسکوویان و ساریان زیادن</p>
          </div>
        </section>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center mb-6">
          <h3 className="text-lg font-bold text-foreground mb-2">کمک برای شروع زندگی در ایروان</h3>
          <a href="https://wa.me/37433149327" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">مشاوره رایگان</a>
        </div>
        <RelatedServices currentPath="/blog/simcard-internet-apps-yerevan" />
        </div>
          <PageSidebar tags={['yerevan', 'life', 'cost-of-living', 'armenia']} currentPath="/blog/simcard-internet-apps-yerevan" />
        </div>
      </main>
    </div>
  );
}
