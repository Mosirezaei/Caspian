import VisaSouthAmerica from '@/views/service/VisaSouthAmerica';

export const metadata = {
  title: 'ویزای آمریکای جنوبی از ارمنستان',
  description: 'اخذ ویزای کشورهای آمریکای جنوبی (برزیل، آرژانتین، کلمبیا) از سفارتخانه‌های ایروان. مدارک و پیگیری کامل با کاسپین گروپ.',
  alternates: { canonical: 'https://caspian.am/visa/south-america' },
  openGraph: {
    title: 'ویزای آمریکای جنوبی از ارمنستان | برزیل، آرژانتین و کلمبیا',
    description: 'اخذ ویزای کشورهای آمریکای جنوبی (برزیل، آرژانتین، کلمبیا) از سفارتخانه‌های ایروان. مدارک و پیگیری کامل با کاسپین گروپ.',
    url: 'https://caspian.am/visa/south-america',
  },
};

export default function Page() {
  return <VisaSouthAmerica />;
}
