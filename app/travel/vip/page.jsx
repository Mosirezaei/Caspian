import VipSupport from '@/views/VipSupport';

export const metadata = {
  title: 'پشتیبانی VIP کاسپین | خدمات اختصاصی ایروان',
  description: 'خدمات VIP کاسپین: رزرو اختصاصی هتل و آپارتمان، همراهی حضوری، ترانسفر VIP، مشاوره حضوری در ایروان. ۲۴ ساعته در دسترس.',
  alternates: { canonical: 'https://caspian.am/travel/vip' },
  openGraph: {
    title: 'پشتیبانی VIP کاسپین گروپ ارمنستان | خدمات اختصاصی VIP در ایروان',
    description: 'خدمات VIP کاسپین: رزرو اختصاصی هتل و آپارتمان، همراهی حضوری، ترانسفر VIP، مشاوره حضوری در ایروان. ۲۴ ساعته در دسترس.',
    url: 'https://caspian.am/travel/vip',
  },
};

export default function Page() {
  return <VipSupport />;
}
