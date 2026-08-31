import TaskManager from '@/components/task';

export const metadata = {
  title: 'مدیریت رزروها | کاسپین گروپ',
  robots: { index: false, follow: false },
};

export default function Page() {
  return <TaskManager />;
}
