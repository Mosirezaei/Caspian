# Armenia Guide Page — Handoff Notes

## Goal
Create a hub page "where to go in Armenia / Yerevan" (things-to-do + sights) with photos hosted in the project (public/images/armenia/), linked from the main nav, plus a few SEO-friendly long-tail subpages later. Requested by the site owner in Persian.

## Status (last updated by Claude, 2026-09-01)
- Repo conventions understood: Next.js app router, `src/views/<domain>/<Name>.jsx` holds the actual content component (client component using `useLang()` from `@/lib/LanguageContext`, content objects keyed `fa`/`en`/`ru`), `app/<route>/page.jsx` just imports it + sets `metadata` (title/description/keywords/canonical/openGraph) and can add a JSON-LD `<script>` schema block (see `app/residency/armenia/page.jsx` for the schema pattern).
- Shared layout: `src/components/shared/ServicePageLayout.jsx` exports `ServicePageLayout` (props: titleFa/titleEn/titleRu, subtitleFa/subtitleEn/subtitleRu, heroImage, serviceType), `InfoBlock`, `CheckList`. It auto-adds navbar, WhatsApp CTA, FAQ, footer, RelatedServices.
- Nav: `src/components/shared/GlobalNavbar.jsx` has three separate arrays (fa ~line 44, en ~line 97, ru ~line 149), each item `{ label, href, children: [...] }`. New page should be added under the "تور و فستیوال" / "Tours & Festivals" / "Туры и фестивали" group (currently has Armenia Tours + Festivals links).
- `src/views/travel/Tour.jsx` ALREADY has an "Top Armenia Attractions" content block (Sevan, Garni/Geghard, Khor Virap, Noravank/Areni, Dilijan, Gyumri) baked into the tour-booking page — good reference copy, but it's a sales page not a guide page, so don't just duplicate it.
- Existing hero images for travel pages are hotlinked from Unsplash (e.g. Tour.jsx `heroImage="https://images.unsplash.com/photo-..."`), NOT stored locally. Owner explicitly asked this time for images to live in the project (`public/images/armenia/...`), so download real freely-licensed photos (Wikimedia Commons public-domain/CC-BY works well) and commit them as small webp/compressed files instead of hotlinking.
- Chosen route (proposed, not yet built): `/travel/armenia-guide` — hub page — with future subpages like `/travel/armenia-guide/yerevan`, `/travel/armenia-guide/day-trips` etc. Confirm with owner if they'd rather use `/blog/armenia`.
- NOTHING has been committed for the actual guide page/images yet as of this note — a prior session apparently sourced candidate images but ran out of credits before writing any files. Treat this as starting from zero: no `app/travel/armenia-guide`, no `public/images/armenia/*` exist in the repo.

## Next steps
1. Source 6-10 small, freely-licensed (public domain / CC-BY) images: Yerevan Republic Square + Cascade, Tatev monastery/cable car, Garni temple, Geghard monastery, Khor Virap with Ararat, Lake Sevan, Dilijan, Gyumri. Wikimedia Commons is a safe source.
2. Download + compress to webp, keep each under ~150-250KB, save under `public/images/armenia/<slug>.webp`.
3. Build `src/views/travel/ArmeniaGuide.jsx` (fa/en/ru content object, same pattern as Tour.jsx/Residency.jsx) using `ServicePageLayout` + `InfoBlock` + a photo grid for each place (name, 1-2 sentence description, distance from Yerevan, best season).
4. Build `app/travel/armenia-guide/page.jsx` — metadata block (title/description/keywords/canonical/openGraph) + JSON-LD `TouristAttraction`/`Place` schema + import the view.
5. Add nav entry in all 3 language arrays of `GlobalNavbar.jsx` under Tours & Festivals group.
6. SEO angle discussed with owner: target Persian long-tail keywords with low competition rather than the generic "ارمنستان کجا برم" — e.g. "جاهای دیدنی ایروان برای ایرانی‌ها", "برنامه سفر ۳ روزه ایروان", "بهترین زمان سفر به ارمنستان از ایران". Put these in the `keywords` metadata field and naturally in headings/body.
7. After the hub page is live, consider 2-3 focused subpages (best time to visit, day trips from Yerevan, Yerevan itself) each linking back to the hub — internal linking / topic cluster for SEO.

## Notes for whoever continues
- All work happens directly against GitHub via API (owner connected their GitHub account to the assistant) — no local clone, commits go straight to `main`.
- Ask the owner before large sweeping changes to `GlobalNavbar.jsx` since it's a single big shared file used by every page.
