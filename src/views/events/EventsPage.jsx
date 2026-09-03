'use client';
import { useState, useEffect, useMemo } from 'react';
import { Search, Filter, Calendar, Music, Theater, Film, PartyPopper, Ticket, MapPin, Loader2 } from 'lucide-react';
import GlobalNavbar from '@/components/shared/GlobalNavbar.jsx';

const CATEGORY_ICONS = {
  Concert: Music, Theater: Theater, Cinema: Film,
  Party: PartyPopper, 'Stand-up': Music, Default: Ticket,
};
const CATEGORY_FA = {
  '\u0540\u0561\u0574\u0565\u0580\u0563': '\u06a9\u0646\u0633\u0631\u062a',
  '\u0539\u0561\u057f\u0580\u0578\u0576': '\u062a\u0626\u0627\u062a\u0631',
  '\u053f\u056b\u0576\u0578': '\u0633\u06cc\u0646\u0645\u0627',
  '\u053f\u0561\u057f\u0561\u056f\u0565\u0580\u0563\u0578\u0582\u0569\u0575\u0578\u0582\u0576': '\u06a9\u0645\u062f\u06cc',
  'Stand-up': '\u0627\u0633\u062a\u0646\u062f\u0622\u067e',
  'Party': '\u067e\u0627\u0631\u062a\u06cc',
  '\u0531\u056f\u0578\u0582\u0574\u0562': '\u06a9\u0644\u0627\u0628',
  '\u0553\u0561\u0562': '\u067e\u0627\u0628',
  '\u0555\u057a\u0565\u0580\u0561 \u0587 \u0562\u0561\u056c\u0565\u057f': '\u0627\u067e\u0631\u0627 \u0648 \u0628\u0627\u0644\u0647',
  '\u0551\u0578\u0582\u0581\u0561\u0570\u0561\u0576\u0564\u0565\u057d': '\u0646\u0645\u0627\u06cc\u0634\u06af\u0627\u0647',
  '\u054d\u057a\u0578\u0580\u057f': '\u0648\u0631\u0632\u0634',
  '\u053f\u0580\u056f\u0565\u057d': '\u0633\u06cc\u0631\u06a9',
  '\u0531\u056f\u0578\u0582\u0574\u0562 \u0587 \u0583\u0561\u0562': '\u06a9\u0644\u0627\u0628 \u0648 \u067e\u0627\u0628',
  '\u0531\u0575\u056c': '\u0633\u0627\u06cc\u0631',
};

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [translations, setTranslations] = useState({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [translating, setTranslating] = useState(false);

  // Fetch events
  useEffect(() => {
    async function fetchEvents() {
      try {
        const res = await fetch('/api/events');
        const data = await res.json();
        if (data.events) {
          setEvents(data.events);
          translateTitles(data.events);
        } else {
          setError('خطا در دریافت رویدادها');
        }
      } catch (e) {
        setError('خطا در اتصال به سرور');
      } finally {
        setLoading(false);
      }
    }
    fetchEvents();
  }, []);

  // Translate titles using Claude API
  async function translateTitles(evts) {
    if (evts.length === 0) return;
    setTranslating(true);
    try {
      const titles = evts.map(e => e.title).join('\n---\n');
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 4000,
          messages: [{
            role: 'user',
            content: `Translate each of these Armenian/English event titles to Persian (Farsi). Keep proper nouns as-is. Return ONLY the translations, one per line, separated by ---. Do not add explanations.\n\n${titles}`
          }],
        }),
      });
      const data = await res.json();
      const translated = data.content?.[0]?.text || '';
      const lines = translated.split('---').map(l => l.trim()).filter(Boolean);
      const map = {};
      evts.forEach((e, i) => {
        if (lines[i]) map[e.id] = lines[i];
      });
      setTranslations(map);
    } catch (e) {
      console.error('Translation failed:', e);
    } finally {
      setTranslating(false);
    }
  }

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(events.map(e => e.category))].filter(Boolean);
    return cats.sort();
  }, [events]);

  // Filter events
  const filtered = useMemo(() => {
    return events.filter(e => {
      if (selectedCategory !== 'all' && e.category !== selectedCategory) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const title = (translations[e.id] || e.title || '').toLowerCase();
        const venue = (e.venue || '').toLowerCase();
        if (!title.includes(q) && !venue.includes(q)) return false;
      }
      return true;
    });
  }, [events, selectedCategory, searchQuery, translations]);

  return (
    <div className="min-h-screen" dir="rtl">
      <GlobalNavbar />
      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-20">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-black text-foreground">
            <span className="gold-gradient-text">رویدادها و کنسرت‌های ایروان</span>
          </h1>
          <p className="text-foreground/60 mt-2">برنامه‌ی تئاتر، کنسرت، فستیوال و نمایشگاه‌های ایروان</p>
          {translating && (
            <div className="flex items-center justify-center gap-2 mt-3 text-primary text-sm">
              <Loader2 className="w-4 h-4 animate-spin" /> در حال ترجمه به فارسی...
            </div>
          )}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/40" />
            <input
              type="text"
              placeholder="جستجو در عنوان یا محل..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-foreground placeholder:text-foreground/30 focus:border-primary/40 focus:outline-none transition"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-2 rounded-xl text-xs font-bold transition ${selectedCategory === 'all' ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-foreground/60 hover:border-primary/30'}`}>
              همه
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition ${selectedCategory === cat ? 'bg-primary text-black' : 'bg-white/5 border border-white/10 text-foreground/60 hover:border-primary/30'}`}>
                {CATEGORY_FA[cat] || cat}
              </button>
            ))}
          </div>
        </div>

        {/* Loading / Error / Results */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
          </div>
        ) : error ? (
          <div className="text-center py-20 text-foreground/50">{error}</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-foreground/50">رویدادی پیدا نشد</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map(event => {
              const Icon = CATEGORY_ICONS[event.category] || CATEGORY_ICONS.Default;
              const faTitle = translations[event.id] || event.title;
              const faCat = CATEGORY_FA[event.category] || event.category;

              return (
                <div
                  key={event.id}
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
                >
                  {/* Image */}
                  {event.image && (
                    <div className="relative h-40 overflow-hidden">
                      <img src={event.image} alt={faTitle} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-2 py-1 rounded-lg">
                        <span className="text-[10px] font-bold text-primary flex items-center gap-1">
                          <Icon className="w-3 h-3" /> {faCat}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-4">
                    <h3 className="font-bold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors mb-2">
                      {faTitle}
                    </h3>
                    {event.title !== faTitle && (
                      <p className="text-[11px] text-foreground/35 line-clamp-1 mb-2">{event.title}</p>
                    )}
                    <div className="space-y-1">
                      {event.date && (
                        <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                          <Calendar className="w-3 h-3 shrink-0" /> {event.date}
                        </div>
                      )}
                      {event.venue && (
                        <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                          <MapPin className="w-3 h-3 shrink-0" /> <span className="line-clamp-1">{event.venue}</span>
                        </div>
                      )}
                      {event.price && (
                        <div className="flex items-center gap-1.5 text-xs text-primary/70 font-semibold">
                          <Ticket className="w-3 h-3 shrink-0" /> {event.price}
                        </div>
                      )}
                    </div>
                    <button
                      onClick={() => {
                        const msg = encodeURIComponent(
                          `سلام، می‌خوام بلیط این رویداد رو تهیه کنم:\n\n` +
                          `🎫 ${faTitle}\n` +
                          `📅 ${event.date || 'تاریخ نامشخص'}\n` +
                          `📍 ${event.venue || 'محل نامشخص'}\n` +
                          `💰 ${event.price || 'قیمت نامشخص'}\n\n` +
                          `لطفاً راهنمایی کنید.`
                        );
                        window.open(`https://wa.me/37433149327?text=${msg}`, '_blank');
                      }}
                      className="mt-3 w-full flex items-center justify-center gap-2 py-2 rounded-xl bg-green-600 hover:bg-green-500 transition text-white text-xs font-bold">
                      <Ticket className="w-3.5 h-3.5" /> تهیه بلیط
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}


      </main>
    </div>
  );
}
