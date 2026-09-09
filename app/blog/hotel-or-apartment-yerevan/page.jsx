import AccommodationArticle, { getAccommodationArticle } from '@/views/blog/AccommodationArticle';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

const article = getAccommodationArticle('hotel-or-apartment-yerevan');
export const metadata = { title: 'رزرو هتل یا آپارتمان در ایروان؟ | راهنمای انتخاب اقامت', description: article.description, alternates: { canonical: 'https://caspian.am/blog/hotel-or-apartment-yerevan' } };
export default function Page() { return <><JsonLd data={articleSchema({ headline: article.title, description: article.description, url: 'https://caspian.am/blog/hotel-or-apartment-yerevan', datePublished: '2026-09-09', image: article.image })} /><AccommodationArticle articleKey="hotel-or-apartment-yerevan" /></>; }
