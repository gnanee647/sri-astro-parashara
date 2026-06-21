import { Service, Testimonial, FAQItem } from './types';

export const ASTROLOGER_INFO = {
  name: 'M. Chandra Mohan Siddhanthi',
  title: 'Sri AstroParashara',
  experience: '30+ Years of Traditional Practice',
  degree: 'Vedic Jyotishya Praveena & Siddhanthi',
  specialty: 'Traditional Parashara Vedic Astrology (పరాశర సిద్ధాంతం)',
  languages: ['Telugu (తెలుగు)', 'English (ఇంగ్లీష్)'],
  location: {
    address: 'Hindupur Mandal, Sri Sathya Sai District',
    state: 'Andhra Pradesh, India',
    pinCode: '515201',
    description: 'We offer in-person consultations in Hindupur and worldwide consultations online (audio calls, WhatsApp, and digital horoscopes).'
  },
  contact: {
    phone: '+917396528696',
    whatsApp: '+917396528696',
    formattedPhone: '+91 73965 28696',
    email: 'consultation@sriastroparashara.com'
  }
};

// Localized services
export const SERVICES_DATA: Record<'te' | 'en', Service[]> = {
  te: [
    {
      id: 'horoscope',
      title: 'జాతక పరిశీలన',
      teluguTitle: 'జాతక పరిశీలన (Jataka Pariseelana)',
      description: 'మీ జన్మ కుండలి, గ్రహాల స్థితులు మరియు దశా కాలాల పూర్తి విశ్లేషణ ద్వారా జీవిత ప్రయాణ మార్గదర్శకత్వం.',
      detailedDescription: 'జన్మ లగ్నం, రాశి, ద్వాదశ భావాలు, నక్షత్రాలు మరియు గ్రహాల సంయోగం ఆధారంగా సంపూర్ణ జాతక చక్ర విశ్లేషణ. ప్రస్తుతం నడుస్తున్న దశా-భుక్తి ప్రభావం మరియు త్వరలో వచ్చే మార్పుల వివరాలతో పాటు గ్రహ దోష నివారణకు అత్యంత సులభమైన, ఖర్చు లేని సాంప్రదాయ పరిహారాల (నిత్య శ్లోక పఠనం, దేవాలయాల సందర్శన, దానాలు) ప్రాముఖ్యత వివరించబడును.',
      iconName: 'FileText',
      benefits: [
        'మీ సహజ పటిమ, నైపుణ్యాలు మరియు భవిష్యత్ సామర్థ్యాల గ్రహీంపు',
        'ప్రస్తుత దశా-భుక్తి ప్రభావాలపై సరైన అవగాహన మరియు తగిన మార్గదర్శకత్వం',
        'ఎటువంటి దుష్ప్రభావాలు లేని, సులభమైన సాంప్రదాయ పరిహారాల సూచన',
        'సంపద, ఆరోగ్యం, ఆయుష్షు మరియు ఆధ్యాత్మిక ఉన్నతుల గురించిన స్పష్టత'
      ],
      idealFor: ['జీవితంలో సరైన దిశ కోరుకునేవారు', 'పిల్లల భవిష్యత్తు ప్రణాళిక చేస్తున్న తల్లిదండ్రులు', 'మానసిక ఆందోళన లేదా ఒత్తిళ్లతో బాధపడుతున్నవారు']
    },
    {
      id: 'marriage',
      title: 'వివాహ పొంతనలు',
      teluguTitle: 'వివాహ పొంతనలు (Vivaha Pontanalu)',
      description: 'నూతన దంపతుల శ్రేయస్సు కొరకు సాంప్రదాయ అష్టకూట గుణ మేళనం (36 గుణాలు) మరియు కుజ దోష విశ్లేషణ.',
      detailedDescription: 'వివాహం అనేది పవిత్రమైన జీవిత బంధం. సాంప్రదాయ అష్టకూట విధానం ద్వారా 36 గుణాల అమరికను అత్యంత నిశితంగా పరిశీలిస్తాము. దీంతో పాటు కుజ దోషం (మంగళ దోషం), శని ప్రభావం, సప్తమ స్థాన బలం మరియు ఉభయ కుటుంబాల సమతుల్యతను అంచనా వేస్తాము. ఇది వైవాహిక జీవితంలో మనస్పర్థలను నివారించి, దీర్ఘకాలిక జంట సామరస్యానికి తోడ్పడుతుంది.',
      iconName: 'Heart',
      benefits: [
        'ఖచ్చితమైన సాంప్రదాయ అష్టకూట జాతక గుణాల లెక్కింపు',
        'సమగ్ర కుజ దోష విశ్లేషణ మరియు వాస్తవ శాంతి మార్గాలు',
        'వధూవరుల జీవితకాల బంధం మరియు ఆర్థిక స్థిరత్వంపై నివేదిక',
        'సౌకర్యవంతమైన కుటుంబ జీవనం కొరకు అనుకూల గ్రహాల అమరికల శోధన'
      ],
      idealFor: ['వధూవరుల తల్లిదండ్రులు', 'వివాహం ఆలస్యమవుతున్నవారు', 'ప్రేమ వివాహాలకు జాతక అనుకూలత తెలుసుకోవాలనుకునేవారు']
    },
    {
      id: 'career',
      title: 'ఉద్యోగ, వ్యాపార జాతకం',
      teluguTitle: 'ఉద్యోగ, వ్యాపార జాతకం (Career & Business)',
      description: 'ఉద్యోగ స్థిరత్వం, వ్యాపార అభివృద్ధి మార్గాలను గ్రహ బలాలు (దశమ స్థాన - ఖర్మ స్థాన) ఆధారంగా నిర్ణయించడం.',
      detailedDescription: 'ఉద్యోగ లభ్యం కాకపోవడం, ప్రమోషన్లలో ఆటంకాలు లేదా వ్యాపారంలో నష్టాలు ఎదురవుతున్నాయా? జాతకంలో ఖర్మ స్థానం (10వ ఇల్లు), ధన భావం (2వ ఇల్లు), లాభ స్థానం (11వ ఇల్లు) తో పాటు రవి, గురు, శని మరియు బుధ గ్రహాల శక్తులను విశ్లేషించి మీకు ఉద్యోగం లాభిస్తుందా లేదా సొంత వ్యాపారం శ్రేయస్కరమా అని సూచిస్తాము. వ్యాపార ప్రారంభానికి అనుకూలమైన దిక్కులు మరియు సమయాలు నిర్ణయిస్తాము.',
      iconName: 'Briefcase',
      benefits: [
        'మీ జాతకానికి ఉద్యోగం శ్రేష్ఠమా లేక స్వయం ఉపాధి / వ్యాపారం లాభిస్తుందా అని తెలుసుకోవడం',
        'ఏ విధమైన రంగాలు (సాఫ్ట్‌వేర్, రియల్ ఎస్టేట్, లోహాలు, వర్తకం) అనుకూలిస్తాయో స్పష్టం చేయడం',
        'ప్రమోషన్లు, ఉద్యోగ మార్పులు మరియు విదేశీ ప్రయాణాల కాలాలను అంచనా వేయడం',
        'ముందస్తు గ్రహ చూపు ద్వారా వ్యాపార నష్టాలను అరికట్టడం'
      ],
      idealFor: ['భవిష్యత్ కోర్సులు లేదా కెరీర్ ఎంపిక చేసుకునే విద్యార్థులు', 'ఉద్యోగ మార్పు లేదా పదోన్నతి కోసం ఎదురుచూస్తున్న ఉద్యోగులు', 'నూతన వ్యాపారాన్ని తలపెట్టే పారిశ్రామిక వేత్తలు']
    },
    {
      id: 'vastu',
      title: 'గృహ వాస్తు',
      teluguTitle: 'గృహ వాస్తు (Griha Vastu)',
      description: 'పంచభూతాలను సమం చేసి ఇల్లు మరియు వ్యాపార సంస్థలలో శాంతి, శ్రేయస్సులను పెంపొందించడం.',
      detailedDescription: 'వాస్తు శాస్త్రం ప్రకృతి సిద్ధమైన దిశలు, భూమి యొక్క అయస్కాంత తరంగాలు మరియు వాతావరణ శక్తులను అనుసరిస్తుంది. నూతన గృహాలు, స్థలాలు, కమర్షియల్ కాంప్లెక్స్‌లు మరియు పరిశ్రమల నిర్మాణం కొరకు వాస్తు బ్లూప్రింట్ సలహాలను అందిస్తాము. పాత ఇళ్లలోని వాస్తు దోషాలను పెద్దగా పడగొట్టకుండానే మార్పులు చేయగల సులభమైన ప్రత్యామ్నాయ చిట్కాలను సూచిస్తాము.',
      iconName: 'Home',
      benefits: [
        'సింహద్వారం, వంటగది, పడకగది మరియు పూజా మందిర దిశల సరియైన అమరిక',
        'కుటుంబ గొడవలు, ఆర్థిక ఇబ్బందులకు కారణమయ్యే వాస్తు లోపాల సరిదిద్దడం',
        'కస్టమర్ల ఆకర్షణ మరియు వ్యాపార రాబడి పెంచేలా ఆఫీసుల లేఅవుట్ రూపకల్పన',
        'పంచభూతాల (భూమి, నీరు, అగ్ని, వాయువు, ఆకాశం) సమతుల్యతను స్థిరపరచడం'
      ],
      idealFor: ['కొత్త స్థలం లేదా ఫ్లాట్ కొనాలనుకునేవారు', 'పాత ఇళ్లను ఆధునీకరించే గృహస్థులు', 'వ్యాపార లాభాలు అకస్మాత్తుగా తగ్గిన ఆఫీసు యజమానులు']
    },
    {
      id: 'muhurtham',
      title: 'శుభ ముహూర్తాలు',
      teluguTitle: 'శుభ ముహూర్తాలు (Shuba Muhurthalu)',
      description: 'వివాహం, గృహప్రవేశం మరియు వ్యాపార ప్రారంభాలకు అత్యంత శుభకరమైన కాలాల లెక్కింపు.',
      detailedDescription: 'శుభ సమయంలో ప్రారంభించిన ఏ పనైనా దైవానుగ్రహం పొంది నిర్విఘ్నంగా పూర్తవుతుంది. తిథి, వార, నక్షత్ర, యోగ, కరణాల సమాహారమైన పంచాంగ గణనలను నిశితంగా పరిశీలించి దుర్ముహూర్తం, రాహుకాలం, యమగండాల ప్రభావాన్ని పక్కనపెట్టి మీ జాతకానికి సరిపోయే కచ్చితమైన సువర్ణ ఘడియలను గుర్తిస్తాము.',
      iconName: 'Calendar',
      benefits: [
        'శాస్త్రబద్ధమైన సుముహూర్త కళ్యాణ లగ్న నిర్ణయం',
        'గృహం సుభిక్షంగా ఉండటానికి గృహప్రవేశ ముహూర్తం నిర్ణయించడం',
        'భూమి కొనుగోలు, వాహన రిజిస్ట్రేషన్ లేదా నామకరణ మహోత్సవాలకు మేలైన సమయం',
        'వ్యాపారం అంకురార్పణ చేయడానికి లేదా కాంట్రాక్టులపై సంతకం చేయడానికి అదృష్ట సమయం'
      ],
      idealFor: ['వివాహాలు, గృహప్రవేశాలు జరుపుకునే కుటుంబాలు', 'నూతన వ్యాపారం లేదా పనులు ప్రారంభించేవారు', 'అక్షరాభ్యాసం, ఉపనయనం లాంటి వైదిక కర్మలను కోరుకునేవారు']
    },
    {
      id: 'spiritual',
      title: 'ఆధ్యాత్మిక మార్గదర్శకత్వం',
      teluguTitle: 'ఆధ్యాత్మిక మార్గదర్శకత్వం (Spiritual Guidance)',
      description: 'మనశ్శాంతి, కర్మ సంబంధ సమతుల్యత మరియు నిర్విఘ్న ప్రగతి కొరకు ప్రశాంత వైదిక శ్లోకాలు, జప విధాన మార్గదర్శకం.',
      detailedDescription: 'ఆధ్యాత్మిక ప్రయాణంలో ఎదురయ్యే ఆటంకాలను వేద జ్యోతిష నియమానుసారం విశ్లేషించి పరిహార దారి చూపుతాము. ఇందులో కర్మ దోష పీడిత సమయాల అధిగమనం, జాతక అనుకూల పూజా-శ్లోక పఠన శీర్షికలు కలవు.',
      iconName: 'Sparkles',
      benefits: ['మనసిక ఏకాగ్రత, పీడల నివృత్తి', 'శ్లోక జప సాధన అనుకూలత అమరిక'],
      idealFor: ['మానసిక ప్రశాంతత కొరకు తపించేవారు', 'కార్య సాఫల్య ఆరాధకులు']
    }
  ],
  en: [
    {
      id: 'horoscope',
      title: 'Horoscope Reading',
      teluguTitle: 'జాతక పరిశీలన (Jataka Pariseelana)',
      description: 'In-depth analysis of your birth chart (Janma Kundali), planetary positions, and Dasha cycles to guide your life path.',
      detailedDescription: 'A complete evaluation of your 12 houses (Bhavas), planetary placements, Nakshatras, Lagna and Rashi. We examine current and upcoming Dasha-Bhukti periods, anticipate critical life transitions, and suggest highly effective, simple, traditional Vedic remedies (such as specific stotras, temple visits, and charity) to mitigate planetary afflictions.',
      iconName: 'FileText',
      benefits: [
        'Understand your core strengths, weaknesses, and natural potential',
        'Receive clarity on current planetary periods (Dasha-Bhukti effects)',
        'Discover traditional non-expensive remedies (Pariharams)',
        'Gain insight into wealth, health, longevity, and spiritual inclination'
      ],
      idealFor: ['Individuals seeking direction', 'Parents planning children’s future', 'Anyone undergoing stressful life transitions']
    },
    {
      id: 'marriage',
      title: 'Marriage Matching',
      teluguTitle: 'వివాహ పొంతనలు (Vivaha Pontanalu)',
      description: 'Traditional Ashta Kuta matching (36 Gunas alignment) to ensure lifetime compatibility, emotional bonding, and marital bliss.',
      detailedDescription: 'Marriage is a sacred lifetime covenant. We evaluate compatibility meticulously using the traditional 36-guna Ashta Kuta system. Furthermore, we perform deep examinations of Kuja Dosha (Manglik analysis), Shani influence, Kalasthra Sthana (7th house) strength, and general family sync. This prevents post-marriage conflicts and ensures healthy progeny and long-term mutual prosperity.',
      iconName: 'Heart',
      benefits: [
        'Comprehensive Ashta Kuta (36 Gunas) calculations',
        'Accurate Kuja (Manglik) Dosha examination and solutions',
        'Longevity & economic compatibility of both families',
        'Favorable planetary alignments for a happy married life'
      ],
      idealFor: ['Parents of brides and grooms', 'Couples wishing to match compatibility', 'Resolving delays in marriage proposals']
    },
    {
      id: 'career',
      title: 'Career & Business Guidance',
      teluguTitle: 'ఉద్యోగ, వ్యాపార జాతకం (Career & Business)',
      description: 'Align your vocational choices with planetary strengths in the 10th house (Karma Sthana) for guaranteed success.',
      detailedDescription: 'Struggling with unemployment, unstable businesses, or stagnant promotions? We analyze the 10th House (Karma Sthana), 2nd House (Wealth), and 11th House (Profits), along with Sun, Jupiter, Saturn, and Mercury alignments. We guide you on whether a job or independent business suits you, designate auspicious times for business incorporation, and determine favorable directions of growth.',
      iconName: 'Briefcase',
      benefits: [
        'Identify whether job or business is more lucrative and stable for you',
        'Determine the most profitable industries (IT, real estate, metals, trade, etc.)',
        'Predict promotion, job changes, and overseas relocation cycles',
        'Identify and minimize business loss periods through astrological foresight'
      ],
      idealFor: ['Students choosing career paths', 'Professionals seeking job changes/promotions', 'Entrepreneurs launching new business ventures']
    },
    {
      id: 'vastu',
      title: 'Vastu Consultation',
      teluguTitle: 'గృహ వాస్తు (Griha Vastu)',
      description: 'Harness the cosmic five elements (Pancha Bhootas) to bring peace, prosperity, and health to your home or office.',
      detailedDescription: 'Vastu Shastra aligns material structures with the magnetic fields of Earth and atmospheric energies. We provide structured vastu blueprint consultations for new lands, homes, industries, and commercial high-rises. Additionally, we analyze existing houses to recommend simple structural alterations or spiritual remedies (Yantras/Vastu Puja) without requiring heavy demolitions.',
      iconName: 'Home',
      benefits: [
        'Ensure proper placement of main entrance, bedroom, kitchen, and pooja room',
        'Correct architectural imbalances that cause family conflicts or financial blockages',
        'Optimize commercial spaces to boost customer footfall and revenue flow',
        'Harmonize Pancha Bhootas (Earth, Water, Fire, Air, Space) inside buildings'
      ],
      idealFor: ['People purchasing new house plots/apartments', 'Renovating old houses or commercial buildings', 'Businesses facing sudden, inexplicable financial downfalls']
    },
    {
      id: 'muhurtham',
      title: 'Muhurtham Selection',
      teluguTitle: 'శుభ ముహూర్తాలు (Shuba Muhurthalu)',
      description: 'Calculate highly auspicious timings (Muhurthas) to bless weddings, housewarmings, and business openings with success.',
      detailedDescription: 'Any task commenced at an astronomically positive hour is fortified with divine cosmic energy. Using Panchanga computations (Tithi, Vara, Nakshatra, Yoga, and Karana), we filter out negative periods like Durmuhurtham, Rahu Kaal, and Yamaganda to lock down the exact golden minutes for major lifetime milestones.',
      iconName: 'Calendar',
      benefits: [
        'Select gold-standard timings for weddings (Kalyana Muhurtham)',
        'Calculate precise housewarming schedules (Gruhapravesha Muhurtham)',
        'Auspicious hours for registration of land, vehicle purchases, or naming ceremony',
        'Inception timings for starting new businesses, projects, or signing critical contracts'
      ],
      idealFor: ['Families celebrating house-warmings or marriages', 'Entrepreneurs commencing projects', 'Auspicious initiations like Akshara Abhyasam or Upanayanam']
    },
    {
      id: 'spiritual',
      title: 'Spiritual Guidance',
      teluguTitle: 'ఆధ్యాత్మిక మార్గదర్శకత్వం (Spiritual Guidance)',
      description: 'Personalized spiritual solutions, stotra recitations, and sadhana guidelines for mental peace and spiritual alignment.',
      detailedDescription: 'Traditional spiritual counseling helping to clear deep-seated karmic blockages, cultivate inner peace, and focus through appropriate mantra, stotra, and daily ritual schedules.',
      iconName: 'Sparkles',
      benefits: ['Karmic relief and mental tranquility', 'Enhanced inner focus and self confidence'],
      idealFor: ['Seekers facing deep confusion', 'Spiritual practitioners']
    }
  ]
};

