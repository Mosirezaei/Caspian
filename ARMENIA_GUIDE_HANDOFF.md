# Armenia Guide Page — Handoff Notes

## STATUS: v1.1 SHIPPED (2026-09-01) — hub page is live with photo credits

The hub page is built and committed to `main`. Route: `/travel/armenia-guide`. Live at https://caspian.am/travel/armenia-guide (verified via Vercel deployment `dpl_2uzBPGCNsGFCc5TEurABaK8UcRZT`, readyState READY / PROMOTED to production).

### What exists now
- `src/views/travel/ArmeniaGuide.jsx` — client component, fa/en/ru content (7 places: Yerevan Republic Square+Cascade, Garni Temple, Geghard Monastery, Khor Virap, Lake Sevan, Dilijan, Tatev), each with photo, description, distance from Yerevan, best time to visit. Uses `ServicePageLayout` + `InfoBlock` (same pattern as other pages). Now also includes a `PHOTO_CREDITS` array and a rendered "Photo Credits" `InfoBlock` (fa: منبع تصاویر / en: Photo Credits / ru: Источники фотографий) listing photographer, license (with link to the CC license) and Commons source link for each of the 8 photos.
- `app/travel/armenia-guide/page.jsx` — metadata (title/description/keywords/canonical/openGraph) + JSON-LD `ItemList`/`TouristAttraction` schema.
- `public/images/armenia/*.webp` — 8 photos, all sourced from Wikimedia Commons (CC BY / CC BY-SA / CC0, verified via Commons API `imageinfo` before download), resized to max 1100–1280px width and re-encoded as webp at quality 62–72. File sizes: 120–260 KB each (yerevan-republic-square, yerevan-cascade, garni-temple, geghard-monastery, khor-virap, lake-sevan, dilijan, tatev).
- Nav link added in `src/components/shared/GlobalNavbar.jsx` under the "تور و فستیوال" / "Tours & Festivals" / "Туры и фестивали" dropdown, right after the Armenia Tours link, in all 3 languages.
- SEO keywords targeted (Persian, long-tail, lower competition): "ارمنستان کجا برم", "جاهای دیدنی ایروان", "بهترین زمان سفر به ارمنستان از ایران", "برنامه سفر ارمنستان", plus each landmark name — in the `keywords` metadata field and naturally in headings/body.
- **Image attribution: DONE.** Photographer + exact license (with link to the CC deed) + Commons file-page link now render on the page for all 8 photos, re-derived directly from the Wikimedia Commons API `imageinfo`/`extmetadata` for each exact filename (not from memory):
  - yerevan-republic-square: Vyacheslav Argenberg — CC BY 4.0
  - yerevan-cascade: Wikimedia Commons user "07" — CC BY-SA 4.0
  - garni-temple: Armenak Margarian — CC BY-SA 4.0
  - geghard-monastery: Vyacheslav Argenberg — CC BY 4.0
  - khor-virap: Andrew Behesnilian (MrAndrew47) — CC BY-SA 3.0
  - lake-sevan: Dor Shabashewitz — CC BY 4.0
  - dilijan: Textfabrikant — CC0 (attribution not legally required, listed anyway for consistency)
  - tatev: Clay Gilliland (Flickr) — CC BY-SA 2.0
- **Indexing: submitted.** `https://caspian.am/travel/armenia-guide` submitted to Bing Webmaster Tools (`BING_WEBMASTER_TOOLS_SUBMIT_URLS`, accepted). Google Search Console `INSPECT_URL` showed "URL is unknown to Google" (expected pre-crawl) — the site's existing sitemap (`https://caspian.am/sitemap.xml`, 36 URLs submitted) was resubmitted via `GOOGLE_SEARCH_CONSOLE_SUBMIT_SITEMAP` to prompt a recrawl. Google indexing itself isn't instant — re-check `INSPECT_URL` in a few days if you want to confirm it landed.

### NOT done yet / next steps
1. Consider 2–3 focused subpages later (best time to visit, day trips from Yerevan, Yerevan city guide) that link back to this hub — internal linking / topic cluster for SEO. Not started.
2. Re-check Google Search Console `INSPECT_URL` for `/travel/armenia-guide` in a few days to confirm it's been crawled/indexed (sitemap was resubmitted 2026-09-01, but Google indexing has its own lag).

### Note on a mid-task mistake (2026-09-01)
While committing the photo-credits update, one commit (`502ce47`) accidentally wrote the literal placeholder string `PLACEHOLDER` as the entire content of `ArmeniaGuide.jsx`, breaking the production build (that Vercel deployment shows `readyState: ERROR`). It was caught and fixed one commit later (`d036b6a`, "fix: restore ArmeniaGuide.jsx with photo credits section"), which is the version currently live. Mentioning this here in case anyone bisects the git history and wonders about the broken intermediate commit.

## Repo conventions (for future pages, still accurate)
- `src/views/<domain>/<Name>.jsx` = client component with `useLang()`, content keyed `fa`/`en`/`ru`.
- `app/<route>/page.jsx` = metadata + optional JSON-LD schema + imports the view.
- Shared layout: `src/components/shared/ServicePageLayout.jsx` (`ServicePageLayout`, `InfoBlock`, `CheckList`).
- Nav: `src/components/shared/GlobalNavbar.jsx`, 3 separate arrays per language, items `{ label, href, children }`.
- All work happens directly against GitHub via API (owner's GitHub is connected) — no local clone, commits go straight to `main`. Ask before large sweeping changes to `GlobalNavbar.jsx`.
- Vercel project `caspian` (framework: vite/nextjs hybrid settings) auto-deploys `main` to production at caspian.am; check deployment status with the Vercel connector rather than assuming a push succeeded.
