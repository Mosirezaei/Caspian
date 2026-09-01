import ArmeniaGuide from '@/views/travel/ArmeniaGuide';

export const metadata = {
  title: 'ارمنستان کجا برم؟ جاهای دیدنی ایروان و ارمنستان',
  description: 'راهنمای کامل جاهای دیدنی ارمنستان: ایروان، گارنی، گقارد، خور ویراپ، دریاچه سوان، دیلیجان و تاتف. عکس، فاصله از ایروان و بهترین زمان سفر برای هرکدام.',
  keywords: 'ارمنستان کجا برم, جاهای دیدنی ارمنستان, جاهای دیدنی ایروان, بهترین زمان سفر به ارمنستان از ایران, برنامه سفر ارمنستان, جاهای دیدنی ایروان برای ایرانی ها, سفر به ارمنستان, تور ارمنستان, معبد گارنی, صومعه گقارد, خور ویراپ, دریاچه سوان, دیلیجان, تاتف',
  alternates: { canonical: 'https://caspian.am/travel/armenia-guide' },
  openGraph: {
    title: 'ارمنستان کجا برم؟ جاهای دیدنی ایروان و ارمنستان',
    description: 'راهنمای کامل جاهای دیدنی ارمنستان با عکس، فاصله از ایروان و بهترین زمان بازدید.',
    url: 'https://caspian.am/travel/armenia-guide',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'جاهای دیدنی ارمنستان',
  description: 'راهنمای جاهای دیدنی ایروان و ارمنستان شامل ایروان، گارنی، گقارد، خور ویراپ، دریاچه سوان، دیلیجان و تاتف',
  itemListElement: [
    { '@type': 'TouristAttraction', position: 1, name: 'Republic Square & Cascade, Yerevan' },
    { '@type': 'TouristAttraction', position: 2, name: 'Garni Temple' },
    { '@type': 'TouristAttraction', position: 3, name: 'Geghard Monastery' },
    { '@type': 'TouristAttraction', position: 4, name: 'Khor Virap' },
    { '@type': 'TouristAttraction', position: 5, name: 'Lake Sevan' },
    { '@type': 'TouristAttraction', position: 6, name: 'Dilijan' },
    { '@type': 'TouristAttraction', position: 7, name: 'Tatev Monastery' },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ArmeniaGuide />
    </>
  );
}
