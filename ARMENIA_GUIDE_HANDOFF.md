# Armenia Guide Page — Handoff Notes

## STATUS: v1 SHIPPED (2026-09-01) — hub page is live

The hub page is built and committed to `main`. Route: `/travel/armenia-guide`.

### What exists now
- `src/views/travel/ArmeniaGuide.jsx` — client component, fa/en/ru content (7 places: Yerevan Republic Square+Cascade, Garni Temple, Geghard Monastery, Khor Virap, Lake Sevan, Dilijan, Tatev), each with photo, description, distance from Yerevan, best time to visit. Uses `ServicePageLayout` + `InfoBlock` (same pattern as other pages).
- `app/travel/armenia-guide/page.jsx` — metadata (title/description/keywords/canonical/openGraph) + JSON-LD `ItemList`/`TouristAttraction` schema.
- `public/images/armenia/*.webp` — 8 photos, all sourced from Wikimedia Commons (CC BY / CC BY-SA / CC0, verified via Commons API `imageinfo` before download), resized to max 1100–1280px width and re-encoded as webp at quality 62–72. File sizes: 120–260 KB each (yerevan-republic-square, yerevan-cascade, garni-temple, geghard-monastery, khor-virap, lake-sevan, dilijan, tatev).
- Nav link added in `src/components/shared/GlobalNavbar.jsx` under the "تور و فستیوال" / "Tours & Festivals" / "Туры и фестивали" dropdown, right after the Armenia Tours link, in all 3 languages.
- SEO keywords targeted (Persian, long-tail, lower competition): "ارمنستان کجا برم", "جاهای دیدنی ایروان", "بهترین زمان سفر به ارمنستان از ایران", "برنامه سفر ارمنستان", plus each landmark name — in the `keywords` metadata field and naturally in headings/body.
- Image attribution note: not yet added anywhere on the page/site. Commons CC BY / CC BY-SA licenses legally require attribution (photographer + link back to license). This is NOT done yet — see Next steps.

### NOT done yet / next steps
1. **Image attribution (needs doing before/soon after launch)** — add a small credits line/footer on the guide page (or a `/credits` page linked from it) crediting the Commons photographers for the 8 photos. Photographer + license info is in the session's `imageinfo.json` (was in the sandbox, not committed to the repo — re-derive by checking each file's Commons page again if needed: search the filenames used, e.g. "Yerevan, Republic Square of Yerevan, Armenia.jpg", "Yerevan Cascade from below.jpg", "Garni Temple 18-11-2010 v2.jpg", "Geghard Monastery, Armenia.jpg", "Khor Virap Monastery and Mount Ararat, Armenia.jpg", "Lake Sevan view from Sevanavank.jpg", "Dilijan town lake, April 2026, no. 6.jpg", "The Wings Of Tatev and Tatev Monastery (23925883178).jpg" on commons.wikimedia.org).
2. Consider 2–3 focused subpages later (best time to visit, day trips from Yerevan, Yerevan city guide) that link back to this hub — internal linking / topic cluster for SEO. Not started.
3. Verify the page renders correctly in production (build/deploy check) — not verified from this session, no local dev server was run since there's no local clone; only GitHub commits were made directly via API.
4. Consider submitting the new URL to Google Search Console / Bing Webmaster Tools for faster indexing (owner has both connected per earlier SEO fix commits).

## Repo conventions (for future pages, still accurate)
- `src/views/<domain>/<Name>.jsx` = client component with `useLang()`, content keyed `fa`/`en`/`ru`.
- `app/<route>/page.jsx` = metadata + optional JSON-LD schema + imports the view.
- Shared layout: `src/components/shared/ServicePageLayout.jsx` (`ServicePageLayout`, `InfoBlock`, `CheckList`).
- Nav: `src/components/shared/GlobalNavbar.jsx`, 3 separate arrays per language, items `{ label, href, children }`.
- All work happens directly against GitHub via API (owner's GitHub is connected) — no local clone, commits go straight to `main`. Ask before large sweeping changes to `GlobalNavbar.jsx`.
