'use client';
import { useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';
import SeoFooterLinks from '@/components/shared/SeoFooterLinks.jsx';
import RelatedServices from '@/components/shared/RelatedServices.jsx';

export default function ArmeniaVisaDocuments() {
  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-3xl mx-auto px-4 py-12 sm:py-20">

        <div className="mb-10">
          <span className="text-xs text-primary/70 font-semibold bg-primary/8 px-3 py-1 rounded-full">
            راهنمای ویزا
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-foreground mt-4 leading-tight">
            مدارک ویزای ارمنستان — راهنمای کامل ۱۴۰۴
          </h1>
          <p className="text-foreground/60 mt-3 text-lg">
            همه مدارک لازم برای دریافت ویزای توریستی، تحصیلی و اقامتی ارمنستان
          </p>
          <p className="text-xs text-foreground/40 mt-2">آپدیت: شهریور ۱۴۰۴</p>
        </div>

        <div className="p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 mb-8 text-sm text-foreground/70 leading-relaxed">
          <span className="font-bold text-emerald-400">خبر خوب:</span> ایرانیان برای ورود به ارمنستان نیاز به ویزای از پیش دریافت‌شده ندارند. با پاسپورت ایرانی می‌توانید بدون ویزا وارد ارمنستان شده و تا ۱۸۰ روز در سال اقامت کنید.
        </div>

        {/* Section 1 */}
        <article className="border-r-2 border-primary/30 pr-5 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">✈️ ورود بدون ویزا برای ایرانیان</h2>
          <div className="text-foreground/70 leading-8 text-sm sm:text-base">
            شهروندان ایرانی می‌توانند بدون نیاز به ویزای قبلی وارد ارمنستان شوند. این امتیاز بر اساس توافقنامه دوجانبه بین ایران و ارمنستان است.

            مدارک لازم برای ورود:
            • پاسپورت معتبر با حداقل ۶ ماه اعتبار
            • بلیط برگشت یا اثبات خروج از کشور
            • رزرو هتل یا آدرس محل اقامت
            • داشتن ارز کافی برای دوره اقامت (توصیه‌شده ۵۰ دلار به ازای هر روز)
          </div>
        </article>

        {/* Section 2 */}
        <article className="border-r-2 border-primary/30 pr-5 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">📋 مدارک اقامت موقت (بیش از ۱۸۰ روز)</h2>
          <div className="text-foreground/70 leading-8 text-sm sm:text-base">
            اگر قصد اقامت بیش از ۱۸۰ روز در سال دارید، باید برای مجوز اقامت موقت اقدام کنید.

            مدارک لازم:
            • پاسپورت معتبر
            • عکس ۳×۴ رنگی (۲ قطعه)
            • قرارداد اجاره مسکن یا سند مالکیت
            • گواهی عدم سوء‌پیشینه از ایران (ترجمه‌شده و تأییدشده)
            • گواهی سلامت (از بیمارستان دولتی ارمنستان)
            • تکمیل فرم درخواست در اداره مهاجرت

            مدت اعتبار: ۱ تا ۳ سال (قابل تمدید)
          </div>
        </article>

        {/* Section 3 */}
        <article className="border-r-2 border-primary/30 pr-5 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">🎓 مدارک ویزای تحصیلی</h2>
          <div className="text-foreground/70 leading-8 text-sm sm:text-base">
            برای تحصیل در دانشگاه‌های ارمنستان:

            مدارک لازم:
            • نامه پذیرش از دانشگاه ارمنی
            • ریزنمرات دیپلم یا مدرک قبلی (ترجمه‌شده)
            • گواهی توانایی مالی یا بورسیه
            • گذرنامه معتبر
            • عکس
            • فرم درخواست ویزای تحصیلی

            هزینه تحصیل در دانشگاه‌های دولتی ارمنستان سالانه ۱۵۰۰ تا ۴۰۰۰ دلار است که برای دانشجویان ایرانی بسیار مقرون‌به‌صرفه است.
          </div>
        </article>

        {/* Section 4 */}
        <article className="border-r-2 border-primary/30 pr-5 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">🏢 اقامت از طریق ثبت شرکت</h2>
          <div className="text-foreground/70 leading-8 text-sm sm:text-base">
            یکی از روش‌های محبوب اقامت در ارمنستان، ثبت شرکت یا کسب‌وکار است.

            مزایا:
            • اقامت قانونی برای صاحب شرکت و خانواده
            • امکان افتتاح حساب بانکی
            • معافیت‌های مالیاتی جذاب (مالیات شرکت ۱۸٪ — یکی از پایین‌ترین در منطقه)
            • امکان صادرات به اروپا

            مدارک ثبت شرکت:
            • پاسپورت معتبر
            • آدرس دفتر یا شعبه در ارمنستان
            • نام و موضوع شرکت
            • سرمایه اولیه (حداقل بدون محدودیت)

            کاسپین گروپ تمام مراحل ثبت شرکت در ارمنستان را در کمتر از ۳ روز انجام می‌دهد.
          </div>
        </article>

        {/* Section 5 */}
        <article className="border-r-2 border-primary/30 pr-5 mb-8">
          <h2 className="text-xl font-bold text-foreground mb-3">💡 نکات مهم</h2>
          <div className="text-foreground/70 leading-8 text-sm sm:text-base">
            • مدارک ایرانی باید به ارمنی یا روسی ترجمه رسمی شوند
            • برای ترجمه رسمی می‌توانید از دفاتر رسمی در ایروان استفاده کنید
            • اداره مهاجرت ارمنستان (Migration Service) در خیابان Paronyan قرار دارد
            • زمان پردازش مجوز اقامت: ۱۰ تا ۳۰ روز کاری
            • هزینه مجوز اقامت موقت: حدود ۵۰ هزار درام (حدود ۱۲۵ دلار)

            توجه: قوانین مهاجرتی ممکن است تغییر کنند. برای اطلاعات دقیق و به‌روز با مشاوران کاسپین گروپ تماس بگیرید.
          </div>
        </article>

        {/* CTA */}
        <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 text-center">
          <h3 className="text-lg font-bold text-foreground mb-2">
            نیاز به مشاوره مهاجرت دارید؟
          </h3>
          <p className="text-sm text-foreground/60 mb-4">
            تیم کاسپین گروپ با بیش از ۵ سال تجربه در ارمنستان، تمام مراحل ویزا، اقامت و ثبت شرکت را برای شما انجام می‌دهد.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition text-sm">
              مشاوره رایگان
            </a>
            <a href="/residency/armenia" className="inline-flex items-center gap-2 border border-primary/30 text-primary font-bold px-6 py-3 rounded-xl hover:bg-primary/10 transition text-sm">
              اقامت ارمنستان
            </a>
          </div>
        </div>

        <RelatedServices currentPath="/blog/armenia-visa-documents" />
        <SeoFooterLinks />
      </main>
    </div>
  );
}
