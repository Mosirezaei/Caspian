import StudentVisaGeorgia from '@/views/service/StudentVisaGeorgia';

export const metadata = {
  title: 'ویزای تحصیلی گرجستان',
  description: 'اخذ ویزای تحصیلی گرجستان. نزدیکی به ایروان و هزینه پایین.',
  alternates: { canonical: 'https://caspian.am/student-visa/georgia' },
  openGraph: {
    title: 'ویزای تحصیلی گرجستان',
    description: 'اخذ ویزای تحصیلی گرجستان. نزدیکی به ایروان و هزینه پایین.',
    url: 'https://caspian.am/student-visa/georgia',
  },
};

export default function Page() {
  return <StudentVisaGeorgia />;
}
