'use client';
import React, { useState } from 'react';
import { useLang } from '@/lib/LanguageContext';
import GlobalNavbar from '@/components/shared/GlobalNavbar';
import ContactFooter from '@/components/home/ContactFooter';

function FestsContent() {
  const { lang } = useLang();
  const [standingCount, setStandingCount] = useState(0);
  const [seatedCount, setSeatedCount] = useState(0);
  const [afterPartyCount, setAfterPartyCount] = useState(0);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  
  const [inlineError, setInlineError] = useState('');
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const prices = {
    standing: 40,
    seated: 55,
    afterParty: 15
  };

  const totalTickets = standingCount + seatedCount;
  const ticketsTotal = (standingCount * prices.standing) + (seatedCount * prices.seated);
  const afterPartyTotal = afterPartyCount * prices.afterParty;
  const totalPrice = ticketsTotal + afterPartyTotal;

  const content = {
    fa: {
      title: "رزرو آنلاین بلیط فستیوال‌های اختصاصی",
      company: "کاسپین گروپ ارمنستان",
      standing: "بلیط ایستاده",
      seated: "بلیط نشسته",
      seatedDesc: "صندلی اختصاصی",
      afterPartyTitle: "بلیط افترپارتی (After Party)",
      afterPartyDesc: "دسترسی ویژه به مهمانی پایانی",
      afterPartyAlert: "ظرفیت محدود (تعداد باقی‌مانده محدود برای افترپارتی)",
      kidsFreeAlert: "👶 کودکان زیر ۱۳ سال رایگان می‌باشند.",
      afterPartyOnlyAlert: "⚠️ بلیط افترپارتی به تنهایی قابل خرید نیست. لطفاً ابتدا حداقل یک بلیط فستیوال (ایستاده یا نشسته) انتخاب کنید.",
      afterPartyMaxAlert: "⚠️ تعداد بلیط‌های افترپارتی نمی‌تواند از تعداد کل بلیط‌های فستیوال بیشتر باشد.",
      buyerInfo: "۰۲. اطلاعات تماس خریدار",
      namePlaceholder: "نام و نام خانوادگی",
      phonePlaceholder: "شماره تماس",
      nameInvalidError: "⚠️ نام و نام خانوادگی نباید شامل عدد باشد.",
      phoneInvalidError: "⚠️ لطفاً یک شماره تماس معتبر وارد کنید.",
      totalPriceText: "مجموع قابل پرداخت:",
      currency: "دلار",
      submitBtn: "تایید و ارسال سفارش به واتساپ",
      alertMsg: "لطفاً موارد خواسته شده را به درستی تکمیل کنید.",
      seatNote: "نکته مهم: صندلی‌ها شماره‌گذاری نشده‌اند و اولویت انتخاب جایگاه با کسانی است که زودتر در محل حضور یابند.",
      ticketNote: "🎟️ بلیط‌ها به صورت QR Code بوده و غیرقابل استرداد می‌باشند.",
      checkInfoNote: "لطفاً پس از بررسی دقیق اطلاعات، روی دکمه زیر کلیک کنید تا جزئیات سفارش مستقیماً به واتساپ شرکت ارسال شود.",
      totalFestText: "تعداد کل بلیط های فستیوال:",
      totalApText: "تعداد کل بلیط های افتر پارتی:",
      unit: "عدد",
      locationText: "📍 AURA by Adana Complex | SEP 20",
      stageMapTitle: "نقشه جایگاه‌ها و سالن برگزاری",
      stageMapSubtitle: "نمای شماتیک استیج، جایگاه‌های نشسته (Seated) و محوطه ایستاده / فن‌زون (Standing / Fan Zone)",
      whatsappText: (name, phone, stCount, seCount, apCount, total) => 
        `سلام، درخواست رزرو بلیط فستیوال (Disco Legends) دارم:
        
👤 نام: ${name}
📞 شماره تماس: ${phone}
${stCount > 0 ? `🎫 بلیط ایستاده: ${stCount} عدد (${(stCount * prices.standing)} دلار)\n` : ''}${seCount > 0 ? `🎫 بلیط نشسته: ${seCount} عدد (${(seCount * prices.seated)} دلار)\n` : ''}${apCount > 0 ? `🎉 افترپارتی: ${apCount} عدد (${(apCount * prices.afterParty)} دلار)\n` : '🎉 افترپارتی: خیر\n'}
💰 مجموع قابل پرداخت: ${total} دلار

🎟️ بلیط‌ها به صورت QR Code بوده و غیرقابل استرداد می‌باشند.`
    },
    en: {
      title: "Exclusive Festival Ticket Booking",
      company: "Caspian Group Armenia",
      standing: "Standing Ticket",
      seated: "Seated Ticket",
      seatedDesc: "Reserved seat",
      afterPartyTitle: "After Party Ticket",
      afterPartyDesc: "Special access to the closing party",
      afterPartyAlert: "Limited capacity for the after party",
      kidsFreeAlert: "👶 Children under 13 years old are free.",
      afterPartyOnlyAlert: "⚠️ After party tickets cannot be purchased alone. Please select a main festival ticket first.",
      afterPartyMaxAlert: "⚠️ After party tickets cannot exceed the total number of festival tickets.",
      buyerInfo: "02. Buyer Contact Info",
      namePlaceholder: "Full Name",
      phonePlaceholder: "Phone Number",
      nameInvalidError: "⚠️ Full name should not contain numbers.",
      phoneInvalidError: "⚠️ Please enter a valid phone number.",
      totalPriceText: "Total Payable:",
      currency: "$",
      submitBtn: "Confirm & Send to WhatsApp",
      alertMsg: "Please fill out the required information correctly.",
      seatNote: "Important Note: Seats are not numbered. Seating is on a first-come, first-served basis.",
      ticketNote: "🎟️ Tickets are in QR Code format and are non-refundable.",
      checkInfoNote: "Please review your information carefully before submitting your order to WhatsApp.",
      totalFestText: "Total festival tickets:",
      totalApText: "Total after party tickets:",
      unit: "pcs",
      locationText: "📍 AURA by Adana Complex | SEP 20",
      stageMapTitle: "Venue & Seating Map",
      stageMapSubtitle: "Schematic layout of the stage, seated areas, and fan zone",
      whatsappText: (name, phone, stCount, seCount, apCount, total) => 
        `Hello, I would like to book a festival ticket (Disco Legends):
        
👤 Name: ${name}
📞 Phone: ${phone}
${stCount > 0 ? `🎫 Standing Ticket: ${stCount} ($${(stCount * prices.standing)})\n` : ''}${seCount > 0 ? `🎫 Seated Ticket: ${stCount} ($${(stCount * prices.seated)})\n` : ''}${apCount > 0 ? `🎉 After Party: ${apCount} ($${(apCount * prices.afterParty)})\n` : '🎉 After Party: No\n'}
💰 Total: $${total}

🎟️ Tickets are in QR Code format and are non-refundable.`
    },
    ru: {
      title: "Бронирование билетов на фестиваль",
      company: "Caspian Group Армения",
      standing: "Стоячий билет",
      seated: "Сидячий билет",
      seatedDesc: "Зарезервированное место",
      afterPartyTitle: "Билет на After Party",
      afterPartyDesc: "Специальный доступ к вечеринке",
      afterPartyAlert: "Ограниченное количество мест на After Party",
      kidsFreeAlert: "👶 Дети до 13 лет проходят бесплатно.",
      afterPartyOnlyAlert: "⚠️ Билет на After Party не может быть куплен отдельно. Пожалуйста, выберите основной билет.",
      afterPartyMaxAlert: "⚠️ Количество билетов на After Party не может превышать общее количество билетов.",
      buyerInfo: "02. Контактная информация",
      namePlaceholder: "Имя и Фамилия",
      phonePlaceholder: "Номер телефона",
      nameInvalidError: "⚠️ Имя не должно содержать цифры.",
      phoneInvalidError: "⚠️ Пожалуйста, введите корректный номер телефона.",
      totalPriceText: "Итого к оплате:",
      currency: "$",
      submitBtn: "Подтвердить и отправить в WhatsApp",
      alertMsg: "Пожалуйста, правильно заполните необходимые поля.",
      seatNote: "Важное примечание: Места не пронумерованы. Выбор места осуществляется в порядке живой очереди.",
      ticketNote: "🎟️ Билеты представлены в формате QR Code и не подлежат возврату.",
      checkInfoNote: "Пожалуйста, проверьте правильность данных перед отправкой заказа в WhatsApp.",
      totalFestText: "Всего билетов на фестиваль:",
      totalApText: "Всего билетов на After Party:",
      unit: "шт.",
      locationText: "📍 AURA by Adana Complex | SEP 20",
      stageMapTitle: "Схема зала и мест",
      stageMapSubtitle: "Схематичное расположение сцены, сидячих мест и фан-зоны",
      whatsappText: (name, phone, stCount, seCount, apCount, total) => 
        `Здравствуйте, хочу забронировать билет на фестиваль (Disco Legends):
        
👤 Имя: ${name}
📞 Телефон: ${phone}
${stCount > 0 ? `🎫 Стоячий билет: ${stCount} ($${(stCount * prices.standing)})\n` : ''}${seCount > 0 ? `🎫 Сидячий билет: ${stCount} ($${(stCount * prices.seated)})\n` : ''}${apCount > 0 ? `🎉 After Party: ${apCount} ($${(apCount * prices.afterParty)})\n` : '🎉 After Party: Нет\n'}
💰 Итого: $${total}

🎟️ Билеты представлены в формате QR Code и не подлежат возврату.`
    },
    hy: {
      title: "Փառատոնի տոմսերի առցանց ամրագրում",
      company: "Caspian Group Հայաստան",
      standing: "Կանգնած տոմս",
      seated: "Նստած տոմս",
      seatedDesc: "Առանձնացված նստատեղ",
      afterPartyTitle: "After Party-ի տոմս",
      afterPartyDesc: "Հատուկ մուտք փակման երեկույթին",
      afterPartyAlert: "Սահմանափակ տեղեր After Party-ի համար",
      kidsFreeAlert: "👶 Մինչև 13 տարեկան երեխաների մուտքն անվճար է:",
      afterPartyOnlyAlert: "⚠️ After Party-ի տոմսը առանձին գնել հնարավոր չէ։ Խնդրում ենք նախ ընտրել հիմնական փառատոնի տոմս։",
      afterPartyMaxAlert: "⚠️ After Party-ի տոմսերի քանակը չի կարող գերազանցել փառատոնի տոմսերի ընդհանուր քանակը։",
      buyerInfo: "02. Գնորդի կոնտակտային տվյալներ",
      namePlaceholder: "Անուն Ազգանուն",
      phonePlaceholder: "Հեռախոսահամար",
      nameInvalidError: "⚠️ Անունը չպետք է պարունակի թվեր:",
      phoneInvalidError: "⚠️ Խնդրում ենք մուտքագրել վավեր հեռախոսահամար:",
      totalPriceText: "Ընդհանուր վճարման ենթակա:",
      currency: "$",
      submitBtn: "Հաստատել և ուղարկել WhatsApp",
      alertMsg: "Խնդրում ենք ճիշտ լրացնել պահանջվող դաշտերը։",
      seatNote: "Կարևոր նշում․ Նստատեղերը համարակալված չեն, տեղերի ընտրությունը կատարվում է ըստ ժամանման հերթականության։",
      ticketNote: "🎟️ Տոմսերը QR Code ձևաչափով են և ենթակա չեն վերադարձման։",
      checkInfoNote: "Խնդրում ենք ստուգել տեղեկությունները նախքան WhatsApp ուղարկելը։",
      totalFestText: "Փառատոնի տոմսերի ընդհանուր քանակը:",
      totalApText: "After Party-ի տոմսերի ընդհանուր քանակը:",
      unit: "հատ",
      locationText: "📍 AURA by Adana Complex | SEP 20",
      stageMapTitle: "Սրահի և նստատեղերի քարտեզ",
      stageMapSubtitle: "Բեմի, նստատեղերի և կանգնած գոտու (Fan Zone) սխեմատիկ պատկեր",
      whatsappText: (name, phone, stCount, seCount, apCount, total) => 
        `Բարև ձեզ, ցանկանում ենք ամրագրել փառատոնի տոմս (Disco Legends):
        
👤 Անուն: ${name}
📞 Հեռախոս: ${phone}
${stCount > 0 ? `🎫 Կանգնած տոմս: ${stCount} ($${(stCount * prices.standing)})\n` : ''}${seCount > 0 ? `🎫 Նստած տոմս: ${seCount} ($${(stCount * prices.seated)})\n` : ''}${apCount > 0 ? `🎉 After Party: ${apCount} ($${(apCount * prices.afterParty)})\n` : '🎉 After Party: Ոչ\n'}
💰 Ընդհանուր: $${total}

🎟️ Տոմսերը QR Code ձևաչափով են և ենթակա չեն վերադարձման։`
    }
  };

  const t = content[lang] || content.fa;

  const handleNameChange = (e) => {
    const val = e.target.value;
    if (/\d/.test(val)) {
      setNameError(t.nameInvalidError);
    } else {
      setNameError('');
    }
    setFullName(val);
  };

  const handlePhoneChange = (e) => {
    const val = e.target.value;
    if (val !== '' && !/^[0-9+\s-]+$/.test(val)) {
      setPhoneError(t.phoneInvalidError);
    } else {
      setPhoneError('');
    }
    setPhone(val);
  };

  const handleAfterPartyChange = (newCount) => {
    if (newCount > 0 && totalTickets === 0) {
      setInlineError(t.afterPartyOnlyAlert);
      return;
    }
    if (newCount > totalTickets) {
      setInlineError(t.afterPartyMaxAlert);
      return;
    }
    setInlineError('');
    setAfterPartyCount(Math.max(0, newCount));
  };

  const handleStandingChange = (newCount) => {
    const val = Math.max(0, newCount);
    setStandingCount(val);
    const newTotal = val + seatedCount;
    if (afterPartyCount > newTotal) {
      setAfterPartyCount(newTotal);
    }
    if (newTotal > 0 && inlineError === t.afterPartyOnlyAlert) {
      setInlineError('');
    }
  };

  const handleSeatedChange = (newCount) => {
    const val = Math.max(0, newCount);
    setSeatedCount(val);
    const newTotal = val + standingCount;
    if (afterPartyCount > newTotal) {
      setAfterPartyCount(newTotal);
    }
    if (newTotal > 0 && inlineError === t.afterPartyOnlyAlert) {
      setInlineError('');
    }
  };

  const handleWhatsAppBooking = (e) => {
    e.preventDefault();
    if (totalTickets === 0) {
      setInlineError(t.afterPartyOnlyAlert);
      return;
    }
    if (nameError || phoneError || !fullName || !phone) {
      alert(t.alertMsg);
      return;
    }

    const message = t.whatsappText(fullName, phone, standingCount, seatedCount, afterPartyCount, totalPrice);
    const encodedText = encodeURIComponent(message);
    window.open(`https://wa.me/37433149327?text=${encodedText}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-between font-vazirmatn">
      
      {/* تگ‌های سئو چندزبانه با دامنه caspian.am */}

      <div>
        <GlobalNavbar />

        <div className="py-6 sm:py-10 px-3 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full mt-16">
          
          <div className="text-center mb-8 sm:mb-10">
            <span className="text-amber-400 text-xs tracking-widest uppercase bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              {t.company}
            </span>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-black mt-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500">
              {t.title}
            </h1>
          </div>

          <div className="space-y-6">
            
            {/* بنر فستیوال */}
            <div className="bg-[#121212] border border-amber-400/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative w-full bg-black flex justify-center items-center">
                <img 
                  src="/images/retrodesk.jpeg" 
                  alt="Disco Legends Retro Stars Fest Desktop" 
                  className="w-full h-auto object-cover hidden sm:block"
                />
                <img 
                  src="/images/retromob.jpg" 
                  alt="Disco Legends Retro Stars Fest Mobile" 
                  className="w-full h-auto object-cover sm:hidden"
                />
              </div>
              <div className="p-4 sm:p-5 bg-gradient-to-t from-[#121212] to-transparent border-t border-white/5 text-left">
                <h2 className="text-base sm:text-lg font-bold text-amber-300">Disco Legends - Retro Stars Fest Vol.1</h2>
                <p className="text-xs text-gray-400 mt-1">{t.locationText}</p>
              </div>
            </div>

            {/* نقشه سالن و جایگاه‌ها */}
            <div className="bg-[#121212] border border-amber-400/20 rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 sm:p-5 bg-gradient-to-b from-[#121212] to-transparent border-b border-white/5 text-center">
                <h3 className="text-base sm:text-lg font-bold text-amber-300">{t.stageMapTitle}</h3>
                <p className="text-xs text-gray-400 mt-1">{t.stageMapSubtitle}</p>
              </div>
              <div className="relative w-full bg-[#1a1a1a] flex justify-center items-center p-4">
                <img 
                  src="/images/retro-stage.jpg" 
                  alt="Disco Legends Stage & Seating Map" 
                  className="max-h-[500px] w-auto object-contain rounded-xl border border-white/10 shadow-lg"
                />
              </div>
            </div>

            {/* فرم انتخاب تعداد و ثبت */}
            <div>
              <form onSubmit={handleWhatsAppBooking} className="bg-[#121212] border border-white/10 rounded-2xl p-4 sm:p-8 shadow-xl space-y-5 sm:space-y-6">
                
                <div>
                  <label className="block text-sm font-bold text-gray-200 mb-3">
                    {lang === 'fa' ? '۰۱. انتخاب تعداد و نوع بلیط' : '01. Select Ticket Quantity'}
                  </label>
                  <div className="space-y-3">
                    
                    <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-3.5 sm:p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">{t.standing}</h4>
                        <p className="text-[11px] sm:text-xs text-amber-400 font-bold mt-0.5">{prices.standing} {t.currency}</p>
                      </div>
                      <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-3 py-1">
                        <button type="button" onClick={() => handleStandingChange(standingCount - 1)} className="text-amber-400 font-bold px-2 text-lg">-</button>
                        <span className="text-white font-bold text-sm sm:text-base w-6 text-center">{standingCount}</span>
                        <button type="button" onClick={() => handleStandingChange(standingCount + 1)} className="text-amber-400 font-bold px-2 text-lg">+</button>
                      </div>
                    </div>

                    <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-3.5 sm:p-4 flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-sm sm:text-base">{t.seated}</h4>
                        <p className="text-[11px] sm:text-xs text-gray-400">{t.seatedDesc} - <span className="text-amber-400 font-bold">{prices.seated} {t.currency}</span></p>
                      </div>
                      <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-3 py-1">
                        <button type="button" onClick={() => handleSeatedChange(seatedCount - 1)} className="text-amber-400 font-bold px-2 text-lg">-</button>
                        <span className="text-white font-bold text-sm sm:text-base w-6 text-center">{seatedCount}</span>
                        <button type="button" onClick={() => handleSeatedChange(seatedCount + 1)} className="text-amber-400 font-bold px-2 text-lg">+</button>
                      </div>
                    </div>

                    <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-3.5 sm:p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-sm sm:text-base">{t.afterPartyTitle}</h4>
                          <p className="text-[11px] sm:text-xs text-gray-400">{t.afterPartyDesc} - <span className="text-amber-400 font-bold">{prices.afterParty} {t.currency}</span></p>
                        </div>
                        <div className="flex items-center gap-3 bg-black/40 border border-white/10 rounded-lg px-3 py-1">
                          <button type="button" onClick={() => handleAfterPartyChange(afterPartyCount - 1)} className="text-amber-400 font-bold px-2 text-lg">-</button>
                          <span className="text-white font-bold text-sm sm:text-base w-6 text-center">{afterPartyCount}</span>
                          <button type="button" onClick={() => handleAfterPartyChange(afterPartyCount + 1)} className="text-amber-400 font-bold px-2 text-lg">+</button>
                        </div>
                      </div>

                      {inlineError && (
                        <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                          <span>⚠️</span> {inlineError}
                        </div>
                      )}

                      <div className="bg-amber-400/10 border border-amber-400/30 text-amber-300 px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                        <span>⚠️</span> {t.afterPartyAlert}
                      </div>

                      <div className="bg-green-500/10 border border-green-500/30 text-green-400 px-3.5 py-2 rounded-lg text-xs font-bold flex items-center gap-2">
                        <span>👶</span> {t.kidsFreeAlert}
                      </div>
                    </div>

                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <label className="block text-xs sm:text-sm font-bold text-gray-200">{t.buyerInfo}</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div>
                      <input 
                        type="text" 
                        value={fullName}
                        onChange={handleNameChange}
                        placeholder={t.namePlaceholder} 
                        required
                        className={`w-full bg-[#1a1a1a] border rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none transition-colors ${nameError ? 'border-red-500' : 'border-white/10 focus:border-amber-400'}`}
                      />
                      {nameError && <p className="text-red-400 text-[10px] mt-1">{nameError}</p>}
                    </div>

                    <div>
                      <input 
                        type="tel" 
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder={t.phonePlaceholder} 
                        required
                        className={`w-full bg-[#1a1a1a] border rounded-xl px-4 py-3 text-white text-xs sm:text-sm focus:outline-none transition-colors text-left ${phoneError ? 'border-red-500' : 'border-white/10 focus:border-amber-400'}`}
                        dir="ltr"
                      />
                      {phoneError && <p className="text-red-400 text-[10px] mt-1 text-left">{phoneError}</p>}
                    </div>
                  </div>
                </div>

                <div className="border-t border-white/10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div>
                    <span className="text-[11px] sm:text-xs text-gray-400 block">{t.totalPriceText}</span>
                    <span className="text-xl sm:text-2xl font-black text-amber-400">{totalPrice} <span className="text-xs text-gray-400">{t.currency}</span></span>
                    
                    <span className="text-[10px] text-gray-400 block mt-1">{t.totalFestText} {totalTickets} {t.unit}</span>
                    <span className="text-[10px] text-gray-400 block mt-0.5">{t.totalApText} {afterPartyCount} {t.unit}</span>
                  </div>

                  <button 
                    type="submit"
                    className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white font-bold py-3.5 px-6 sm:px-8 rounded-xl transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] cursor-pointer flex items-center justify-center gap-2 text-xs sm:text-sm"
                  >
                    <span>💬</span> {t.submitBtn}
                  </button>
                </div>

                <div className="text-[11px] text-amber-300/80 text-center bg-amber-400/5 border border-amber-400/20 p-2.5 rounded-lg">
                  💡 {t.checkInfoNote}
                </div>

                <div className="bg-amber-400/10 border border-amber-400/30 text-amber-300 p-3.5 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-2.5 shadow-sm">
                  <span className="text-base flex-shrink-0">📌</span>
                  <p className="leading-relaxed">{t.seatNote}</p>
                </div>

                <div className="bg-amber-400/10 border border-amber-400/30 text-amber-300 p-3.5 rounded-xl text-xs sm:text-sm font-medium flex items-start gap-2.5 shadow-sm">
                  <span className="text-base flex-shrink-0">🎟️</span>
                  <p className="leading-relaxed">{t.ticketNote}</p>
                </div>

              </form>
            </div>

          </div>

        </div>
      </div>

      <div className="mt-16 bg-[#0a0a0a] border-t border-white/10">
        <ContactFooter />
      </div>
    </div>
  );
}

export default FestsContent;