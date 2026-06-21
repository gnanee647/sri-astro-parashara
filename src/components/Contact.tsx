import React from 'react';
import { Phone, MapPin, MessageSquare } from 'lucide-react';
import { ASTROLOGER_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Contact() {
  const { language } = useLanguage();

  const handleWhatsAppClick = () => {
    const textMessage = language === 'te'
      ? 'నమస్కారం సిద్ధాంతి గారు, నేను సంప్రదింపుల కొరకు సమాచారం తెలుసుకోవాలనుకుంటున్నాను.'
      : 'Namo Venkatesaya. Hello Chandra Mohan Siddhanthi Garu, I would like to schedule an astrological consultation.';
    window.open(`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}?text=${encodeURIComponent(textMessage)}`, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-cosmic-950 to-cosmic-900 text-white relative border-b border-gold-500/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
            {language === 'te' ? 'సంప్రదించండి' : 'Schedule Booking'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1 uppercase">
            {language === 'te' ? 'సంప్రదింపులు & బుకింగ్' : 'Contact & WhatsApp'}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2.5"></div>
        </div>

        {/* Contact Details Card */}
        <div className="bg-cosmic-800/40 border border-gold-500/10 rounded-2xl p-6 sm:p-8 shadow-xl max-w-2xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 text-left">
            {/* Contact numbers and loc info */}
            <div className="space-y-6">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center border border-gold-500/15 shrink-0 text-gold-300">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                    {language === 'te' ? 'ఫోన్ నెంబర్' : 'Phone Number'}
                  </h4>
                  <a
                    href={`tel:${ASTROLOGER_INFO.contact.phone}`}
                    className="text-base sm:text-lg font-bold text-white hover:text-gold-300 transition-colors"
                  >
                    {ASTROLOGER_INFO.contact.formattedPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center border border-gold-500/15 shrink-0 text-gold-300">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                    {language === 'te' ? 'వాట్సాప్ నెంబర్' : 'WhatsApp Number'}
                  </h4>
                  <a
                    href={`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base sm:text-lg font-bold text-white hover:text-gold-300 transition-colors"
                  >
                    {ASTROLOGER_INFO.contact.formattedPhone}
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-3.5 border-t border-gold-500/10 md:border-t-0 md:border-l md:pl-6 pt-6 md:pt-0">
              <div className="w-9 h-9 rounded-lg bg-gold-400/10 flex items-center justify-center border border-gold-500/15 shrink-0 text-gold-300">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs text-slate-400 uppercase tracking-widest font-mono">
                  {language === 'te' ? 'చిరునామా' : 'Location'}
                </h4>
                <p className={`text-sm text-slate-200 mt-1 leading-relaxed ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>
                  {language === 'te' ? (
                    <span>హిందూపురం మండలం, శ్రీ సత్యసాయి జిల్లా, ఆంధ్రప్రదేశ్</span>
                  ) : (
                    <span>Hindupur Mandal, Sri Sathya Sai District, Andhra Pradesh, India</span>
                  )}
                </p>
              </div>
            </div>
          </div>

          {/* Clean prominent CTAs as requested */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gold-500/10">
            <button
              onClick={handleWhatsAppClick}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider transition-colors rounded-lg shadow-md cursor-pointer min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{language === 'te' ? 'వాట్సాప్ ద్వారా సంప్రదించండి' : 'WhatsApp Chat'}</span>
            </button>
            <a
              href={`tel:${ASTROLOGER_INFO.contact.phone}`}
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-white text-cosmic-950 font-bold text-xs uppercase tracking-wider transition-colors rounded-lg shadow-md min-h-[44px]"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>{language === 'te' ? 'ఇప్పుడే కాల్ చేయండి' : 'Call Now'}</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