// Localized Testimonials
export const TESTIMONIALS_DATA: Record<'te' | 'en', Testimonial[]> = {
  te: [
    {
      id: '1',
      name: 'కె. రామస్వామి రెడ్డి',
      location: 'హిందూపురం, ఆంధ్రప్రదేశ్',
      rating: 5,
      consultationType: 'వివాహ పొంతనలు & సుముహూర్తం',
      quote: 'చంద్ర మోహన్ సిద్ధాంతి గారు నా కుమార్తె వివాహానికి జాతక మేళనం మరియు వివాహ లగ్న ముహూర్తాన్ని నిర్ణయించారు. కుజ దోష విశ్లేషణను వారు చేసిన తీరు చాలా కచ్చితమైనది. అద్భుతమైన సుముహూర్తంలో వివాహం జరిగి ప్రస్తుతం నా కూతురు హాయిగా జీవిస్తోంది. వారి పట్ల మాకు ప్రగాఢ కృతజ్ఞతలు ఉన్నాయి.',
      date: 'ఫిబ్రవరి 2026'
    },
    {
      id: '2',
      name: 'యం. వేణుగోపాల్',
      location: 'బెంగళూరు, కర్ణాటక',
      rating: 5,
      consultationType: 'ఉద్యోగ వ్యాపార మార్గదర్శకత్వం',
      quote: 'రియల్ ఎస్టేట్ వ్యాపారంలో తీవ్ర నష్టాలు వస్తున్న సమయంలో హిందూపురంలో సిద్ధాంతి గారిని కలిశాను. వారు పరిశోధన చేసి 10వ స్థాన బలీయతను వివరించి నూతన పెట్టుబడులపై కొద్ది సమయం ఆగమని చెప్పారు. ఆ నిబంధన పాటించాక నా వ్యాపారం చక్కబడింది. నష్టాలు పూడిపోయాయి. వారు చాలా నిజాయితీ గలవారు.',
      date: 'ఏప్రిల్ 2026'
    },
    {
      id: '3',
      name: 'శ్రావణి ఎల్.',
      location: 'హైదరాబాద్, తెలంగాణ',
      rating: 5,
      consultationType: 'జాతక విశ్లేషణ మరియు పరిహారాలు',
      quote: 'హిందూపురం ప్రయాణించలేక వాట్సాప్ ద్వారా సంప్రదించాను. సిద్ధాంతి గారు నా జాతక చక్రాన్ని క్షుణ్ణంగా పరిశీలించి సరళమైన తెలుగులో వివరించారు. ఖరీదైన రాళ్లు ఏవీ సూచించలేదు, కేవలం ప్రతిరోజూ ఒక నక్షత్ర శ్లోకం చదవమన్నారు. మానసిక ప్రశాంతత లభించింది, 3 నెలల్లో ఐటీ ఉద్యోగం వచ్చింది!',
      date: 'మే 2026'
    },
    {
      id: '4',
      name: 'జి. సురేష్ బాబు',
      location: 'అనంతపురం, ఆంధ్రప్రదేశ్',
      rating: 5,
      consultationType: 'గృహ వాస్తు సంప్రదింపులు',
      quote: 'మా కొత్త డ్యూప్లెక్స్ ఇల్లు కట్టే ముందే సిద్ధాంతి గారిచే బ్లూప్రింట్ పరిశీలింపజేశాము. వంటగది మరియు స్థల అమరికల కొలతలను వాస్తు నియమాలకు సరిపడా అద్భుతంగా సవరించారు. ఎటువంటి అడ్డంకులు లేకుండా నిర్మాణం పూర్తయింది. మా ఇంటికి వచ్చిన వారంతా ఇక్కడి ప్రశాంతమైన తరంగాలను ప్రశంసిస్తున్నారు.',
      date: 'జనవరి 2026'
    }
  ],
  en: [
    {
      id: '1',
      name: 'K. Ramaswamy Reddy',
      location: 'Hindupur, Andhra Pradesh',
      rating: 5,
      consultationType: 'Marriage Matching & Muhurtham',
      quote: 'Chandra Mohan Siddhanthi Garu provided birth-matching and muhurtham for my daughter\'s marriage. His reading of Manglik Dosha was very accurate, and the wedding occurred on the perfect muhurtham he recommended. Today, my daughter has a wonderful family life. We are very grateful for his traditional wisdom.',
      date: 'February 2026'
    },
    {
      id: '2',
      name: 'M. Venugopal',
      location: 'Bangalore, Karnataka',
      rating: 5,
      consultationType: 'Career & Business Change Guidance',
      quote: 'I was facing terrible losses in my real estate business and visited Him in Hindupur. He calmly analyzed my 10th house and suggested specific temple remedies and a short delay in new investment. Followed his words word-for-word, and by God\'s grace, I have recovered all my dues and started a highly profitable venture in 2025. He is truly genuine.',
      date: 'April 2026'
    },
    {
      id: '3',
      name: 'Sravani L.',
      location: 'Hyderabad, Telangana',
      rating: 5,
      consultationType: 'Horoscope Analysis & remedies',
      quote: 'I booked an online consultation using WhatsApp call as I couldn\'t travel to Hindupur. Chandra Mohan Garu explained my planetary positions in simple Telugu. He didn\'t suggest expensive stones. Just told me to chant a small shloka daily. I feel highly peaceful now and got my desired IT job within 3 months! Highly recommended.',
      date: 'May 2026'
    },
    {
      id: '4',
      name: 'G. Suresh Babu',
      location: 'Anantapur, AP',
      rating: 5,
      consultationType: 'Griha Vastu Consultation',
      quote: 'We consulted him before creating the floor plan of our new duplex house in Hindupur. He designed the kitchen and master bedroom locations perfectly matching Vastu Shastra rules. The construction went smoothly without any obstacles. Everyone who visits praises the peaceful energy of our home.',
      date: 'January 2026'
    }
  ]
};

