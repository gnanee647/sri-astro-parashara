import React, { useState } from 'react';
import { useLanguage } from '../LanguageContext';
import { ShieldCheck, Info, Sparkles, RefreshCw, Layers } from 'lucide-react';

type ChartStyle = 'south' | 'north';
type LanguageMode = 'te' | 'en';

interface Planet {
  id: string;
  symbol: string;
  telugu: string;
  english: string;
  meaning: string;
  meaningTe: string;
}

// 9 traditional planets + Lagna
const PLANETS: Record<string, Planet> = {
  Lg: { id: 'Lg', symbol: 'Lg', telugu: 'లగ్న', english: 'Lagna', meaning: 'Ascendant / Self / Constitution', meaningTe: 'లగ్నం / ఆత్మాభిమానం / శారీరక అనుకూలత' },
  Su: { id: 'Su', symbol: 'Su', telugu: 'రవి', english: 'Sun', meaning: 'Soul / Father / Career / Vitality', meaningTe: 'రవి / ఆత్మబలం / కీర్తి / తండ్రి' },
  Mo: { id: 'Mo', symbol: 'Mo', telugu: 'చం', english: 'Moon', meaning: 'Mind / Mother / Emotions / Intuition', meaningTe: 'చంద్రుడు / మనస్సు / తల్లి / సంతోషం' },
  Ma: { id: 'Ma', symbol: 'Ma', telugu: 'కు', english: 'Mars', meaning: 'Energy / Courage / Siblings / Property', meaningTe: 'కుజుడు / పరాక్రమం / సోదరులు / భూమి' },
  Me: { id: 'Me', symbol: 'Me', telugu: 'బు', english: 'Mercury', meaning: 'Intellect / Speech / Business / Education', meaningTe: 'బుధుడు / బుద్ధి బలం / వ్యాచారం / విద్య' },
  Ju: { id: 'Ju', symbol: 'గు', telugu: 'గు', english: 'Jupiter', meaning: 'Wisdom / Wealth / Children / Fortune', meaningTe: 'గురుడు / జ్ఞానం / సంపద / సంస్కారం' },
  Ve: { id: 'Ve', symbol: 'శు', telugu: 'శు', english: 'Venus', meaning: 'Luxury / Love / Marriage / Vehicles', meaningTe: 'శుక్రుడు / కళలు / వైవాహిక జీవితం / భోగం' },
  Sa: { id: 'Sa', symbol: 'శ', telugu: 'శ', english: 'Saturn', meaning: 'Discipline / Longevity / Karma / Career', meaningTe: 'శనిదేవుడు / ఆయుష్షు / క్రమశిక్షణ / శ్రమ' },
  Ra: { id: 'Ra', symbol: 'రా', telugu: 'రా', english: 'Rahu', meaning: 'Ambition / Worldly Desire / Foreign Lands', meaningTe: 'రాహువు / విదేశీ యోగం / అదృష్టం' },
  Ke: { id: 'Ke', symbol: 'కే', telugu: 'కే', english: 'Ketu', meaning: 'Spirituality / Liberation / Intuitive wisdom', meaningTe: 'కేతువు / మోక్ష కారణాలు / ఆధ్యాత్మికత' }
};

interface HouseDetails {
  num: number;
  sanskrit: string;
  telugu: string;
  english: string;
  significates: string;
  significatesTe: string;
}

