# Caspian Group Website

## About

Official website of **Caspian Group Armenia**.

Caspian Group provides professional services in Armenia including:

- Armenia residency services
- Visa consulting
- Hotel booking
- Business and company services
- Travel and relocation solutions

Website:
https://caspian.am


## Local Development

### Requirements

Before running the project:

1. Clone the repository
2. Enter the project folder
3. Install dependencies:

```bash
npm install
```


## Environment Setup

Create an environment file:

```bash
.env.local
```

Add required variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
ALANCHAND_API_TOKEN=your_alanchand_api_token
CRON_SECRET=your_cron_secret
```

See `.env.example` for details on each variable.


## Run Development Server

```bash
npm run dev
```


## Build Production

```bash
npm run build
```


## Project Structure

This project is built on **Next.js (App Router)**. Route files live under `app/`,
while most page content/logic lives in matching components under `src/views/`.

```
app/                # Next.js routes (App Router) — one folder per URL, each with page.jsx
src/
├── components/     # Shared and feature components (ui/, shared/, home/, ...)
├── views/          # Page-level components rendered by app/**/page.jsx
├── data/           # Static content, site links, blog post data
├── lib/            # Client-side helpers (i18n, language context, utils)
└── api/            # Supabase client
```


## Contact

Caspian Group Armenia

Website:
https://caspian.am

© Caspian Group. All rights reserved.