// Localized FAQ list
export const FAQ_DATA: Record<'te' | 'en', FAQItem[]> = {
  te: [
    {
      id: 'faq-1',
      category: 'వైదిక జ్యోతిష్యం',
      question: 'పాశ్చాత్య జ్యోతిష్యానికి, వైదిక జ్యోతిష్యానికి గల వ్యత్యాసం ఏమిటి?',
      answer: 'వైదిక జ్యోతిష్యం (జ్యోతిష్య శాస్త్రం) ఖగోళ మండలం మరియు నక్షత్రాల యొక్క వాస్తవ అక్షాంశాల ఆధారంగా లెక్కింపబడుతుంది, కానీ పాశ్చాత్య జ్యోతిష్యం స్థిర ఉష్ణమండల రాశిచక్రాన్ని అనుసరిస్తుంది. వైదిక శాస్త్రంలో 27 నక్షత్రాలు, చంద్రుడి ఆధారంగా నడిచే మహర్షి ప్రవచించిన దశా కాలాలు మరియు వర్గ చక్రాలు జీవితాన్ని అత్యంత సుస్పష్టంగా, సాక్ష్యాధారాలతో వివరిస్తాయి.'
    },
    {
      id: 'faq-2',
      category: 'సంప్రదింపు వివరాలు',
      question: 'జాతక చక్రాన్ని లెక్కింపడానికి ఏ వివరాలు అవసరం?',
      answer: 'వివాహ పొంతనలు, జాతక విశ్లేషణ లేదా ముహూర్త నిర్ణయం చేయాలి అంటే మూడు అత్యవసర వివరాలు కావాలి: 1) పుట్టిన తేదీ, 2) కచ్చితమైన పుట్టిన సమయం, మరియు 3) పుట్టిన స్థలం. జన్మ వివరాలు తెలియని యెడల ప్రశ్నా శాస్త్రం (అడిగిన సమయం మరియు ప్రశ్న రూపం) అనుసరించి సమాధానాలు అందించగలము.'
    },
    {
      id: 'faq-3',
      category: 'భాష',
      question: 'ఏ భాషల్లో సంప్రదింపు సేవలు లభిస్తాయి?',
      answer: 'వేద శాస్త్ర భావాలను కచ్చితంగా, ప్రాచీన గుణ విశేషాలతో తెలుగు వారికి సరిగ్గా వివరించడానికి సిద్ధాంతి గారు సంప్రదింపులను ప్రధానంగా తెలుగు (తెలుగు) లో నిర్వహిస్తారు. అయితే సులువుగా అర్థం కావడం కొరకు సాధారణ వివరణలను ఇంగ్లీష్ లో కూడా తెలియజేయగలరు.'
    },
    {
      id: 'faq-4',
      category: 'ఆన్‌లైన్ సేవలు',
      question: 'హిందూపురం రాలేని వారికి ఫోన్ లేదా వాట్సాప్ ద్వారా జాతక సేవలు అందుతాయా?',
      answer: 'అవును, ప్రపంచవ్యాప్తంగా వందలాది మంది భక్తులకు వాట్సాప్ కాల్ మరియు ఆడియో మెసేజ్ల ద్వారా నిరంతరం సేవలు అందిస్తున్నాము. మీ పుట్టిన వివరాలను వాట్సాప్ లో పంపినచో, అక్కడ మీ జాతక చక్రాన్ని గీసి ఆడియో మార్గదర్శకత్వం ఇవ్వబడును. హిందూపురం పరిసరాల్లోని వారు కార్యాలయానికి వచ్చి నేరుగా కలవవచ్చు.'
    },
    {
      id: 'faq-5',
      category: 'పరిహారాలు',
      question: 'మీరు సూచించే పరిహారాలు ఖరీదైనవా లేక క్లిష్టమైనవా?',
      answer: 'ఖచ్చితంగా కాదు! సిద్ధాంతి గారు ఎటువంటి కమర్షియల్ వ్యాపారాలు చేయరు. వారు కేవలం దేవాలయ పూజలు, కొన్ని స్తోత్రాలు పఠించడం, అవసరమైన పేదలకు అన్నదానాలు చేయడం లాంటి అత్యంత నిరాడంబరమైన, ఖర్చు లేని శాస్త్రోక్త పరిహారాలనే చెప్తారు. గ్రహ శాంతి కొరకు లక్షల ఖర్చులు చేయవలసిన అవసరం లేదు.'
    },
    {
      id: 'faq-6',
      category: 'ముహూర్తం',
      question: 'క్యాలెండర్ లో ఉండే శుభ సమయాలకే కాకుండా సొంత ముహూర్తం ఎందుకు లెక్కింపజేయాలి?',
      answer: 'క్యాలెండర్ (పంచాంగం) లో పేర్కొనే ముహూర్తాలు సాధారణ ప్రజలందరి శ్రేయస్సు కొరకు ఉంటాయి. కానీ వ్యక్తిగత పనులైన వివాహం, గృహప్రవేశం లాంటి వాటికీ వరుడు-వధువు లేదా గృహస్వామి యొక్క జన్మ నక్షత్రం, జన్మ రాశులతో ఆ రోజు నక్షత్ర బలాలను పొంతన చేయాలి. ఒకరికి మంచిదైన సమయం మరొకరికి తీవ్ర ప్రతికూలంగా మారే అవకాశం కలదు.'
    }
  ],
  en: [
    {
      id: 'faq-1',
      category: 'Vedic Astrology',
      question: 'How is Vedic Astrology different from Western Astrology?',
      answer: 'Vedic Astrology (Jyotish) is based on the Sidereal zodiac, which matches the actual astronomical positions of constellations, whereas Western Astrology uses the Tropical zodiac. Vedic Astrology also uses the system of Nakshatras (27 stellar mansions), moon-based Dasha cycles (planetary maturity timelines), and divisional charts (Vargas) which provide incredible depth, accuracy, and clear guidance.'
    },
    {
      id: 'faq-2',
      category: 'Consultation',
      question: 'What details do I need to provide for a reading?',
      answer: 'To perform an accurate horoscope matching, reading, or Muhurtham selection, we strictly require three variables: 1) Date of Birth, 2) Precise Time of Birth, and 3) Place of Birth. If birth details are unknown, we can utilization "Prashna Shastra" (horary astrology based on the timing of your inquiry) to answer your key questions.'
    },
    {
      id: 'faq-3',
      category: 'Language',
      question: 'In which languages are consultations provided?',
      answer: 'Sri M. Chandra Mohan Siddhanthi Garu conducts consultations primarily in Telugu (తెలుగు) to ensure deep, traditional, and accurate semantic delivery of Vedic terms and remedy explanations. He can also summarize inputs in English when needed.'
    },
    {
      id: 'faq-4',
      category: 'Consultation Mode',
      question: 'Do you offer online consultations via phone or WhatsApp?',
      answer: 'Yes, we provide online consultations worldwide. You can share your birth details over WhatsApp, receive your fully charted horoscope on your phone, and consult over a phone or WhatsApp voice call. For locals in Sri Sathya Sai District, Andhra Pradesh, in-person consultations are available with prior appointments.'
    },
    {
      id: 'faq-5',
      category: 'Remedies',
      question: 'Are the suggested remedies expensive or complex?',
      answer: 'No. Sri Chandra Mohan Siddhanthi is known for his high integrity. He strictly recommends gentle, authentic, cost-effective remedies such as specific deity prayers (Sthotras), visiting sacred traditional temples in South India, lighting lamps, and donating food/clothes to those in need (Dana). He does not promote commercial gemstone sales or expensive lock-in rituals.'
    },
    {
      id: 'faq-6',
      category: 'Muhurtham',
      question: 'Why is a Muhurtham calculated individually instead of looking at a calendar?',
      answer: 'A standard calendar (Panchanga) shows general auspicious times for the public. However, a personalized Muhurtham (శుభ ముహూర్తం) must align the daily Nakshatra, Tithi, and planetary transits directly with the individual bride, groom, or homeowner\'s Moon sign (Janma Rashi). An hour auspicious for one person might be highly unfavorable for another.'
    }
  ]
};

