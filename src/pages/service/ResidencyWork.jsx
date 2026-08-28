import React from 'react';
import { LanguageProvider, useLang } from '@/lib/LanguageContext';
import { useSEO } from '@/hooks/useSEO';
import { ServicePageLayout, InfoBlock, CheckList } from '@/components/shared/ServicePageLayout';

function Content() {
  const { lang } = useLang();
  const isFa = lang === 'fa';
  const isRu = lang === 'ru';

  useSEO({
    title: isFa ? 'اقامت کاری ارمنستان | ویزای کار و مجوز اشتغال — کاسپین گروپ' :
           isRu ? 'Рабочий ВНЖ Армении | Трудовая виза — Caspian Group' :
           'Armenia Work Residency | Work Permit & Employment Visa — Caspian Group',
    description: isFa ? 'اقامت ارمنستان از طریق کار در شرکت‌های ارمنی. شرایط، مدارک و مراحل اخذ مجوز کار و کارت اقامت کاری. مشاوره رایگان در واتساپ.' :
                 isRu ? 'ВНЖ Армении через трудоустройство в армянских компаниях. Условия, документы и этапы получения.' :
                 'Armenia residency through employment in Armenian companies. Requirements, documents, and steps for work permit and residency card.',
    path: '/residency/work',
  });

  return (
    <ServicePageLayout
      titleFa="اقامت کاری ارمنستان" titleEn="Armenia Work Residency" titleRu="Рабочий ВНЖ Армении"
      subtitleFa="اقامت از طریق اشتغال در شرکت‌های ارمنستانی"
      subtitleEn="Residency through employment at Armenian companies"
      subtitleRu="ВНЖ через трудоустройство в армянских компаниях"
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80"
      serviceType="residency">

      {isFa && <>
        <InfoBlock title="اقامت کاری ارمنستان چیست؟">
          <p>اقامت کاری ارمنستان برای کسانی است که از طریق قرارداد استخدامی با یک شرکت ثبت‌شده در ارمنستان، مجوز کار و کارت اقامت دریافت می‌کنند. این روش برخلاف اقامت از طریق ثبت شرکت، نیاز به مالکیت کسب‌وکار ندارد و برای متخصصانی مثل برنامه‌نویسان، پزشکان، معماران و مدیران مناسب است.</p>
        </InfoBlock>

        <InfoBlock title="شرایط لازم برای اقامت کاری">
          <CheckList items={[
            'داشتن قرارداد استخدامی معتبر با یک شرکت ثبت‌شده در ارمنستان',
            'تأیید قرارداد توسط وزارت کار ارمنستان (در برخی موارد)',
            'پاسپورت معتبر با حداقل ۶ ماه اعتبار باقیمانده',
            'گواهی عدم سوء پیشینه ترجمه‌شده به ارمنی یا روسی',
            'مدرک تحصیلی یا گواهی تخصص مرتبط با شغل',
            'مدرک آدرس سکونت در ارمنستان (قرارداد اجاره رسمی)',
          ]} />
        </InfoBlock>

        <InfoBlock title="بازار کار ارمنستان برای ایرانیان">
          <h3 className="text-base font-bold text-foreground/90 mt-3 mb-1">حوزه‌های پرتقاضا</h3>
          <CheckList items={[
            'فناوری اطلاعات و نرم‌افزار — ارمنستان یکی از مراکز IT منطقه است؛ شرکت‌های بین‌المللی مثل Synopsys، EPAM و Microsoft دفاتری در ایروان دارند',
            'پزشکی و دندانپزشکی — متخصصان ایرانی با تأیید مدرک می‌توانند در بیمارستان‌های خصوصی کار کنند',
            'آموزش زبان فارسی — دانشگاه‌ها و مدارس ارمنستانی به مدرسان فارسی نیاز دارند',
            'معماری و مهندسی — پروژه‌های ساختمانی متعددی در جریان است',
          ]} />
          <h3 className="text-base font-bold text-foreground/90 mt-4 mb-1">حقوق متوسط در ارمنستان</h3>
          <p>حداقل دستمزد قانونی ارمنستان ۷۵٬۰۰۰ درام در ماه است. حقوق متخصصان IT از ۱٬۰۰۰ تا ۳٬۰۰۰ دلار، پزشکان عمومی از ۵۰۰ تا ۱٬۲۰۰ دلار متفاوت است. هزینه زندگی در ایروان با این حقوق‌ها نسبتاً قابل مدیریت است.</p>
        </InfoBlock>

        <InfoBlock title="مراحل اخذ مجوز کار و اقامت کاری">
          <ol className="space-y-2 list-decimal list-inside text-sm text-foreground/70">
            <li>یافتن شغل و دریافت پیشنهاد کاری از شرکت ارمنستانی</li>
            <li>ارسال مدارک به کارفرما برای شروع پروسه مجوز کار</li>
            <li>تأیید مدرک تحصیلی توسط وزارت آموزش ارمنستان (در صورت نیاز)</li>
            <li>ثبت قرارداد در وزارت کار</li>
            <li>درخواست کارت اقامت کاری در اداره مهاجرت</li>
            <li>دریافت کارت اقامت (معمولاً ۲۰ تا ۴۵ روز)</li>
          </ol>
        </InfoBlock>

        <InfoBlock title="مزایای اقامت کاری نسبت به سایر روش‌ها">
          <CheckList items={[
            'نیاز به سرمایه اولیه برای ثبت شرکت ندارد',
            'کارفرما بخش زیادی از فرآیند اداری را مدیریت می‌کند',
            'درآمد ثابت و بیمه اجتماعی ارمنستان را شامل می‌شود',
            'پایه مناسب برای اخذ اقامت دائم ۵ساله در آینده',
          ]} />
        </InfoBlock>
      </>}

      {lang === 'en' && <>
        <InfoBlock title="What Is Armenia Work Residency?">
          <p>Armenia work residency is for those who receive a work permit and residency card through an employment contract with a registered Armenian company. Unlike company registration, this route doesn't require business ownership — ideal for IT specialists, doctors, architects, and managers.</p>
        </InfoBlock>
        <InfoBlock title="Requirements">
          <CheckList items={[
            'Valid employment contract with a registered Armenian company',
            'Ministry of Labor approval (in some cases)',
            'Valid passport with at least 6 months remaining',
            'Criminal record clearance (translated to Armenian or Russian)',
            'Relevant education certificate or professional qualification',
            'Proof of residence in Armenia (official lease agreement)',
          ]} />
        </InfoBlock>
        <InfoBlock title="In-Demand Fields for Iranians">
          <CheckList items={[
            'IT & Software — Armenia is a regional tech hub; international companies like Synopsys, EPAM and Microsoft have offices in Yerevan',
            'Medicine & Dentistry — Iranian specialists can work in private hospitals after credential recognition',
            'Persian language teaching — universities and schools need Persian instructors',
            'Architecture & Engineering — numerous construction projects underway',
          ]} />
        </InfoBlock>
      </>}

      {isRu && <>
        <InfoBlock title="Что такое рабочий ВНЖ Армении?">
          <p>Рабочий ВНЖ выдаётся на основании трудового договора с зарегистрированной в Армении компанией. Не требует владения бизнесом — подходит для ИТ-специалистов, врачей, архитекторов и менеджеров.</p>
        </InfoBlock>
        <InfoBlock title="Требования">
          <CheckList items={[
            'Трудовой договор с армянской компанией',
            'Действующий паспорт (не менее 6 месяцев)',
            'Справка об отсутствии судимости (переведённая)',
            'Диплом или квалификационный документ',
            'Договор аренды жилья в Армении',
          ]} />
        </InfoBlock>
      </>}
    </ServicePageLayout>
  );
}

export default function ResidencyWork() {
  return <LanguageProvider><Content /></LanguageProvider>;
}
