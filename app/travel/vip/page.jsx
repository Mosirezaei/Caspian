import VipSupport from '@/views/VipSupport';

export const metadata = {
  title: 'پشتیبانی VIP کاسپین گروپ',
  description: 'خدمات VIP کاسپین: رزرو اختصاصی، همراهی و مشاوره حضوری در ایروان.',
  alternates: { canonical: 'https://caspian.am/travel/vip' },
  openGraph: {
    title: 'پشتیبانی VIP کاسپین گروپ',
    description: 'خدمات VIP کاسپین: رزرو اختصاصی، همراهی و مشاوره حضوری در ایروان.',
    url: 'https://caspian.am/travel/vip',
  },
};

export default function Page() {
  return <VipSupport />;
}
