import React from 'react';
import { Phone, Sparkles, MessageSquare, Compass, Award } from 'lucide-react';
import { ASTROLOGER_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

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
                <span className={language === 'te' ? 'font-pragati text-sm' : ''}>{language === 'te' ? '30+ సంవత్సరాల అనుభవం' : '30+ Years of Experience'}</span>
              </p>
            </div>

            <p className={`text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>
              {language === 'te'
                ? 'గత 30 సంవత్సరాలుగా హిందూపురం (ఆంధ్రప్రదేశ్) కేంద్రంగా సాంప్రదాయ శాస్త్రోక్త దశా గణన బహుళ అనుభవంతో సేవలు అందిస్తున్నారు. కంప్యూటర్ ఉత్పత్తుల స్వయం చలిత తప్పులు లేకుండా ప్రతి జాతకాన్ని స్వయంగా చేతితో గీసి అత్యంత ఖచ్చితమైన విశ్లేషణను వివరిస్తారు.'
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

              {/* Elegant South Indian Kundali visual representation */}
              <div className="w-full h-full rounded-full border border-gold-500/20 flex items-center justify-center relative p-6">
                
                {/* Embedded Traditional Chakra Grid */}
                <div className="absolute inset-10 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full text-gold-300" stroke="currentColor" fill="none">
                    <rect x="5" y="5" width="90" height="90" strokeWidth="1.5" />
                    <rect x="27.5" y="27.5" width="45" height="45" strokeWidth="1" />
                    <line x1="27.5" y1="5" x2="27.5" y2="95" strokeWidth="1" />
                    <line x1="72.5" y1="5" x2="72.5" y2="95" strokeWidth="1" />
                    <line x1="5" y1="27.5" x2="95" y2="27.5" strokeWidth="1" />
                    <line x1="5" y1="72.5" x2="95" y2="72.5" strokeWidth="1" />
                  </svg>
                </div>

                <div className="text-center z-10 p-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gold-500/10 to-gold-500/25 border-2 border-gold-500/40 flex items-center justify-center mx-auto mb-4 relative shadow-lg">
                    <Compass className="w-10 h-10 sm:w-12 sm:h-12 text-gold-400 rotate-12 animate-pulse" />
                    {/* Ring sparkles */}
                    <span className="absolute top-1 right-2 text-gold-300 text-xs text-bold select-none">ॐ</span>
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-gold-300 uppercase tracking-widest">
                    {language === 'te' ? 'సిద్ధాంత నిర్ణయం' : 'VEDIC SIDDHANTA'}
                  </h4>
                  <p className="text-[10px] text-gray-400 tracking-wide mt-1.5 font-mono">
                    ESTD. HINDUPUR 1995
                  </p>
                  <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-[9px] font-mono text-gold-300 uppercase tracking-widest">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping"></span>
                    <span>{language === 'te' ? 'హస్తలిఖితం' : '100% Hand-Calculated'}</span>
                  </div>
                </div>
              </div>

              {/* Little detail badge */}
              <div className="absolute -bottom-3 inset-x-0 mx-auto w-max px-4 py-1.5 rounded-full bg-cosmic-850/90 border border-gold-500/30 text-[9px] tracking-widest text-gold-200 uppercase font-mono shadow-md z-20">
                {language === 'te' ? 'పరాశర జ్యోతిష్య నిలయం' : 'Parashara Vedic Center'}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
