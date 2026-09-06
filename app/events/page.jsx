import EventsPage from '@/views/events/EventsPage';
import JsonLd from '@/components/shared/JsonLd';
import { eventsListSchema } from '@/lib/schema';
import { scrapeAllEvents } from '@/lib/tomsarkghScraper';

export const metadata = {
  title: 'رویدادها و کنسرت‌های ایروان | گروه کاسپین',
  description: 'برنامه‌ی کنسرت، تئاتر، فستیوال و نمایشگاه‌های ایروان — به‌روز و ترجمه‌شده به فارسی.',
  alternates: { canonical: 'https://caspian.am/events' },
};

// Matches the /api/events route's own cache window so this server-side
// fetch (for structured data) and the client's later /api/events call
// aren't scraping tomsarkgh.am at two different cadences.
export const revalidate = 600;

export default async function Page() {
  let events = [];
  try {
    events = await scrapeAllEvents();
  } catch (e) {
    // Same fallback as the client: an empty list just means no schema
    // and the client-side fetch on mount still has a chance to succeed.
    events = [];
  }

  return (
    <>
      <JsonLd data={eventsListSchema(events)} />
      <EventsPage initialEvents={events} />
    </>
  );
}