const HOUSE_DATA: Record<number, HouseDetails> = {
  1: { num: 1, sanskrit: 'Lagna Bhava', telugu: 'తను స్థానం', english: 'House of Self', significates: 'Physical body, character, appearance, general fortune, personality.', significatesTe: 'వ్యక్తిత్వం, శారీరక ఆకారం, ఆయురారోగ్యాలు, ప్రాథమిక అదృష్టం.' },
  2: { num: 2, sanskrit: 'Dhana Bhava', telugu: 'ధన స్థానం', english: 'House of Wealth', significates: 'Accumulated wealth, family circle, speech, food, right eye, voice.', significatesTe: 'ఆర్థిక సంపద, కుటుంబం, మాట తీరు, ప్రాథమిక విద్య.' },
  3: { num: 3, sanskrit: 'Sahaja Bhava', telugu: 'సహజ స్థానం', english: 'House of Siblings', significates: 'Courage, younger siblings, short journeys, writing, communications.', significatesTe: 'ధైర్యం, తమ్ముళ్లు/చెల్లెళ్లు, చిన్న ప్రయాణాలు, రచనలు.' },
  4: { num: 4, sanskrit: 'Bandhu Bhava', telugu: 'మాతృ / సుఖ స్థానం', english: 'House of Happiness', significates: 'Mother, home, vehicles, land, emotional peace, ancestral properties.', significatesTe: 'తల్లి, ఇల్లు, భూములు, వాహనాలు, మానసిక సంతోషం.' },
  5: { num: 5, sanskrit: 'Putra Bhava', telugu: 'పుత్ర / పూర్వ పుణ్య', english: 'House of Lineage', significates: 'Children, intellect, creativity, past life merits, speculative luck.', significatesTe: 'సంతానం, మేధస్సు, సృజనాత్మకత, పూర్వజన్మ పుణ్యఫలం.' },
  6: { num: 6, sanskrit: 'Ari Bhava', telugu: 'శత్రు / రోగ స్థానం', english: 'House of Obstacles', significates: 'Debts, illness, enemies, daily routines, litigations, service career.', significatesTe: 'ఆరోగ్యం, శత్రువులు, అప్పులు, కోర్టు వ్యవహారాలు, సేవారంగం.' },
  7: { num: 7, sanskrit: 'Yuvati Bhava', telugu: 'కళత్ర స్థానం', english: 'House of Marriage', significates: 'Spouse, marriage partner, business partnerships, global relations.', significatesTe: 'భార్య/భర్త, వైవాహిక జీవితం, వ్యాపార భాగస్వామ్యం, ప్రజా సంబంధాలు.' },
  8: { num: 8, sanskrit: 'Randhra Bhava', telugu: 'ఆయుష్షు స్థానం', english: 'House of Longevity', significates: 'Longevity, sudden events, research, inheritance, hidden secrets.', significatesTe: 'ఆయురారోగ్యం, ఆకస్మిక మార్పులు, శోధన, వారసత్వ సంపద.' },
  9: { num: 9, sanskrit: 'Dharma Bhava', telugu: 'భాగ్య స్థానం', english: 'House of Fortune', significates: 'Luck, values, father, spiritual inclination, higher learning, long travels.', significatesTe: 'భాగ్యం, విదేశీ ప్రయాణాలు, తండ్రి, గురువులు, దైవచింతన.' },
  10: { num: 10, sanskrit: 'Karma Bhava', telugu: 'రాజ్య / కర్మ స్థానం', english: 'House of Career', significates: 'Profession, fame, achievements, father\'s lineage, social status.', significatesTe: 'ఉద్యోగం, రాజ్యాధికారం, కీర్తి ప్రతిష్ఠలు, సంపాదనా శక్తి.' },
  11: { num: 11, sanskrit: 'Labha Bhava', telugu: 'లాభ స్థానం', english: 'House of Profits', significates: 'Income, elder siblings, wishes fulfilled, friendships, investments.', significatesTe: 'ఆదాయ వనరులు, లాభాలు, అన్న/అక్క, ఆశయాల నెరవేరుట.' },
  12: { num: 12, sanskrit: 'Vyaya Bhava', telugu: 'వ్యయ స్థానం', english: 'House of Liberation', significates: 'Expenditure, losses, foreign settlement, sleep, Moksha (enlightenment).', significatesTe: 'ఖర్చులు, నష్టాలు, విదేశాలలో సుస్థిరత, మోక్షం, ఆధ్యాత్మిక ప్రయాణం.' }
};

interface YogaPreset {
  name: string;
  nameTe: string;
  desc: string;
  descTe: string;
  // Defines planet mapping to house numbers (1 to 12)
  setup: Record<string, number[]>; 
}

const YOGA_PRESETS: YogaPreset[] = [
  {
    name: "Gaja Kesari Yoga (Elephant-Lion Combo for Wisdom & Fame)",
    nameTe: "గజకేసరి యోగం (బుద్ధి, కీర్తి ప్రతిష్టలు)",
    desc: "Formed when Jupiter is in a quadrant (1st, 4th, 7th, or 10th house) from the Moon. Grants wealth, longevity, sharp intelligence, and public victory.",
    descTe: "చంద్రుడి నుండి కేంద్రాలలో (1, 4, 7, 10) గురువు అమరినప్పుడు ఏర్పడును. దీనివల్ల సమాజంలో తిరుగులేని పాండిత్యం, కీర్తి, శ్రీమంతుడవుట లభిస్తుంది.",
    setup: {
      Mo: [1], // Moon in 1st house (Lagna house)
      Ju: [4], // Jupiter in 4th house
      Lg: [1],
      Su: [9],
      Sa: [10],
      Ve: [11],
      Me: [11],
      Ma: [5],
      Ra: [3],
      Ke: [9]
    }
  },
  {
    name: "Srinatha Raja Yoga (High Divine Status & Abundance)",
    nameTe: "శ్రీనాథ రాజయోగం (అఖండ లక్ష్మీ అనుగ్రహం)",
    desc: "A glorious yoga formed when the lord of the 9th house (Jupiter here) is exalted or placed magnificently with Venus and Mercury in the 10th house. Gives unparalleled high status, handsome looks, and noble properties.",
    descTe: "తొమ్మిదవ భాగానికి అధిపతి పది లో ఉన్నత గ్రహాలతో కూడి ఉన్నప్పుడు లభించే పరమ పవిత్ర యోగం. దీని ద్వారా సమాజంలో గౌరవం, ఐశ్వర్యం ప్రాప్తిస్తాయి.",
    setup: {
      Lg: [1],
      Ju: [10],
      Me: [10],
      Ve: [10],
      Su: [10],
      Mo: [9],
      Ma: [3],
      Sa: [11],
      Ra: [4],
      Ke: [10]
    }
  },
  {
    name: "Auspicious Vivaha Compatibility Chart",
    nameTe: "కళ్యాణ మహూర్త జాతక అనుకూలత అమరిక",
    desc: "A highly harmonious placement of planets where Kundali shows strong saptama bhava, Jupiter protecting couples' longevity, and Venus unblemished for beautiful emotional bonding.",
    descTe: "సప్తమ భావం (7 వ ఇల్లు) అత్యంత బలపడి, గురుడు మరియు శుక్రులు అనుకూల దృష్టితో వధూవరుల జాతకాలను అనుసంధానించే అత్యున్నత వైవాహిక గ్రహాల అమరిక.",
    setup: {
      Lg: [1],
      Ve: [9],
      Ju: [5],
      Mo: [2],
      Su: [11],
      Me: [11],
      Ma: [11], // Auspiciously soft Mars placement, avoiding Kuja dosha
      Sa: [3],
      Ra: [6],
      Ke: [12]
    }
  }
];

