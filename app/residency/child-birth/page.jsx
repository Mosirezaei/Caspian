import ResidencyChildBirth from '@/views/service/ResidencyChildBirth';

export const metadata = {
  title: 'اقامت ارمنستان از طریق تولد فرزند | گروه کاسپین',
  description: 'راهنمای کامل اخذ اقامت موقت ارمنستان برای والدینی که فرزندشان در ارمنستان به دنیا اومده — مدارک لازم و مراحل کار.',
  alternates: { canonical: 'https://caspian.am/residency/child-birth' },
};

export default function Page() {
  return <ResidencyChildBirth />;
}
