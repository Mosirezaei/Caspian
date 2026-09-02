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
      titleFa="اقامت ارمنستان از طریق سرمایه‌گذاری" titleEn="Armenia Residency via Investment" titleRu="ВНЖ Армении через инвестиции"
      subtitleFa="مسیر اقامت برای کارآفرینان و سرمایه‌گذارانی که کسب‌وکار واقعی در ارمنستان راه‌اندازی می‌کنن"
      subtitleEn="Residency for entrepreneurs who establish a real business in Armenia"
      subtitleRu="ВНЖ для предпринимателей, открывающих бизнес в Армении"
      heroImage="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"
      serviceType="residency">

      {isFa && <>
        <InfoBlock title="اقامت سرمایه‌گذاری چطور کار می‌کنه؟">
          <p>ارمنستان برنامه‌ی رسمی «ویزای طلایی» با آستانه‌ی دلاری ثابت نداره؛ مسیر واقعی این نوعه که فرد یک شرکت ثبت می‌کنه، سرمایه‌ی واقعی وارد اون کسب‌وکار می‌کنه (خرید تجهیزات، اجاره‌ی محل، استخدام نیرو) و بر پایه‌ی همون فعالیت اقتصادی واقعی، اقامت موقت به‌عنوان مدیر/سهام‌دار شرکت دریافت می‌کنه. این مسیر بررسی موردی داره و بستگی به نوع و مقیاس سرمایه‌گذاری فرق می‌کنه.</p>
        </InfoBlock>

        <InfoBlock title="پیش‌نیازها">
          <CheckList items={[
            'ثبت شرکت LLC در ارمنستان با سرمایه‌ی اولیه‌ی مشخص',
            'طرح کسب‌وکار (Business Plan) با برنامه‌ی مالی و اشتغال‌زایی',
            'انتقال رسمی سرمایه به حساب بانکی شرکت در ارمنستان',
            'ثبت مالیاتی و شروع فعالیت واقعی (نه صرفاً ثبت روی کاغذ)',
            'پاسپورت معتبر و گواهی عدم سوءپیشینه',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل کار">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>تدوین طرح کسب‌وکار و انتخاب حوزه‌ی فعالیت (مثلاً گردشگری، فناوری، تجارت)</li>
            <li>ثبت شرکت LLC و افتتاح حساب بانکی شرکتی</li>
            <li>انتقال و ثبت سرمایه‌ی اولیه در حساب شرکت</li>
            <li>شروع فعالیت رسمی (فاکتور، قرارداد، حقوق کارکنان در صورت استخدام)</li>
            <li>ارائه‌ی درخواست اقامت موقت به‌عنوان مدیر/سهام‌دار شرکت به خدمات مهاجرت</li>
            <li>دریافت کارت اقامت موقت یک‌ساله (قابل تمدید و ارتقا به اقامت دائم پس از چند سال)</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="نکات مهم">
          <CheckList items={[
            'مقیاس سرمایه‌گذاری لازم به نوع کسب‌وکار بستگی داره — یک فروشگاه کوچک با یک شرکت فناوری متفاوته',
            'داشتن فعالیت اقتصادی واقعی و مستمر مهم‌تر از صرفِ اندازه‌ی مبلغه',
            'این مسیر با ثبت شرکت (Company Registration) هم‌پوشانی داره؛ اگه هدفت فقط ثبت شرکته و نه لزوماً اقامت، صفحه‌ی ثبت شرکت رو ببین',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="How Investment Residency Works">
          <p>Armenia has no fixed-threshold "golden visa" program. The real path is registering a company, injecting genuine capital into it (equipment, premises, staff), and obtaining temporary residency as the company's director/shareholder based on that real economic activity. Cases are reviewed individually depending on business type and scale.</p>
        </InfoBlock>
        <InfoBlock title="Prerequisites">
          <CheckList items={[
            'LLC registration in Armenia with a defined initial capital',
            'A business plan covering finances and job creation',
            "Formal capital transfer to the company's Armenian bank account",
            'Tax registration and genuine operational activity',
            'Valid passport and criminal record clearance',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Как работает инвестиционный ВНЖ">
          <p>В Армении нет формальной программы «золотой визы» с фиксированным порогом. Реальный путь — регистрация компании, реальное вложение капитала и получение временного ВНЖ как директора/акционера компании на основе этой экономической деятельности.</p>
        </InfoBlock>
        <InfoBlock title="Требования">
          <CheckList items={[
            'Регистрация ООО в Армении с определённым уставным капиталом',
            'Бизнес-план с финансовым разделом',
            'Официальный перевод капитала на счёт компании',
            'Налоговая регистрация и реальная деятельность',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
