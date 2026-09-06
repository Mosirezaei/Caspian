import ImmigrationLawChangesArmenia from '@/views/blog/ImmigrationLawChangesArmenia';
import JsonLd from '@/components/shared/JsonLd';
import { articleSchema } from '@/lib/schema';

export const metadata = {
  title: 'قوانین جدید مهاجرتی ارمنستان: تحولات اساسی در اقامت و مهاجرت | گروه کاسپین',
  description: 'تحلیل کامل اصلاحات جدید قانون اتباع خارجی ارمنستان: دیجیتالی‌سازی، شرایط مالی شرکت‌ها، حذف اقامت ۱۰ ساله، ویزای ورود کاری و سهمیه‌بندی سالانه.',
  keywords: 'قوانین جدید مهاجرتی ارمنستان, اقامت ارمنستان, اصلاحات قانون اتباع خارجی, ویزای ورود کاری ارمنستان, اقامت دائم ارمنستان',
  alternates: { canonical: 'https://caspian.am/blog/armenia-immigration-law-changes' },
  openGraph: {
    title: 'قوانین جدید مهاجرتی ارمنستان: تحولات اساسی در اقامت و مهاجرت',
    description: 'تحلیل کامل اصلاحات جدید قانون اتباع خارجی ارمنستان برای متقاضیان ایرانی.',
    url: 'https://caspian.am/blog/armenia-immigration-law-changes',
  },
};

export default function Page() {
  return (
    <>
      <JsonLd data={articleSchema({
        headline: 'قوانین جدید مهاجرتی ارمنستان: تحولات اساسی در اقامت و مهاجرت',
        description: 'تحلیل کامل اصلاحات جدید قانون اتباع خارجی ارمنستان: دیجیتالی‌سازی، شرایط مالی شرکت‌ها، حذف اقامت ۱۰ ساله، ویزای ورود کاری و سهمیه‌بندی سالانه.',
        url: 'https://caspian.am/blog/armenia-immigration-law-changes',
        datePublished: '2026-09-04',
        dateModified: '2026-09-04',
      })} />
      <ImmigrationLawChangesArmenia />
    </>
  );
}
