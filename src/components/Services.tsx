import React from 'react';
import { FileText, Heart, Briefcase, Home, Calendar, Sparkles, MessageSquare } from 'lucide-react';
import { SERVICES_DATA, ASTROLOGER_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Services() {
  const { language } = useLanguage();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText':
        return <FileText className="w-5 h-5 text-gold-400" />;
      case 'Heart':
        return <Heart className="w-5 h-5 text-gold-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-gold-400" />;
      case 'Home':
        return <Home className="w-5 h-5 text-gold-400" />;
      case 'Calendar':
        return <Calendar className="w-5 h-5 text-gold-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-gold-400" />;
    }
  };

  const activeServices = SERVICES_DATA[language];

  const handleServiceEnquiry = (title: string) => {
    const textMessage = language === 'te'
      ? `నమస్కారం సిద్ధాంతి గారు, నేను "${title}" సేవ కొరకు సంప్రదించాలనుకుంటున్నాను. దయచేసి వివరాలు తెలపండి.`
      : `Namo Venkatesaya. Hello Siddhanthi Garu, I am writing to enquire about your service "${title}". Please guide me on next steps.`;
    window.open(`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}?text=${encodeURIComponent(textMessage)}`, '_blank');
  };

  return (
    <section
      id="services"
      className="py-10 bg-gradient-to-b from-cosmic-950 to-cosmic-900 text-white relative border-b border-gold-500/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center mb-6">
          <span className="text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
            {language === 'te' ? 'సేవా విభాగం' : 'Astrology Offerings'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1 uppercase">
            {language === 'te' ? 'వైదిక సేవలు' : 'Our Services'}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2.5"></div>
        </div>

        {/* 6 Grid Cards conforming to precise responsive breakpoints:
            Mobile: 1 column
            Tablet: 2 columns
            Desktop: 3 columns
            Clean, minimal, premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeServices.map((service) => (
            <div
              key={service.id}
              className="bg-cosmic-800/40 hover:bg-cosmic-800/70 border border-gold-500/10 hover:border-gold-500/30 rounded-xl p-5 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              <div>
                {/* Header Icon + Name */}
                <div className="flex items-center gap-3.5 mb-3.5">
                  <div className="w-10 h-10 rounded-lg bg-gold-400/10 flex items-center justify-center border border-gold-500/15 shrink-0">
                    {getIcon(service.iconName)}
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white group-hover:text-gold-200 leading-tight">
                      {service.title}
                    </h3>
                    <span className="text-[10px] text-gold-400/80 font-serif tracking-wide block leading-none mt-1">
                      {service.teluguTitle}
                    </span>
                  </div>
                </div>

                {/* 2-line description with WebKit line-clamp to look perfectly aligned */}
                <p className={`text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 h-10 overflow-hidden ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleServiceEnquiry(service.title)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gold-500 hover:bg-white text-cosmic-950 font-bold text-xs uppercase tracking-wider transition-colors duration-200 rounded-md shrink-0 cursor-pointer min-h-[44px]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>{language === 'te' ? 'వివరాల కొరకు వాట్సాప్ విచారణ' : 'Enquire on WhatsApp'}</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
