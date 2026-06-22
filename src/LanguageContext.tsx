import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'te' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Define translation dictionary
export const translations: Record<Language, Record<string, string>> = {
  te: {
    // Nav & Common
    'nav.home': 'హోమ్',
    'nav.about': 'పరిచయము',
    'nav.services': 'సేవలు',
    'nav.testimonials': 'స్పందనలు',
    'nav.faq': 'ప్రశ్నోత్తరాలు',
    'nav.contact': 'సంప్రదించండి',
    'cta.call_now': 'ఇప్పుడే కాల్ చేయండి',
    'cta.call_siddhanthi_ji': 'సిద్ధాంతి గారికి కాల్ చేయండి',
    'cta.whatsapp_enquiry': 'వాట్సాప్ విచారణ',
    'cta.book_consultation': 'సంప్రదింపు బుక్ చేయండి',
    'cta.read_bio': 'సిద్ధాంతి గారి పరిచయము చదవండి',
    'cta.schedule_audit': 'సమయం ఖరారు చేయండి',
    'cta.explore_services': 'సేవలను అన్వేషించండి',
    'cta.submit_details': 'వివరాలను సమర్పించండి',
    'status.available_online': 'ఆన్‌లైన్ సంప్రదింపులకు అందుబాటులో కలరు (తెలుగు)',
    'status.telugu_only': 'తెలుగులో మాత్రమే సంప్రదింపులు',

    // Hero Section
    'hero.badge': '32+ సంవత్సరాల సాంప్రదాయ వైదిక అనుభవం',
    'hero.expert_areas': 'ఉద్యోగ • వివాహ • వాస్తు • జాతక నిర్ణయ నిపుణులు',
    'hero.sub_para_1': 'మీ జీవితంలో ఎదురయ్యే ముఖ్యమైన ఘట్టాలను వైదిక మార్గదర్శకత్వంలో విజయవంతంగా నడిపించండి.',
    'hero.sub_para_2': 'సాంప్రదాయ పరాశర సిద్ధాంతం (పరాశర సిద్ధాంతం) ఆధారంగా, మేము అత్యంత ఖచ్చితమైన విశ్లేషణను మరియు సరళమైన సాంప్రదాయ పరిహారాలను కేవలం తెలుగులో మాత్రమే అందిస్తాము.',

    // About Section
    'about.experience': '32+ సంవత్సరాల అనుభవం',
    'about.subtitle': 'సాంప్రదాయ జ్యోతిష్య నిపుణులు',
    'about.heading': 'ప్రఖ్యాత సిద్ధాంతి మరియు మార్గదర్శకులు',
    'about.para1': 'గౌరవనీయులైన వైదిక సిద్ధాంతి శ్రీ జ్యోతిష్య ప్రవీణ ఎమ్. చంద్ర మోహన్ సిద్ధాంతి గారు గత మూడు దశాబ్దాలుగా జ్యోతిష్య రంగంలో విశేష సేవలు అందిస్తున్నారు. పరాశర జ్యోతిష్య సిద్ధాంతాన్ని పునాదిగా చేసుకుని, వేలాది కుటుంబాలకు సరైన మార్గదర్శకత్వాన్ని అందించారు.',
    'about.para2': 'పరాశర మహర్షి ప్రవచించిన ప్రాచీన నియమాల ఆధారంగా జాతక చక్ర విశ్లేషణను హస్తలాఘవంతో కాకుండా శాస్త్రీయంగా లెక్కిస్తారు. వివాహం ఆలస్యం కావడం, కొలువులో సమస్యలు, వ్యాపారంలో ఒడిదుడుకులు, వాస్తు దోషాలు మరియు శుభ సమయాల నిర్ణయాల్లో అత్యంత విశ్వసనీయమైన సేవలను అందిస్తున్నారు.',
    'about.quick_facts': 'ముఖ్యమైన విశేషాలు',
    'about.fact_experience': '32+ సంవత్సరాల నిరంతర సాధన',
    'about.fact_authenticity': 'ఖరీదైన రాళ్ళు, అనవసర పూజలు లేవు - కేవలం సరళమైన స్వంత పరిహారాలు మాత్రమే',
    'about.fact_telugu': 'తెలుగు సంస్కృతి, జీవన విధానాలకు తగినట్లుగా సంప్రదింపులు',
    'about.fact_worldwide': 'ఆన్‌లైన్ ద్వారా ప్రపంచవ్యాప్తంగా వందలాది మందికి సేవలు',

    // Services Section
    'services.badge': 'మా సేవలు',
    'services.heading': 'సాంప్రదాయ వైదిక సేవలు',
    'services.subheading': 'మీ ప్రతి సమస్యకు మరియు నూతన ప్రారంభానికి శాస్త్రీయ పరిష్కారాలు',
    'services.enquire_now': 'ఇప్పుడే విచారించండి',
    'services.ideal_for': 'ఎవరికి అనుకూలం:',
    'services.key_benefits': 'ముఖ్యమైన ప్రయోజనాలు:',
    'services.close': 'మూసివేయి',

    // Testimonials
    'testimonials.badge': 'కస్టమర్ల స్పందనలు',
    'testimonials.heading': 'విశ్వసనీయ సేవలకు నిదర్శనం',
    'testimonials.subheading': 'సిద్ధాంతి గారి జ్యోతిష్య మార్గదర్శకత్వం ద్వారా లబ్ధి పొందిన భక్తుల నిజాయితీ గల అభిప్రాయాలు',
    'testimonials.verified': 'నిజమైన స్పందన',

    // FAQ Section
    'faq.badge': 'ప్రశ్నోత్తరాలు',
    'faq.heading': 'తరచుగా అడిగే ప్రశ్నలు',
    'faq.subtext': 'వైదిక జ్యోతిష్యం మరియు మన సంప్రదింపుల విధానాల గురించి సందేహాల నివృత్తి',

    // Contact Section
    'contact.badge': 'సంప్రదించండి',
    'contact.heading': 'మీ జ్యోతిష్య సంప్రదింపును షెడ్యూల్ చేయండి',
    'contact.subheading': 'క్రింది ఫారమ్ ద్వారా మీ వివరాలను సమర్పించండి, సిద్ధాంతి గారు మీ జాతక చక్రాన్ని విశ్లేషించి సంప్రదిస్తారు.',
    'contact.form_title': 'జాతక వివరాల నమోదు ఫారమ్',
    'contact.form_subtitle': 'ఖచ్చితమైన గ్రహ లెక్కల కొరకు కచ్చితమైన సమయం మరియు పుట్టిన ప్రదేశం తెలియజేయండి.',
    
    // Contact Form Fields
    'form.full_name': 'పూర్తి పేరు (Full Name)',
    'form.birth_date': 'పుట్టిన తేదీ (Birth Date)',
    'form.birth_time': 'పుట్టిన సమయం (Precise Birth Time)',
    'form.birth_place': 'పుట్టిన ప్రదేశం (Birth Place)',
    'form.select_service': 'కావాల్సిన సేవ (Select Required Service)',
    'form.preferred_contact': 'సంప్రదించాల్సిన మార్గం (Preferred Contact)',
    'form.whatsapp_placeholder': 'వాట్సాప్ సందేశం',
    'form.call_placeholder': 'ఫోన్ ద్వారా మాట్లాడటం',
    'form.notes': 'మీ ప్రశ్నలు / ఇతర వివరాలు (Your Questions / Custom Notes)',
    'form.notes_hint': 'మీ కొలువు, వివాహం లేదా వ్యాపారానికి సంబంధించిన ముఖ్యమైన సందేహాలను ఇక్కడ రాయవచ్చు.',
    'form.success_msg': 'మీ వివరాలు విజయవంతంగా నమోదైనవి! చంద్ర మోహన్ సిద్ధాంతి గారు త్వరలోనే మిమ్మల్ని సంప్రదిస్తారు.',
    'form.submitting': 'సమర్పిస్తున్నారు...',

    // Service Map Titles (Fallback)
    'service.horoscope': 'జాతక పరిశీలన',
    'service.marriage': 'వివాహ పొంతనలు',
    'service.career': 'ఉద్యోగ, వ్యాపార జాతకం',
    'service.vastu': 'గృహ వాస్తు',
    'service.muhurtham': 'శుభ ముహూర్తాలు',

    // Contact Details Cards
    'contact.location_title': 'సంప్రదించవలసిన చిరునామా',
    'contact.location_desc': 'హిందూపురం, శ్రీ సత్యసాయి జిల్లా, ఆంధ్రప్రదేశ్ (515201)',
    'contact.timings_title': 'సంప్రదింపుల సమయాలు',
    'contact.timings_desc': 'ఉదయం 9:00 నుండి రాత్రి 8:00 వరకు (అన్ని రోజులు)',
    'contact.online_title': 'ఆన్‌లైన్ సంప్రదింపులు',
    'contact.online_desc': 'ప్రపంచవ్యాప్తంగా వాట్సాప్ మరియు ఫోన్ కాల్ ద్వారా జాతక సేవలు లభించును',

    // Footer
    'footer.established': 'పరిపాలన ప్రారంభం: 1994 • అనుభవం: 32+ సంవత్సరాలు',
    'footer.disclaimer': 'గమనిక: సిద్ధాంతి గారి సూచనలు సాంప్రదాయ వైదిక శాస్త్ర నియమాల ప్రకారం అందించబడతాయి. విశ్వాసంతో పాటించే వారికి ఖచ్చితమైన ఫలితాలు గోచరిస్తాయి.'
  },
  en: {
    // Nav & Common
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.testimonials': 'Reviews',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact',
    'cta.call_now': 'Call Now',
    'cta.call_siddhanthi_ji': 'Call Siddhanthi Ji',
    'cta.whatsapp_enquiry': 'WhatsApp Enquiry',
    'cta.book_consultation': 'Book Consultation',
    'cta.read_bio': 'Read Siddhanthi’s Bio',
    'cta.schedule_audit': 'Schedule Consultation',
    'cta.explore_services': 'Explore Services',
    'cta.submit_details': 'Submit Details',
    'status.available_online': 'Available for Online Consultations (Telugu)',
    'status.telugu_only': 'Telugu Only',

    // Hero Section
    'hero.badge': '32+ Years of Traditional Vedic Excellence',
    'hero.expert_areas': 'Career • Marriage • Vastu • Horoscope Analysis Specialist',
    'hero.sub_para_1': 'Navigate your life’s milestones with premium, high-integrity astrology services.',
    'hero.sub_para_2': 'Based on the traditional Parashara Siddhanta (పరాశర సిద్ధాంతం), we provide accurate predictions and clean, inexpensive traditional remedies exclusively in Telugu.',

    // About Section
    'about.experience': '32+ Years of Experience',
    'about.subtitle': 'Traditional Astrologer & Advisor',
    'about.heading': 'Renowned Siddhanthi & Guide',
    'about.para1': 'Respected Vedic Astrologer, Jyotishya Praveena Sri M. Chandra Mohan Siddhanthi Garu has been rendering outstanding spiritual guidance for over three decades. Grounded strongly in Parashara Jyotishya Siddhanta, he is a trusted beacon for thousands of families.',
    'about.para2': 'Instead of computer-generated automated calculations, his chart evaluations are meticulously custom-tallied using planetary formulas established by Maharishi Parashara. He provides clear directions on wedding matchmaking, career promotions, business stability, house vastu, and auspicious timings.',
    'about.quick_facts': 'Quick Highlights',
    'about.fact_experience': 'Over 32 years of uninterrupted traditional practice',
    'about.fact_authenticity': 'No commercial fears or expensive gems - emphasis on simple daily stotra remedies',
    'about.fact_telugu': 'Localized consulting in Telugu matches cultural paradigms perfectly',
    'about.fact_worldwide': 'State-of-the-art virtual consulting serves Telugu diaspora across the globe',

    // Services Section
    'services.badge': 'Our Services',
    'services.heading': 'Our Sacred Services',
    'services.subheading': 'Scientific remedies and accurate readings for all lifetime milestones',
    'services.enquire_now': 'Enquire Now',
    'services.ideal_for': 'Ideal For:',
    'services.key_benefits': 'Key Benefits:',
    'services.close': 'Close',

    // Testimonials
    'testimonials.badge': 'Testimonials',
    'testimonials.heading': 'Trusted by Thousand Seekers',
    'testimonials.subheading': 'Read the honest feedback of seekers who gained peace and direction through his traditional counseling.',
    'testimonials.verified': 'Verified Feedback',

    // FAQ Section
    'faq.badge': 'FAQs',
    'faq.heading': 'Frequently Asked Questions',
    'faq.subtext': 'Answers to common questions about Vedic astrology and our online consultation process',

    // Contact Section
    'contact.badge': 'Schedule',
    'contact.heading': 'Book Your Astrology Consultation',
    'contact.subheading': 'Fill out the form below with your birth details. Siddhanthi Ji will manually calculate your chart and connect with you.',
    'contact.form_title': 'Birth Details Form',
    'contact.form_subtitle': 'Accurate time and place of birth are critical for calculations.',

    // Contact Form Fields
    'form.full_name': 'Full Name',
    'form.birth_date': 'Birth Date',
    'form.birth_time': 'Precise Birth Time',
    'form.birth_place': 'Birth Place',
    'form.select_service': 'Select Service Needed',
    'form.preferred_contact': 'Preferred Contact Channel',
    'form.whatsapp_placeholder': 'WhatsApp Message',
    'form.call_placeholder': 'Voice Call',
    'form.notes': 'Your Questions / Custom Notes',
    'form.notes_hint': 'Briefly write any queries regarding Career, Marriage Compatibility, Health, or Business.',
    'form.success_msg': 'Details submitted successfully! Chandra Mohan Siddhanthi Garu will analyze your chart and contact you shortly.',
    'form.submitting': 'Submitting...',

    // Service Map Titles (Fallback)
    'service.horoscope': 'Horoscope Reading',
    'service.marriage': 'Marriage Matching',
    'service.career': 'Career & Business Guidance',
    'service.vastu': 'Vastu Consultation',
    'service.muhurtham': 'Muhurtham Selection',

    // Contact Details Cards
    'contact.location_title': 'Office Location',
    'contact.location_desc': 'Hindupur, Sri Sathya Sai District, Andhra Pradesh (515201)',
    'contact.timings_title': 'Consultation Hours',
    'contact.timings_desc': '9:00 AM to 8:00 PM (All days)',
    'contact.online_title': 'Remote Consultations',
    'contact.online_desc': 'Available worldwide via WhatsApp Call & Voice Recording briefs',

    // Footer
    'footer.established': 'Established: 1994 • Experience: 32+ Years',
    'footer.disclaimer': 'Disclaimer: The consultations and suggestions offered by Sri Siddhanthi Garu are based on ancient traditional rules of Vedic Astrology. Authentic remedies show the best results when pursued with positive intent.'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Use 'te' (Telugu) as the default language
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('app_language');
    return (saved === 'en' || saved === 'te') ? saved : 'te';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('app_language', lang);
  };

  const t = (key: string): string => {
    const dict = translations[language];
    return dict[key] || translations['te'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
