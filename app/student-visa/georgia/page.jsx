import StudentVisaGeorgia from '@/views/service/StudentVisaGeorgia';

export const metadata = {
  title: 'ویزای تحصیلی گرجستان از ارمنستان | دانشگاه‌های تفلیس',
  description: 'اخذ ویزای تحصیلی گرجستان. نزدیکی به ایروان، هزینه زندگی پایین، دانشگاه‌های بین‌المللی در تفلیس. مشاوره رایگان.',
  alternates: { canonical: 'https://caspian.am/student-visa/georgia' },
  openGraph: {
    title: 'ویزای تحصیلی گرجستان از ارمنستان | دانشگاه‌های تفلیس',
    description: 'اخذ ویزای تحصیلی گرجستان. نزدیکی به ایروان، هزینه زندگی پایین، دانشگاه‌های بین‌المللی در تفلیس. مشاوره رایگان.',
    url: 'https://caspian.am/student-visa/georgia',
  },
};

export default function Page() {
  return <StudentVisaGeorgia />;
}
