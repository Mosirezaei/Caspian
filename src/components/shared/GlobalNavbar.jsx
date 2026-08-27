import React, { useState, useEffect } from 'react';



import { Link, useLocation } from 'react-router-dom';



import { motion, AnimatePresence } from 'framer-motion';



import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';



import { useLang } from '@/lib/LanguageContext';







function YerevanClock() {



  const [now, setNow] = useState(new Date());



  useEffect(() => {



    const timer = setInterval(() => setNow(new Date()), 1000);



    return () => clearInterval(timer);



  }, []);



  const timeStr = now.toLocaleTimeString('fa-IR', { timeZone: 'Asia/Yerevan', hour: '2-digit', minute: '2-digit' });



  const dateStr = now.toLocaleDateString('fa-IR', { timeZone: 'Asia/Yerevan', month: 'long', day: 'numeric' });



  return (



    <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-foreground/40 font-vazir tabular-nums">



      <span>{dateStr}</span>



      <span className="opacity-40">|</span>



      <span dir="ltr">{timeStr}</span>



    </span>



  );



}







const navLinks = {



  fa: [



    {



      label: 'کاسپین گروه', href: '#', children: [



        { label: 'درباره ما', href: '/about' },



        { label: 'تماس با ما', href: '/contact' },



      ],



    },



    {



      label: 'ویزا', href: '#', children: [



        { label: 'وقت سفارت آمریکا', href: '/visa/embassy-usa' },



        { label: 'وقت سفارت کانادا', href: '/visa/embassy-canada' },



        { label: 'ویزای شینگن', href: '/visa/schengen' },



        { label: 'ویزای رومانی', href: '/visa/romania' },



        { label: 'ویزای روسیه', href: '/visa/russia' },



        { label: 'ویزای آمریکای جنوبی', href: '/visa/south-america' },



      ],



    },



    {



      label: 'ویزای تحصیلی', href: '/student-visa', children: [



        { label: 'ویزای تحصیلی ارمنستان', href: '/student-visa/armenia' },



        { label: 'ویزای تحصیلی روسیه', href: '/student-visa/russia' },



        { label: 'ویزای تحصیلی ترکیه', href: '/student-visa/turkey' },



        { label: 'ویزای تحصیلی شینگن', href: '/student-visa/schengen' },



        { label: 'ویزای تحصیلی رومانی', href: '/student-visa/romania' },



        { label: 'ویزای تحصیلی گرجستان', href: '/student-visa/georgia' },



      ],



    },



    {



      label: 'اقامت و مهاجرت', href: '#', children: [



        { label: 'اقامت ارمنستان', href: '/residency/armenia' },



        { label: 'اقامت ترکیه', href: '/residency/turkey' },



        { label: 'اقامت عمان', href: '/residency/oman' },



        { label: 'اقامت امارات', href: '/residency/uae' },



      ],



    },



    {



      label: 'خدمات مسافرتی', href: '#', children: [



        { label: 'پرواز', href: '/travel/flight' },



        { label: 'هتل', href: '/travel/hotel' },



        { label: 'آپارتمان', href: '/travel/apartment' },



        { label: 'تور ارمنستان', href: '/travel/tour' },



        { label: 'ترانسفر', href: '/travel/transfer' },



        { label: 'صرافی و رمزارز', href: '/travel/exchange' },



        { label: 'پشتیبانی VIP', href: '/travel/vip' },



      ],



    },



    { label: 'صفحه اصلی', href: '/' },



  ],



  en: [



    { label: 'Home', href: '/' },



    {



      label: 'Travel Services', href: '#', children: [



        { label: 'Flight', href: '/travel/flight' },



        { label: 'Hotel', href: '/travel/hotel' },



        { label: 'Apartment', href: '/travel/apartment' },



        { label: 'Armenia Tour', href: '/travel/tour' },



        { label: 'Transfer', href: '/travel/transfer' },



        { label: 'Exchange & Crypto', href: '/travel/exchange' },



        { label: 'VIP Support', href: '/travel/vip' },



      ],



    },



    {



      label: 'Residency & Immigration', href: '#', children: [



        { label: 'Armenia Residency', href: '/residency/armenia' },



        { label: 'Turkey Residency', href: '/residency/turkey' },



        { label: 'Oman Residency', href: '/residency/oman' },



        { label: 'UAE Residency', href: '/residency/uae' },



      ],



    },



    {



      label: 'Visa', href: '#', children: [



        { label: 'US Embassy Appointment', href: '/visa/embassy-usa' },



        { label: 'Canada Embassy Appointment', href: '/visa/embassy-canada' },



        { label: 'Schengen Visa', href: '/visa/schengen' },



        { label: 'Romania Visa', href: '/visa/romania' },



        { label: 'Russia Visa', href: '/visa/russia' },



        { label: 'South America Visa', href: '/visa/south-america' },



      ],



    },



    {



      label: 'Student Visa', href: '/student-visa', children: [



        { label: 'Armenia Student Visa', href: '/student-visa/armenia' },



        { label: 'Russia Student Visa', href: '/student-visa/russia' },



        { label: 'Turkey Student Visa', href: '/student-visa/turkey' },



        { label: 'Schengen Student Visa', href: '/student-visa/schengen' },



        { label: 'Romania Student Visa', href: '/student-visa/romania' },



        { label: 'Georgia Student Visa', href: '/student-visa/georgia' },



      ],



    },



    {



      label: 'Caspian Group', href: '#', children: [



        { label: 'About Us', href: '/about' },



        { label: 'Contact Us', href: '/contact' },



      ],



    },



  ],



  ru: [



    { label: 'Главная', href: '/' },



    {



      label: 'Туристические услуги', href: '#', children: [



        { label: 'Перелёт', href: '/travel/flight' },



        { label: 'Отель', href: '/travel/hotel' },



        { label: 'Апартаменты', href: '/travel/apartment' },



        { label: 'Тур по Армении', href: '/travel/tour' },



        { label: 'Трансфер', href: '/travel/transfer' },



        { label: 'Обмен и криптовалюта', href: '/travel/exchange' },



        { label: 'VIP поддержка', href: '/travel/vip' },



      ],



    },



    {



      label: 'ВНЖ и миграция', href: '#', children: [



        { label: 'ВНЖ Армении', href: '/residency/armenia' },



        { label: 'ВНЖ Турции', href: '/residency/turkey' },



        { label: 'ВНЖ Омана', href: '/residency/oman' },



        { label: 'ВНЖ ОАЭ', href: '/residency/uae' },



      ],



    },



    {



      label: 'Виза', href: '#', children: [



        { label: 'Запись в посольство США', href: '/visa/embassy-usa' },



        { label: 'Запись в посольство Канады', href: '/visa/embassy-canada' },



        { label: 'Шенгенская виза', href: '/visa/schengen' },



        { label: 'Виза в Румынию', href: '/visa/romania' },



        { label: 'Виза в Россию', href: '/visa/russia' },



        { label: 'Виза в Южную Америку', href: '/visa/south-america' },



      ],



    },



    {



      label: 'Студенческая виза', href: '/student-visa', children: [



        { label: 'Студ. виза Армении', href: '/student-visa/armenia' },



        { label: 'Студ. виза России', href: '/student-visa/russia' },



        { label: 'Студ. виза Турции', href: '/student-visa/turkey' },



        { label: 'Шенгенская студ. виза', href: '/student-visa/schengen' },



        { label: 'Студ. виза Румынии', href: '/student-visa/romania' },



        { label: 'Студ. виза Грузии', href: '/student-visa/georgia' },



      ],



    },



    {



      label: 'Caspian Group', href: '#', children: [



        { label: 'О нас', href: '/about' },



        { label: 'Контакты', href: '/contact' },



      ],



    },



  ],



};







