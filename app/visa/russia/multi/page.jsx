import { redirect } from 'next/navigation';

// This route now redirects to /visa/russia/business (see next.config.mjs `redirects()`
// for the primary 301). The in-app redirect below is a defense-in-depth fallback so the
// old URL never renders duplicate/cannibalizing content even if the edge redirect is bypassed.
export const metadata = {
  robots: { index: false, follow: true },
  alternates: { canonical: 'https://caspian.am/visa/russia/business' },
};

export default function Page() {
  redirect('/visa/russia/business');
}
