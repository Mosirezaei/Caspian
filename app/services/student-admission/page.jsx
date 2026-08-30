import StudentAdmission from '@/views/service/StudentAdmission';

export const metadata = {
  title: 'پذیرش دانشگاه ارمنستان | YSU، YSMU، AUA — مشاوره رایگان',
  description: 'مشاوره و پیگیری پذیرش در دانشگاه‌های معتبر ارمنستان. YSU، YSMU پزشکی، AUA آمریکایی، دانشگاه اسلاوی. ترجمه مدارک و ثبت‌نام.',
  keywords: 'پذیرش دانشگاه ارمنستان, تحصیل پزشکی ارمنستان, دانشگاه YSU, YSMU ارمنستان, دانشگاه‌های ارمنستان, تحصیل در ارمنستان, تحصیل پزشکی و دندانپزشکی در ارمنستان, شرایط پذیرش دانشگاه دولتی ایروان, هزینه تحصیل در دانشگاه‌های ارمنستان به دلار, تحصیل در ارمنستان بدون مدرک زبان, خوابگاه دانشجویی در ایروان, مورد تایید بودن دانشگاه‌های ارمنستان, رشته‌های دانشگاهی ارمنستان, بورسیه تحصیلی دانشگاه‌های ارمنستان, ارزش مدرک دانشگاه ارمنستان در ایران',
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
