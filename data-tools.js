/* MarketMitra — data file. Loaded by index.html before app.js.
   Generated content lives in data-bulk.js; this file is hand-written. */
window.MM = window.MM || {};

/* ---------------- calculators ---------------- */
MM.calcRates = {
  delivery: { sttB: 0.1, sttS: 0.1, exch: 0.0029, sebi: 0.0001, stamp: 0.015, gst: 18 },
  intraday: { sttB: 0.025, sttS: 0.025, exch: 0.0029, sebi: 0.0001, stamp: 0.003, gst: 18 },
  futures: { sttB: 0.02, sttS: 0, exch: 0.0177, sebi: 0.0001, stamp: 0.002, gst: 18 },
};

MM.calcs = [
  {
    id: 'sip',
    cat: 'invest',
    title: { en: 'SIP & lump-sum compounding', hi: 'SIP और एकमुश्त रकम की ग्रोथ' },
    lede: {
      en: 'What a fixed monthly investment grows to at an assumed return.',
      hi: 'एक तय मासिक रकम अनुमानित रिटर्न पर कितनी बड़ी होगी।',
    },
    fields: [
      { k: 'amt', label: { en: 'Monthly SIP (₹)', hi: 'मासिक SIP (₹)' }, val: 10000, step: 500 },
      { k: 'yrs', label: { en: 'Years', hi: 'वर्ष' }, val: 15, step: 1 },
      { k: 'rate', label: { en: 'Assumed return (% p.a.)', hi: 'अनुमानित रिटर्न (% प्रति वर्ष)' }, val: 12, step: 0.5 },
      { k: 'lump', label: { en: 'One-time lump sum (₹)', hi: 'एकमुश्त रकम (₹)' }, val: 0, step: 5000 },
    ],
    out: [
      { k: 'fv', label: { en: 'Value at the end', hi: 'अंत में मूल्य' }, fmt: 'inr', strong: true },
      { k: 'inv', label: { en: 'Total invested', hi: 'कुल लगाई रकम' }, fmt: 'inr' },
      { k: 'gain', label: { en: 'Gain', hi: 'अंतर्गत लाभ' }, fmt: 'inr' },
      { k: 'mult', label: { en: 'Growth multiple', hi: 'वृद्धि गुणक' }, fmt: 'x' },
      { k: 'y5', label: { en: 'Worth after 5 years', hi: '5 वर्ष बाद मूल्य' }, fmt: 'inr' },
      { k: 'y10', label: { en: 'Worth after 10 years', hi: '10 वर्ष बाद मूल्य' }, fmt: 'inr' },
      { k: 'y20', label: { en: 'Worth after 20 years', hi: '20 वर्ष बाद मूल्य' }, fmt: 'inr' },
    ],
    bars: [
      { k: 'inv', label: { en: 'Invested', hi: 'लगाई रकम' } },
      { k: 'gain', label: { en: 'Growth', hi: 'ग्रोथ' } },
    ],
    note: {
      en: 'SIP value = monthly amount × [(1+i)ⁿ − 1] ÷ i, where i = annual rate ÷ 12 and n = months. An assumed return is not a guarantee — equity funds have delivered both −50% years and +60% years.',
      hi: 'SIP मूल्य = मासिक रकम × [(1+i)ⁿ − 1] ÷ i, जहाँ i = वार्षिक दर ÷ 12 और n = महीने। अनुमानित रिटर्न की कोई गारंटी नहीं — इक्विटी फंड में −50% वाले साल भी आए हैं और +60% वाले भी।',
    },
  },
  {
    id: 'cost',
    cat: 'trade',
    title: { en: 'All-in trade cost', hi: 'पूरी ट्रेड लागत' },
    lede: {
      en: 'Every statutory charge on a buy and a sell, plus the move you need just to break even.',
      hi: 'खरीद और बिक्री पर हर सरकारी चार्ज, और ब्रेक-ईवन के लिए ज़रूरी मूल्य-बदलाव।',
    },
    fields: [
      {
        k: 'mode', label: { en: 'Segment', hi: 'सेगमेंट' }, kind: 'sel', val: 'delivery',
        opts: [
          { v: 'delivery', label: { en: 'Equity delivery', hi: 'इक्विटी डिलीवरी' } },
          { v: 'intraday', label: { en: 'Equity intraday', hi: 'इक्विटी इंट्राडे' } },
          { v: 'futures', label: { en: 'Index / stock futures', hi: 'इंडेक्स / शेयर फ्यूचर्स' } },
        ],
      },
      { k: 'price', label: { en: 'Price per share (₹)', hi: 'प्रति शेयर मूल्य (₹)' }, val: 1000, step: 1 },
      { k: 'qty', label: { en: 'Quantity', hi: 'मात्रा' }, val: 100, step: 1 },
      { k: 'brok', label: { en: 'Brokerage per order (₹)', hi: 'प्रति ऑर्डर ब्रोकरेज (₹)' }, val: 0, step: 1 },
      { k: 'sttB', label: { en: 'STT buy (%)', hi: 'STT खरीद (%)' }, val: 0.1, step: 0.001, adv: true },
      { k: 'sttS', label: { en: 'STT sell (%)', hi: 'STT बिक्री (%)' }, val: 0.1, step: 0.001, adv: true },
      { k: 'exch', label: { en: 'Exchange txn charge (%)', hi: 'एक्सचेंज ट्रांज़ैक्शन चार्ज (%)' }, val: 0.0029, step: 0.0001, adv: true },
      { k: 'sebi', label: { en: 'SEBI turnover fee (%)', hi: 'SEBI टर्नओवर फीस (%)' }, val: 0.0001, step: 0.0001, adv: true },
      { k: 'stamp', label: { en: 'Stamp duty on buy (%)', hi: 'खरीद पर स्टांप ड्यूटी (%)' }, val: 0.015, step: 0.001, adv: true },
      { k: 'gst', label: { en: 'GST on charges (%)', hi: 'चार्ज पर GST (%)' }, val: 18, step: 0.5, adv: true },
    ],
    out: [
      { k: 'turn', label: { en: 'Turnover (buy + sell)', hi: 'टर्नओवर (खरीद + बिक्री)' }, fmt: 'inr' },
      { k: 'cBrok', label: { en: 'Brokerage', hi: 'ब्रोकरेज' }, fmt: 'inr' },
      { k: 'cStt', label: { en: 'STT', hi: 'STT' }, fmt: 'inr' },
      { k: 'cExch', label: { en: 'Exchange + SEBI charges', hi: 'एक्सचेंज + SEBI चार्ज' }, fmt: 'inr' },
      { k: 'cStamp', label: { en: 'Stamp duty', hi: 'स्टांप ड्यूटी' }, fmt: 'inr' },
      { k: 'cGst', label: { en: 'GST on charges', hi: 'चार्ज पर GST' }, fmt: 'inr' },
      { k: 'total', label: { en: 'Total round-trip cost', hi: 'कुल राउंड-ट्रिप लागत' }, fmt: 'inr', strong: true },
      { k: 'pct', label: { en: 'Cost as % of buy value', hi: 'खरीद मूल्य का % लागत' }, fmt: 'pct' },
      { k: 'be', label: { en: 'Break-even move per share', hi: 'ब्रेक-ईवन मूल्य-बदलाव / शेयर' }, fmt: 'inr' },
    ],
    bars: [
      { k: 'cBrok', label: { en: 'Brokerage', hi: 'ब्रोकरेज' } },
      { k: 'cStt', label: { en: 'STT', hi: 'STT' } },
      { k: 'cExch', label: { en: 'Exchange + SEBI', hi: 'एक्सचेंज + SEBI' } },
      { k: 'cStamp', label: { en: 'Stamp duty', hi: 'स्टांप ड्यूटी' } },
      { k: 'cGst', label: { en: 'GST', hi: 'GST' } },
    ],
    note: {
      en: 'Defaults are typical NSE discount-broker rates and are editable — brokerage, DP charges on sell and your state’s stamp duty vary, so match them to your broker’s tariff before trusting the number.',
      hi: 'डिफ़ॉल्ट NSE डिस्काउंट ब्रोकर के आम दरें हैं और बदली जा सकती हैं — ब्रोकरेज, बिक्री पर DP चार्ज और आपके राज्य की स्टांप ड्यूटी अलग-अलग होती हैं, इसलिए ब्रोकर की टैरिफ़ से मिलाकर ही भरोसा करें।',
    },
  },
  {
    id: 'tax',
    cat: 'money',
    title: { en: 'Capital gains tax', hi: 'कैपिटल गेन टैक्स' },
    lede: {
      en: 'STCG or LTCG on a sale of listed equity or an equity mutual fund.',
      hi: 'लिस्टेड शेयर या इक्विटी म्यूचुअल फंड की बिक्री पर STCG या LTCG।',
    },
    fields: [
      { k: 'buy', label: { en: 'Buy price (₹)', hi: 'खरीद मूल्य (₹)' }, val: 500, step: 1 },
      { k: 'sell', label: { en: 'Sell price (₹)', hi: 'बिक्री मूल्य (₹)' }, val: 800, step: 1 },
      { k: 'qty', label: { en: 'Quantity / units', hi: 'मात्रा / यूनिट' }, val: 100, step: 1 },
      { k: 'months', label: { en: 'Holding period (months)', hi: 'होल्डिंग अवधि (महीने)' }, val: 20, step: 1 },
      { k: 'used', label: { en: 'LTCG already used this FY (₹)', hi: 'इस वित्त वर्ष का उपयोग LTCG (₹)' }, val: 0, step: 1000, adv: true },
    ],
    out: [
      { k: 'gain', label: { en: 'Gain on the sale', hi: 'बिक्री पर लाभ' }, fmt: 'inr', strong: true },
      { k: 'klass', label: { en: 'Type', hi: 'प्रकार' }, fmt: 'txt' },
      { k: 'rate', label: { en: 'Rate', hi: 'दर' }, fmt: 'pct' },
      { k: 'taxable', label: { en: 'Taxable gain', hi: 'कर-योग्य लाभ' }, fmt: 'inr' },
      { k: 'tax', label: { en: 'Tax', hi: 'कर' }, fmt: 'inr' },
      { k: 'after', label: { en: 'Gain after tax', hi: 'कर के बाद लाभ' }, fmt: 'inr' },
      { k: 'eff', label: { en: 'Effective tax on gain', hi: 'लाभ पर प्रभावी कर' }, fmt: 'pct' },
    ],
    bars: [
      { k: 'tax', label: { en: 'Goes to tax', hi: 'कर में' } },
      { k: 'after', label: { en: 'You keep', hi: 'आपके पास' } },
    ],
    note: {
      en: 'Assumes STT-paid listed equity or equity mutual funds: 12 months or less is STCG at 20%, above 12 months is LTCG at 12.5% on the part above the ₹1.25 lakh annual exemption. Rules move with each Budget — confirm the current rates on the CBDT site.',
      hi: 'STT-भुगतान वाले लिस्टेड शेयर या इक्विटी म्यूचुअल फंड माना गया है: 12 महीने या कम = STCG 20%, उससे ज़्यादा = LTCG 12.5% (₹1.25 लाख वार्षिक छूट से ऊपर के लाभ पर)। हर बजट में नियम बदल सकते हैं — मौजूदा दरें CBDT की साइट से पुष्टि करें।',
    },
  },
  {
    id: 'risk',
    cat: 'trade',
    title: { en: 'Position size from risk', hi: 'जोखिम से पोज़िशन साइज़' },
    lede: {
      en: 'How many shares you may buy so one stop-loss costs exactly what you planned to lose.',
      hi: 'कितने शेयर खरीदें कि एक स्टॉप-लॉस ठीक उतना ही नुकसान दे जितना आपने तय किया है।',
    },
    fields: [
      { k: 'cap', label: { en: 'Trading capital (₹)', hi: 'ट्रेडिंग कैपिटल (₹)' }, val: 500000, step: 1000 },
      { k: 'rpct', label: { en: 'Risk per trade (%)', hi: 'प्रति ट्रेड जोखिम (%)' }, val: 1, step: 0.25 },
      { k: 'entry', label: { en: 'Entry price (₹)', hi: 'एंट्री मूल्य (₹)' }, val: 250, step: 0.5 },
      { k: 'stop', label: { en: 'Stop-loss price (₹)', hi: 'स्टॉप-लॉस मूल्य (₹)' }, val: 240, step: 0.5 },
      { k: 'rr', label: { en: 'Target (multiples of R)', hi: 'टारगेट (R के गुणक)' }, val: 2, step: 0.5 },
    ],
    out: [
      { k: 'riskAmt', label: { en: 'Planned loss per trade', hi: 'प्रति ट्रेड तय नुकसान' }, fmt: 'inr' },
      { k: 'qty', label: { en: 'Quantity to buy', hi: 'खरीदने वाली मात्रा' }, fmt: 'num', strong: true },
      { k: 'posVal', label: { en: 'Position value', hi: 'पोज़िशन मूल्य' }, fmt: 'inr' },
      { k: 'posPct', label: { en: 'Share of capital', hi: 'कैपिटल का हिस्सा' }, fmt: 'pct' },
      { k: 'realRisk', label: { en: 'Actual risk at that quantity', hi: 'उस मात्रा पर असली जोखिम' }, fmt: 'inr' },
      { k: 'tgt', label: { en: 'Target price', hi: 'टारगेट मूल्य' }, fmt: 'inr' },
      { k: 'reward', label: { en: 'Profit at target', hi: 'टारगेट पर लाभ' }, fmt: 'inr' },
      { k: 'warn', label: { en: 'Check', hi: 'जाँचें' }, fmt: 'txt' },
    ],
    bars: [
      { k: 'posVal', label: { en: 'Capital at work', hi: 'काम में लगा कैपिटल' } },
      { k: 'idle', label: { en: 'Left unused', hi: 'बिना इस्तेमाल' } },
    ],
    note: {
      en: 'Quantity = planned loss ÷ (entry − stop). If the position value exceeds your capital you cannot actually take that size, so either widen nothing — lower the risk percentage or move the stop closer and re-check the setup.',
      hi: 'मात्रा = तय नुकसान ÷ (एंट्री − स्टॉप)। अगर पोज़िशन मूल्य आपके कैपिटल से ज़्यादा हो तो इतना साइज़ असल में नहीं ले सकते — जोखिम % घटाएँ या स्टॉप पास करें और सेटअप दोबारा जाँचें।',
    },
  },
  {
    id: 'swp',
    cat: 'invest',
    title: { en: 'SWP — monthly payout from a corpus', hi: 'SWP — रकम से मासिक निकासी' },
    lede: {
      en: 'How long money lasts when you take a fixed amount out every month and the rest keeps earning.',
      hi: 'हर महीने तय रकम निकालने पर, बाकी रकम कमाती रहे तो पैसा कितने साल चलता है।',
    },
    fields: [
      { k: 'corpus', label: { en: 'Starting corpus (₹)', hi: 'शुरुआती रकम (₹)' }, val: 1000000, step: 10000 },
      { k: 'wd', label: { en: 'Monthly withdrawal (₹)', hi: 'मासिक निकासी (₹)' }, val: 8000, step: 500 },
      { k: 'rate', label: { en: 'Assumed return (% p.a.)', hi: 'अनुमानित रिटर्न (% प्रति वर्ष)' }, val: 8, step: 0.5 },
      { k: 'yrs', label: { en: 'Plan horizon (years)', hi: 'योजना अवधि (वर्ष)' }, val: 15, step: 1 },
      { k: 'infl', label: { en: 'Inflation for today’s money (%)', hi: 'आज के पैसे के लिए मुद्रास्फीति (%)' }, val: 6, step: 0.5, adv: true },
    ],
    out: [
      { k: 'lasts', label: { en: 'Runs out after', hi: 'कब खत्म होती है' }, fmt: 'txt', strong: true },
      { k: 'end', label: { en: 'Balance left at the horizon', hi: 'अवधि के अंत में बची रकम' }, fmt: 'inr' },
      { k: 'paid', label: { en: 'Total withdrawn', hi: 'कुल निकाली रकम' }, fmt: 'inr' },
      { k: 'maxSafe', label: { en: 'Biggest monthly that still lasts', hi: 'सबसे बड़ी मासिक रकम जो फिर भी चले' }, fmt: 'inr' },
      { k: 'yieldPct', label: { en: 'Yearly payout as % of corpus', hi: 'वार्षिक निकासी रकम का %' }, fmt: 'pct' },
      { k: 'realWd', label: { en: 'Last payout in today’s money', hi: 'आख़िरी निकासी आज के पैसे में' }, fmt: 'inr' },
      { k: 'realEnd', label: { en: 'Leftover in today’s money', hi: 'बची रकम आज के पैसे में' }, fmt: 'inr' },
    ],
    bars: [
      { k: 'paid', label: { en: 'Withdrawn', hi: 'निकाली रकम' } },
      { k: 'end', label: { en: 'Still invested', hi: 'अभी लगा हुआ' } },
    ],
    note: {
      en: 'Each month the balance earns rate ÷ 12 and the withdrawal is then taken out. maxSafe is the payout that reaches exactly zero at the horizon: corpus × i ÷ (1 − (1+i)⁻ⁿ). A withdrawal plan from a debt or hybrid fund is taxed as a redemption, not as income, so which holding you draw from changes what you actually keep.',
      hi: 'हर महीने बची रकम दर ÷ 12 कमाती है और फिर निकासी घट जाती है। maxSafe वह सबसे बड़ी मासिक रकम है जो अवधि के अंत में ठीक शून्य पर पहुँचती है: रकम × i ÷ (1 − (1+i)⁻ⁿ)। डेट या हाइब्रिड फंड से निकासी वेतन नहीं redemption मानी जाती और उस पर उसी हिसाब से टैक्स लगता है, इसलिए किस फंड से निकालते हैं यह आपके बचने वाले मूल्य को बदल देता है।',
    },
  },
  {
    id: 'goal',
    cat: 'invest',
    title: { en: 'Goal to monthly SIP', hi: 'लक्ष्य से मासिक SIP' },
    lede: {
      en: 'Work backwards from a target to the amount you have to invest every month.',
      hi: 'लक्ष्य से पीछे जाकर निकालें कि हर महीने कितना लगाना ज़रूरी है।',
    },
    fields: [
      { k: 'goal', label: { en: 'Target amount (₹)', hi: 'लक्ष्य रकम (₹)' }, val: 5000000, step: 100000 },
      { k: 'yrs', label: { en: 'Years to the goal', hi: 'लक्ष्य तक के वर्ष' }, val: 10, step: 1 },
      { k: 'rate', label: { en: 'Assumed return (% p.a.)', hi: 'अनुमानित रिटर्न (% प्रति वर्ष)' }, val: 12, step: 0.5 },
      { k: 'have', label: { en: 'Already invested (₹)', hi: 'पहले से लगाई रकम (₹)' }, val: 100000, step: 10000 },
      { k: 'infl', label: { en: 'Inflation on this goal (%)', hi: 'इस लक्ष्य पर मुद्रास्फीति (%)' }, val: 6, step: 0.5, adv: true },
    ],
    out: [
      { k: 'monthly', label: { en: 'Monthly investment needed', hi: 'ज़रूरी मासिक निवेश' }, fmt: 'inr', strong: true },
      { k: 'totalInv', label: { en: 'Total you will invest', hi: 'कुल लगाई रकम' }, fmt: 'inr' },
      { k: 'gain', label: { en: 'Compounding covers this much', hi: 'कंपाउंडिंग इतना भरती है' }, fmt: 'inr' },
      { k: 'late1', label: { en: 'Monthly if you start 1 year late', hi: '1 वर्ष देर से शुरू करें तो मासिक' }, fmt: 'inr' },
      { k: 'late3', label: { en: 'Monthly if you start 3 years late', hi: '3 वर्ष देर से शुरू करें तो मासिक' }, fmt: 'inr' },
      { k: 'inflGoal', label: { en: 'Goal price in future rupees', hi: 'भविष्य के रुपये में लक्ष्य की कीमत' }, fmt: 'inr' },
      { k: 'monthlyReal', label: { en: 'Monthly SIP for that priced-up goal', hi: 'बढ़े लक्ष्य के लिए मासिक SIP' }, fmt: 'inr' },
    ],
    bars: [
      { k: 'totalInv', label: { en: 'You invest', hi: 'आप लगाते हैं' } },
      { k: 'gain', label: { en: 'Compounding adds', hi: 'कंपाउंडिंग जोड़ती है' } },
    ],
    note: {
      en: 'SIP = (goal − already × (1+i)ⁿ) × i ÷ ((1+i)ⁿ − 1), with i = rate ÷ 12. Delay is the expensive part: the two “late” lines are the numbers worth showing anyone who keeps postponing the first SIP.',
      hi: 'SIP = (लक्ष्य − पहले की रकम × (1+i)ⁿ) × i ÷ ((1+i)ⁿ − 1), जहाँ i = दर ÷ 12। देरी सबसे महँगी चीज़ है: दो “देर” वाली लाइनें उसी इशारा करती हैं जो पहली SIP टालता रहे।',
    },
  },
  {
    id: 'compound',
    cat: 'invest',
    title: { en: 'Inflation-adjusted growth', hi: 'मुद्रास्फीति के बाद असली ग्रोथ' },
    lede: {
      en: 'What a lump sum becomes on paper, and what it can still buy.',
      hi: 'कागज़ पर एकमुश्त रकम कितनी बनेगी, और उससे कितना खरीदा जा सकता है।',
    },
    fields: [
      { k: 'amt', label: { en: 'Amount today (₹)', hi: 'आज की रकम (₹)' }, val: 100000, step: 5000 },
      { k: 'yrs', label: { en: 'Years', hi: 'वर्ष' }, val: 10, step: 1 },
      { k: 'rate', label: { en: 'Return (% p.a.)', hi: 'रिटर्न (% प्रति वर्ष)' }, val: 11, step: 0.5 },
      { k: 'infl', label: { en: 'Inflation (%)', hi: 'मुद्रास्फीति (%)' }, val: 6, step: 0.5 },
    ],
    out: [
      { k: 'nominal', label: { en: 'Balance on paper', hi: 'कागज़ पर शेष' }, fmt: 'inr' },
      { k: 'real', label: { en: 'Worth in today’s money', hi: 'आज के पैसे में मूल्य' }, fmt: 'inr', strong: true },
      { k: 'realGain', label: { en: 'Real gain', hi: 'असली लाभ' }, fmt: 'inr' },
      { k: 'realRate', label: { en: 'Real return a year', hi: 'असली वार्षिक रिटर्न' }, fmt: 'pct' },
      { k: 'priceOfToday', label: { en: 'Today’s goods will cost', hi: 'आज की चीज़ें इतनी कीमती होंगी' }, fmt: 'inr' },
      { k: 'dbl', label: { en: 'Doubling', hi: 'डबल होना' }, fmt: 'txt' },
      { k: 'eaten', label: { en: 'Eaten by inflation', hi: 'मुद्रास्फीति ने खाया' }, fmt: 'inr' },
    ],
    bars: [
      { k: 'real', label: { en: 'Keeps its value', hi: 'मूल्य बचा' } },
      { k: 'eaten', label: { en: 'Lost to prices', hi: 'कीमतों में गया' } },
    ],
    note: {
      en: 'Real return = (1 + return) ÷ (1 + inflation) − 1. The rule of 72 says money doubles in about 72 ÷ rate years; the same rule on inflation says the price of today’s basket doubles in 72 ÷ inflation years, and that second doubling is the one people forget to subtract.',
      hi: 'असली रिटर्न = (1 + रिटर्न) ÷ (1 + मुद्रास्फीति) − 1। रूल ऑफ़ 72 के अनुसार पैसा लगभग 72 ÷ दर वर्षों में डबल होता है; वही नियम मुद्रास्फीति पर कहता है कि आज की चीज़ों की कीमत 72 ÷ मुद्रास्फीति वर्षों में डबल होगी, और यही दूसरा डबल लोग घटाना भूल जाते हैं।',
    },
  },
  {
    id: 'emi',
    cat: 'money',
    title: { en: 'Loan EMI and interest cost', hi: 'लोन EMI और ब्याज लागत' },
    lede: {
      en: 'The monthly cheque, what it adds up to, and what a little extra each month saves.',
      hi: 'मासिक क़िस्त, उसकी कुल लागत, और हर महीने थोड़ा ज़्यादा भरने पर कितनी बचत होती है।',
    },
    fields: [
      { k: 'P', label: { en: 'Loan amount (₹)', hi: 'लोन रकम (₹)' }, val: 3000000, step: 50000 },
      { k: 'rate', label: { en: 'Interest rate (% p.a.)', hi: 'ब्याज दर (% प्रति वर्ष)' }, val: 8.75, step: 0.05 },
      { k: 'yrs', label: { en: 'Tenure (years)', hi: 'अवधि (वर्ष)' }, val: 20, step: 1 },
      { k: 'extra', label: { en: 'Extra paid every month (₹)', hi: 'हर महीने अतिरिक्त भुगतान (₹)' }, val: 5000, step: 500 },
    ],
    out: [
      { k: 'emi', label: { en: 'EMI', hi: 'EMI' }, fmt: 'inr', strong: true },
      { k: 'total', label: { en: 'Total paid over the tenure', hi: 'अवधि भर कुल भुगतान' }, fmt: 'inr' },
      { k: 'interest', label: { en: 'Interest cost', hi: 'ब्याज लागत' }, fmt: 'inr' },
      { k: 'intPct', label: { en: 'Interest as % of the loan', hi: 'लोन का % ब्याज' }, fmt: 'pct' },
      { k: 'perLakh', label: { en: 'EMI per ₹1 lakh borrowed', hi: '₹1 लाख लोन पर EMI' }, fmt: 'inr' },
      { k: 'emi2', label: { en: 'EMI with the extra amount', hi: 'अतिरिक्त रकम के साथ EMI' }, fmt: 'inr' },
      { k: 'yrsSaved', label: { en: 'Tenure shortens by', hi: 'अवधि इतनी घटती है' }, fmt: 'txt' },
      { k: 'intSaved', label: { en: 'Interest saved', hi: 'बचा हुआ ब्याज' }, fmt: 'inr' },
    ],
    bars: [
      { k: 'P', label: { en: 'Principal', hi: 'मूल रकम' } },
      { k: 'interest', label: { en: 'Interest', hi: 'ब्याज' } },
    ],
    note: {
      en: 'EMI = P × i ÷ (1 − (1+i)⁻ⁿ) with i = rate ÷ 1200 and n = months. Floating-rate loans reprice with the repo rate, so treat this as today’s rate held flat, not a promise for twenty years.',
      hi: 'EMI = P × i ÷ (1 − (1+i)⁻ⁿ), जहाँ i = दर ÷ 1200 और n = महीने। फ्लोटिंग दर वाले लोन रेपो दर के साथ बदलते हैं, इसलिए इसे आज की स्थिर दर मानें, बीस वर्षों का वादा नहीं।',
    },
  },
  {
    id: 'margin',
    cat: 'trade',
    title: { en: 'Futures margin and leverage', hi: 'फ्यूचर्स मार्जिन और लीवरेज' },
    lede: {
      en: 'What one lot actually controls, and how small a move takes the margin.',
      hi: 'एक लॉट असल में कितना नियंत्रित करता है, और कितनी छोटी हलचल मार्जिन ले जाती है।',
    },
    fields: [
      { k: 'price', label: { en: 'Index / share price (₹)', hi: 'इंडेक्स / शेयर मूल्य (₹)' }, val: 24000, step: 1 },
      { k: 'lot', label: { en: 'Lot size (quantity)', hi: 'लॉट साइज़ (मात्रा)' }, val: 25, step: 1 },
      { k: 'mgn', label: { en: 'Margin blocked (% of notional)', hi: 'ब्लॉक मार्जिन (% नोशनल)' }, val: 15, step: 0.5 },
      { k: 'cap', label: { en: 'Trading capital (₹)', hi: 'ट्रेडिंग कैपिटल (₹)' }, val: 500000, step: 5000 },
      { k: 'move', label: { en: 'Adverse move to price (%)', hi: 'गिनने वाली प्रतिकूल हलचल (%)' }, val: 1, step: 0.25 },
    ],
    out: [
      { k: 'notional', label: { en: 'Exposure in one lot', hi: 'एक लॉट का एक्सपोज़र' }, fmt: 'inr', strong: true },
      { k: 'used', label: { en: 'Margin blocked for one lot', hi: 'एक लॉट का ब्लॉक मार्जिन' }, fmt: 'inr' },
      { k: 'lev', label: { en: 'Leverage multiple', hi: 'लीवरेज गुणक' }, fmt: 'x' },
      { k: 'lots', label: { en: 'Lots your capital can block', hi: 'कैपिटल से भर सकने वाले लॉट' }, fmt: 'num' },
      { k: 'per1', label: { en: 'Every 1% move is worth', hi: 'हर 1% हलचल का मूल्य' }, fmt: 'inr' },
      { k: 'loss', label: { en: 'Loss on that move, one lot', hi: 'उस हलचल पर नुकसान, एक लॉट' }, fmt: 'inr' },
      { k: 'wipe', label: { en: 'Move that consumes the margin', hi: 'मार्जिन खाने वाली हलचल' }, fmt: 'pct' },
      { k: 'exposurePct', label: { en: 'Exposure as % of capital', hi: 'कैपिटल का % एक्सपोज़र' }, fmt: 'pct' },
    ],
    bars: [
      { k: 'used', label: { en: 'Margin blocked', hi: 'ब्लॉक मार्जिन' } },
      { k: 'spare', label: { en: 'Free for losses', hi: 'नुकसान के लिए खाली' } },
    ],
    note: {
      en: 'Leverage is just 100 ÷ margin %, so a 15% margin means a 1% move in the underlying moves your own money about 6.7%. Exchanges charge SPAN plus exposure margin and raise both on volatile days, and pay-outs settle daily — check your broker’s live margin before sizing, not a remembered number.',
      hi: 'लीवरेज = 100 ÷ मार्जिन %, इसलिए 15% मार्जिन का मतलब है कि अंडरलाइंग में 1% हलचल आपके अपने पैसों को लगभग 6.7% हिलाती है। एक्सचेंज SPAN प्लस एक्सपोज़र मार्जिन लेते हैं और उतार-चढ़ाव वाले दिन दोनों बढ़ाते हैं, और MTM रोज़ सेटल होता है — साइज़ तय करने से पहले ब्रोकर की मौजूदा मार्जिन दर देखें, याद की हुई आँकड़ा नहीं।',
    },
  },
  {
    id: 'drawdown',
    cat: 'trade',
    title: { en: 'Loss recovery and volatility drag', hi: 'गिरावट की भरपाई और वोलैटिलिटी ड्रैग' },
    lede: {
      en: 'The gain needed to undo a fall, and what swings cost even when the average looks fine.',
      hi: 'गिरावट भरने के लिए ज़रूरी लाभ, और औसत ठीक दिखने पर भी उतार-चढ़ाव की कीमत।',
    },
    fields: [
      { k: 'cap', label: { en: 'Capital (₹)', hi: 'कैपिटल (₹)' }, val: 500000, step: 10000 },
      { k: 'dd', label: { en: 'Drawdown (%)', hi: 'गिरावट (%)' }, val: 30, step: 1 },
      { k: 'ret', label: { en: 'Return after the fall (% p.a.)', hi: 'गिरावट के बाद रिटर्न (% प्रति वर्ष)' }, val: 12, step: 0.5 },
      { k: 'vol', label: { en: 'Year-to-year swing (%)', hi: 'वार्षिक उतार-चढ़ाव (%)' }, val: 20, step: 1 },
    ],
    out: [
      { k: 'after', label: { en: 'Capital after the fall', hi: 'गिरावट के बाद कैपिटल' }, fmt: 'inr' },
      { k: 'need', label: { en: 'Gain needed to be back to even', hi: 'बराबर होने के लिए ज़रूरी लाभ' }, fmt: 'pct', strong: true },
      { k: 'yrs', label: { en: 'Years to recover at that return', hi: 'उस रिटर्न पर भरपाई के वर्ष' }, fmt: 'txt' },
      { k: 'r10', label: { en: 'A 10% fall needs', hi: '10% गिरावट पर चाहिए' }, fmt: 'pct' },
      { k: 'r20', label: { en: 'A 20% fall needs', hi: '20% गिरावट पर चाहिए' }, fmt: 'pct' },
      { k: 'r50', label: { en: 'A 50% fall needs', hi: '50% गिरावट पर चाहिए' }, fmt: 'pct' },
      { k: 'geo', label: { en: 'Expected compounded return', hi: 'अनुमानित कंपाउंड रिटर्न' }, fmt: 'pct' },
      { k: 'drag', label: { en: 'Taken by swings alone', hi: 'सिर्फ़ उतार-चढ़ाव से गया' }, fmt: 'pct' },
    ],
    note: {
      en: 'Recovery is not symmetric: a fall of d needs d ÷ (1 − d) to undo, so −50% asks for +100%. Volatility drag is roughly variance ÷ 2, i.e. (vol% ÷ 100)² ÷ 2 taken off the average return every year.',
      hi: 'भरपाई बराबर नहीं होती: d% गिरावट भरने के लिए d ÷ (1 − d) लाभ चाहिए, इसलिए −50% पर +100% लगता है। वोलैटिलिटी ड्रैग लगभग वेरिएंस ÷ 2 है, यानी (vol% ÷ 100)² ÷ 2 हर वर्ष औसत रिटर्न से घट जाता है।',
    },
  },
];

/* ---------------- calculator groups ---------------- */
MM.calcCats = [
  { id: 'all', label: { en: 'All tools', hi: 'सभी टूल' } },
  { id: 'invest', label: { en: 'Investing', hi: 'निवेश' } },
  { id: 'trade', label: { en: 'Trading', hi: 'ट्रेडिंग' } },
  { id: 'money', label: { en: 'Loans & tax', hi: 'लोन और टैक्स' } },
];