const langs = [



  { code: 'fa', label: 'فارسی' },



  { code: 'en', label: 'EN' },



  { code: 'ru', label: 'RU' },



];







function DropdownItem({ child, isRtl, onNavigate }) {



  const [subOpen, setSubOpen] = useState(false);







  if (!child.children) {



    return (



      <Link to={child.href}



        onClick={onNavigate}



        className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors">



        {child.label}



      </Link>



    );



  }







  return (



    <div className="relative"



      onMouseEnter={() => setSubOpen(true)}



      onMouseLeave={() => setSubOpen(false)}>



      <button className="w-full flex items-center justify-between px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors">



        {child.label}



        <ChevronRight className={`w-3 h-3 flex-shrink-0 ${isRtl ? 'rotate-180' : ''}`} />



      </button>



      <AnimatePresence>



        {subOpen && (



          <motion.div



            initial={{ opacity: 0, x: isRtl ? 6 : -6 }}



            animate={{ opacity: 1, x: 0 }}



            exit={{ opacity: 0, x: isRtl ? 6 : -6 }}



            className={`absolute top-0 w-52 glass-panel border border-white/10 rounded-xl py-2 shadow-xl z-50 ${isRtl ? 'right-full mr-1' : 'left-full ml-1'}`}



            dir={isRtl ? 'rtl' : 'ltr'}



          >



            {child.children.map((sub) => (



              <Link key={sub.href + sub.label} to={sub.href}



                onClick={onNavigate}



                className="block px-4 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors">



                {sub.label}



              </Link>



            ))}



          </motion.div>



        )}



      </AnimatePresence>



    </div>



  );



}







