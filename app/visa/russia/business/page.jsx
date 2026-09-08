import VisaRussiaBusiness from '@/views/service/VisaRussiaBusiness';
import { FAQ_DATA } from '@/data/faqData';

export const metadata = {
  title: 'ویزای تجاری روسیه برای ایرانیان | شرایط، مدارک و هزینه',
  description: 'ویزای تجاری روسیه از ایروان برای مذاکره، نمایشگاه و همکاری تجاری — شامل ویزای چندبار ورود (Multiple Entry). مدارک، انواع اعتبار و مراحل کامل درخواست.',
  keywords: 'ویزای تجاری روسیه, ویزای مولتی روسیه, ویزای چندبار ورود روسیه, دعوتنامه تجاری روسیه, شرایط گرفتن ویزای کاری روسیه برای ایرانیان, هزینه و زمان صدور ویزای تجاری روسیه',
  alternates: { canonical: 'https://caspian.am/visa/russia/business' },
  openGraph: {
    title: 'ویزای تجاری روسیه برای ایرانیان | شرایط، مدارک و هزینه',
    description: 'مذاکره، نمایشگاه، همکاری تجاری — تک‌ورودی تا چندبار ورود. دعوتنامه و مدارک کامل.',
    url: 'https://caspian.am/visa/russia/business',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'ویزای تجاری روسیه',
  description: 'اخذ ویزای تجاری روسیه (تک‌ورودی تا چندبار ورود) از سفارت در ایروان',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  areaServed: { '@type': 'Country', name: 'Russia' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ_DATA['visa-russia-business'].map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <VisaRussiaBusiness />
    </>
  );
}
