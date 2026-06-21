import React, { useState } from 'react';
import { ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import { FAQ_DATA } from '../data';
import { useLanguage } from '../LanguageContext';

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const { language, t } = useLanguage();

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const activeFaqs = FAQ_DATA[language];

  return (
    <section id="faq-section" className="py-24 bg-gradient-to-b from-cosmic-950 via-cosmic-900 to-cosmic-950 text-white relative">
      <div className="absolute w-72 h-72 rounded-full bg-gold-600/5 blur-[90px] top-1/2 left-0 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fadeIn">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-gold-400 tracking-widest uppercase font-mono block">
            {t('faq.badge')}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-100 via-gold-300 to-gold-100 mt-2 uppercase">
            {t('faq.heading')}
          </h2>
          <p className="text-slate-300 font-serif mt-3 text-sm sm:text-base leading-relaxed">
            {t('faq.subheading')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4"></div>
        </div>

        {/* FAQ Preparation Guide Banner block */}
        <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gold-950/40 to-cosmic-900 border border-gold-500/25 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-start gap-6">
          <div className="w-12 h-12 bg-gold-400/10 border border-gold-400/30 rounded-full flex items-center justify-center shrink-0">
            <BookOpen className="w-6 h-6 text-gold-400" />
          </div>
          <div>
            <span className="text-xs font-bold tracking-wider font-mono text-gold-300 uppercase block mb-1">
              {language === 'te' ? 'సంప్రదింపుకు కావలసిన జాతక వివరాల చెక్‌లిస్ట్' : 'Prerequisite Birth Information Checklist'}
            </span>
            <h3 className="font-serif text-lg font-bold text-white mb-2">
              {language === 'te' ? 'కాల్ చేయడానికి ముందు నేను ఏమి సిద్ధం చేసుకోవాలి?' : 'What do I need to prepare before calling the Astrologer?'}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              {language === 'te' 
                ? 'జన్మ రాశి చక్రాన్ని ఖచ్చితంగా గీయడానికి మరియు అష్టకవర్గ, వింశోత్తరి దశల సమయం తెలుసుకోవడానికి, దయచేసి క్రింది వివరాలను సిద్ధంగా ఉంచండి:' 
                : 'To draw your South Indian Janma Rashi Chakra accurately and calculate active Vimshottari Dasas, please keep the following data ready:'}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 bg-cosmic-950/50 p-2.5 rounded-sm border border-gold-500/10">
                <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></div>
                <span className="text-xs font-mono font-medium text-slate-200">
                  {language === 'te' ? 'జన్మ తేదీ (Date of Birth)' : 'Date of Birth (తేదీ)'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-cosmic-950/50 p-2.5 rounded-sm border border-gold-500/10">
                <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></div>
                <span className="text-xs font-mono font-medium text-slate-200">
                  {language === 'te' ? 'జన్మ సమయం (Birth Time)' : 'Birth Time (సమయం)'}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-cosmic-950/50 p-2.5 rounded-sm border border-gold-500/10">
                <div className="w-2 h-2 rounded-full bg-gold-400 shrink-0"></div>
                <span className="text-xs font-mono font-medium text-slate-200">
                  {language === 'te' ? 'జన్మ స్థలం (Birth Place)' : 'Place of Birth (పుట్టిన స్థలం)'}
                </span>
              </div>
            </div>
            <p className="text-[11px] text-slate-400 mt-3 font-serif">
              {language === 'te'
                ? '* గమనిక: పుట్టిన సమయం తెలియని పక్షంలో తాత్కాలికంగా కోరిన ప్రశ్న ఆధారంగా "ప్రశ్న శాస్త్రం" ద్వారా సలహా చెప్పబడును.'
                : '* Note: If exact birth time is unavailable, predictions can be guided via Prashna Shastra (Horary Astrology) queries based on query time.'}
            </p>
          </div>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {activeFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-cosmic-900/40 border border-gold-500/15 hover:border-gold-500/30 rounded-2xl overflow-hidden transition-all duration-300 shadow-lg"
              >
                <button
                  id={`faq-toggle-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-5 text-left font-serif text-base sm:text-lg font-semibold text-white hover:text-gold-300 transition-colors duration-200 cursor-pointer"
                >
                  <span className="flex items-start gap-3">
                    <span className="text-gold-400/60 font-mono text-sm shrink-0 pt-0.5">Q.</span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <span className="ml-4 shrink-0 p-1 rounded-full bg-cosmic-800 text-gold-400">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {/* FAQ Answers */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden border-t border-gold-500/5 ${
                    isOpen ? 'max-h-96 py-5 px-6 opacity-100 bg-cosmic-950/30' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer help card */}
        <div className="mt-12 text-center bg-gradient-to-r from-transparent via-gold-500/5 to-transparent py-4 text-xs tracking-wider text-slate-400 font-mono uppercase">
          {language === 'te'
            ? 'ఇంకా ఏవైనా సందేహాలు ఉన్నాయా? మా ఫోన్ నంబర్లు నిరంతరం అందుబాటులో ఉంటాయి!'
            : 'Still have questions? Our lines are open. Consult in Telugu!'}
        </div>
      </div>
    </section>
  );
}