export default function KundaliChart() {
  const { language } = useLanguage();
  const [chartStyle, setChartStyle] = useState<ChartStyle>('south');
  const [activeYogaIndex, setActiveYogaIndex] = useState<number>(0);
  const [selectedHouse, setSelectedHouse] = useState<number>(1);
  const [planetLanguage, setPlanetLanguage] = useState<LanguageMode>('te');

  const currentYoga = YOGA_PRESETS[activeYogaIndex];
  
  // Custom interactive planetary mapping
  const [planetPlacements, setPlanetPlacements] = useState<Record<string, number>>(
    Object.keys(currentYoga.setup).reduce((acc, p) => {
      acc[p] = currentYoga.setup[p][0];
      return acc;
    }, {} as Record<string, number>)
  );

  const handleYogaChange = (idx: number) => {
    setActiveYogaIndex(idx);
    const selectedYoga = YOGA_PRESETS[idx];
    setPlanetPlacements(
      Object.keys(selectedYoga.setup).reduce((acc, p) => {
        acc[p] = selectedYoga.setup[p][0];
        return acc;
      }, {} as Record<string, number>)
    );
  };

  // Move planet to a different house interactively
  const movePlanet = (planetId: string, targetHouse: number) => {
    setPlanetPlacements(prev => ({
      ...prev,
      [planetId]: targetHouse
    }));
  };

  // Get list of planets currently in a house (1-indexed house)
  const getPlanetsInHouse = (houseNum: number) => {
    return Object.entries(planetPlacements)
      .filter(([_, currentHouse]) => currentHouse === houseNum)
      .map(([pId]) => PLANETS[pId]);
  };

  // Sign mapping for South Indian Grid
  // South Indian astrological chart is a static setup of rashis clock-wise:
  // House numbers are relative to Lagna (Lg), but traditionally South Indian astrologers mark houses
  // directly. For our educational interactive version: we display the houses 1 to 12.
  // Aries (Mesha) starts at top row, Column 2. Pisces (Meena) is top-left corner.
  // Traditional south grid indices (0 to 15 coordinate indexes representing 4x4 squares):
  // 00 01 02 03
  // 12          04
  // 11          05
  // 10 09 08 07
  const southChartCells = [
    { name: 'Pisces (మీనం)', code: 'MEE', rashiId: 12, row: 0, col: 0 },
    { name: 'Aries (మేషం)', code: 'MES', rashiId: 1, row: 0, col: 1 },
    { name: 'Taurus (వృషభం)', code: 'VRU', rashiId: 2, row: 0, col: 2 },
    { name: 'Gemini (మిథునం)', code: 'MIT', rashiId: 3, row: 0, col: 3 },
    { name: 'Cancer (కర్కాటకం)', code: 'KAR', rashiId: 4, row: 1, col: 3 },
    { name: 'Leo (సింహం)', code: 'SIM', rashiId: 5, row: 2, col: 3 },
    { name: 'Virgo (కన్య)', code: 'KAN', rashiId: 6, row: 3, col: 3 },
    { name: 'Libra (తుల)', code: 'TUL', rashiId: 7, row: 3, col: 2 },
    { name: 'Scorpio (వృశ్చికం)', code: 'VRI', rashiId: 8, row: 3, col: 1 },
    { name: 'Sagittarius (ధనుస్సు)', code: 'DHA', rashiId: 9, row: 3, col: 0 },
    { name: 'Capricorn (మకరం)', code: 'MAK', rashiId: 10, row: 2, col: 0 },
    { name: 'Aquarius (కుంభం)', code: 'KUM', rashiId: 11, row: 1, col: 0 }
  ];

  return (
    <div id="interactive-kundali-block" className="w-full max-w-6xl mx-auto py-10 px-4 sm:px-6">
      
      {/* Visual Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-1 bg-gold-500/10 border border-gold-500/25 px-3 py-1 rounded-full text-gold-300 text-xs tracking-wider font-mono uppercase mb-4 shadow-sm animate-pulse">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{language === 'te' ? 'జాతక చక్ర పరిశీలన టూల్' : 'Live Jyotishya Birth Chart Visualizer'}</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 leading-tight mb-3">
          {language === 'te' ? 'మీ జన్మకుండలి గ్రహాల విన్యాసం' : 'Vedic Horoscopic Kundali Analysis'}
        </h2>
        <p className="max-w-2xl mx-auto text-slate-350 text-sm leading-relaxed">
          {language === 'te' 
            ? 'వేద జ్యోతిష శాస్త్ర సాంప్రదాయాల ప్రకారం, నక్షత్రాలు మరియు గ్రహాల కలయిక మన జీవితాన్ని ఏ విధంగా నిర్దేశిస్తాయో కింద ఉన్న ఇంటరాక్టివ్ జాతక చక్రం ద్వారా మీరే స్వయంగా గ్రహించగలరు.'
            : 'Explore traditional planets allocations based on the authentic South Indian or North Indian astrological structures. Switch formats, load Raja Yogam charts, and tap any house to inspect Vedic significations.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Controls, Presets & Instructions (Left 5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Chart Style & Planet Language Selectors */}
          <div className="p-4 sm:p-5 rounded-2xl bg-cosmic-900 border border-gold-500/15 shadow-xl">
            <h3 className="font-serif text-sm font-semibold text-gold-300 uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-gold-500/10 pb-2">
              <Layers className="w-4 h-4 text-gold-400" />
              <span>{language === 'te' ? 'చక్ర శైలి & అమరిక' : 'Chart Representation & Setup'}</span>
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                  {language === 'te' ? '1. జాతక చక్ర విధానం ఎంచుకోండి' : '1. Astrological Grid Style'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setChartStyle('south')}
                    className={`py-2 px-3 text-xs font-bold uppercase tracking-wide rounded-lg border transition-all cursor-pointer ${
                      chartStyle === 'south'
                        ? 'bg-gold-500 text-cosmic-950 border-gold-500 shadow-lg font-bold'
                        : 'bg-cosmic-950 text-slate-300 border-gold-500/15 hover:bg-cosmic-800'
                    }`}
                  >
                    {language === 'te' ? 'దక్షిణాది చక్రం (South Indian)' : 'South Indian Grid'}
                  </button>
                  <button
                    onClick={() => setChartStyle('north')}
                    className={`py-2 px-3 text-xs font-bold uppercase tracking-wide rounded-lg border transition-all cursor-pointer ${
                      chartStyle === 'north'
                        ? 'bg-gold-500 text-cosmic-950 border-gold-500 shadow-lg font-bold'
                        : 'bg-cosmic-950 text-slate-300 border-gold-500/15 hover:bg-cosmic-800'
                    }`}
                  >
                    {language === 'te' ? 'ఉత్తరాది చక్రం (North Indian)' : 'North Indian Diamond'}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-slate-300 uppercase tracking-wider mb-2">
                  {language === 'te' ? '2. గ్రహాల నామకరణ భాష' : '2. Planetary Symbol Language'}
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setPlanetLanguage('te')}
                    className={`py-1.5 px-2.5 text-xs font-bold uppercase tracking-wide rounded-md border transition-all cursor-pointer ${
                      planetLanguage === 'te'
                        ? 'bg-gold-900/40 text-gold-300 border-gold-500/40 shadow-inner'
                        : 'bg-cosmic-950 text-slate-400 border-gold-500/10 hover:bg-cosmic-800'
                    }`}
                  >
                    తెలుగు (సూర్యుడు, శని)
                  </button>
                  <button
                    onClick={() => setPlanetLanguage('en')}
                    className={`py-1.5 px-2.5 text-xs font-bold uppercase tracking-wide rounded-md border transition-all cursor-pointer ${
                      planetLanguage === 'en'
                        ? 'bg-gold-900/40 text-gold-300 border-gold-500/40 shadow-inner'
                        : 'bg-cosmic-950 text-slate-400 border-gold-500/10 hover:bg-cosmic-800'
                    }`}
                  >
                    English (Sun, Saturn)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Raja Yoga presets */}
          <div className="p-4 sm:p-5 rounded-2xl bg-cosmic-900 border border-gold-500/15 shadow-xl">
            <h3 className="font-serif text-sm font-semibold text-gold-300 uppercase tracking-widest mb-3 flex items-center gap-2 border-b border-gold-500/10 pb-2">
              <span>🌟</span>
              <span>{language === 'te' ? 'జాజ్వల్య రాజయోగ ఉదాహరణలు' : 'Vedic Raja Yoga Presets'}</span>
            </h3>
            
            <p className="text-[11px] text-slate-300 leading-relaxed mb-4">
              {language === 'te'
                ? 'కింది పవిత్ర యోగాలలో ఒకదానిని ఎంచుకోవడం ద్వారా లగ్నం మరియు గ్రహ స్థితులు ఎలా అమరుతాయో కుండలిలో వీక్షించండిః'
                : 'Select a premium astrological configuration preset below to automatically re-arrange the interactive virtual Kundali houses:'}
            </p>

            <div className="space-y-2.5">
              {YOGA_PRESETS.map((y, idx) => (
                <button
                  key={idx}
                  onClick={() => handleYogaChange(idx)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    activeYogaIndex === idx
                      ? 'bg-gold-500/10 border-gold-500/50 text-gold-300 shadow-md ring-1 ring-gold-500/20'
                      : 'bg-cosmic-950/70 border-gold-500/10 text-slate-300 hover:border-gold-500/30'
                  }`}
                >
                  <div className="text-xs font-bold font-serif mb-1 uppercase tracking-wide">
                    {language === 'te' ? y.nameTe : y.name}
                  </div>
                  <div className="text-[11px] text-slate-450 line-clamp-2 leading-relaxed">
                    {language === 'te' ? y.descTe : y.desc}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Draggable/Interactive Positioner Helper */}
          <div className="p-4 sm:p-5 rounded-2xl bg-cosmic-900 border border-gold-500/15 shadow-xl">
            <h3 className="font-serif text-sm font-semibold text-gold-300 uppercase tracking-widest mb-2 flex items-center gap-2">
              <Info className="w-4 h-4 text-gold-400" />
              <span>{language === 'te' ? 'వివరణాత్మక జాతక పరిశోధన' : 'Chart Customization Guide'}</span>
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              {language === 'te'
                ? 'సిద్ధాంతి గారు ఈ విధంగానే మీ జన్మ సమయ నక్షత్రాల గణితాల సహాయంతో జాతకాన్ని రచిస్తారు. కుండలి చక్రంలోని ఇళ్ళపై నొక్కడం ద్వారా ఆ ఆయా స్థానాల శుభ అశుభ ఫలితాలు కుడివైపున లోతుగా పరిశీలించవచ్చు.'
                : 'Sri Chandra Mohan Siddhanthi Garu calculates these positions using traditional ephemerals (Vedic Panchangam). Tap individual houses or segments on the visual chart to examine predictions for health, business, or relations.'}
            </p>
          </div>
        </div>


        {/* Interactive Astro Kundali Chart Display Area (Right 7 columns) */}
        <div className="lg:col-span-7 flex flex-col items-center space-y-6">
          
          {/* Active Preset Description Card */}
          <div className="w-full p-4 rounded-xl bg-gradient-to-r from-gold-950/20 to-cosmic-950 border border-gold-500/25 shadow-md flex gap-3.5 items-start">
            <span className="text-2xl p-1 bg-gold-500/10 rounded-lg text-gold-400 shrink-0 select-none">⚖️</span>
            <div>
              <h4 className="font-serif text-xs font-bold text-gold-300 uppercase tracking-wider mb-1">
                {language === 'te' ? `పరీక్షిస్తున్నది: ${currentYoga.nameTe}` : `Examining: ${currentYoga.name}`}
              </h4>
              <p className="text-[11.5px] text-slate-200 leading-relaxed font-sans">
                {language === 'te' ? currentYoga.descTe : currentYoga.desc}
              </p>
            </div>
          </div>

          {/* Actual SVG Kundali rendering */}
          <div className="relative w-full max-w-[460px] aspect-square rounded-2xl p-3 bg-cosmic-950 border-2 border-gold-500/30 shadow-2xl flex items-center justify-center overflow-hidden">
            
            {/* Subtle background glow */}
            <div className="absolute w-60 h-60 rounded-full bg-gold-500/3 blur-[60px] pointer-events-none"></div>

            {/* Render South Indian Grid Chart */}
            {chartStyle === 'south' && (
              <div className="grid grid-cols-4 grid-rows-4 w-full h-full gap-1 p-1 bg-gold-500/10 rounded-lg">
                {[
                  // Row 0
                  southChartCells[0], // Pisces
                  southChartCells[1], // Aries
                  southChartCells[2], // Taurus
                  southChartCells[3], // Gemini
                  // Row 1
                  southChartCells[11], // Aquarius
                  null, null, // Corner placeholder
                  southChartCells[4], // Cancer
                  // Row 2
                  southChartCells[10], // Capricorn
                  null, null, // Corner placeholder
                  southChartCells[5], // Leo
                  // Row 3
                  southChartCells[9], // Sagittarius
                  southChartCells[8], // Scorpio
                  southChartCells[7], // Libra
                  southChartCells[6], // Virgo
                ].map((cell, idx) => {
                  if (cell === null) {
                    // Center mandala aesthetic block (only rendered for the first 2 null slots in row 1-2)
                    if (idx === 5) {
                      return (
                        <div key={`center-mandala-spokes`} className="col-span-2 row-span-2 flex flex-col items-center justify-center p-2 text-center pointer-events-none relative">
                          <svg className="w-24 h-24 text-gold-500/15 animate-spin [animation-duration:90s] absolute" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3,3" />
                            <polygon points="50,5 95,50 50,95 5,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            <circle cx="50" cy="50" r="2" fill="currentColor" />
                          </svg>
                          <div className="z-10 flex flex-col items-center text-center px-1">
                            <span className="font-serif text-[20px] font-bold text-gold-300 drop-shadow-md select-none leading-none">ॐ</span>
                            <span className="text-[9px] font-serif text-gold-400 uppercase tracking-[0.2em] mt-1.5 select-none leading-none">PARASHARA</span>
                          </div>
                        </div>
                      );
                    }
                    return null; // Skip rendering other null items as col-span renders them
                  }

                  const cellPlanets = getPlanetsInHouse(cell.rashiId);
                  const isSelected = selectedHouse === cell.rashiId;

                  return (
                    <button
                      key={`south-house-${cell.rashiId}`}
                      onClick={() => setSelectedHouse(cell.rashiId)}
                      className={`relative flex flex-col justify-between p-2 rounded border text-left transition-all cursor-pointer select-none ${
                        isSelected
                          ? 'bg-gold-500/15 border-gold-400 ring-1 ring-gold-500/40'
                          : 'bg-cosmic-900/90 border-gold-500/15 hover:border-gold-500/35 hover:bg-cosmic-800'
                      }`}
                    >
                      {/* House Label */}
                      <div className="flex justify-between items-center w-full">
                        <span className="text-[9px] font-semibold text-gold-400 tracking-tighter uppercase leading-none truncate">
                          {cell.name.split(' ')[0]}
                        </span>
                        <span className="text-[8px] font-mono font-bold text-slate-400 bg-cosmic-950 px-1 rounded">
                          H{cell.rashiId}
                        </span>
                      </div>

                      {/* Planets inside this cell */}
                      <div className="flex flex-wrap gap-1 mt-1 mb-0.5 justify-start items-center min-h-[22px]">
                        {cellPlanets.length > 0 ? (
                          cellPlanets.map((p) => (
                            <span
                              key={p.id}
                              className={`px-1 py-0.5 text-[10.5px] font-bold rounded shadow-sm ${
                                p.id === 'Lg'
                                  ? 'bg-rose-900/60 text-rose-300 border border-rose-500/30 animate-pulse'
                                  : 'bg-gold-950/60 text-gold-350 border border-gold-500/20'
                              }`}
                              title={p.english}
                            >
                              {planetLanguage === 'te' ? p.telugu : p.symbol}
                            </span>
                          ))
                        ) : (
                          <span className="text-[8px] text-slate-600 italic">Empty</span>
                        )}
                      </div>

                      {/* Small signature background number */}
                      <span className="absolute bottom-1 right-1 text-[9px] font-mono text-slate-500 font-medium">
                        {cell.code}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Render North Indian Diamond Chart */}
            {chartStyle === 'north' && (
              <div className="relative w-full h-full bg-cosmic-900/40 rounded-lg p-2 overflow-hidden border border-gold-500/10">
                {/* SVG lines to create the diamond geometry */}
                <svg className="absolute inset-0 w-full h-full text-gold-500/25 pointer-events-none" viewBox="0 0 400 400" fill="none">
                  {/* Outer Border */}
                  <rect x="10" y="10" width="380" height="380" stroke="currentColor" strokeWidth="2" />
                  {/* Big Diagonals */}
                  <line x1="10" y1="10" x2="390" y2="390" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="390" y1="10" x2="10" y2="390" stroke="currentColor" strokeWidth="1.5" />
                  {/* Inner Diamond */}
                  <polygon points="200,10 390,200 200,390 10,200" stroke="currentColor" strokeWidth="1.5" />
                </svg>

                {/* Absolutely positioned interactive houses */}
                {/* Visual Diamond labels & inputs */}
                {[
                  // House coordinates (top, left, width, height) roughly approximating diamond sectors
                  { house: 1, style: { top: '35%', left: '35%', width: '30%', height: '30%' }, labelClass: 'justify-center items-center text-center' },
                  { house: 2, style: { top: '15%', left: '15%', width: '30%', height: '18%' }, labelClass: 'justify-end items-center pr-3' },
                  { house: 3, style: { top: '15%', left: '55%', width: '30%', height: '18%' }, labelClass: 'justify-start items-center pl-3' },
                  { house: 4, style: { top: '10%', left: '35%', width: '30%', height: '22%' }, labelClass: 'justify-center items-end pb-3' },
                  { house: 5, style: { top: '35%', left: '72%', width: '18%', height: '30%' }, labelClass: 'justify-start items-center pl-2' },
                  { house: 6, style: { top: '55%', left: '55%', width: '30%', height: '18%' }, labelClass: 'justify-start items-center pl-3' },
                  { house: 7, style: { top: '35%', left: '10%', width: '18%', height: '30%' }, labelClass: 'justify-end items-center pr-2' },
                  { house: 8, style: { top: '55%', left: '15%', width: '30%', height: '18%' }, labelClass: 'justify-end items-center pr-3' },
                  { house: 9, style: { top: '68%', left: '35%', width: '30%', height: '22%' }, labelClass: 'justify-center items-start pt-3' },
                  { house: 10, style: { top: '35%', left: '10%', width: '18%', height: '30%' }, labelClass: 'hide-for-now' }, // Duplicate overlaps
                  { house: 11, style: { top: '15%', left: '15%', width: '30%', height: '18%' }, labelClass: 'hide-for-now-dup' },
                  { house: 12, style: { top: '15%', left: '55%', width: '30%', height: '18%' }, labelClass: 'hide-for-now-dup-2' }
                ].map((item) => {
                  // Standard mapping for North Indian house diamonds
                  // To keep overlaps clean and clickable we approximate the regions
                  const houseId = item.house;
                  const housePlanets = getPlanetsInHouse(houseId);
                  const isSelected = selectedHouse === houseId;

                  // Skip extra overlap elements from map rendering
                  if (item.labelClass.startsWith('hide')) return null;

                  return (
                    <button
                      key={`north-house-${houseId}`}
                      onClick={() => setSelectedHouse(houseId)}
                      style={item.style}
                      className={`absolute rounded flex flex-col justify-center items-center p-1 transition-all cursor-pointer ${
                        isSelected 
                          ? 'bg-gold-500/10 border border-gold-400 z-20 shadow-md scale-102'
                          : 'hover:bg-cosmic-800/40 border border-transparent z-10'
                      }`}
                    >
                      <span className="text-[9px] font-mono font-bold text-gold-400">
                        H{houseId}
                      </span>
                      
                      {/* Planet chips */}
                      <div className="flex flex-wrap gap-1 justify-center max-w-full items-center mt-1">
                        {housePlanets.map((p) => (
                          <span
                            key={p.id}
                            className={`px-0.5 py-px text-[9.5px] font-bold rounded shrink-0 ${
                              p.id === 'Lg'
                                ? 'bg-rose-900/60 text-rose-300'
                                : 'bg-gold-950/60 text-gold-350'
                            }`}
                          >
                            {planetLanguage === 'te' ? p.telugu : p.symbol}
                          </span>
                        ))}
                      </div>
                    </button>
                  );
                })}

                {/* Overlap elements logic for perfect 12 house clickability in North Diamond */}
                <button 
                  onClick={() => setSelectedHouse(10)}
                  className={`absolute bottom-[10%] left-[35%] w-[30%] h-[22%] rounded flex flex-col justify-center items-center transition-all ${
                    selectedHouse === 10 ? 'bg-gold-500/10 border border-gold-400 z-20' : 'hover:bg-cosmic-800/40'
                  }`}
                >
                  <span className="text-[9px] font-mono font-bold text-gold-400">H10</span>
                  <div className="flex flex-wrap gap-1 justify-center items-center mt-1">
                    {getPlanetsInHouse(10).map(p => (
                      <span key={p.id} className="px-0.5 py-px text-[9.5px] font-bold bg-gold-950/60 text-gold-350 rounded">
                        {planetLanguage === 'te' ? p.telugu : p.symbol}
                      </span>
                    ))}
                  </div>
                </button>

                <button 
                  onClick={() => setSelectedHouse(11)}
                  className={`absolute top-[40%] left-[70%] w-[20%] h-[20%] rounded flex flex-col justify-center items-center transition-all ${
                    selectedHouse === 11 ? 'bg-gold-500/10 border border-gold-400 z-20' : 'hover:bg-cosmic-800/40'
                  }`}
                >
                  <span className="text-[9px] font-mono font-bold text-gold-400">H11</span>
                  <div className="flex flex-wrap gap-1 justify-center items-center mt-1">
                    {getPlanetsInHouse(11).map(p => (
                      <span key={p.id} className="px-0.5 py-px text-[9.5px] font-bold bg-gold-950/60 text-gold-350 rounded">
                        {planetLanguage === 'te' ? p.telugu : p.symbol}
                      </span>
                    ))}
                  </div>
                </button>

                <button 
                  onClick={() => setSelectedHouse(12)}
                  className={`absolute top-[40%] left-[10%] w-[20%] h-[20%] rounded flex flex-col justify-center items-center transition-all ${
                    selectedHouse === 12 ? 'bg-gold-500/10 border border-gold-400 z-20' : 'hover:bg-cosmic-800/40'
                  }`}
                >
                  <span className="text-[9px] font-mono font-bold text-gold-400">H12</span>
                  <div className="flex flex-wrap gap-1 justify-center items-center mt-1">
                    {getPlanetsInHouse(12).map(p => (
                      <span key={p.id} className="px-0.5 py-px text-[9.5px] font-bold bg-gold-950/60 text-gold-350 rounded">
                        {planetLanguage === 'te' ? p.telugu : p.symbol}
                      </span>
                    ))}
                  </div>
                </button>
              </div>
            )}
          </div>

          <div className="text-center">
            <p className="text-xs text-amber-300 flex items-center justify-center gap-1.5 font-mono">
              <span>💡</span>
              <span>{language === 'te' ? 'చక్రంలోని ఏదైనా ఒక ఇల్లు పై నొక్కి ఫలితం తెలుసుకోండి' : 'Tap any house on the Kundali above to view significations below:'}</span>
            </p>
          </div>

        </div>

      </div>

      {/* House Signification Details (Shown for selected house) */}
      {selectedHouse && (
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-cosmic-900 border border-gold-500/20 shadow-xl transition-all duration-300">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gold-500/15 pb-4 mb-4 gap-2">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center font-bold text-gold-400 font-serif">
                {selectedHouse}
              </span>
              <div>
                <h3 className="font-serif text-lg font-bold text-gold-300">
                  {language === 'te' 
                    ? `${HOUSE_DATA[selectedHouse].telugu} (${HOUSE_DATA[selectedHouse].sanskrit})`
                    : `${HOUSE_DATA[selectedHouse].english} (${HOUSE_DATA[selectedHouse].sanskrit})`
                  }
                </h3>
                <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {language === 'te' ? `జ్యోతిష్య శాస్త్ర వర్గీకరణ: భావ స్థానం ${selectedHouse}` : `Vedic Classification: House ${selectedHouse}`}
                </p>
              </div>
            </div>

            <div className="p-2 rounded bg-cosmic-950/90 border border-gold-500/10 text-xs font-mono text-gold-400">
              {language === 'te' ? 'లగ్న స్థానం నుండి లెక్కించబడినది' : 'Evaluated relative to Janma Lagna'}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="space-y-3">
              <h4 className="text-xs font-bold font-serif text-gold-400 uppercase tracking-widest flex items-center gap-2">
                <span>🎯</span>
                <span>{language === 'te' ? 'స్థాన కారకత్వములు / ప్రభావాలు' : 'Primary Life Spheres Governed'}</span>
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed font-sans bg-cosmic-950/60 p-4 rounded-xl border border-gold-500/5">
                {language === 'te' ? HOUSE_DATA[selectedHouse].significatesTe : HOUSE_DATA[selectedHouse].significates}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold font-serif text-gold-400 uppercase tracking-widest flex items-center gap-2">
                <span>🪐</span>
                <span>{language === 'te' ? 'ఈ స్థానంలో ఉన్న గ్రహములు' : 'Planetic Positions in Selected House'}</span>
              </h4>
              <div className="space-y-2">
                {getPlanetsInHouse(selectedHouse).length > 0 ? (
                  getPlanetsInHouse(selectedHouse).map(p => (
                    <div key={p.id} className="flex justify-between items-center bg-cosmic-950 p-2.5 rounded-lg border border-gold-500/10">
                      <div className="flex items-center gap-2.5">
                        <span className="w-8 h-8 rounded bg-gold-950/40 text-gold-350 border border-gold-500/20 flex items-center justify-center font-bold text-xs">
                          {p.english.slice(0,2)}
                        </span>
                        <div>
                          <p className="text-xs font-bold font-serif text-gold-300">
                            {language === 'te' ? `${p.telugu} (${p.english})` : p.english}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {language === 'te' ? p.meaningTe : p.meaning}
                          </p>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono bg-gold-500/10 border border-gold-500/20 px-2 py-0.5 rounded-full text-gold-400 uppercase tracking-wider">
                        {language === 'te' ? 'యుక్తి బలం' : 'Active'}
                      </span>
                    </div>
                  ))
                ) : (
                  <div className="text-[11.5px] text-slate-400 italic p-4 text-center border-dashed border-2 border-gold-500/5 rounded-xl bg-cosmic-950/20">
                    {language === 'te' 
                      ? 'ఈ స్థానంలో ప్రస్తుతం ఏ గ్రహము లేదు. అనుకూల శుభ దృష్టి మాత్రమే కలిగి ఉంటుంది.'
                      : 'No direct planet occupies this house in this configuration. Influenced by planetary aspects.'
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Trust Callout */}
      <div className="mt-8 p-4 rounded-xl border border-gold-500/10 bg-gold-500/5 flex items-center gap-3 justify-center text-center max-w-xl mx-auto">
        <ShieldCheck className="w-5 h-5 text-gold-450 shrink-0" />
        <span className="text-xs text-slate-300 font-sans">
          {language === 'te'
            ? 'ప్రతి జాతక చక్రం సాంప్రదాయ వరాహమిహిర పద్ధతులను అనుసరించి సిద్ధాంతి గారు స్వయంగా పరిశీలిస్తారు.'
            : 'Every customer horoscope chart calculations are manually audited by Chandra Mohan Siddhanthi Garu.'
          }
        </span>
      </div>

    </div>
  );
}
