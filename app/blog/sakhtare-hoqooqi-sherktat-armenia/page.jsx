import SakhtareHoqooqi from '@/views/blog/SakhtareHoqooqi';

export const metadata = {
  title: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟ | گروه کاسپین',
  description: 'مقایسه کامل LLC، IE و CJSC در ارمنستان برای ایرانیان: مزایا، مسئولیت مالی، هزینه ثبت و اینکه کدام ساختار برای شما مناسب‌تر است.',
  keywords: 'LLC ارمنستان, IE ارمنستان, CJSC ارمنستان, ساختار حقوقی شرکت ارمنستان, ثبت شرکت ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/sakhtare-hoqooqi-sherktat-armenia' },
  openGraph: {
    title: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟',
    description: 'مقایسه LLC، IE و CJSC — کدام ساختار برای کارآفرینان ایرانی در ارمنستان بهتر است؟',
    url: 'https://caspian.am/blog/sakhtare-hoqooqi-sherktat-armenia',
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'انواع ساختار حقوقی شرکت در ارمنستان: LLC، IE یا CJSC؟',
            author: { '@type': 'Organization', name: 'Caspian Business Group' },
            publisher: { '@type': 'Organization', name: 'Caspian Business Group', url: 'https://caspian.am' },
            datePublished: '2026-09-03',
            url: 'https://caspian.am/blog/sakhtare-hoqooqi-sherktat-armenia',
            inLanguage: 'fa',
          }),
        }}
      />
      <SakhtareHoqooqi />
    </>
  );
}
