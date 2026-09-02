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
      titleFa="اقامت ارمنستان از طریق تولد فرزند" titleEn="Armenia Residency via Child Birth" titleRu="ВНЖ Армении через рождение ребёнка"
      subtitleFa="مسیر اقامت موقت برای والدینی که فرزندشان در ارمنستان به دنیا می‌آید"
      subtitleEn="Temporary residency for parents whose child is born in Armenia"
      subtitleRu="Временный ВНЖ для родителей ребёнка, рождённого в Армении"
      heroImage="https://images.unsplash.com/photo-1519689680058-324335c77eba?w=1200&q=80"
      serviceType="residency">

      {isFa && <>
        <InfoBlock title="این مسیر برای کیه؟">
          <p>طبق قانون اتباع خارجی ارمنستان، والدینی که فرزندشان در خاک ارمنستان متولد می‌شه می‌تونن برای اقامت موقت به‌عنوان «والد کودک متولدشده در ارمنستان» اقدام کنن. این مسیر جداست از اقامت کاری یا سرمایه‌گذاری و نیازی به قرارداد کاری یا ثبت شرکت نداره — فقط کافیه تولد فرزند در ارمنستان به‌ثبت رسیده باشه.</p>
        </InfoBlock>

        <InfoBlock title="مدارک لازم">
          <CheckList items={[
            'شناسنامه/گواهی تولد صادرشده توسط ثبت‌احوال ارمنستان',
            'مدرک زایمان یا بستری از بیمارستان محل تولد',
            'پاسپورت معتبر هر دو والد با حداقل ۶ ماه اعتبار',
            'مدرک اقامت فعلی در ارمنستان (اجاره‌نامه یا مدرک هتل)',
            'گواهی عدم سوءپیشینه (ترجمه‌شده به ارمنی یا روسی)',
            'مدرک ازدواج (در صورت وجود، برای تأیید نسبت والدین)',
          ]} />
        </InfoBlock>

        <InfoBlock title="مراحل دریافت اقامت">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>ثبت تولد فرزند در دفتر ثبت‌احوال ارمنستان و دریافت شناسنامه محلی</li>
            <li>تهیه‌ی مدارک ترجمه‌شده و تأییدشده‌ی والدین</li>
            <li>ارائه‌ی درخواست اقامت موقت به خدمات مهاجرت ارمنستان (Migration Service)</li>
            <li>بررسی مدارک و مصاحبه‌ی کوتاه در صورت نیاز</li>
            <li>دریافت کارت اقامت موقت یک‌ساله (قابل تمدید)</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="نکات مهم">
          <CheckList items={[
            'این اقامت ابتدا موقت (یک‌ساله) صادر می‌شه و با تمدید مکرر می‌تونه به اقامت دائم برسه',
            'هر دو والد (حتی اگر تبعه‌ی ارمنستان نباشن) می‌تونن هم‌زمان اقدام کنن',
            'این مسیر مانع از دنبال‌کردن هم‌زمان اقامت کاری یا سرمایه‌گذاری نیست',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="Who Is This For?">
          <p>Under Armenian foreign nationals law, parents whose child is born on Armenian territory can apply for temporary residency as the parent of an Armenia-born child. This route is separate from work or investment residency and requires no employment contract or company registration — the child's birth simply needs to be registered in Armenia.</p>
        </InfoBlock>
        <InfoBlock title="Required Documents">
          <CheckList items={[
            "Birth certificate issued by Armenia's civil registry",
            'Hospital or delivery record from the place of birth',
            "Valid passports for both parents with at least 6 months validity",
            'Proof of current residence in Armenia (lease or hotel confirmation)',
            'Criminal record clearance (translated into Armenian or Russian)',
          ]} />
        </InfoBlock>
        <InfoBlock title="Steps to Obtain Residency">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>Register the birth with Armenia's civil registry and get a local birth certificate</li>
            <li>Prepare translated and certified parent documents</li>
            <li>Submit a temporary residency application to the Migration Service</li>
            <li>Document review and brief interview if required</li>
            <li>Receive a one-year renewable temporary residence card</li>
          </ol>
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Кому подходит этот путь?">
          <p>Согласно закону Армении об иностранных гражданах, родители, чей ребёнок родился на территории Армении, могут получить временный ВНЖ как родитель ребёнка, рождённого в Армении. Этот путь не требует трудового договора или регистрации компании.</p>
        </InfoBlock>
        <InfoBlock title="Необходимые документы">
          <CheckList items={[
            'Свидетельство о рождении, выданное органами ЗАГС Армении',
            'Медицинская справка о родах из роддома',
            'Действующие паспорта обоих родителей (не менее 6 месяцев)',
            'Подтверждение проживания в Армении',
            'Справка об отсутствии судимости (переведена)',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default Content;
