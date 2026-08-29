import StudentAdmission from '@/views/service/StudentAdmission';

export const metadata = {
  title: 'پذیرش دانشگاه ارمنستان | YSU، YSMU، AUA — مشاوره رایگان',
  description: 'مشاوره و پیگیری پذیرش در دانشگاه‌های معتبر ارمنستان. YSU، YSMU پزشکی، AUA آمریکایی، دانشگاه اسلاوی. ترجمه مدارک و ثبت‌نام.',
  keywords: 'پذیرش دانشگاه ارمنستان, تحصیل پزشکی ارمنستان, دانشگاه YSU, YSMU ارمنستان',
  alternates: { canonical: 'https://caspian.am/services/student-admission' },
  openGraph: {
    title: 'پذیرش دانشگاه ارمنستان | YSU، YSMU، AUA — مشاوره رایگان',
    description: 'مشاوره و پیگیری پذیرش در دانشگاه‌های معتبر ارمنستان. YSU، YSMU پزشکی، AUA آمریکایی، دانشگاه اسلاوی. ترجمه مدارک و ثبت‌نام.',
    url: 'https://caspian.am/services/student-admission',
  },
};

export default function Page() {
  return <StudentAdmission />;
}
