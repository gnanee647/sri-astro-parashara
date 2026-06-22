import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { ASTROLOGER_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  activeTab: string;
}

export default function Footer({ setActiveTab, activeTab }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const { language } = useLanguage();

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const footerLinks = [
    { id: 'home', label: language === 'te' ? 'హోమ్' : 'Home' },
    { id: 'about', label: language === 'te' ? 'పరిచయము' : 'About Siddhanthi' },
    { id: 'services', label: language === 'te' ? 'సేవలు' : 'Services' },
    { id: 'testimonials', label: language === 'te' ? 'స్పందనలు' : 'Reviews' },
    { id: 'contact', label: language === 'te' ? 'హిందూపురం కార్యాలయం' : 'Contact Office' }
  ];

  return (
    <footer id="main-footer" className="bg-cosmic-950 border-t border-gold-500/20 text-gray-300 py-16 relative overflow-hidden">
      {/* Decorative Golden Star Map Circle */}
      <div className="absolute -bottom-20 -right-20 w-[200px] h-[200px] rounded-full border border-gold-500/10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Column 1: Brand & Bio */}
          <div className="md:col-span-12 lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-3.5 cursor-pointer group" onClick={() => handleNavClick('home')}>
              <svg viewBox="0 0 100 100" className="w-8 h-8 text-gold-500 group-hover:scale-110 transition-all duration-300 shrink-0 filter drop-shadow-[0_0_3px_rgba(212,175,55,0.4)]" fill="none" stroke="currentColor" strokeWidth="1.5" id="footer-sri-chakram-logo">
                {/* Outer Square Gates (Bhupuram) */}
                <path d="M 15 15 L 40 15 L 40 10 L 60 10 L 60 15 L 85 15 L 85 40 L 90 40 L 90 60 L 85 60 L 85 85 L 60 85 L 60 90 L 40 90 L 40 85 L 15 85 L 15 60 L 10 60 L 10 40 L 15 40 Z" strokeWidth="1.5" className="stroke-gold-400" />
                {/* Concentric Circles */}
                <circle cx="50" cy="50" r="32" className="stroke-gold-500" strokeWidth="1.2" />
                <circle cx="50" cy="50" r="28" className="stroke-gold-400" strokeWidth="1.0" />
                {/* Inner Lotus Petal circle / 8-pointed star pattern */}
                <circle cx="50" cy="50" r="24" className="stroke-gold-500" strokeWidth="0.8" strokeDasharray="3 2" />
                {/* Interactive/detailed geometric Sri Yantra representation */}
                <polygon points="50,26 28,68 72,68" className="stroke-gold-300" strokeWidth="1.0" />
                <polygon points="50,74 28,32 72,32" className="stroke-gold-300" strokeWidth="1.0" />
                <polygon points="50,34 35,60 65,60" className="stroke-gold-400" strokeWidth="0.8" />
                <polygon points="50,66 35,40 65,40" className="stroke-gold-400" strokeWidth="0.8" />
                <polygon points="50,42 41,54 59,54" className="stroke-gold-500" strokeWidth="0.7" />
                {/* Bindu - Central Dot */}
                <circle cx="50" cy="50" r="2.5" className="fill-gold-400 stroke-none" />
              </svg>
              <span className="font-serif text-base font-bold tracking-[0.15em] text-gold-300 uppercase">
                {language === 'te' ? 'శ్రీ ఆస్ట్రోపరాశర' : 'SRI ASTROPARASHARA'}
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
              {language === 'te' 
                ? 'శ్రీ ఎమ్. చంద్ర మోహన్ సిద్ధాంతి గారి ఆధ్వర్యంలో నడుస్తున్న ఈ శ్రీ ఆస్ట్రోపరాశర వైదిక సేవా కేంద్రం హిందూపురంలో గత 32 సంవత్సరాలుగా అపారమైన కీర్తిని సంపాదించుకుంది. నిష్కల్మషమైన వైదిక సంప్రదాయ గణితం, నమ్మకమైన విశ్లేషణ, సరళమైన మరియు మితవ్యయ పరిహారాలకు ఇది నిదర్శనం.' 
                : 'Led by M. Chandra Mohan Siddhanthi Garu with 32+ Years of traditional Vedic experience in Hindupur Mandal, Andhra Pradesh. Dedicated to manual computations, high ethical integrity, and authentic remedies.'}
            </p>

            <span className="inline-flex px-3 py-1 bg-gold-900/30 border border-gold-500/20 text-gold-300 text-[10px] font-mono font-medium rounded-full">
              {language === 'te' ? 'అందుబాటులో ఉన్న భాషలు: తెలుగు & English (సంప్రదింపు: తెలుగు మాత్రమే)' : 'Languages Supported: English & Telugu (Consultation: Telugu Only)'}
            </span>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-6 lg:col-span-3 space-y-4">
            <h4 className="font-serif text-xs font-bold tracking-wider text-gold-300 uppercase block">
              {language === 'te' ? 'త్వరిత నావిగేషన్' : 'Quick Navigations'}
            </h4>
            <ul className="space-y-2 text-xs">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    id={`footer-link-${link.id}`}
                    onClick={() => handleNavClick(link.id)}
                    className={`hover:text-gold-200 transition-colors duration-200 cursor-pointer ${
                      activeTab === link.id ? 'text-gold-300 font-semibold' : 'text-gray-400'
                    }`}
                  >
                    • {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: High Conversion Call-To-Action Hotspots */}
          <div className="md:col-span-6 lg:col-span-4 space-y-4">
            <h4 className="font-serif text-xs font-bold tracking-wider text-gold-300 uppercase block">
              {language === 'te' ? 'బుకింగ్ మరియు కాల్స్' : 'Consultation Bookings'}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {language === 'te' 
                ? 'మేము దేశ విదేశాల నుండి ఆన్‌లైన్ ఫోన్ సంప్రదింపులను సగర్వంగా స్వీకరిస్తాము. సిద్ధాంతి గారితో మాట్లాడడానికి నేరుగా కాల్ చేయండి లేదా వాట్సాప్ సందేశం పంపండి:' 
                : 'We welcome online phone consultations worldwide. Reach out directly on WhatsApp or voice call below:'}
            </p>
            <div className="space-y-2">
              <a
                href={`tel:${ASTROLOGER_INFO.contact.phone}`}
                className="flex items-center gap-3 bg-cosmic-900 hover:bg-cosmic-800 border border-gold-500/25 p-3 rounded-lg transition-all duration-200 group text-sm"
              >
                <div className="p-1.5 rounded-lg bg-gold-400/10 text-gold-400 group-hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-400 font-mono tracking-widest uppercase">
                    {language === 'te' ? 'నేరుగా కాల్ చేయండి' : 'DIRECT RING'}
                  </p>
                  <p className="font-semibold text-white group-hover:text-gold-200 font-mono">{ASTROLOGER_INFO.contact.formattedPhone}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-emerald-950/20 hover:bg-emerald-950/40 border border-emerald-500/20 p-3 rounded-lg transition-all duration-200 group text-sm"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">
                    {language === 'te' ? 'వాట్సాప్ చాట్' : 'WHATSAPP CHAT'}
                  </p>
                  <p className="font-semibold text-emerald-300 group-hover:text-emerald-200 font-mono">
                    {language === 'te' ? 'తక్షణ స్పందన చాట్' : 'Immediate Response Chat'}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Traditional Vedic Spiritual Disclaimer block */}
        <div className="mt-12 pt-8 border-t border-gold-500/10 text-[10px] sm:text-xs text-center text-slate-500 space-y-4 max-w-4xl mx-auto leading-relaxed">
          <p>
            <strong>{language === 'te' ? 'జ్యోతిష్య ఫలితాల విధివిధానాల గమనిక:' : 'Vedic Astrological Disclaimer (జాతక ఫలితాల నివేదిక గమనిక):'}</strong>{' '}
            {language === 'te' 
              ? 'వైదిక జ్యోతిష్యం అనేది ప్రాచీన కాలం నాటి గణిత ఆధారిత సూచిక శాస్త్రం. ఇది వ్యక్తిగత కర్మలు, భగవదనుగ్రహం మరియు మానవ ప్రయత్నం ఆధారంగా నిర్దేశించబడుతుంది. జీవితంలో ఎదురయ్యే సవాళ్లకు మార్గదర్శకం మాత్రమే. శ్రీ ఎమ్. చంద్ర మోహన్ సిద్ధాంతి గారు సనాతన ధర్మ శాస్త్రాన్ని ఆచరిస్తూ ఉత్తమ మార్గాన్ని సూచిస్తారే తప్ప జాతక ఫలితాలను మార్చే శక్తులు కర్మ సిద్ధాంతాన్ని మాత్రమే అనుసరిస్తాయి.' 
              : 'Vedic Astrology (Jyotish Shastra) is an ancient predictive science that offers strategic paths and celestial mapping based on historical coordinates. It serves as a guide for self-alignment and decision-making. Individual results are subject to personal actions (Karma), divine grace, and spiritual prayers. Sri M. Chandra Mohan Siddhanthi offers traditional calculations in high faith but cannot assure absolute or infallible outcomes.'}
          </p>
          <p className="text-[9px] text-gold-500/50 uppercase font-mono">
            © {currentYear} Sri AstroParashara Hindupur Office. All rights reserved. • {language === 'te' ? 'హిందూపురం వైదిక జ్యోతిష్య పరిషత్' : 'Traditional Hindupur Jyotishya Mandal'} • Developed with spiritual devotion
          </p>
        </div>
      </div>
    </footer>
  );
}
