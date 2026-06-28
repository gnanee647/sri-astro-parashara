import React from 'react';
import { Award, MessageSquare, ShieldCheck, Check } from 'lucide-react';
import { useLanguage } from '../LanguageContext';
import siddhanthiPortrait from '../../assets/siddhanthi_portrait.png';

export default function About() {
  const { language } = useLanguage();

  return (
    <section
      id="about"
      className="py-10 bg-gradient-to-b from-cosmic-900 to-cosmic-950 text-white relative overflow-hidden border-b border-gold-500/10"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-6">
          <span className="text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
            {language === 'te' ? 'సిద్ధాంతి గారి పరిచయము' : 'Astrologer Background'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1 uppercase">
            {language === 'te' ? 'శ్రీ ఆస్ట్రోపరాశర పరిచయము' : 'About Sri AstroParashara'}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2.5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Short Introduction with Portrait Image */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
              {/* Small Portrait Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-gold-500/30 overflow-hidden shrink-0 shadow-lg relative bg-cosmic-950/40">
                <img
                  src={siddhanthiPortrait}
                  alt="M. Chandra Mohan Siddhanthi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-[50%_12%] rounded-full select-none pointer-events-none filter brightness-105 contrast-[1.05]"
                />
                <div className="absolute inset-0 rounded-full border border-gold-500/10 pointer-events-none"></div>
              </div>
              
              <div className="space-y-3">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-300">
                  {language === 'te' ? 'జ్యోతిష్య రత్న ఎమ్. చంద్ర మోహన్ సిద్ధాంతి' : 'Jyothishya Ratna M. Chandra Mohan Siddhanthi'}
                </h3>
                <p className={`text-slate-300 text-xs sm:text-sm leading-relaxed ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>
                  {language === 'te'
                    ? 'గత మూడు దశాబ్దాలుగా హిందూపురంలో వేద శాస్త్ర పీఠికానుసారంగా నిఖార్సైన వైదిక మార్గదర్శకత్వాన్ని అందిస్తున్నారు. వేలాది కుటుంబాలకు ప్రాచీన పరాశర సిద్ధాంత విశ్లేషణల ద్వారా విశ్వసనీయ పరిష్కారాలు చూపించారు.'
                    : 'Over three decades of uncompromised traditional astrological counseling based out of Hindupur, AP. He has guided thousands of families using manual, scripture-authentic calculations to ensure peace and prosperity.'}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key facts displayed as highly polished minimal grid blocks */}
          <div className="md:col-span-6 grid grid-cols-1 gap-4">
            
            {/* Fact 1: 32+ years experience */}
            <div className="flex items-start gap-3 bg-cosmic-800/40 border border-gold-500/10 p-3.5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 text-gold-300 shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-bold font-serif uppercase tracking-wider">
                  {language === 'te' ? '32+ సంవత్సరాల అనుభవం' : '32+ Years Experience'}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {language === 'te' ? 'నిరంతర సంప్రదాయ వైదిక సాధన' : 'Uninterrupted traditional Vedic practice'}
                </p>
              </div>
            </div>

            {/* Fact 2: Telugu consultations */}
            <div className="flex items-start gap-3 bg-cosmic-800/40 border border-gold-500/10 p-3.5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 text-gold-300 shrink-0">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-bold font-serif uppercase tracking-wider">
                  {language === 'te' ? 'తెలుగు సంభాషణలు' : 'Telugu Consultations'}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {language === 'te' ? 'పూర్తి తెలుగులో జాతక విశ్లేషణ' : 'Horoscope analysis completely in Telugu'}
                </p>
              </div>
            </div>

            {/* Fact 3: Trusted guidance for families */}
            <div className="flex items-start gap-3 bg-cosmic-800/40 border border-gold-500/10 p-3.5 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 flex items-center justify-center border border-gold-500/20 text-gold-300 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white text-xs sm:text-sm font-bold font-serif uppercase tracking-wider">
                  {language === 'te' ? 'ఆదర్శవంతమైన మార్గదర్శకత్వం' : 'Trusted Family Guidance'}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {language === 'te' ? 'కుటుంబాల సంపూర్ణ శ్రేయస్సు కొరకు' : 'Ensuring long-term marital and trade peace'}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
