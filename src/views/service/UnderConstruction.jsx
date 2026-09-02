'use client';
import React from 'react';
import { useLang } from '@/lib/LanguageContext';
import { ServicePageLayout, InfoBlock } from '@/components/shared/ServicePageLayout';

const texts = {
  fa: 'این بخش در حال به\u200cروزرسانی است. برای اطلاعات بیشتر یا رزرو همین حالا، از طریق واتساپ با کارشناسان ما در تماس باشید.',
  en: 'This section is currently being updated. For more information or to book right now, contact our team on WhatsApp.',
  ru: 'Этот раздел сейчас обновляется. Для получения дополнительной информации или бронирования свяжитесь с нами в WhatsApp.',
};

export default function UnderConstruction({ titleFa, titleEn, titleRu, heroImage, serviceType }) {
  const { lang } = useLang();
  const body = texts[lang] || texts.fa;

  return (
    <ServicePageLayout
      titleFa={titleFa} titleEn={titleEn} titleRu={titleRu}
      subtitleFa="در حال به\u200cروزرسانی" subtitleEn="Coming Soon" subtitleRu="Скоро обновление"
      heroImage={heroImage}
      serviceType={serviceType}
    >
      <InfoBlock>
        <p>{body}</p>
      </InfoBlock>
    </ServicePageLayout>
  );
}
