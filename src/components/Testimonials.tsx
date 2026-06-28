import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Testimonials() {
  const { language } = useLanguage();

  // Extract exactly the first 3 testimonials as requested by the user
  const activeTestimonials = TESTIMONIALS_DATA[language].slice(0, 3);

  return (
    <section
      id="testimonials"
      className="py-10 bg-gradient-to-b from-cosmic-900 to-cosmic-950 text-white relative border-b border-gold-500/10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        
        {/* Section Heading */}
        <div className="text-center mb-6">
          <span className="text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
            {language === 'te' ? 'కస్టమర్ల స్పందనలు' : 'Client Endorsements'}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mt-1 uppercase">
            {language === 'te' ? 'విశ్వసనీయ సాక్ష్యాలు' : 'Testimonials'}
          </h2>
          <div className="w-16 h-0.5 bg-gold-400 mx-auto mt-2.5"></div>
        </div>

        {/* 3 Testimonials in Responsive Grid layout:
            Mobile: 1 column (vertical list)
            Tablet: 2 columns
            Desktop: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-cosmic-800/40 p-5 rounded-xl border border-gold-500/10 flex flex-col justify-between hover:border-gold-500/25 transition-all duration-300 shadow-md relative"
            >
              <div>
                {/* Gold quote symbol in the top corner */}
                <div className="absolute top-4 right-4 text-gold-500/15">
                  <Quote className="w-8 h-8 rotate-180 text-gold-400/20 fill-gold-400/10" />
                </div>

                {/* Stars and header */}
                <div className="flex items-center gap-0.5 text-gold-400 mb-3 text-xs shrink-0">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-400" />
                  ))}
                </div>

                <p className={`text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 italic ${language === 'te' ? 'font-telugu' : 'font-sans'}`}>
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="border-t border-gold-500/10 pt-3.5 flex flex-col">
                <span className="text-white text-xs sm:text-sm font-serif font-bold uppercase tracking-wider">
                  {item.name}
                </span>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
                  <span>{item.location}</span>
                  <span className="text-gold-400/90 font-mono text-[9px] uppercase tracking-wider bg-gold-500/5 px-2 py-0.5 border border-gold-500/10 rounded">
                    {item.consultationType}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
