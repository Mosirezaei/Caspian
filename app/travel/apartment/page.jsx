import Apartment from '@/views/travel/Apartment';
import JsonLd from '@/components/shared/JsonLd';
import { apartmentServiceSchema } from '@/lib/schema';

export const metadata = {
  title: 'اجاره آپارتمان مبله ایروان | از ۳۰ دلار',
  description: 'اجاره آپارتمان مبله در ایروان با عکس واقعی قبل از رزرو، پرداخت ریالی/USDT، ترانسفر فرودگاهی. استودیو تا ۳ خوابه در بهترین مناطق ایروان.',
  keywords: 'اجاره آپارتمان در ایروان, اجاره خانه در ارمنستان, سوئیت در ایروان ارمنستان, آپارتمان مبله در ایروان, اجاره روزانه آپارتمان در مرکز ایروان, قیمت اجاره آپارتمان ماهانه در ارمنستان, اجاره آپارتمان در خیابان آبوویان ایروان, سوئیت ارزان در ایروان بدون واسطه, اجاره سوئیت نزدیک متروی ایروان, اجاره آپارتمان یک خوابه در ایروان, اجاره آپارتمان برای دانشجویان ایرانی در ایروان, اجاره ویلا در ارمنستان, رزرو آنلاین سوئیت در ایروان بدون پیش‌پرداخت, اجاره آپارتمان طولانی‌مدت در ایروان برای مهاجران, اجاره آپارتمان سه ماهه در ایروان, اجاره آپارتمان شش ماهه در ایروان, بهترین محله برای اجاره خانه در ایروان',
  alternates: { canonical: 'https://caspian.am/travel/apartment' },
  openGraph: {
    title: 'اجاره آپارتمان مبله در ایروان | روزانه از ۳۰ دلار و ماهانه',
    description: 'اجاره آپارتمان مبله در ایروان با عکس واقعی قبل از رزرو، پرداخت ریالی/USDT، ترانسفر فرودگاهی.',
    url: 'https://caspian.am/travel/apartment',
    images: [{ url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200&q=80', width: 1200, height: 630 }],
  },
};

// Mirrors ARMENIA_LOCATIONS in src/views/travel/Apartment.jsx.
const LOCATIONS_FOR_SCHEMA = [
  'Yerevan — Kentron (City Center)',
  'Yerevan — Northern Ave & Republic Square',
  'Yerevan — Cascade Area',
  'Yerevan — Arabkir (Komitas Ave)',
  'Yerevan — Davtashen & Nor Nork',
  'Tsaghkadzor',
  'Dilijan',
  'Lake Sevan',
];

export default function Page() {
  return (
    <>
      <JsonLd data={apartmentServiceSchema(LOCATIONS_FOR_SCHEMA)} />
      <Apartment />
    </>
  );
}
