import AccommodationArticle, { getAccommodationArticle } from '@/views/blog/AccommodationArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const article = getAccommodationArticle('yerevan-accommodation-peak-seasons');
export const metadata = { title: 'بهترین زمان رزرو هتل و آپارتمان در ایروان | فصل‌های شلوغ و آرام', description: article.description, alternates: { canonical: 'https://caspian.am/blog/yerevan-accommodation-peak-seasons' } };
export default function Page() { return <><JsonLd data={articleSchema({ headline: article.title, description: article.description, url: 'https://caspian.am/blog/yerevan-accommodation-peak-seasons', datePublished: '2026-09-09', image: article.image })} /><AccommodationArticle articleKey="yerevan-accommodation-peak-seasons" /></>; }
