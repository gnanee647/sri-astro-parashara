import React from 'react';
import { Phone, Sparkles, MessageSquare, Compass, Award } from 'lucide-react';
import { ASTROLOGER_INFO } from '../data';
import { useLanguage } from '../LanguageContext';
import siddhanthiPortrait from '../../assets/siddhanthi_portrait.png';

export default function Hero() {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    const textMessage = language === 'te'
      ? 'నమస్కారం సిద్ధాంతి గారు, నేను జాతక పరిశీలన కొరకు సంప్రదించాలనుకుంటున్నాను.'
      : 'Namo Venkatesaya. Hello Siddhanthi Garu, I would like to book a Vedic astrology consultation.';
    window.open(`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}?text=${encodeURIComponent(textMessage)}`, '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-cosmic-950 to-cosmic-900 pt-20 pb-12 overflow-hidden border-b border-gold-500/10"
    >
      {/* Subtle traditional stars pattern background */}
      <div className="absolute inset-0 opacity-[0.03] z-0 bg-[radial-gradient(#fff_1px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Copywriting details */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 tracking-widest py-1 rounded bg-gold-500/10 border border-gold-500/30 text-gold-300 font-mono text-[10px] sm:text-xs font-semibold uppercase">
                <Sparkles className="w-3 h-3 text-gold-400" />
                <span className={language === 'te' ? 'font-pragati text-xs sm:text-sm font-bold' : ''}>{language === 'te' ? 'వైదిక జ్యోతిష్యం & ఆధ్యాత్మిక ఆలంబన' : 'Vedic Astrology & Spiritual Guidance'}</span>
              </div>
              <h1 className={`${language === 'te' ? 'font-pragati text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold' : 'font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'} tracking-tight text-white uppercase leading-tight`}>
                {language === 'te' ? 'శ్రీ ఆస్ట్రోపరాశర' : 'Sri AstroParashara'}
              </h1>
            </div>

            <div className="border-l-4 border-gold-500 pl-4 space-y-1">
              <h2 className={`${language === 'te' ? 'font-pragati text-2xl sm:text-3xl md:text-4xl font-bold' : 'font-serif text-xl sm:text-2xl md:text-3xl font-bold'} text-gold-300`}>
                {language === 'te' ? 'ఎమ్. చంద్ర మోహన్ సిద్ధాంతి' : 'M. Chandra Mohan Siddhanthi'}
              </h2>
              <p className="font-mono text-xs sm:text-sm text-slate-400 tracking-wider uppercase font-semibold flex items-center gap-1.5">
                <Award className="w-4 h-4 text-gold-400 shrink-0" />
                <span className={language === 'te' ? 'font-pragati text-sm' : ''}>{language === 'te' ? '32+ సంవత్సరాల అనుభవం' : '32+ Years of Experience'}</span>
              </p>
            </div>

            <p className={`text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>
              {language === 'te'
                ? 'గత 32 సంవత్సరాలుగా హిందూపురం (ఆంధ్రప్రదేశ్) కేంద్రంగా సాంప్రదాయ శాస్త్రోక్త దశా గణన బహుళ అనుభవంతో సేవలు అందిస్తున్నారు. కంప్యూటర్ ఉత్పత్తుల స్వయం చలిత తప్పులు లేకుండా ప్రతి జాతకాన్ని స్వయంగా చేతితో గీసి అత్యంత ఖచ్చితమైన విశ్లేషణను వివరిస్తారు.'
                : 'Providing premium traditional Vedic predictions and custom hand-drawn horoscope briefings with unmatched accuracy. Fully calculations completed manually on scriptures without modern computer shortcuts.'}
            </p>

            {/* Quick action buttons with highly touch friendly padding and size */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-lg cursor-pointer rounded-md min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{language === 'te' ? 'సంప్రదించండి (వాట్సాప్)' : 'Book Consultation (WhatsApp)'}</span>
              </button>
              <a
                href={`tel:${ASTROLOGER_INFO.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-gold-500/10 border-2 border-gold-500 text-gold-300 font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md rounded-md min-h-[44px]"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>{language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call Now'}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Professional Traditional Mandala / Astrological visual artwork */}
          <div className="lg:col-span-5 flex justify-center items-center mt-6 lg:mt-0 relative">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border border-gold-500/25 flex items-center justify-center bg-cosmic-900/40 backdrop-blur-sm p-4 shadow-2xl">
              
              {/* Outer rotating zodiac rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-gold-500/15 animate-spin [animation-duration:150s]"></div>
              <div className="absolute inset-6 rounded-full border border-gold-500/10 animate-spin [animation-duration:80s] -rotate-45"></div>

              {/* Elegant South Indian Kundali visual representation or Profile image */}
              <div className="w-full h-full rounded-full border border-gold-500/20 flex items-center justify-center relative p-3.5 overflow-hidden">
                <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-cosmic-950/20">
                  {/* Embedded Traditional Chakra Grid in Background */}
                  <div className="absolute inset-0 opacity-[0.22] pointer-events-none z-0">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-gold-300 animate-pulse" stroke="currentColor" fill="none">
                      <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.8" />
                      <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.8" />
                      <polygon points="15,15 85,85" strokeWidth="0.8" strokeDasharray="2 2" />
                      <polygon points="85,15 15,85" strokeWidth="0.8" strokeDasharray="2 2" />
                      <circle cx="50" cy="50" r="30" strokeWidth="0.5" />
                      <circle cx="50" cy="50" r="45" strokeWidth="0.5" strokeDasharray="3 3" />
                    </svg>
                  </div>
                  {/* Profile Portrait Image */}
                  <img
                    src={siddhanthiPortrait}
                    alt="M. Chandra Mohan Siddhanthi Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-[50%_12%] rounded-full select-none pointer-events-none filter brightness-105 contrast-[1.05] saturate-[1.02] z-10 relative transition-all duration-500 hover:scale-105"
                  />
                  {/* Inner gold frame borders / vignette shadow overlays for realistic premium appeal */}
                  <div className="absolute inset-0 rounded-full border-4 border-gold-500/30 pointer-events-none z-20"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-cosmic-950/65 via-cosmic-950/10 to-transparent pointer-events-none z-20"></div>
                </div>
              </div>

              {/* Little detail badge */}
              <div className="absolute -bottom-3 inset-x-0 mx-auto w-max px-4 py-1.5 rounded-full bg-cosmic-850/90 border border-gold-500/30 text-[9px] tracking-widest text-gold-200 uppercase font-mono shadow-md z-20">
                {language === 'te' ? 'ఎమ్. చంద్ర మోహన్ సిద్ధాంతి' : 'M. Chandra Mohan Siddhanthi'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
