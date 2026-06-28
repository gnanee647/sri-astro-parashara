import React from 'react';
import { MessageSquare, Shield, Award, PenTool, Sparkles, Star } from 'lucide-react';
import { ASTROLOGER_INFO } from '../data';
import { useLanguage } from '../LanguageContext';

export default function Yantras() {
  const { language } = useLanguage();

  // Yantras Data with complete Telugu & English details
  const yantrasList = [
    {
      id: 'sri-chakra',
      nameEn: 'Sri Chakra Yantra',
      nameTe: 'శ్రీ చక్ర యంత్రం',
      descEn: 'The supreme yantra of the Divine Mother. Brings absolute prosperity, peace, positive energy, and spiritual elevation.',
      descTe: 'సర్వ ఐశ్వర్య ప్రదాయిని, లక్ష్మీ కటాక్ష కారకం. నెగిటివ్ శక్తులను తొలగించి, ఇంట్లో ప్రశాంతతను మరియు అఖండ సంపదను చేకూరుస్తుంది.',
      materialEn: 'Hand-etched Sacred Copper (రాగి రేకు)',
      materialTe: 'పూజా శుద్ధి చేసిన గట్టి రాగి రేకు',
      themeColor: 'from-amber-950/80 to-rose-950/80 border-amber-500/30',
      svgType: 'sri-chakra'
    },
    {
      id: 'matsya',
      nameEn: 'Matsya Yantra',
      nameTe: 'మత్స్య యంత్రం',
      descEn: 'Removes Vaastu defects (Vaastu Dosha), clears severe obstacles, and shields your home or workplace from evil eyes.',
      descTe: 'గృహ మరియు వ్యాపార సంస్థల వాస్తు దోష నివారణకు అద్భుతమైనది. అపశకునాలు, దృష్టి దోషాలు మరియు ఆటంకాల నుండి రక్షిస్తుంది.',
      materialEn: 'Hand-etched Sacred Copper (రాగి రేకు)',
      materialTe: 'పూజా శుద్ధి చేసిన గట్టి రాగి రేకు',
      themeColor: 'from-emerald-950/80 to-teal-950/80 border-teal-500/30',
      svgType: 'matsya'
    },
    {
      id: 'kubera',
      nameEn: 'Sri Kubera Yantra',
      nameTe: 'శ్రీ కుబేర యంత్రం',
      descEn: 'Blessed with the numerical grids of Lord Kubera. Attracts sudden wealth, business growth, and recovers stuck funds.',
      descTe: 'ధన నిధి అధిపతి అయిన కుబేరుని సంపూర్ణ అనుగ్రహ ప్రదాయిని. నిలిచిపోయిన సొమ్ము తిరిగి రావడానికి, వ్యాపార లాభాలు పెంచడానికి శ్రేష్ఠం.',
      materialEn: 'Hand-etched Sacred Copper (రాగి రేకు)',
      materialTe: 'పూజా శుద్ధి చేసిన గట్టి రాగి రేకు',
      themeColor: 'from-amber-950/80 to-yellow-950/80 border-yellow-500/30',
      svgType: 'kubera'
    },
    {
      id: 'navagraha',
      nameEn: 'Navagraha Yantra',
      nameTe: 'నవగ్రహ యంత్రం',
      descEn: 'Balances the nine planetary deities. Mitigates horoscope afflictions, planetary dasha doshas, and brings all-round success.',
      descTe: 'తొమ్మిది గ్రహాల అనుకూలత కొరకు. జాతక చక్రంలోని గ్రహ దోషాలు, నడుస్తున్న శని/రాహు/కేతు దశా దోషాల తీవ్రతను తగ్గిస్తుంది.',
      materialEn: 'Hand-etched Sacred Copper (రాగి రేకు)',
      materialTe: 'పూజా శుద్ధి చేసిన గట్టి రాగి రేకు',
      themeColor: 'from-indigo-950/80 to-blue-950/80 border-indigo-500/30',
      svgType: 'navagraha'
    },
    {
      id: 'lakshmi',
      nameEn: 'Ashta Lakshmi Yantra',
      nameTe: 'అష్టలక్ష్మి యంత్రం',
      descEn: 'Invokes the blessings of all eight forms of Goddess Lakshmi. Essential for continuous cash flow, good health, and family happiness.',
      descTe: 'అష్టలక్ష్ముల సంపూర్ణ రూపం. నిరంతర ధనాదాయం, ధాన్య సమృద్ధి, సంతాన సౌఖ్యం మరియు నిత్య మంగళకరం కలిగిస్తుంది.',
      materialEn: 'Hand-etched Sacred Copper (రాగి రేకు)',
      materialTe: 'పూజా శుద్ధి చేసిన గట్టి రాగి రేకు',
      themeColor: 'from-rose-950/80 to-purple-950/80 border-pink-500/30',
      svgType: 'lakshmi'
    },
    {
      id: 'maha-mrityunjaya',
      nameEn: 'Maha Mrityunjaya Yantra',
      nameTe: 'మహా మృత్యుంజయ యంత్రం',
      descEn: 'A divine shield of Lord Shiva. Protects from unexpected health threats, chronic illness, accident fears, and promotes long life.',
      descTe: 'పరమశివుని రక్షా కవచం. ఆకస్మిక అనారోగ్య సమస్యలు, దీర్ఘకాలిక వ్యాధుల భయాలు, ప్రమాద గండాల నుండి రక్షించి దీర్ఘాయువునిస్తుంది.',
      materialEn: 'Hand-etched Sacred Copper (రాగి రేకు)',
      materialTe: 'పూజా శుద్ధి చేసిన గట్టి రాగి రేకు',
      themeColor: 'from-amber-950/80 to-orange-950/80 border-orange-500/30',
      svgType: 'mrityunjaya'
    }
  ];

  const handleYantraEnquiry = (yantraName: string) => {
    const textMessage = language === 'te'
      ? `నమస్కారం చంద్ర మోహన్ సిద్ధాంతి గారు, నేను మీ చేతితో వ్రాసిన ప్రత్యేక "${yantraName}" యంత్రం గురించి సంప్రదించాలనుకుంటున్నాను. దీని లభ్యత మరియు పూజా విధానం తెలపగలరు.`
      : `Namo Venkatesaya. Respected Siddhanthi Garu, I am writing to enquire about your custom handwritten and prepared "${yantraName}" for spiritual protection and prosperity. Kindly guide me.`;
    
    window.open(`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}?text=${encodeURIComponent(textMessage)}`, '_blank');
  };

  // Render high-fidelity, traditional golden geometric SVG drawings representing actual Yantras
  const renderYantraSvg = (type: string) => {
    switch (type) {
      case 'sri-chakra':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-gold-400 stroke-current" fill="none" strokeWidth="1.2">
            {/* Outer Square Gates - Bhupuram */}
            <path d="M 12 12 L 40 12 L 40 6 L 60 6 L 60 12 L 88 12 L 88 40 L 94 40 L 94 60 L 88 60 L 88 88 L 60 88 L 60 94 L 40 94 L 40 88 L 12 88 L 12 60 L 6 60 L 6 40 L 12 40 Z" strokeWidth="1.5" className="stroke-gold-500/80" />
            {/* Circles and Lotus Petals */}
            <circle cx="50" cy="50" r="34" strokeWidth="1" className="stroke-gold-400" />
            <circle cx="50" cy="50" r="29" strokeWidth="0.8" className="stroke-gold-400/60" />
            {/* Traditional overlapping sacred triangles representing Sri Yantra */}
            <polygon points="50,22 24,68 76,68" strokeWidth="1" />
            <polygon points="50,78 24,32 76,32" strokeWidth="1" />
            <polygon points="50,32 32,62 68,62" strokeWidth="0.8" />
            <polygon points="50,68 32,38 68,38" strokeWidth="0.8" />
            <polygon points="50,40 39,56 61,56" strokeWidth="0.8" />
            <polygon points="50,60 39,44 61,44" strokeWidth="0.8" />
            {/* Bindu center point */}
            <circle cx="50" cy="50" r="2" className="fill-gold-400 stroke-none" />
          </svg>
        );
      case 'matsya':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-teal-400 stroke-current" fill="none" strokeWidth="1.2">
            {/* Outer Protective Square */}
            <rect x="10" y="10" width="80" height="80" rx="4" strokeWidth="1.5" className="stroke-gold-500/70" />
            <circle cx="50" cy="50" r="34" strokeWidth="1" className="stroke-gold-400/60" />
            <circle cx="50" cy="50" r="28" strokeWidth="1" />
            {/* Traditional fish geometric representation inside */}
            <path d="M 28 50 Q 50 32 72 50 Q 50 68 28 50 Z" strokeWidth="1.2" />
            <path d="M 72 50 L 80 44 L 80 56 Z" fill="none" strokeWidth="1" />
            <circle cx="40" cy="48" r="1.5" className="fill-teal-300 stroke-none" />
            {/* Geometric star and petals around */}
            <polygon points="50,22 40,50 50,78 60,50" strokeWidth="0.8" className="stroke-gold-400/40" />
            <circle cx="50" cy="50" r="2" className="fill-gold-400 stroke-none" />
          </svg>
        );
      case 'kubera':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-400 stroke-current" fill="none" strokeWidth="1.2">
            {/* Beautiful Frame */}
            <rect x="8" y="8" width="84" height="84" strokeWidth="2" className="stroke-gold-500/80" />
            <rect x="12" y="12" width="76" height="76" strokeWidth="1" className="stroke-gold-400/40" />
            {/* 3x3 Grid */}
            <line x1="12" y1="37.3" x2="88" y2="37.3" strokeWidth="1" />
            <line x1="12" y1="62.6" x2="88" y2="62.6" strokeWidth="1" />
            <line x1="37.3" y1="12" x2="37.3" y2="88" strokeWidth="1" />
            <line x1="62.6" y1="12" x2="62.6" y2="88" strokeWidth="1" />
            {/* Authentic Kubera Numbers (Vedic grid summing to 72) */}
            {/* Top Row: 23, 20, 27 / Mid Row: 28, 24, 20... let's write them cleanly */}
            <text x="24.6" y="28" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">23</text>
            <text x="50" y="28" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">20</text>
            <text x="75.3" y="28" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">27</text>
            
            <text x="24.6" y="54" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">28</text>
            <text x="50" y="54" className="fill-gold-400 text-[11px] font-mono font-bold text-center" textAnchor="middle">24</text>
            <text x="75.3" y="54" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">20</text>
            
            <text x="24.6" y="79" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">21</text>
            <text x="50" y="79" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">26</text>
            <text x="75.3" y="79" className="fill-gold-200 text-[10px] font-mono font-bold text-center" textAnchor="middle">25</text>
          </svg>
        );
      case 'navagraha':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-indigo-400 stroke-current" fill="none" strokeWidth="1.2">
            {/* Frame */}
            <rect x="10" y="10" width="80" height="80" strokeWidth="1.5" className="stroke-gold-500" />
            <line x1="10" y1="36.6" x2="90" y2="36.6" strokeWidth="0.8" />
            <line x1="10" y1="63.3" x2="90" y2="63.3" strokeWidth="0.8" />
            <line x1="36.6" y1="10" x2="36.6" y2="90" strokeWidth="0.8" />
            <line x1="63.3" y1="10" x2="63.3" y2="90" strokeWidth="0.8" />
            
            {/* Planetary Bindu representations with subtle gold stars */}
            <circle cx="23.3" cy="23.3" r="4" className="stroke-indigo-400" />
            <circle cx="50" cy="23.3" r="5" className="stroke-orange-400 fill-orange-500/10" /> {/* Sun */}
            <circle cx="76.6" cy="23.3" r="4" className="stroke-blue-300" />
            
            <circle cx="23.3" cy="50" r="4" className="stroke-red-400" />
            <circle cx="50" cy="50" r="4" className="stroke-amber-400" />
            <circle cx="76.6" cy="50" r="4" className="stroke-emerald-400" />
            
            <circle cx="23.3" cy="76.6" r="4" className="stroke-purple-400" />
            <circle cx="50" cy="76.6" r="4" className="stroke-slate-400" />
            <circle cx="76.6" cy="76.6" r="4" className="stroke-pink-400" />
            
            {/* Tiny central gold dots */}
            <circle cx="23.3" cy="23.3" r="1.5" className="fill-gold-300 stroke-none" />
            <circle cx="50" cy="23.3" r="2.2" className="fill-gold-500 stroke-none" />
            <circle cx="76.6" cy="23.3" r="1.5" className="fill-gold-300 stroke-none" />
            <circle cx="23.3" cy="50" r="1.5" className="fill-gold-300 stroke-none" />
            <circle cx="50" cy="50" r="1.5" className="fill-gold-300 stroke-none" />
            <circle cx="76.6" cy="50" r="1.5" className="fill-gold-300 stroke-none" />
            <circle cx="23.3" cy="76.6" r="1.5" className="fill-gold-300 stroke-none" />
            <circle cx="50" cy="76.6" r="1.5" className="fill-gold-300 stroke-none" />
            <circle cx="76.6" cy="76.6" r="1.5" className="fill-gold-300 stroke-none" />
          </svg>
        );
      case 'lakshmi':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-pink-400 stroke-current" fill="none" strokeWidth="1.2">
            {/* Beautiful star of david/shaktona pattern represent prosperity */}
            <rect x="10" y="10" width="80" height="80" strokeWidth="1.5" className="stroke-gold-500/75" />
            <circle cx="50" cy="50" r="32" strokeWidth="1" className="stroke-gold-400/40" />
            <circle cx="50" cy="50" r="26" strokeWidth="1" />
            {/* Overlaying triangles to form the 8 pointed Lakshmi Star */}
            <polygon points="50,18 20,64 80,64" strokeWidth="1.2" />
            <polygon points="50,82 20,36 80,36" strokeWidth="1.2" />
            {/* Concentric patterns */}
            <circle cx="50" cy="50" r="14" strokeWidth="0.8" className="stroke-gold-400/50" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="3" className="fill-gold-400 stroke-none" />
          </svg>
        );
      case 'mrityunjaya':
        return (
          <svg viewBox="0 0 100 100" className="w-full h-full text-amber-500 stroke-current" fill="none" strokeWidth="1.2">
            {/* Protective Shields */}
            <rect x="12" y="12" width="76" height="76" rx="38" strokeWidth="1.5" className="stroke-gold-500" />
            <polygon points="50,10 90,50 50,90 10,50" strokeWidth="1" className="stroke-gold-400/30" />
            {/* Inner Hexagon and circular lines */}
            <polygon points="50,22 75,36 75,64 50,78 25,64 25,36" strokeWidth="1.2" />
            <circle cx="50" cy="50" r="18" strokeWidth="1" />
            <circle cx="50" cy="50" r="12" strokeWidth="0.8" className="stroke-gold-400/40" />
            {/* Trishula central focus representing Lord Shiva */}
            <path d="M 50 36 L 50 64" strokeWidth="1.5" className="stroke-gold-400" />
            <path d="M 44 42 Q 50 48 56 42" strokeWidth="1.5" className="stroke-gold-400" fill="none" />
            <circle cx="50" cy="50" r="2.5" className="fill-gold-400 stroke-none" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="yantras"
      className="py-12 bg-gradient-to-b from-cosmic-900 to-cosmic-950 text-white relative border-b border-gold-500/10"
    >
      {/* Astrological grid background highlights */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] rounded-full bg-gold-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-[10px] sm:text-xs font-semibold text-gold-400 uppercase tracking-widest font-mono">
            {language === 'te' ? 'వైదిక రక్షా కవచాలు' : 'Sacred Cosmic Shields'}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mt-1 uppercase">
            {language === 'te' ? 'పవిత్ర యంత్రాలు' : 'Sacred Yantras'}
          </h2>
          <div className="w-24 h-0.5 bg-gold-400 mx-auto mt-3"></div>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 mt-4 leading-relaxed">
            {language === 'te'
              ? 'సిద్ధాంతి గారిచే సాంప్రదాయ బద్ధంగా, కచ్చితమైన ముహూర్త కాలంలో రాగి రేకులపై హస్తలిఖితంగా తయారు చేయబడి, శాస్త్రోక్తంగా ప్రాణ ప్రతిష్ఠ గావించబడిన పవిత్ర యంత్రాలు.'
              : 'Meticulously hand-etched on high-quality copper sheets during highly auspicious planetary hours, energized with sacred mantras by M. Chandra Mohan Siddhanthi.'}
          </p>
        </div>

        {/* 6 Grid Cards for Yantras */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {yantrasList.map((yantra) => {
            const title = language === 'te' ? yantra.nameTe : yantra.nameEn;
            const desc = language === 'te' ? yantra.descTe : yantra.descEn;
            const material = language === 'te' ? yantra.materialTe : yantra.materialEn;

            return (
              <div
                key={yantra.id}
                className={`bg-gradient-to-br ${yantra.themeColor} border rounded-2xl p-6 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-gold-500/10 group`}
              >
                <div>
                  {/* Decorative Yantra SVG Image container representing "Product Image" */}
                  <div className="aspect-square w-full max-w-[200px] mx-auto mb-6 bg-cosmic-950/90 border border-gold-500/20 rounded-xl p-4 flex items-center justify-center relative shadow-inner overflow-hidden group-hover:border-gold-500/40 transition-colors">
                    {/* Pulsing ring */}
                    <div className="absolute inset-0 border border-gold-400/5 rounded-xl scale-95 group-hover:scale-105 transition-transform duration-700 pointer-events-none"></div>
                    {renderYantraSvg(yantra.svgType)}
                  </div>

                  {/* Yantra Title */}
                  <div className="text-center mb-4">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white group-hover:text-gold-200 transition-colors">
                      {title}
                    </h3>
                    <div className="flex justify-center items-center gap-1 mt-1">
                      <span className="text-[10px] text-gold-400 uppercase font-mono tracking-widest">
                        {language === 'te' ? 'వైదిక రేఖాపటం' : 'Sacred Geometry'}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed text-center mb-6 min-h-[4.5rem]">
                    {desc}
                  </p>

                  {/* Product Metadata */}
                  <div className="border-t border-gold-500/10 pt-4 mb-6 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 uppercase font-mono tracking-wider">
                        {language === 'te' ? 'పదార్థం' : 'Material'}
                      </span>
                      <span className="text-gold-200 font-medium">
                        {material}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Call To Action WhatsApp button */}
                <button
                  onClick={() => handleYantraEnquiry(language === 'te' ? yantra.nameTe : yantra.nameEn)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gold-500 hover:bg-white text-cosmic-950 font-bold text-xs uppercase tracking-wider transition-all duration-200 rounded-lg shrink-0 cursor-pointer shadow-md hover:shadow-lg active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>{language === 'te' ? 'వాట్సాప్ ద్వారా అడగండి' : 'Enquire on WhatsApp'}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Dedicated Details Section: "Why Our Yantras Are Special" */}
        <div className="bg-cosmic-950/80 border border-gold-500/20 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Feature Text Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 border border-gold-500/20 rounded-full">
                <Star className="w-3.5 h-3.5 text-gold-400 fill-current" />
                <span className="text-[10px] font-mono text-gold-300 uppercase tracking-widest font-semibold">
                  {language === 'te' ? 'వైదిక సాంప్రదాయం' : 'Vedic Integrity'}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white uppercase tracking-tight">
                {language === 'te' ? 'మా యంత్రాల విశిష్టత ఏమిటి?' : 'Why Our Yantras Are Special'}
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {language === 'te'
                  ? 'మా యంత్రాలు మార్కెట్లో దొరికే యంత్ర ముద్రిత లేదా మెషిన్ ద్వారా ఒకేసారి వేల సంఖ్యలో ప్రింట్ చేయబడే సాదాసీదా రేకులు కావు. ప్రతి యంత్రాన్ని జ్యోతిష్య రత్న ఎమ్. చంద్ర మోహన్ సిద్ధాంతి గారు అత్యంత నియమ నిష్ఠలతో కూడిన సాంప్రదాయ పద్ధతిలోనే స్వయంగా చేతితో రాస్తారు.'
                  : 'Our yantras are not mass-produced or machine-printed. Each yantra is carefully handwritten and prepared with devotion and traditional methods by Jyothishya Ratna M. Chandra Mohan Siddhanthi.'}
              </p>

              {/* Bullet Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-gold-500/10 border border-gold-500/20 text-gold-400 mt-0.5 shrink-0">
                    <PenTool className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {language === 'te' ? 'చేతితో వ్రాయబడిన యంత్రాలు' : 'Handwritten Yantras'}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                      {language === 'te' ? 'కంప్యూటర్ ప్రింట్ లేకుండా రాగి రేకు పై సిద్ధాంతి గారే స్వయంగా గీస్తారు.' : 'Meticulously hand-etched on pure metal sheets.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-gold-500/10 border border-gold-500/20 text-gold-400 mt-0.5 shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {language === 'te' ? 'సాంప్రదాయ తయారీ విధానాలు' : 'Traditional Methods'}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                      {language === 'te' ? 'శాస్త్రోక్త పద్ధతిలో శుద్ధి చేసి సిద్ధం చేయబడుతుంది.' : 'Prepared with full devotion and ancient Vedic guidelines.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-gold-500/10 border border-gold-500/20 text-gold-400 mt-0.5 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {language === 'te' ? 'ఆధ్యాత్మిక పూజా శక్తీకరణ' : 'Energized Devotion'}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                      {language === 'te' ? 'బీజాక్షర సంపుటితో జప అనుష్టానాలు గావించబడతాయి.' : 'Chanted with appropriate mantra bijaksharas.'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1 rounded bg-gold-500/10 border border-gold-500/20 text-gold-400 mt-0.5 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                      {language === 'te' ? 'ఇల్లు, ఆఫీసుల కొరకు శ్రేష్ఠం' : 'Perfect for Home & Office'}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-normal mt-0.5">
                      {language === 'te' ? 'పూజా మందిరంలో పెట్టుకోవడానికి అనుకూలమైన రూపం.' : 'Ideal for shrines, study rooms, cash desks & workplaces.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gold-500/10">
                <p className="text-[11px] sm:text-xs text-gold-300 italic font-medium">
                  {language === 'te'
                    ? '*పవిత్ర యంత్రాలను కేవలం వ్యాపార దృక్పథంతో ప్రింటింగ్ చేయకూడదని, భక్తి శ్రద్ధలతోనే సిద్ధం చేయాలని మేము విశ్వసిస్తాము.'
                    : '*We believe that sacred yantras should be prepared with dedication and respect for tradition rather than simple mass printing.'}
                </p>
              </div>
            </div>

            {/* Premium Callout Highlight Block */}
            <div className="lg:col-span-5 bg-gold-500/5 border border-gold-500/25 p-6 sm:p-8 rounded-2xl flex flex-col justify-between items-center text-center">
              <svg viewBox="0 0 100 100" className="w-16 h-16 text-gold-400 mb-4 filter drop-shadow-[0_0_2px_rgba(212,175,55,0.3)] animate-pulse" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="50" cy="50" r="30" />
                <polygon points="50,26 30,68 70,68" />
                <polygon points="50,74 30,32 70,32" />
                <circle cx="50" cy="50" r="1.5" className="fill-gold-400" />
              </svg>
              
              <h4 className="font-serif text-base font-bold text-white uppercase tracking-wide mb-2">
                {language === 'te' ? 'వివరాలు మరియు లభ్యత కొరకు' : 'For Details & Availability'}
              </h4>
              
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                {language === 'te'
                  ? 'సిద్ధాంతి గారు ప్రతి యంత్రాన్ని వ్యక్తిగతంగా మీ జాతక చక్రం మరియు గోత్ర నామాలకు అనుగుణంగా పూజ చేసి సిద్ధం చేస్తారు. వివరాల కొరకు నేరుగా వాట్సాప్ ద్వారా మమ్మల్ని సంప్రదించండి.'
                  : 'Each sacred yantra is customized and energized in your gotra-namas by Siddhanthi Garu. For yantra details and availability, please contact us through WhatsApp.'}
              </p>

              <a
                href={`https://wa.me/${ASTROLOGER_INFO.contact.whatsApp}?text=${encodeURIComponent(
                  language === 'te'
                    ? 'నమస్కారం సిద్ధాంతి గారు, నేను వైదిక పూజా సంపుటి కలిగిన చేతితో వ్రాసిన పవిత్ర యంత్రాల వివరాలు మరియు లభ్యత గురించి తెలుసుకోవాలనుకుంటున్నాను.'
                    : 'Namo Venkatesaya. Respected Chandra Mohan Siddhanthi Garu, I am writing to enquire about the details and availability of your handwritten sacred copper yantras.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-center transition-all duration-200 shadow-md active:scale-95"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.035-3.411c1.556.924 3.111 1.411 4.717 1.412 5.513 0 9.998-4.485 10.001-9.999.002-2.673-1.04-5.186-2.943-7.089C15.903 3.01 13.4 1.966 10.73 1.967c-5.516 0-10.003 4.485-10.007 9.999-.001 1.743.468 3.447 1.359 4.954L1.1 21.1l4.992-1.31c1.513.824 3.064 1.141 5.968 1.141zM18.232 15s-1.8-.888-2.122-1.047c-.322-.159-.556-.239-.79.112s-.91 1.121-1.114 1.352c-.204.23-.408.261-.73.102-.322-.159-1.36-.501-2.59-1.6c-.958-.855-1.603-1.912-1.791-2.231-.188-.318-.02-.491.14-.65.143-.142.322-.373.483-.559.16-.186.214-.318.322-.53s.053-.398-.026-.557c-.079-.159-.79-1.902-1.082-2.604-.284-.682-.572-.59-.79-.6-.201-.01-.431-.01-.663-.01s-.603.087-.918.431c-.316.344-1.206 1.18-1.206 2.876 0 1.696 1.233 3.329 1.405 3.559.172.23 2.427 3.707 5.879 5.2 1.055.456 1.884.729 2.528.934 1.061.336 2.028.289 2.792.175.852-.127 2.624-1.073 2.993-2.11s.369-1.929.259-2.11c-.111-.18-.408-.287-.73-.446z" />
                </svg>
                <span>{language === 'te' ? 'ఇప్పుడే వాట్సాప్‌లో సంప్రదించండి' : 'Connect on WhatsApp'}</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
