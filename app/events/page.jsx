import EventsPage from '@/views/events/EventsPage';

export const metadata = {
  title: 'رویدادها و کنسرت\u200cهای ایروان | گروه کاسپین',
  description: 'برنامه\u200cی کنسرت، تئاتر، فستیوال و نمایشگاه\u200cهای ایروان — به\u200cروز و ترجمه\u200cشده به فارسی.',
  alternates: { canonical: 'https://caspian.am/events' },
};

export default function Page() {
  return <EventsPage />;
}
