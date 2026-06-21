import React from 'react';
import { Award, Heart, ShieldAlert, Check, Star, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export default function WhyChooseUs() {
  const { language } = useLanguage();

  const facts = [
    {
      id: 1,
      title_te: '30+ సంవత్సరాల అనుభవం',
      title_en: '30+ Years Experience',
      desc_te: 'గత మూడు దశాబ్దాలుగా వేల మంది భక్తులకు మార్గదర్శకం చూపిన అసలైన వేద సిద్ధాంత అనుభవం.',
      desc_en: 'Three decades of authentic Vedic horoscope evaluations and traditional counseling.',
      icon: <Award className="w-5 h-5 text-gold-400" />
    },
    {
      id: 2,
      title_te: 'వ్యక్తిగత పరిశీలన',
      title_en: 'Personalized Guidance',
      desc_te: 'కంప్యూటర్ ప్రింట్లు కాకుండా ప్రతి జాతకాన్ని స్వయంగా విశ్లేషించి కచ్చితమైన వివరాలు ఇస్తారు.',
      desc_en: 'No computer-generated logs. Each chart is manually drawn and assessed individually.',
      icon: <Star className="w-5 h-5 text-gold-400" />
    },
    {
      id: 3,
      title_te: 'సాంప్రదాయ వేద పరిజ్ఞానం',
      title_en: 'Traditional Vedic Knowledge',
      desc_te: 'మహర్షి పరాశర జ్యోతిష్య పద్ధతిలో సరళమైన శ్లోక పారాయణం, దేవాలయ పూజలు మాత్రమే సూచిస్తారు.',
      desc_en: 'Adherence to calculations from Parashara Siddhanta with simple inexpensive remedies.',
      icon: <Heart className="w-5 h-5 text-gold-400" />
    },
    {
      id: 4,
      title_te: 'తెలుగు భాషా సంప్రదింపులు',
      title_en: 'Telugu Consultation Support',
      desc_te: 'సాంస్కృతిక భావాలు సరిగ్గా సరిపోయేందుకు సంప్రదింపులు పూర్తిగా మాతృభాష తెలుగులోనే జరుగును.',
      desc_en: 'Consultations are held primarily in mother-tongue Telugu to capture cultural nuances.',
      icon: <MessageCircle className="w-5 h-5 text-gold-400" />
    }
  ];

  return (
    <section
      id="why-choose-us"
      className="py-16 bg-gradient-to-b from-cosmic-900 to-cosmic-950 text-white relative border-b border-gold-500/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
            {language === 'te' ? 'మా ప్రత్యేకత' : 'Vedic Trustworthiness'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1 uppercase">
            {language === 'te' ? 'మమ్ములను ఎందుకు ఎంచుకోవాలి?' : 'Why Choose Us'}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2.5"></div>
        </div>

        {/* 4 Small Boxes in a Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {facts.map((fact) => (
            <div
              key={fact.id}
              className="bg-cosmic-800/40 border border-gold-500/10 rounded-xl p-4.5 hover:border-gold-500/30 hover:bg-cosmic-800/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-lg bg-gold-400/10 border border-gold-500/15 flex items-center justify-center mb-3 text-gold-300">
                  {fact.icon}
                </div>
                <h3 className="font-serif text-sm sm:text-base font-bold text-white mb-1.5 leading-snug">
                  {language === 'te' ? fact.title_te : fact.title_en}
                </h3>
                <p className={`text-slate-400 text-xs leading-normal ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>
                  {language === 'te' ? fact.desc_te : fact.desc_en}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
