import Residency from '@/views/service/Residency';

export const metadata = {
  title: 'اقامت ارمنستان ۲۰۲۶ | مراحل و هزینه کامل',
  description: 'اقامت ارمنستان در کمتر از ۳۰ روز از طریق ثبت شرکت. قانون جدید نوامبر ۲۰۲۶، هزینه کارت اقامت ۳۸۰ دلار، مالیات ۱۰٪. مشاوره رایگان واتساپ.',
  keywords: 'اقامت ارمنستان, کارت اقامت ارمنستان, مهاجرت ارمنستان, اقامت ارمنستان برای ایرانیان ۲۰۲۶, مهاجرت به ارمنستان برای ایرانیان, اقامت دائم ارمنستان, اقامت ارمنستان از طریق خرید ملک, هزینه زندگی در ارمنستان برای خانواده, تفاوت اقامت موقت و دائم ارمنستان, مدارک لازم برای اقامت ارمنستان, تمدید اقامت ارمنستان, مزایا و معایب زندگی در ایروان, دریافت کارت اقامت ارمنستان چقدر طول می‌کشد, زندگی ایرانیان در ایروان تجربه واقعی',
  alternates: { canonical: 'https://caspian.am/residency/armenia' },
  openGraph: {
    title: 'اقامت ارمنستان ۲۰۲۶ | مراحل و هزینه کامل',
    description: 'اقامت ارمنستان در ۳۰ روز. هزینه ۳۸۰ دلار. مشاوره رایگان.',
    url: 'https://caspian.am/residency/armenia',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'اقامت ارمنستان برای ایرانیان',
  description: 'اخذ کارت اقامت ارمنستان از طریق ثبت شرکت در کمتر از ۳۰ روز',
  provider: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am', telephone: '+37433149327' },
  areaServed: { '@type': 'Country', name: 'Armenia' },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Residency />
    </>
  );
}