// Localized Benefits / Highlights
export const BENEFITS: Record<'te' | 'en', { title: string; description: string }[]> = {
  te: [
    {
      title: '30+ సంవత్సరాల విశేష అనుభవం',
      description: 'తరతరాలుగా వస్తున్న కుటుంబ సాంప్రదాయ వనరులతో నిర్మితమైన జ్యోతిష్య పరిజ్ఞానం మరియు వందలాది పక్కా విశ్లేషణల రుజువు.'
    },
    {
      title: 'ఉన్నతమైన నైతిక విలువలు - ఎటువంటి వ్యాపార ధోరణి లేదు',
      description: 'భక్తుల సుఖసంతోషాలకే మా ప్రథమ ప్రాధాన్యం. అమూల్యమైన రత్నాలు కొనటం, భయం పుట్టించే శాంతులు, అనవసర ప్రచారాలు మా దగ్గర ఉండవు.'
    },
    {
      title: 'వ్యక్తిగత శ్రద్ధతో కూడిన పరిశీలన',
      description: 'కంప్యూటర్ ద్వారా తయారయ్యే ఆటోమేటిక్ విశ్లేషణలు కాకుండా, ప్రతి జాతకాన్ని చంద్ర మోహన్ సిద్ధాంతి గారే స్వయంగా చేతితో గణించి విశ్లేషిస్తారు.'
    },
    {
      title: 'స్పష్టమైన దక్షిణ భారత జాతక అమరిక',
      description: 'అన్ని జాతక కుండలీ పటాలు మన పూర్వీకులు అనుసరించిన దక్షిణ భారత శైలి చక్రం (దక్షిణ భారత జాతక చక్రం) లోనే స్పష్టమైన వివరణలతో గీసి ఇవ్వబడతాయి.'
    }
  ],
  en: [
    {
      title: '30+ Years of Genuine Expertise',
      description: 'Generations of trusted traditional astrological lineage with highly accurate predictions and authentic astrological knowledge.'
    },
    {
      title: 'High Integrity & No Commercial Baiting',
      description: 'We prioritize client satisfaction and divine guidance. No expensive gemstones, no fear-mongering, and no unnecessary rituals.'
    },
    {
      title: 'Personalized Attention',
      description: 'Every chart is personally hand-tallied and deeply analyzed by M. Chandra Mohan Siddhanthi himself, rather than automated computer outputs.'
    },
    {
      title: 'Bilingual Visual Comfort',
      description: 'All horoscopes are drawn in the highly legible South Indian style sheet (దక్షిణ భారత జాతక చక్రం) with detailed Telugu explanations.'
    }
  ]
};
