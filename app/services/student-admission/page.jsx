import StudentAdmission from '@/views/service/StudentAdmission';

export const metadata = {
  title: 'پذیرش دانشگاه ارمنستان',
  description: 'پذیرش در YSU، YSMU، AUA. مشاوره رایگان انتخاب رشته.',
  alternates: { canonical: 'https://caspian.am/services/student-admission' },
  openGraph: {
    title: 'پذیرش دانشگاه ارمنستان',
    description: 'پذیرش در YSU، YSMU، AUA. مشاوره رایگان انتخاب رشته.',
    url: 'https://caspian.am/services/student-admission',
  },
};

export default function Page() {
  return <StudentAdmission />;
}