export default function GlobalNavbar() {



  const { lang, setLang } = useLang();



  const isRtl = lang === 'fa';



  const location = useLocation();



  const [mobileOpen, setMobileOpen] = useState(false);



  const [openDropdown, setOpenDropdown] = useState(null);



  const [openGroups, setOpenGroups] = useState({});










  useEffect(() => {



    setOpenDropdown(null);



    setMobileOpen(false);



  }, [location.pathname]);







  const toggleGroup = (label) => setOpenGroups(prev => ({ ...prev, [label]: !prev[label] }));







  const links = navLinks[lang] || navLinks.fa;







  return (



    <>



      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/10" aria-label="منوی اصلی">



        <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between" dir="ltr">



          {/* Logo */}



          <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="صفحه اصلی کاسپین گروه">



            <img



              src="/images/logo.webp"



              alt="Caspian Business Group"



              width="40" height="40"



              className="h-10 w-auto"



            />



          </Link>







          {/* Desktop Nav */}



          <div className="hidden md:flex items-center gap-0.5 flex-1 justify-center">



            {links.map((link) =>



              link.children ? (



                <div key={link.label} className="relative group"



                  onMouseEnter={() => setOpenDropdown(link.label)}



                  onMouseLeave={() => setOpenDropdown(null)}>



                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary transition-colors font-medium whitespace-nowrap">



                    {link.label}



                    <ChevronDown className={`w-3 h-3 transition-transform flex-shrink-0 ${openDropdown === link.label ? 'rotate-180' : ''}`} />



                  </button>



                  <div className="absolute top-full left-0 w-full h-2" />



                  <AnimatePresence>



                    {openDropdown === link.label && (



                      <motion.div



                        initial={{ opacity: 0, y: 6 }}



                        animate={{ opacity: 1, y: 0 }}



                        exit={{ opacity: 0, y: 6 }}



                        className="absolute top-full left-0 w-52 glass-panel border border-white/10 rounded-xl py-2 shadow-xl z-50 mt-2"



                        dir={isRtl ? 'rtl' : 'ltr'}



                      >



                        {link.children.map((child) => (



                          <DropdownItem key={child.label} child={child} isRtl={isRtl} onNavigate={() => setOpenDropdown(null)} />



                        ))}



                      </motion.div>



                    )}



                  </AnimatePresence>



                </div>



              ) : (



                <Link key={link.href} to={link.href}



                  className="px-3 py-2 rounded-lg text-sm text-foreground/70 hover:text-primary transition-colors font-medium whitespace-nowrap">



                  {link.label}



                </Link>



              )



            )}



          </div>







          {/* Desktop: Language switcher (جدید و شبیه دکمه‌های صفحه فستیوال) */}



          <div className="hidden md:flex items-center gap-3 flex-shrink-0">



            <YerevanClock />



            <div className="flex gap-1 bg-[#1a1a1a] p-1 rounded-xl border border-white/10">



              {langs.map((l) => (



                <button 



                  key={l.code} 



                  onClick={() => setLang(l.code)}



                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${lang === l.code ? 'bg-amber-400 text-black shadow-md' : 'text-gray-300 hover:text-white'}`}



                >



                  {l.label}



                </button>



              ))}



            </div>



          </div>







          {/* Mobile: Lang + Hamburger */}



          <div className="md:hidden flex items-center gap-2">



            <div className="flex gap-1 bg-[#1a1a1a] p-1 rounded-lg border border-white/10">



              {langs.map((l) => (



                <button 



                  key={l.code} 



                  onClick={() => setLang(l.code)}



                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold transition-all cursor-pointer ${lang === l.code ? 'bg-amber-400 text-black' : 'text-gray-300'}`}



                >



                  {l.label}



                </button>



              ))}



            </div>



            <button onClick={() => setMobileOpen(true)}



              aria-label="باز کردن منو"



              className="p-2 rounded-lg hover:bg-white/10 transition-colors outline-none cursor-pointer">



              <Menu className="w-5 h-5 text-foreground/70" />



            </button>



          </div>



        </div>



      </nav>







      {/* Mobile Drawer */}



      <AnimatePresence>



        {mobileOpen && (



          <>



            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}



              onClick={() => setMobileOpen(false)}



              className="fixed inset-0 bg-black/60 z-50 md:hidden" />



            <motion.div



              initial={{ x: isRtl ? '100%' : '-100%' }}



              animate={{ x: 0 }}



              exit={{ x: isRtl ? '100%' : '-100%' }}



              transition={{ type: 'spring', damping: 25, stiffness: 300 }}



              dir={isRtl ? 'rtl' : 'ltr'}



              className={`fixed top-0 w-72 h-full bg-card border-white/10 z-50 flex flex-col ${isRtl ? 'right-0 border-l' : 'left-0 border-r'}`}>



              



              {/* Drawer Header */}



              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">



                <img



                  src="/images/logo.webp"



                  alt="Caspian"



                  className="h-10 w-auto"



                />



                <button onClick={() => setMobileOpen(false)}



                  aria-label="بستن منو"



                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors cursor-pointer">



                  <X className="w-4 h-4 text-foreground/60" />



                </button>



              </div>







              {/* Drawer Links */}



              <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">



                {[...links].reverse().map((link) =>



                  link.children ? (



                    <div key={link.label}>



                      <button onClick={() => toggleGroup(link.label)}



                        className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold text-primary hover:bg-white/5 transition-colors cursor-pointer">



                        {link.label}



                        <ChevronDown className={`w-4 h-4 transition-transform ${openGroups[link.label] ? 'rotate-180' : ''}`} />



                      </button>



                      <AnimatePresence>



                        {openGroups[link.label] && (



                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}



                            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">



                            <div className="ps-4 py-1 space-y-0.5 border-b border-white/5 mb-1">



                              {link.children.map((child) =>



                                child.children ? (



                                  <div key={child.label}>



                                    <button onClick={() => toggleGroup(link.label + child.label)}



                                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-semibold text-foreground/80 hover:text-primary hover:bg-white/5 transition-colors cursor-pointer">



                                      {child.label}



                                      <ChevronDown className={`w-3 h-3 transition-transform ${openGroups[link.label + child.label] ? 'rotate-180' : ''}`} />



                                    </button>



                                    <AnimatePresence>



                                      {openGroups[link.label + child.label] && (



                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}



                                          exit={{ height: 0, opacity: 0 }} className="overflow-hidden">



                                          <div className="ps-4 space-y-0.5">



                                            {child.children.map((sub) => (



                                              <Link key={sub.label} to={sub.href}



                                                onClick={() => setMobileOpen(false)}



                                                className="block px-3 py-1.5 rounded-lg text-xs text-foreground/50 hover:text-primary hover:bg-white/5 transition-colors">



                                                {sub.label}



                                              </Link>



                                            ))}



                                          </div>



                                        </motion.div>



                                      )}



                                    </AnimatePresence>



                                  </div>



                                ) : (



                                  <Link key={child.label} to={child.href}



                                    onClick={() => setMobileOpen(false)}



                                    className="block px-3 py-2 rounded-lg text-sm text-foreground/60 hover:text-primary hover:bg-white/5 transition-colors">



                                    {child.label}



                                  </Link>



                                )



                              )}



                            </div>



                          </motion.div>



                        )}



                      </AnimatePresence>



                    </div>



                  ) : (



                    <Link key={link.href} to={link.href}



                      onClick={() => setMobileOpen(false)}



                      className="block px-3 py-2.5 rounded-xl text-sm font-medium text-foreground/70 hover:text-primary hover:bg-white/5 transition-colors border-b border-white/5">



                      {link.label}



                    </Link>



                  )



                )}



              </div>



            </motion.div>



          </>



        )}



      </AnimatePresence>



    </>



  );



}

