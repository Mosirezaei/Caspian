import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { lazy, Suspense } from 'react';
import Home from '@/pages/Home';

// Static pages
const About = lazy(() => import('@/pages/About'));
const Contact = lazy(() => import('@/pages/Contact'));
const Services = lazy(() => import('@/pages/Services'));

// Festival page (New)
const Retro = lazy(() => import('@/pages/retro'));

// Visa pages
const VisaSchengen = lazy(() => import('@/pages/service/VisaSchengen'));
const VisaRomania = lazy(() => import('@/pages/service/VisaRomania'));
const VisaRussia = lazy(() => import('@/pages/service/VisaRussia'));
const VisaSouthAmerica = lazy(() => import('@/pages/service/VisaSouthAmerica'));
const EmbassyAppointment = lazy(() => import('@/pages/service/EmbassyAppointment'));

// Student Visa pages
const StudentVisa = lazy(() => import('@/pages/service/StudentVisa'));
const StudentVisaArmenia = lazy(() => import('@/pages/service/StudentVisaArmenia'));
const StudentVisaRussia = lazy(() => import('@/pages/service/StudentVisaRussia'));
const StudentVisaTurkey = lazy(() => import('@/pages/service/StudentVisaTurkey'));
const StudentVisaSchengen = lazy(() => import('@/pages/service/StudentVisaSchengen'));
const StudentVisaRomania = lazy(() => import('@/pages/service/StudentVisaRomania'));
const StudentVisaGeorgia = lazy(() => import('@/pages/service/StudentVisaGeorgia'));

// Residency pages
const Residency = lazy(() => import('@/pages/service/Residency'));
const ResidencyWork = lazy(() => import('@/pages/service/ResidencyWork'));
const ResidencyStudent = lazy(() => import('@/pages/service/ResidencyStudent'));
// Kept for backward-compat / SEO (not in main menu but routes still active)
const ResidencyTurkey = lazy(() => import('@/pages/service/ResidencyTurkey'));
const ResidencyOman = lazy(() => import('@/pages/service/ResidencyOman'));
const ResidencyUAE = lazy(() => import('@/pages/service/ResidencyUAE'));

// Dynamic service page (slug-based)
const DynamicService = lazy(() => import('@/pages/service/DynamicService'));

// Travel pages
const Flight = lazy(() => import('@/pages/travel/Flight'));
const Apartment = lazy(() => import('@/pages/travel/Apartment'));
const Tour = lazy(() => import('@/pages/travel/Tour'));
const Festivals = lazy(() => import('@/pages/travel/Festivals'));
const Hotel = lazy(() => import('@/pages/service/Hotel'));
const BusTrainBooking = lazy(() => import('@/pages/service/BusTrainBooking'));
const Exchange = lazy(() => import('@/pages/service/Exchange'));
const Transfer = lazy(() => import('@/pages/service/Transfer'));
const VipSupport = lazy(() => import('@/pages/VipSupport'));

// Other service pages
const CompanyReg = lazy(() => import('@/pages/service/CompanyReg'));
const StudentAdmission = lazy(() => import('@/pages/service/StudentAdmission'));

// Admin Task & Booking Manager Page (اصلاح مسیر ایمپورت بر اساس محل واقعی فایل task.tsx)
const TaskManager = lazy(() => import('./components/task'));

const S = ({ children }) => (
  <Suspense fallback={
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-800 rounded-full animate-spin"></div>
    </div>
  }>{children}</Suspense>
);

const AuthenticatedApp = () => {

  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Festival Page (New) */}
      <Route path="/retro" element={<S><Retro /></S>} />  
      {/* Static */}
      <Route path="/about" element={<S><About /></S>} />
      <Route path="/contact" element={<S><Contact /></S>} />
      <Route path="/services" element={<S><Services /></S>} />

      {/* ── VISA ── */}
      <Route path="/visa/schengen" element={<S><VisaSchengen /></S>} />
      <Route path="/visa/romania" element={<S><VisaRomania /></S>} />
      <Route path="/visa/russia" element={<S><VisaRussia /></S>} />
      <Route path="/visa/south-america" element={<S><VisaSouthAmerica /></S>} />
      <Route path="/visa/embassy-usa" element={<S><EmbassyAppointment /></S>} />
      <Route path="/visa/embassy-canada" element={<S><EmbassyAppointment /></S>} />
      {/* Legacy /services/* paths now 301-redirect at the edge (see vercel.json) */}

      {/* ── STUDENT VISA ── */}
      <Route path="/student-visa" element={<S><StudentVisa /></S>} />
      <Route path="/student-visa/armenia" element={<S><StudentVisaArmenia /></S>} />
      <Route path="/student-visa/russia" element={<S><StudentVisaRussia /></S>} />
      <Route path="/student-visa/turkey" element={<S><StudentVisaTurkey /></S>} />
      <Route path="/student-visa/schengen" element={<S><StudentVisaSchengen /></S>} />
      <Route path="/student-visa/romania" element={<S><StudentVisaRomania /></S>} />
      <Route path="/student-visa/georgia" element={<S><StudentVisaGeorgia /></S>} />
      {/* Legacy /services/student-visa/* paths now 301-redirect at the edge (see vercel.json) */}

      {/* ── RESIDENCY ── */}
      <Route path="/residency/armenia" element={<S><Residency /></S>} />
      <Route path="/residency/work" element={<S><ResidencyWork /></S>} />
      <Route path="/residency/business" element={<S><CompanyReg /></S>} />
      <Route path="/residency/student" element={<S><ResidencyStudent /></S>} />
      {/* Kept for SEO / backward compat — not in main menu */}
      <Route path="/residency/turkey" element={<S><ResidencyTurkey /></S>} />
      <Route path="/residency/oman" element={<S><ResidencyOman /></S>} />
      <Route path="/residency/uae" element={<S><ResidencyUAE /></S>} />
      {/* Legacy /services/residency* paths now 301-redirect at the edge (see vercel.json) */}

      {/* ── TRAVEL ── */}
      <Route path="/travel/flight" element={<S><Flight /></S>} />
      <Route path="/travel/bus" element={<S><BusTrainBooking /></S>} />
      <Route path="/travel/hotel" element={<S><Hotel /></S>} />
      <Route path="/travel/apartment" element={<S><Apartment /></S>} />
      <Route path="/travel/tour" element={<S><Tour /></S>} />
      <Route path="/travel/festivals" element={<S><Festivals /></S>} />
      <Route path="/travel/transfer" element={<S><Transfer /></S>} />
      <Route path="/travel/exchange" element={<S><Exchange /></S>} />
      <Route path="/travel/vip" element={<S><VipSupport /></S>} />
      {/* Legacy /services/hotel, /services/exchange, /vip now 301-redirect at the edge (see vercel.json) */}

      {/* Dynamic service pages (slug-based, reads from data/servicesContent.js) */}
      <Route path="/service/:slug" element={<S><DynamicService /></S>} />

      {/* Other */}
      <Route path="/services/company-registration" element={<S><CompanyReg /></S>} />
      <Route path="/services/student-admission" element={<S><StudentAdmission /></S>} />

      {/* ── Admin Dashboard Task & Booking Manager ── */}
      <Route path="/admin/dashboard/task" element={<S><TaskManager /></S>} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <AuthenticatedApp />
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App;
