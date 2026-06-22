import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { ASTROLOGER_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', telugu: 'హోమ్' },
    { id: 'about', label: 'About', telugu: 'పరిచయము' },
    { id: 'services', label: 'Services', telugu: 'సేవలు' },
    { id: 'testimonials', label: 'Reviews', telugu: 'స్పందనలు' },
    { id: 'contact', label: 'Contact', telugu: 'సంప్రదించండి' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    const element = document.getElementById(id);
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

  const toggleLanguage = () => {
    setLanguage(language === 'te' ? 'en' : 'te');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? 'bg-cosmic-950/95 backdrop-blur-md border-b border-gold-500/20 py-1.5 sm:py-2 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-cosmic-950/80 to-transparent py-3 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo Brand */}
          <div
            id="brand-logo"
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-2 sm:space-x-3.5 cursor-pointer group min-w-0"
          >
            <svg viewBox="0 0 100 100" className="w-8 h-8 sm:w-10 sm:h-10 text-gold-500 group-hover:scale-110 transition-all duration-300 shrink-0 filter drop-shadow-[0_0_3px_rgba(212,175,55,0.4)]" fill="none" stroke="currentColor" strokeWidth="1.5" id="header-sri-chakram-logo">
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
            <div className="flex flex-col min-w-0 justify-center">
              <span className={`${language === 'te' ? 'font-pragati' : 'font-serif'} text-[13px] xs:text-base sm:text-lg md:text-xl font-bold tracking-wider sm:tracking-[0.12em] text-gold-300 uppercase leading-snug truncate pb-0.5`}>
                {language === 'te' ? 'శ్రీ ఆస్ట్రోపరాశర' : 'SRI ASTROPARASHARA'}
              </span>
              <span className={`${language === 'te' ? 'font-pragati text-[9px] xs:text-[11px]' : 'font-mono text-[8px] xs:text-[10px]'} text-slate-350 font-medium tracking-wide uppercase leading-tight truncate`}>
                {language === 'te' ? 'ఎమ్. చంద్ర మోహన్ సిద్ధాంతి' : 'M. CHANDRA MOHAN SIDDHANTHI'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const primaryLabel = language === 'te' ? item.telugu : item.label;
              const secondaryLabel = language === 'te' ? item.label : item.telugu;

              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 rounded-md text-sm transition-all duration-300 relative group flex flex-col items-center cursor-pointer`}
                >
                  <span
                    className={`font-semibold tracking-wider text-xs uppercase ${
                      isActive ? 'text-gold-300 font-bold' : 'text-slate-300 group-hover:text-gold-200'
                    }`}
                  >
                    {primaryLabel}
                  </span>
                  <span className="text-[9px] text-gold-400 font-medium mt-0.5 opacity-80 group-hover:opacity-100">
                    {secondaryLabel}
                  </span>
                  
                  {/* Underline indicators */}
                  {isActive ? (
                    <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-gold-300"></span>
                  ) : (
                    <span className="absolute bottom-0 left-1/2 right-1/2 h-[1px] bg-gold-400 transition-all duration-300 group-hover:left-3 group-hover:right-3"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Call-to-Action Quick Button & Switcher Button */}
          <div className="hidden sm:flex items-center space-x-4">
            
            {/* Interactive Language Selector Switcher Pill */}
            <div className="flex items-center bg-cosmic-900 border border-gold-500/30 p-0.5 rounded-lg overflow-hidden shrink-0 shadow-inner">
              <button
                onClick={() => setLanguage('te')}
                className={`px-3 py-1 text-[11px] font-bold uppercase transition-all duration-200 rounded-md cursor-pointer ${
                  language === 'te'
                    ? 'bg-gold-500 text-cosmic-950 font-extrabold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                తెలుగు
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 text-[11px] font-bold uppercase transition-all duration-200 rounded-md cursor-pointer ${
                  language === 'en'
                    ? 'bg-gold-500 text-cosmic-950 font-extrabold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                EN
              </button>
            </div>

            <a
              id="header-call-btn"
              href={`tel:${ASTROLOGER_INFO.contact.phone}`}
              className="flex items-center gap-2 bg-gold-500 text-cosmic-950 px-5 py-2 font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors duration-250 border border-gold-500 shadow-sm rounded-sm"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              {t('cta.call_now')}
            </a>
          </div>

          {/* Mobile elements (menu toggle + small language switcher) */}
          <div className="flex lg:hidden items-center space-x-2 sm:space-x-3 shrink-0">
            
            {/* Minimal language toggle on mobile with larger touch targets */}
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-2 border border-gold-500/30 text-gold-300 bg-gold-500/5 hover:bg-gold-500/10 rounded-md text-[10px] sm:text-xs font-bold uppercase tracking-wider flex items-center gap-1 cursor-pointer transition-colors shrink-0"
              title="Change Language / భాషను మార్చండి"
            >
              <Globe className="w-3 h-3 text-gold-400 shrink-0" />
              <span>{language === 'te' ? 'English' : 'తెలుగు'}</span>
            </button>

            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2.5 rounded-md text-gold-300 hover:text-white hover:bg-cosmic-900 border border-gold-500/10 focus:outline-none transition-colors duration-200 cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden absolute top-full left-0 w-full bg-cosmic-950/98 backdrop-blur-lg border-b border-gold-500/20 py-4 px-6 shadow-2xl transition-all duration-300 z-50 animate-fadeIn"
        >
          {/* Main List */}
          <div className="space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              const primaryLabel = language === 'te' ? item.telugu : item.label;
              const secondaryLabel = language === 'te' ? item.label : item.telugu;

              return (
                <button
                  key={item.id}
                  id={`mobile-nav-item-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-md text-left transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-gold-500/10 text-gold-300 border-l-4 border-gold-500 font-semibold pl-3'
                      : 'text-gray-300 hover:bg-cosmic-900/60'
                  }`}
                >
                  <span className="text-sm font-medium tracking-wide">{primaryLabel}</span>
                  <span className="text-[10px] font-mono text-gold-400 pl-4 uppercase">{secondaryLabel}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-5 border-t border-cosmic-800/80 flex flex-col space-y-4">
            
            {/* Inline Language Selector inside the Mobile Dropdown Drawer */}
            <div className="flex items-center justify-between bg-cosmic-900/80 border border-gold-500/15 p-2 rounded-lg">
              <span className="text-xs text-slate-300 font-medium pl-1">Language / భాషను మార్చుకోండి</span>
              <div className="flex bg-cosmic-950 rounded-md p-0.5 border border-gold-500/15">
                <button
                  onClick={() => { setLanguage('te'); setIsOpen(false); }}
                  className={`px-3 py-1.5 text-xs font-bold uppercase transition-all duration-150 rounded-md cursor-pointer ${
                    language === 'te'
                      ? 'bg-gold-500 text-cosmic-950 font-extrabold shadow-sm'
                      : 'text-slate-400'
                  }`}
                >
                  తెలుగు
                </button>
                <button
                  onClick={() => { setLanguage('en'); setIsOpen(false); }}
                  className={`px-3 py-1.5 text-xs font-bold uppercase transition-all duration-150 rounded-md cursor-pointer ${
                    language === 'en'
                      ? 'bg-gold-500 text-cosmic-950 font-extrabold shadow-sm'
                      : 'text-slate-400'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <span className="text-[11px] text-center text-gold-300/80 bg-gold-500/5 border border-gold-500/15 py-2.5 rounded-md uppercase tracking-wider font-semibold font-mono">
              {t('status.available_online')}
            </span>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <a
                id="mobile-menu-call-btn"
                href={`tel:${ASTROLOGER_INFO.contact.phone}`}
                className="flex items-center justify-center gap-1.5 bg-gold-500 text-cosmic-950 py-3.5 rounded-md text-xs font-bold uppercase tracking-wider text-center shadow-md active:scale-95 transition-transform"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>{t('cta.call_now')}</span>
              </a>
              <a
                id="mobile-menu-whatsapp-btn"
                href={`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-md text-xs font-bold uppercase tracking-wider text-center shadow-md active:scale-95 transition-transform"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.035-3.411c1.556.924 3.111 1.411 4.717 1.412 5.513 0 9.998-4.485 10.001-9.999.002-2.673-1.04-5.186-2.943-7.089C15.903 3.01 13.4 1.966 10.73 1.967c-5.516 0-10.003 4.485-10.007 9.999-.001 1.743.468 3.447 1.359 4.954L1.1 21.1l4.992-1.31c1.513.824 3.064 1.141 5.968 1.141zM18.232 15s-1.8-.888-2.122-1.047c-.322-.159-.556-.239-.79.112s-.91 1.121-1.114 1.352c-.204.23-.408.261-.73.102-.322-.159-1.36-.501-2.59-1.6c-.958-.855-1.603-1.912-1.791-2.231-.188-.318-.02-.491.14-.65.143-.142.322-.373.483-.559.16-.186.214-.318.322-.53s.053-.398-.026-.557c-.079-.159-.79-1.902-1.082-2.604-.284-.682-.572-.59-.79-.6-.201-.01-.431-.01-.663-.01s-.603.087-.918.431c-.316.344-1.206 1.18-1.206 2.876 0 1.696 1.233 3.329 1.405 3.559.172.23 2.427 3.707 5.879 5.2 1.055.456 1.884.729 2.528.934 1.061.336 2.028.289 2.792.175.852-.127 2.624-1.073 2.993-2.11s.369-1.929.259-2.11c-.111-.18-.408-.287-.73-.446z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
