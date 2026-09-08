import StrategicArticle from '@/views/blog/StrategicArticle';
export const metadata = { title: 'news', description: 'راهنمای بررسی اخبار برای مهاجران و کسب‌وکارها.', alternates: { canonical: 'https://caspian.am/blog/reliable-armenia-news-sources' } };
export default function Page(){ return <StrategicArticle articleKey="news" />; }