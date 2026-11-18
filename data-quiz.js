/* MarketMitra — data file. Loaded by index.html before app.js.
   Generated content lives in data-bulk.js; this file is hand-written. */
window.MM = window.MM || {};


/* ---------------- self-check quizzes ---------------- */
MM.quizzes = [
  {
    id: 'q-beginner',
    path: 'p-beginner',
    title: { en: 'First investments', hi: 'पहला निवेश' },
    qs: [
      {
        q: { en: 'What does a Demat account actually do?', hi: 'डीमैट खाता असल में क्या करता है?' },
        opts: [
          { en: 'Holds your shares and units electronically', hi: 'आपके शेयर और यूनिट इलेक्ट्रॉनिक रूप में रखता है' },
          { en: 'Places your buy and sell orders', hi: 'आपके खरीद और बिक्री ऑर्डर लगाता है' },
          { en: 'Works out your capital-gains tax', hi: 'आपका कैपिटल गेन टैक्स निकालता है' },
          { en: 'Lends your shares to other traders', hi: 'आपके शेयर दूसरों को उधार देता है' },
        ],
        a: 0,
        why: {
          en: 'Orders go out of the trading account; the Demat account is where the securities sit, with NSDL or CDSL keeping the record.',
          hi: 'ऑर्डर ट्रेडिंग खाते से जाते हैं; डीमैट खाता वहाँ है जहाँ सिक्योरिटी रखी होती हैं, और रिकॉर्ड NSDL या CDSL के पास रहता है।',
        },
      },
      {
        q: { en: 'You buy on NSE on Tuesday. Under normal T+1 settlement the shares reach your Demat account', hi: 'मंगलवार को NSE पर खरीदते हैं। सामान्य T+1 सेटलमेंट में शेयर डीमैट खाते में कब आएँगे?' },
        opts: [
          { en: 'On Wednesday, if it is a working day', hi: 'बुधवार को, अगर वह कार्यदिवस हो' },
          { en: 'Within an hour, the same day', hi: 'उसी दिन, एक घंटे के भीतर' },
          { en: 'On the fifth working day', hi: 'पाँचवें कार्यदिवस को' },
          { en: 'Only after you file the tax', hi: 'टैक्स भरने के बाद ही' },
        ],
        a: 0,
        why: {
          en: 'Equity trades settle on the next working day. T+0 same-day settlement is offered as an option at many brokers, but T+1 is the default.',
          hi: 'इक्विटी ट्रेड अगले कार्यदिवस सेटल होते हैं। कई ब्रोकर T+0 यानी उसी दिन सेटलमेंट का विकल्प देते हैं, पर डिफ़ॉल्ट T+1 है।',
        },
      },
      {
        q: { en: 'Which index tracks 30 companies?', hi: 'कौन-सा इंडेक्स 30 कंपनियों को ट्रैक करता है?' },
        opts: [
          { en: 'BSE Sensex', hi: 'बीएसई सेंसेक्स' },
          { en: 'Nifty 50', hi: 'निफ्टी 50' },
          { en: 'Nifty Bank', hi: 'निफ्टी बैंक' },
          { en: 'BSE 500', hi: 'बीएसई 500' },
        ],
        a: 0,
        why: {
          en: 'Sensex is 30 large BSE-listed companies, the Nifty 50 is 50 on NSE. Both are free-float market-cap weighted, so a few heavy names move them most.',
          hi: 'सेंसेक्स में BSE की 30 बड़ी कंपनियाँ हैं, निफ्टी 50 में NSE की 50। दोनों फ्री-फ़्लोट मार्केट-कैप से वज़न वाले इंडेक्स हैं, इसलिए कुछ भारी नाम इन्हें सबसे ज़्यादा हिलाते हैं।',
        },
      },
      {
        q: { en: 'A mutual fund NAV is', hi: 'म्यूचुअल फंड का NAV क्या है?' },
        opts: [
          { en: 'Fund holdings minus liabilities, per unit', hi: 'फंड की संपत्ति माइनस देनदारी, प्रति यूनिट' },
          { en: 'The price the fund manager sets each morning', hi: 'जो दाम फंड मैनेजर हर सुबह तय करते हैं' },
          { en: 'The dividend paid per unit', hi: 'प्रति यूनिट दिया गया डिविडेंड' },
          { en: 'Entry load plus exit load', hi: 'एंट्री लोड प्लस एग्ज़िट लोड' },
        ],
        a: 0,
        why: {
          en: 'It is computed at the close from portfolio value net of liabilities divided by outstanding units, and open-ended funds are bought and sold at it.',
          hi: 'यह दिन के अंत में पोर्टफोलियो मूल्य से देनदारी घटाकर, बचे यूनिट पर भाग देकर निकलता है, और ओपन-एंडेड फंड इसी पर खरीदे-बेचे जाते हैं।',
        },
      },
      {
        q: { en: 'To sell shares you already own, what must be true?', hi: 'अपने पास मौजूद शेयर बेचने के लिए क्या ज़रूरी है?' },
        opts: [
          { en: 'They must be in your Demat account', hi: 'वे आपके डीमैट खाते में होने चाहिए' },
          { en: 'You must have held them a year', hi: 'वे एक वर्ष से रखने हों' },
          { en: 'STT must be paid in advance', hi: 'STT पहले भरना हो' },
          { en: 'The company must approve the sale', hi: 'कंपनी को बिक्री मंज़ूर करनी हो' },
        ],
        a: 0,
        why: {
          en: 'A sale delivers securities out of the Demat account. If they are not there the trade fails and the broker charges a shortfall penalty.',
          hi: 'बिक्री से शेयर डीमैट खाते से जाते हैं। अगर वे वहाँ नहीं थे तो ट्रेड फेल होता है और ब्रोकर शॉर्टफॉल चार्ज लगाता है।',
        },
      },
    ],
  },
  {
    id: 'q-trader',
    path: 'p-trader',
    title: { en: 'Trading safely', hi: 'सुरक्षित ट्रेडिंग' },
    qs: [
      {
        q: { en: 'A stop-loss limit order differs from a stop-loss market order because it', hi: 'स्टॉप-लॉस लिमिट ऑर्डर, स्टॉप-लॉस मार्केट ऑर्डर से इस कारण अलग है कि' },
        opts: [
          { en: 'It may not execute at all if price gaps past it', hi: 'मूल्य उसे पार कर जाए तो वह चलता ही नहीं' },
          { en: 'It always fills exactly at the stop price', hi: 'यह हमेशा स्टॉप दाम पर ही भरता है' },
          { en: 'It works only in delivery', hi: 'यह केवल डिलीवरी में चलता है' },
          { en: 'It costs extra brokerage', hi: 'इस पर अतिरिक्त ब्रोकरेज लगता है' },
        ],
        a: 0,
        why: {
          en: 'The limit is a price floor. If the market jumps through it the order waits unfilled while the loss keeps growing — which is why many traders keep the stop as a market order.',
          hi: 'लिमिट एक दाम-सीमा है। अगर बाज़ार उसे पार कर जाए तो ऑर्डर बिना भरे पड़ा रहता है और नुकसान बढ़ता जाता है — इसीलिए कई ट्रेडर स्टॉप मार्केट ऑर्डर ही रखते हैं।',
        },
      },
      {
        q: { en: 'You trade with 5× leverage and the market moves 4% against you. Your own money drops by about', hi: '5× लीवरेज पर बाज़ार आपके खिलाफ़ 4% गया तो आपकी अपनी रकम लगभग कितनी घटेगी?' },
        opts: [
          { en: '20%', hi: '20%' },
          { en: '4%', hi: '4%' },
          { en: '5%', hi: '5%' },
          { en: '0.8%', hi: '0.8%' },
        ],
        a: 0,
        why: {
          en: 'Leverage multiplies the move on your margin: 4% × 5 = 20% of your own capital, before costs and before the broker marks you up for margin.',
          hi: 'लीवरेज मूवमेंट को आपके मार्जिन पर गुना करता है: 4% × 5 = 20%, अपने कैपिटल का, चार्ज और मार्जिन कॉल से पहले।',
        },
      },
      {
        q: { en: 'Slippage is', hi: 'स्लिपेज क्या है?' },
        opts: [
          { en: 'The gap between the price you expected and the price you got', hi: 'अपेक्षित दाम और मिला हुआ दाम, इनका अंतर' },
          { en: 'A fee on intraday trades', hi: 'इंट्राडे ट्रेड पर लगने वाला चार्ज' },
          { en: 'A daily change in face value', hi: 'फ़ेस वैल्यू का रोज़ बदलाव' },
          { en: 'Delay in getting your money back', hi: 'पैसा वापस आने में देरी' },
        ],
        a: 0,
        why: {
          en: 'Thin books, gaps and market orders cause it. Size the stop from the fill you can realistically get, not from the price on the screen.',
          hi: 'पतली ऑर्डर बुक, गैप और मार्केट ऑर्डर से यह होता है। स्टॉप उस दाम पर सेट करें जो असल में मिल सकता है, स्क्रीन के दाम पर नहीं।',
        },
      },
      {
        q: { en: 'Buying one call option means your maximum loss is', hi: 'एक कॉल ऑप्शन खरीदने पर अधिकतम नुकसान क्या होगा?' },
        opts: [
          { en: 'The premium you paid', hi: 'जो प्रीमियम आपने दिया' },
          { en: 'Unlimited', hi: 'असीमित' },
          { en: 'The strike price', hi: 'स्ट्राइक प्राइस' },
          { en: 'Lot size multiplied by the strike', hi: 'लॉट साइज़ × स्ट्राइक' },
        ],
        a: 0,
        why: {
          en: 'A buyer can only lose what was paid for the contract. The seller takes the open-ended risk, which is exactly why selling needs margin.',
          hi: 'खरीदार सिर्फ़ कॉन्ट्रैक्ट के लिए दी गई रकम खो सकता है। खुला जोखिम बेचने वाले का होता है, इसलिए बेचने पर मार्जिन लगता है।',
        },
      },
      {
        q: { en: 'A 5% circuit on a stock means', hi: 'किसी शेयर पर 5% सर्किट का मतलब है' },
        opts: [
          { en: 'Matching pauses or tightens when the price moves 5% from the reference', hi: 'रेफ़रेंस से 5% हिलते ही मैचिंग रुकती या सख़्त हो जाती है' },
          { en: 'The stock cannot rise more than 5% in a year', hi: 'शेयर वर्ष में 5% से ज़्यादा नहीं बढ़ सकता' },
          { en: 'Your broker caps your loss at 5%', hi: 'ब्रोकर आपका नुकसान 5% पर रोक देता है' },
          { en: 'A 5% tax on large moves', hi: 'बड़े मूव पर 5% टैक्स' },
        ],
        a: 0,
        why: {
          en: 'Circuit limits stop one print from dragging the whole counter; stocks in the ASM or GSM lists get progressively tighter bands instead of a full halt.',
          hi: 'सर्किट लिमिट एक ही दाम से पूरे शेयर को गिरने-उठने से रोकती है; ASM या GSM वाली स्टाक्स पर पूरी तरह रोकने के बजाय धीरे-धीरे सख़्त बैंड लगते हैं।',
        },
      },
    ],
  },
  {
    id: 'q-fintech',
    path: 'p-fintech',
    title: { en: 'Fintech & payments', hi: 'फिनटेक और भुगतान' },
    qs: [
      {
        q: { en: 'On UPI, what points to your account for a merchant?', hi: 'UPI पर मर्चेंट को आपके खाते से क्या जोड़ता है?' },
        opts: [
          { en: 'A VPA such as name@bank', hi: 'VPA, जैसे name@bank' },
          { en: 'Your card number and CVV', hi: 'आपका कार्ड नंबर और CVV' },
          { en: 'Your IFSC code alone', hi: 'सिर्फ़ IFSC कोड' },
          { en: 'An OTP issued by NPCI', hi: 'NPCI द्वारा जारी OTP' },
        ],
        a: 0,
        why: {
          en: 'The VPA maps to a bank account and the debit is authorised by your UPI PIN; the merchant never sees your account number.',
          hi: 'VPA बैंक खाते से जुड़ा होता है और डेबिट आपके UPI पिन से स्वीकृत होता है; मर्चेंट को आपका खाता नंबर कभी नहीं दिखता।',
        },
      },
      {
        q: { en: 'NPCI is best described as', hi: 'NPCI को सबसे सही तरह कैसे बताएँ?' },
        opts: [
          { en: 'Infrastructure owned by member banks that runs UPI, RuPay, AePS and eNACH', hi: 'सदस्य बैंकों की संस्था जो UPI, RuPay, AePS और eNACH चलाती है' },
          { en: 'The regulator that fixes bank interest rates', hi: 'रेगुलेटर जो बैंक की ब्याज दर तय करता है' },
          { en: 'The body that grants banking licences', hi: 'जो बैंकिंग लाइसेंस देने का काम करता है' },
          { en: 'An auditor for mutual fund houses', hi: 'म्यूचुअल फंड हाउस का ऑडिटर' },
        ],
        a: 0,
        why: {
          en: 'NPCI is a not-for-profit owned by banks and financial institutions. Regulation of payments stays with the RBI.',
          hi: 'NPCI बैंकों व वित्तीय संस्थाओं की स्वामित्व वाली गैर-लाभकारी संस्था है। पेमेंट का रेगुलेशन RBI के पास रहता है।',
        },
      },
      {
        q: { en: 'Your UPI PIN authorises', hi: 'आपका UPI पिन क्या स्वीकृत करता है?' },
        opts: [
          { en: 'A debit from your bank account for that payment', hi: 'उस भुगतान के लिए आपके बैंक खाते से डेबिट' },
          { en: 'A credit into your wallet', hi: 'आपके वॉलेट में क्रेडिट' },
          { en: 'A pre-approved loan', hi: 'पहले से मंज़ूर लोन' },
          { en: 'Changing your registered mobile number', hi: 'रजिस्टर्ड मोबाइल नंबर बदलना' },
        ],
        a: 0,
        why: {
          en: 'The PIN is customer authentication on the debit leg. The PSP forwards the request and your bank settles it.',
          hi: 'पिन डेबिट पक्ष पर ग्राहक प्रमाणीकरण है। अनुरोध PSP भेजता है और सेटलमेंट आपके बैंक से होता है।',
        },
      },
      {
        q: { en: 'The Account Aggregator framework moves', hi: 'अकाउंट एग्रीगेटर फ्रेमवर्क क्या भेजता है?' },
        opts: [
          { en: 'Financial data between institutions, only with your consent', hi: 'संस्थाओं के बीच वित्तीय डेटा, सिर्फ़ आपकी सहमति से' },
          { en: 'Money across borders', hi: 'सीमा पार पैसा' },
          { en: 'All your Demat accounts into one', hi: 'सारे डीमैट खाते एक खाते में मिलाकर' },
          { en: 'Mutual fund money into lending', hi: 'म्यूचुअल फंड की रकम को उधार में बदलना' },
        ],
        a: 0,
        why: {
          en: 'It is a consented, encrypted request-response flow between a financial information provider and you. It never holds your money.',
          hi: 'यह वित्तीय सूचना प्रदाता और आपके बीच की सहमति-आधारित, एन्क्रिप्टेड अनुरोध-प्रतिक्रिया व्यवस्था है। यह आपका पैसा कभी रखता ही नहीं।',
        },
      },
      {
        q: { en: 'An e-mandate is', hi: 'ई-मैंडेट क्या होता है?' },
        opts: [
          { en: 'A pre-authorisation letting a provider debit a set amount from your bank', hi: 'पूर्व-स्वीकृति, जिससे एक तय रकम बैंक से काटी जा सके' },
          { en: 'A digital signature on a share certificate', hi: 'शेयर सर्टिफ़िकेट पर डिजिटल हस्ताक्षर' },
          { en: 'A vote mandate in company meetings', hi: 'कंपनी मीटिंग में वोट देने का अधिकार' },
          { en: 'An auto-created Demat account', hi: 'स्वतः खुला डीमैट खाता' },
        ],
        a: 0,
        why: {
          en: 'It replaced the physical debit mandate for SIPs, EMIs and bills. UPI Autopay is the same idea running on UPI rails.',
          hi: 'SIP, EMI और बिल के लिए इसने पुराने भौतिक डेबिट मेडेट की जगह ली। UPI Autopay यही चीज़ UPI पर है।',
        },
      },
    ],
  },
  {
    id: 'q-global',
    path: 'p-global',
    title: { en: 'Global markets & valuation', hi: 'वैश्विक बाज़ार और वैल्यूएशन' },
    qs: [
      {
        q: { en: 'Market capitalisation equals', hi: 'मार्केट कैपिटलाइज़ेशन बराबर है' },
        opts: [
          { en: 'Share price × shares outstanding', hi: 'शेयर दाम × कुल शेयर' },
          { en: 'Profit after tax × P/E', hi: 'कर-पश्चात लाभ × P/E' },
          { en: 'Assets − liabilities', hi: 'संपत्ति − देनदारी' },
          { en: 'Revenue × 10', hi: 'राजस्व × 10' },
        ],
        a: 0,
        why: {
          en: 'Indexes use free-float market cap, which counts only shares actually available to trade, so index weights differ from the plain number.',
          hi: 'इंडेक्स फ्री-फ़्लोट मार्केट कैप इस्तेमाल करते हैं, यानी सिर्फ़ व्यापार-योग्य शेयर गिने जाते हैं, इसलिए इंडेक्स का वज़न सादे आँकड़े से अलग होता है।',
        },
      },
      {
        q: { en: 'A P/E of 40 means', hi: '40 का P/E मतलब है' },
        opts: [
          { en: 'The price is 40 times earnings per share', hi: 'दाम प्रति शेयर लाभ का 40 गुना है' },
          { en: 'The stock is 40% undervalued', hi: 'शेयर 40% सस्ता है' },
          { en: 'The dividend yield is 40%', hi: 'डिविडेंड यील्ड 40% है' },
          { en: 'Earnings grew 40% last year', hi: 'पिछले वर्ष लाभ 40% बढ़ा' },
        ],
        a: 0,
        why: {
          en: 'On its own it says nothing. A 40 P/E on 30% growth and a 40 P/E on 3% growth are different businesses entirely.',
          hi: 'अकेले यह कुछ नहीं बताता। 30% ग्रोथ पर 40 का P/E और 3% ग्रोथ पर 40 का P/E बिल्कुल अलग बिज़नेस हैं।',
        },
      },
      {
        q: { en: 'Free cash flow is closest to', hi: 'फ्री कैश फ़्लो सबसे नज़दीक है' },
        opts: [
          { en: 'Operating cash flow minus capital expenditure', hi: 'परिचालन कैश फ़्लो माइनस कैपिटल एक्सपेंडिचर' },
          { en: 'Net profit plus depreciation', hi: 'शुद्ध लाभ प्लस अवमूल्यन' },
          { en: 'Revenue minus cost of goods', hi: 'राजस्व माइनस माल की लागत' },
          { en: 'Cash lying in the bank at year end', hi: 'वर्ष के अंत में बैंक में शेष कैश' },
        ],
        a: 0,
        why: {
          en: 'It is the cash a business can hand back to owners after keeping its machines running, which is the number a DCF discounts.',
          hi: 'मशीनरी और कारोबार चलता रखने के बाद मालिकों को लौटाई जा सकने वाली रकम — DCF इसी को डिसकाउंट करता है।',
        },
      },
      {
        q: { en: 'An Indian company listed in New York through depositary receipts has issued', hi: 'डिपॉज़िटरी रसीद के ज़रिए न्यूयॉर्क में सूचीबत भारतीय कंपनी ने क्या जारी किया?' },
        opts: [
          { en: 'ADRs', hi: 'ADR' },
          { en: 'GDRs', hi: 'GDR' },
          { en: 'CCPS', hi: 'CCPS' },
          { en: 'FPIs', hi: 'FPI' },
        ],
        a: 0,
        why: {
          en: 'GDRs trade on European venues such as London; ADRs are the US wrapper. Both are still ordinary shares held by a depositary bank.',
          hi: 'GDR यूरोप के एक्सचेंज जैसे लंदन पर चलते हैं; ADR अमेरिकी रूप है। दोनों में शेयर डिपॉज़िटरी बैंक के पास रहते हैं।',
        },
      },
      {
        q: { en: 'When the US Federal Reserve raises rates, the usual first-order effect on valuations is', hi: 'अमेरिकी फेड दरें बढ़ाए तो वैल्यूएशन पर पहला असर आमतौर पर' },
        opts: [
          { en: 'Discount rates rise, hurting long-duration growth names most', hi: 'डिसकाउंट दर बढ़ती हैं, सबसे असर लंबी अवधि वाले ग्रोथ शेयर पर' },
          { en: 'Every equity falls by the same percentage', hi: 'हर शेयर उतने ही प्रतिशत गिरता है' },
          { en: 'Bond yields go to zero', hi: 'बॉन्ड यील्ड शून्य हो जाती है' },
          { en: 'Nothing, it is a domestic US decision', hi: 'कुछ नहीं, यह अमेरिकी घरेलू फ़ैसला है' },
        ],
        a: 0,
        why: {
          en: 'A higher risk-free rate lifts the denominator in every present-value model, and cash flows far in the future shrink the most. India feels it through foreign flows and the rupee.',
          hi: 'जोखिम-मुक्त दर बढ़ने पर हर present-value मॉडल का हर बड़ा जाता है, और दूर की कैश फ़्लो सबसे ज़्यादा सिमटती हैं। भारत इसे विदेशी फ्लो और रुपये के ज़रिए महसूस करता है।',
        },
      },
    ],
  },
];

/* ---------------- deeper self-check: extra questions on the four original tracks ----------------
   The correct option is always listed first (a: 0); the UI shuffles it per question, per track. */
MM.qzExtra = {
  'q-beginner': [
    { q: { en: 'Which fund style keeps the most of the market’s return for you?', hi: 'किस फंड शैली में बाज़ार का रिटर्न सबसे ज़्यादा आपके पास रहता है?' }, d: 1, opts: [
      { en: 'An index fund, because it copies a published index instead of paying for stock picking', hi: 'इंडेक्स फंड, क्योंकि वह तय इंडेक्स की नकल करता है और शेयर चुनने का खर्च नहीं लेता' },
      { en: 'The fund with the highest return in the last one year', hi: 'पिछले एक वर्ष में सबसे ज़्यादा रिटर्न देने वाला फंड' },
      { en: 'A sector fund recommended in the news', hi: 'न्यूज़ में बताया गया सेक्टर फंड' },
      { en: 'Any fund bought through a regular plan with a commission', hi: 'कमीशन वाले रेगुलर प्लान से लिया गया कोई भी फंड' }],
      a: 0, why: { en: 'Cost is the one number in a fund you control. A regular plan also carries a distributor commission inside the NAV, so the same index can return less in your account.', hi: 'लागत फंड में आपके नियंत्रण वाली एकमात्र संख्या है। रेगुलर प्लान में डिस्ट्रीब्यूटर कमीशन NAV के अंदर रहता है, इसलिए वही इंडेक्स आपके खाते में कम दे सकता है।' } },
    { q: { en: 'Why is a consolidated account statement (CAS) worth reading?', hi: 'कंसोलिडेटेड अकाउंट स्टेटमेंट (CAS) पढ़ने क्यों ज़रूरी है?' }, d: 2, opts: [
      { en: 'It lists every holding and transaction across depositories and funds in one place', hi: 'यह सभी डीपॉज़िटरी और फंडों की हर होल्डिंग और ट्रांज़ैक्शन एक जगह दिखाता है' },
      { en: 'It shows tomorrow’s price movements', hi: 'यह कल के मूल्य-बदलाव बताता है' },
      { en: 'It replaces the need to file a tax return', hi: 'इससे ITR भरने की ज़रूरत खत्म हो जाती है' },
      { en: 'It is the broker’s tariff card', hi: 'यह ब्रोकर की टैरिफ़ कार्ड है' }],
      a: 0, why: { en: 'Monthly or half-yearly CAS is how people find forgotten accounts, wrong dividends and holdings they no longer recognise. It is free from both depositories.', hi: 'मासिक या अर्ध-वार्षिक CAS से भूले हुए खाते, गलत डिविडेंड और पहचान न रहते होल्डिंग मिलते हैं। यह दोनों डीपॉज़िटरी से मुफ़्त मिलता है।' } },
    { q: { en: 'Besides the tax rate, why does a long holding period help?', hi: 'टैक्स दर के अलावा लंबी होल्डिंग अवधि क्यों फ़ायदेमंद है?' }, d: 1, opts: [
      { en: 'Compounding gets time to work and short-term swings stop mattering', hi: 'कंपाउंडिंग को समय मिलता है और छोटी-मोटी हलचल मायने खो देती है' },
      { en: 'The company stops issuing new shares', hi: 'कंपनी नए शेयर जारी करना बंद कर देती है' },
      { en: 'Long holdings never fall in price', hi: 'लंबी होल्डिंग का मूल्य कभी नहीं गिरता' },
      { en: 'Brokers stop charging on old holdings', hi: 'ब्रोकर पुरानी होल्डिंग पर चार्ज लेना बंद कर देते हैं' }],
      a: 0, why: { en: 'A one-year window can be dominated by one bad print. A ten-year window is mostly the earnings of the businesses you own, which is what you were paid for.', hi: 'एक वर्ष का दायरा एक खराब दाम से भर सकता है। दस वर्ष का दायरा मुख्यतः आपकी कंपनियों की कमाई होता है, और वही असल कमाई है।' } },
  ],
  'q-trader': [
    { q: { en: 'Daily MTM settlement means an open losing position', hi: 'रोज़ का MTM सेटलमेंट होने पर खुली नुकसानदार पोज़िशन' }, d: 2, opts: [
      { en: 'Takes cash out of your account that evening, before you decide anything', hi: 'उसी शाम आपके खाते से कैश ले जाती है, आपके फ़ैसले से पहले' },
      { en: 'Only matters when you finally sell', hi: 'तभी मायने रखती है जब आप अंत में बेचें' },
      { en: 'Is frozen until expiry', hi: 'एक्सपायरी तक स्थिर रहती है' },
      { en: 'Is covered by the broker’s own money', hi: 'ब्रोकर के अपने पैसों से ढकी रहती है' }],
      a: 0, why: { en: 'F&O profits and losses are paid or collected daily. A position that is “still a loser on paper” can drain your bank and trigger a margin call while you wait.', hi: 'F&O का लाभ-नुकसान रोज़ चुकाया या वसूला जाता है। “कागज़ पर अभी नुकसान” वाली पोज़िशन आपका बैंक खाली कर और मार्जिन कॉल ला सकती है, जब आप इंतज़ार कर रहे होते हैं।' } },
    { q: { en: 'In risk management, one “R” is', hi: 'जोखिम प्रबंधन में एक “R” क्या है?' }, d: 2, opts: [
      { en: 'The money you planned to lose on that trade, from entry to stop', hi: 'एंट्री से स्टॉप तक, उस ट्रेड पर तय नुकसान' },
      { en: 'The total value of the position', hi: 'पोज़िशन का कुल मूल्य' },
      { en: 'The broker’s risk rating for the stock', hi: 'शेयर पर ब्रोकर का रिस्क रेटिंग' },
      { en: 'The daily loss cap set by SEBI', hi: 'SEBI द्वारा तय दैनिक नुकसान की सीमा' }],
      a: 0, why: { en: 'Writing results as “+2.4R, −1R” compares trades of different sizes on one scale, which is the only honest way to review a system.', hi: 'नतीजे “+2.4R, −1R” के रूप में लिखने पर अलग-अलग साइज़ की ट्रेडें एक ही पैमाने पर तुलना होती हैं, और यही किसी सिस्टम की सच्ची जाँच है।' } },
    { q: { en: 'Your direction was right but a stop sitting just under obvious support got hit. Why is that common?', hi: 'आपकी दिशा सही थी पर स्पष्ट सपोर्ट के ठीक नीचे रखा स्टॉप हिट हो गया। यह आम क्यों है?' }, d: 3, opts: [
      { en: 'Stops cluster in obvious places, so price often sweeps them before moving', hi: 'स्टॉप साफ़ जगहों पर इकट्ठे होते हैं, इसलिए मूल्य अक्सर उन्हें झाड़कर फिर चलता है' },
      { en: 'Support levels are illegal to trade near', hi: 'सपोर्ट के पास ट्रेड करना ग़ैर-कानूनी है' },
      { en: 'Brokers cancel stops near support', hi: 'ब्रोकर सपोर्ट के पास स्टॉप रद्द कर देते हैं' },
      { en: 'Stops only work in the first hour', hi: 'स्टॉप सिर्फ़ पहले घंटे में चलते हैं' }],
      a: 0, why: { en: 'That pocket of resting orders is liquidity someone wants. Either give the stop room that the instrument’s own swings require, or accept the smaller size that comes with it.', hi: 'यहाँ पड़े ऑर्डर किसी को चाहिए रहते हैं। या तो स्टॉप को उस इंस्ट्रूमेंट की अपनी हलचल जितनी जगह दें, या उसके साथ छोटी साइज़ स्वीकार करें।' } },
  ],
  'q-fintech': [
    { q: { en: 'A UPI payment fails with “peer transaction limit exceeded”. What limit is that?', hi: 'UPI पेमेंट “peer transaction limit exceeded” पर फेल होता है। कौन-सी सीमा है?' }, d: 2, opts: [
      { en: 'Your bank’s cap per transaction per day for that handle, inside the NPCI ceiling', hi: 'उस हैंडल पर आपके बैंक की प्रति-लेन प्रति-दिन सीमा, NPCI की छत के अंदर' },
      { en: 'SEBI’s limit on equity purchases', hi: 'SEBI की इक्विटी खरीद पर सीमा' },
      { en: 'The wallet’s monthly cashback cap', hi: 'वॉलेट की मासिक कैशबैक सीमा' },
      { en: 'A limit set by the merchant’s phone', hi: 'मर्चेंट के फ़ोन द्वारा तय सीमा' }],
      a: 0, why: { en: 'Banks set their own UPI caps within the regulator’s ceiling and they differ by handle type and amount band. Higher-value payments usually need a different instrument.', hi: 'बैंक रेगुलेटर की छत के अंदर अपनी UPI सीमा तय करते हैं, और वे हैंडल के प्रकार और रकम बैंड से बदलती हैं। बड़ी रकम के लिए आमतौर पर दूसरा माध्यम चाहिए।' } },
    { q: { en: 'An e-mandate registered with your bank is used to', hi: 'आपके बैंक से रजिस्टर ई-मैंडेट किसलिए होता है?' }, d: 1, opts: [
      { en: 'Allow recurring debits up to a capped amount, like a SIP or premium', hi: 'तय सीमा तक बार-बार डेबिट होने देना, जैसे SIP या प्रीमियम' },
      { en: 'Give the bank your password', hi: 'बैंक को आपका पासवर्ड देना' },
      { en: 'Increase your credit limit', hi: 'आपका क्रेडिट लिमिट बढ़ाना' },
      { en: 'Open a Demat account automatically', hi: 'अपने आप डीमैट खाता खोलना' }],
      a: 0, why: { en: 'The mandate is consent with a ceiling and a bank-side approval, which is why it is safer than sharing card details for recurring bills.', hi: 'मैंडेट एक सीमा वाला अनुमति-पत्र होता है और उसे बैंक की स्वीकृति मिलती है, इसीलिए दोहराए बिल के लिए कार्ड की जानकारी देने से यह सुरक्षित है।' } },
    { q: { en: 'Why is parking a large balance in a wallet riskier than in a bank deposit?', hi: 'वॉलेट में बड़ी रकम रखना बैंक डिपॉज़िट से ज़्यादा जोखिम भरा क्यों है?' }, d: 2, opts: [
      { en: 'A wallet is a licensed prepaid instrument with a balance cap, not an insured bank deposit', hi: 'वॉलेट लाइसेंस-धारित प्रीपेड साधन है जिस पर बैलेंस कैप है, बीमित बैंक डिपॉज़िट नहीं' },
      { en: 'Wallets cannot be used for bill payments', hi: 'वॉलेट से बिल नहीं भरे जा सकते' },
      { en: 'Wallets always charge a fee on every payment', hi: 'वॉलेट हर पेमेंट पर हमेशा फीस लेते हैं' },
      { en: 'Wallet balances are tax-free', hi: 'वॉलेट का बैलेंस टैक्स-मुक्त होता है' }],
      a: 0, why: { en: 'Prepaid payment instruments are regulated and the money is kept in a designated bank account, but the deposit-insurance cover that bank customers know does not apply the same way, and load limits are small.', hi: 'प्रीपेड पेमेंट साधन रेगुलेटेड हैं और पैसा तय बैंक खाते में रखा जाता है, पर बैंक ग्राहकों वाली डिपॉज़िट-इंश्योरेंस सुरक्षा उस तरह नहीं लगती, और लोड की सीमा छोटी होती है।' } },
  ],
  'q-global': [
    { q: { en: 'You hold a US-listed depositary receipt. Your rupee return depends on the share price and on', hi: 'आपके पास US-लिस्टेड डिपॉज़िटरी रसीद है। रुपये में रिटर्न शेयर दाम और किस पर निर्भर है?' }, d: 2, opts: [
      { en: 'The dollar-rupee exchange rate over the same period', hi: 'उसी अवधि में डॉलर-रुपया विनिमय दर' },
      { en: 'The Indian circuit limit on that counter', hi: 'उस शेयर पर भारत का सर्किट लिमिट' },
      { en: 'Only the broker’s currency fee', hi: 'केवल ब्रोकर का करेंसी फीस' },
      { en: 'Nothing else, receipts are rupee-priced', hi: 'और कुछ नहीं, रसीदें रुपये में होती हैं' }],
      a: 0, why: { en: 'Currency is a second position you take without choosing it. It can turn a flat year abroad into a gain or a loss at home.', hi: 'करेंसी एक दूसरी पोज़िशन है जो आप बिना चुने ले लेते हैं। विदेश में सपाट वर्ष यह घर पर लाभ या नुकसान बना सकती है।' } },
    { q: { en: 'When global risk appetite suddenly drops, money usually runs toward', hi: 'वैश्विक जोखिम-लालसा अचानक गिरे तो पैसा आमतौर पर किस ओर भागता है?' }, d: 1, opts: [
      { en: 'US government bonds and gold', hi: 'अमेरिकी सरकारी बॉन्ड और सोना' },
      { en: 'High-yield corporate bonds', hi: 'ज़्यादा यील्ड वाले कॉर्पोरेट बॉन्ड' },
      { en: 'Small emerging-market stocks', hi: 'छोटी उभरती-बाज़ार की स्टॉक्स' },
      { en: 'Crude oil', hi: 'क्रूड ऑयल' }],
      a: 0, why: { en: 'Indian markets are not insulated: foreign institutional flows, the rupee and the bond yield all react when that rush happens.', hi: 'भारतीय बाज़ार अलग नहीं हैं: वह दौड़ शुरू होने पर FII फ्लो, रुपया और बॉन्ड यील्ड तीनों हिलते हैं।' } },
    { q: { en: 'An Indian exporter earns in dollars and costs in rupees. If the rupee strengthens, its reported rupee profit', hi: 'एक भारतीय निर्यातक डॉलर में कमाता है और रुपये में खर्च। रुपया मज़बूत हो तो रुपये में बताया गया लाभ' }, d: 3, opts: [
      { en: 'Falls on translation alone, even if operations are unchanged', hi: 'सिर्फ़ ट्रांसलेशन से घटता है, भले काम वैसे ही चल रहा हो' },
      { en: 'Rises, because a strong rupee means more orders', hi: 'बढ़ता है, क्योंकि मज़बूत रुपये का मतलब ज़्यादा ऑर्डर' },
      { en: 'Is unaffected, profits are in dollars', hi: 'प्रभावित नहीं, लाभ डॉलर में हैं' },
      { en: 'Depends only on the dividend policy', hi: 'केवल डिविडेंड पॉलिसी पर निर्भर' }],
      a: 0, why: { en: 'Same business, fewer rupees per dollar. This is why an IT or pharma exporter’s results can miss on a flat operating year, and why some of them hedge.', hi: 'वही कारोबार, प्रति डॉलर कम रुपये। इसी से IT या फार्मा एक्सपोर्टेर के नतीजे सपाट वर्ष में भी रह जाते हैं, और इसीलिए कुछ कंपनी हेलज करती हैं।' } },
  ],
};
Object.keys(MM.qzExtra).forEach((id) => {
  MM.quizzes.find((q) => q.id === id).qs.push(...MM.qzExtra[id]);
});

/* difficulty tags for the twenty questions that shipped first */
MM.qzDiff = {
  'q-beginner': [1, 1, 1, 2, 1],
  'q-trader': [2, 2, 1, 1, 2],
  'q-fintech': [1, 1, 1, 2, 2],
  'q-global': [1, 2, 2, 2, 3],
};
Object.keys(MM.qzDiff).forEach((id) => {
  const qs = MM.quizzes.find((q) => q.id === id).qs;
  MM.qzDiff[id].forEach((d, i) => { if (!qs[i].d) qs[i].d = d; });
});

/* ---------------- six more self-check tracks ---------------- */
MM.quizzes.push(
  {
    id: 'q-options',
    path: 'p-trader',
    title: { en: 'Futures & options', hi: 'फ्यूचर्स और ऑप्शन' },
    qs: [
      { q: { en: 'Which side of an option trade carries open-ended loss?', hi: 'ऑप्शन ट्रेड में किस पक्ष का नुकसान असीमित हो सकता है?' }, d: 2, opts: [
        { en: 'The naked seller, who is paid a premium to take that risk', hi: 'नग्न सेलर, जिसे उस जोखिम के लिए प्रीमियम मिलता है' },
        { en: 'The buyer, who pays the premium', hi: 'खरीदार, जो प्रीमियम देता है' },
        { en: 'Neither, options are risk-free', hi: 'किसी का नहीं, ऑप्शन जोखिम-मुक्त हैं' },
        { en: 'Only the exchange', hi: 'केवल एक्सचेंज' }],
        a: 0, why: { en: 'That asymmetry is exactly why selling needs far more margin than buying, and why a sold option can turn into several losses in one day.', hi: 'यही असमानता कारण है कि बेचने पर खरीदने से बहुत ज़्यादा मार्जिन चाहिए, और बेचा गया ऑप्शन एक दिन में कई नुकसान बना सकता है।' } },
      { q: { en: 'Nifty is at 24,000. A 24,500 call is', hi: 'निफ्टी 24,000 पर है। 24,500 का कॉल है' }, d: 1, opts: [
        { en: 'Out of the money — it has only time value', hi: 'आउट ऑफ़ द मनी — इसमें सिर्फ़ टाइम वैल्यू है' },
        { en: 'In the money — it has only intrinsic value', hi: 'इन ऑफ़ द मनी — इसमें सिर्फ़ इंट्रिनसिक वैल्यू' },
        { en: 'At the money', hi: 'एट द मनी' },
        { en: 'A put', hi: 'पुट' }],
        a: 0, why: { en: 'Intrinsic value is what the strike already earns. Everything else in the premium is the market’s price for time and volatility, and it can go to zero.', hi: 'स्ट्राइक से जो पहले ही कमाया जाता है वही इंट्रिनसिक वैल्यू है। प्रीमियम का बाकी हिस्सा समय और वोलैटिलिटी का दाम है, और वह शून्य हो सकता है।' } },
      { q: { en: 'Time decay works against', hi: 'समय का स्राव किसके खिलाफ़ काम करता है?' }, d: 2, opts: [
        { en: 'The option buyer, and it is paid to the seller', hi: 'ऑप्शन खरीदार के खिलाफ़, और सेलर को मिलता है' },
        { en: 'The option seller only', hi: 'केवल ऑप्शन सेलर के खिलाफ़' },
        { en: 'Futures buyers, not options', hi: 'फ्यूचर्स खरीदारों के खिलाफ़, ऑप्शन के नहीं' },
        { en: 'Nobody, it is a myth', hi: 'किसी के नहीं, यह मिथक है' }],
        a: 0, why: { en: 'A bought option must move enough, and fast enough, to outrun the clock. That is why “right view, wrong expiry” still loses money.', hi: 'खरीदा ऑप्शन घड़ी से आगे निकलने के लिए पर्याप्त और तेज़ हिलना चाहिए। इसीलिए “सही विचार, ग़लत एक्सपायरी” में भी नुकसान होता है।' } },
      { q: { en: 'Index options in India at expiry are', hi: 'भारत में एक्सपायरी पर इंडेक्स ऑप्शन' }, d: 2, opts: [
        { en: 'Cash-settled at the final settlement price, no index units are delivered', hi: 'फ़ाइनल सेटलमेंट प्राइस पर कैश-सेटल, कोई इंडेक्स यूनिट नहीं दी जाती' },
        { en: 'Settled by delivering 25 Nifty shares', hi: '25 निफ्टी शेयर देकर सेटल' },
        { en: 'Rolled to the next month automatically', hi: 'अपने आप अगले महीने टाल दिए जाते हैं' },
        { en: 'Void unless you exercise in writing', hi: 'लिखित exercise न करें तो शून्य' }],
        a: 0, why: { en: 'The settlement price is published by the exchange from the underlying’s final values, so your profit or loss arrives as cash on the pay-in or pay-out day.', hi: 'एक्सचेंज अंडरलाइंग के आख़िरी मूल्य से सेटलमेंट प्राइस जारी करता है, इसलिए लाभ-नुकसान कैश के रूप में pay-in या pay-out दिन आ जाता है।' } },
      { q: { en: 'The index is unchanged but implied volatility jumps. Option prices usually', hi: 'इंडेक्स वही है पर implied volatility अचानक बढ़ी। ऑप्शन के दाम आमतौर पर' }, d: 3, opts: [
        { en: 'Rise, because the market now pays more for the chance of a big move', hi: 'बढ़ते हैं, क्योंकि बाज़ार अब बड़ी हलचल की संभावना पर ज़्यादा देता है' },
        { en: 'Fall, since volatility is noise', hi: 'गिरते हैं, क्योंकि वोलैटिलिटी शोर है' },
        { en: 'Stay identical, only the index matters', hi: 'वैसे ही रहते हैं, सिर्फ़ इंडेक्स देखना है' },
        { en: 'Go to zero at once', hi: 'तुरंत शून्य हो जाते हैं' }],
        a: 0, why: { en: 'A premium bought on high IV needs a bigger move to be worth it. This is why an event-day option can lose money for a buyer even when the direction was right.', hi: 'ज़्यादा IV पर खरीदा प्रीमियम सार्थक होने के लिए बड़ी हलचल माँगता है। इसीलिए इवेंट वाले दिन दिशा सही होने पर भी खरीदार का पैसा जा सकता है।' } },
      { q: { en: 'Lot size is', hi: 'लॉट साइज़ क्या है?' }, d: 1, opts: [
        { en: 'The fixed quantity of shares or index units one contract covers', hi: 'एक कॉन्ट्रैक्ट में शामिल तय मात्रा — शेयर या इंडेक्स यूनिट' },
        { en: 'The number of brokers on the exchange', hi: 'एक्सचेंज पर ब्रोकरों की संख्या' },
        { en: 'How many times you may trade in a day', hi: 'दिन में कितनी बार ट्रेड कर सकते हैं' },
        { en: 'The minimum age to trade F&O', hi: 'F&O करने की न्यूनतम उम्र' }],
        a: 0, why: { en: 'Lot sizes are revised by the exchange, so one contract’s exposure changes without you doing anything. Check the current lot before sizing, not the one from last year.', hi: 'एक्सचेंज लॉट साइज़ बदलता रहता है, इसलिए कुछ न करते हुए भी एक कॉन्ट्रैक्ट का एक्सपोज़र बदल जाता है। साइज़ से पहले मौजूदा लॉट देखें, पिछले साल का नहीं।' } },
      { q: { en: 'To “square off” a position you', hi: 'पोज़िशन “स्क्वेयर ऑफ़” करना मतलब' }, d: 1, opts: [
        { en: 'Close it with an opposite order in the same contract', hi: 'उसी कॉन्ट्रैक्ट में उल्टा ऑर्डर देकर उसे बंद करना' },
        { en: 'Move the stop-loss to the entry price', hi: 'स्टॉप-लॉस एंट्री दाम पर ले जाना' },
        { en: 'Add a second position in the same direction', hi: 'उसी दिशा में दूसरी पोज़िशन जोड़ना' },
        { en: 'Transfer it to another broker', hi: 'दूसरे ब्रोकर को ट्रांसफ़र करना' }],
        a: 0, why: { en: 'Selling what you bought, or buying back what you sold, ends the exposure. Leaving it open into expiry replaces your view with the settlement formula.', hi: 'खरीदा बेचना या बेचा खरीदना एक्सपोज़र खत्म करता है। एक्सपायरी तक खुला छोड़ने पर आपकी राय की जगह सेटलमेंट का फ़ॉर्मूला ले लेता है।' } },
      { q: { en: 'Selling a cash-secured put on a stock you would happily own is a way to', hi: 'जिस शेयर को रखना मंज़ूर हो उस पर कैश-सिक्योर पुट बेचना किसका तरीका है?' }, d: 3, opts: [
        { en: 'Collect premium now while setting a lower effective purchase price', hi: 'अभी प्रीमियम लेना और खरीद की प्रभावी कीमत नीचे तय करना' },
        { en: 'Avoid paying STT forever', hi: 'STT हमेशा से बचना' },
        { en: 'Get a guaranteed 15% a year', hi: 'गारंटीकृत 15% वार्षिक रिटर्न' },
        { en: 'Double the dividend', hi: 'डिविडेंड दुहराना' }],
        a: 0, why: { en: 'The premium does reduce your cost basis, but the obligation is real: if the stock falls hard you buy at the strike while the same stock in a plain portfolio would simply have lost value.', hi: 'प्रीमियम लागत घटाता है पर ज़िम्मेदारी असली है: शेयर तेज़ी से गिरे तो आप स्ट्राइक पर खरीदेंगे, जबकि सादे पोर्टफोलियो में उसी शेयर का मूल्य बस गिरा होता।' } },
    ],
  },
  {
    id: 'q-financials',
    path: 'p-invest',
    title: { en: 'Financial statements', hi: 'फाइनेंसियल स्टेटमेंट' },
    qs: [
      { q: { en: 'ROE measures', hi: 'ROE क्या मापता है?' }, d: 2, opts: [
        { en: 'Profit as a percentage of shareholders’ equity', hi: 'शेयरहोल्डर इक्विटी के प्रतिशत के रूप में मुनाफ़ा' },
        { en: 'Revenue growth per year', hi: 'प्रति वर्ष राजस्व ग्रोथ' },
        { en: 'Debt divided by assets', hi: 'एसेट पर देनदारी' },
        { en: 'The share price divided by earnings', hi: 'कमाई पर शेयर दाम' }],
        a: 0, why: { en: 'A high ROE can also come from high debt shrinking the equity. Compare it with the same company over years, not only with another company.', hi: 'ज़्यादा ROE इक्विटी को छोटा करने वाली देनदारी से भी बन सकता है। इसकी तुलना उसी कंपनी के पुराने वर्षों से करें, केवल दूसरी कंपनी से नहीं।' } },
      { q: { en: 'Which pattern deserves the most suspicion?', hi: 'किस पैटर्न पर सबसे ज़्यादा संदेह चाहिए?' }, d: 2, opts: [
        { en: 'Reported profit rising while operating cash flow stays negative', hi: 'बताया गया मुनाफ़ा बढ़ रहा हो पर ऑपरेटिंग कैश फ़्लो नेगेटिव रहे' },
        { en: 'Profit and cash flow growing together', hi: 'मुनाफ़ा और कैश फ़्लो साथ-साथ बढ़ रहे हों' },
        { en: 'A company paying down debt from profits', hi: 'कंपनी मुनाफ़े से देनदारी चुका रही हो' },
        { en: 'Margins flat while revenue grows', hi: 'राजस्व बढ़ रहा हो पर मार्जिन स्थिर हों' }],
        a: 0, why: { en: 'Profit is an opinion built on accruals; cash is a fact. Persistent gaps usually show up later as receivables, capitalised costs or a sudden write-off.', hi: 'मुनाफ़ा accrual पर बना मत है; कैश तथ्य है। लगातार अंतर आगे चलकर receivables, पूंजीगत खर्च या अचानक राइट-ऑफ़ बनकर दिखता है।' } },
      { q: { en: 'EBITDA leaves out', hi: 'EBITDA में क्या नहीं होता?' }, d: 1, opts: [
        { en: 'Interest, tax, depreciation and amortisation', hi: 'ब्याज, टैक्स, अवमूल्यन और क्षय' },
        { en: 'Salaries and rent', hi: 'वेतन और किराया' },
        { en: 'Revenue from exports', hi: 'निर्यात का राजस्व' },
        { en: 'The cost of goods sold', hi: 'माल की लागत' }],
        a: 0, why: { en: 'It flatters capital-heavy businesses by removing the depreciation that a plant really needs, so treat it as a proxy for operating cash, not as profit.', hi: 'यह प्लांट की असल ज़रूरत का अवमूल्यन हटाकर भारी-पूंजी वाली कंपनियों को सुंदर दिखाता है, इसे ऑपरेटिंग कैश का अनुमान मानें, मुनाफ़ा नहीं।' } },
      { q: { en: 'Interest cover tells you', hi: 'इंटरेस्ट कवर बताता है' }, d: 3, opts: [
        { en: 'How many times operating profit covers the interest bill', hi: 'ऑपरेटिंग मुनाफ़ा ब्याज के बिल को कितनी बार भरता है' },
        { en: 'How many shares are held by foreigners', hi: 'विदेशियों पास कितने शेयर हैं' },
        { en: 'The dividend as a share of price', hi: 'दाम का कितना % डिविडेंड है' },
        { en: 'The loan’s tenure in years', hi: 'लोन की अवधि वर्षों में' }],
        a: 0, why: { en: 'Cover near 1 means one bad quarter turns into a default problem. Rising debt with falling cover is the combination that hurts most.', hi: 'कवर 1 के पास हो तो एक खराब तिमाही डिफ़ॉल्ट की समस्या बन जाती है। बढ़ती देनदारी और घटता कवर सबसे ज़्यादा नुकसानदेह जोड़ी है।' } },
      { q: { en: 'Where do you read a listed Indian company’s quarterly numbers first, free?', hi: 'सूचीबद्ध भारतीय कंपनी की तिमाही आँकड़े सबसे पहले, मुफ़्त, कहाँ पढ़ें?' }, d: 1, opts: [
        { en: 'The results filing and press release on the NSE or BSE company page', hi: 'NSE या BSE के कंपनी पेज पर दाखिल किए गए नतीजे और प्रेस रिलीज़' },
        { en: 'A WhatsApp forward with a summary', hi: 'सारांश वाला WhatsApp फॉरवर्ड' },
        { en: 'The broker’s target-price SMS', hi: 'ब्रोकर का टारगेट-प्राइस SMS' },
        { en: 'A paid newsletter, nothing free exists', hi: 'पेड न्यूज़लेटर, मुफ़्त कुछ नहीं है' }],
        a: 0, why: { en: 'Both exchanges carry the statutory filing, the earnings release and the conference-call transcript, and the company’s own investor page carries the same documents.', hi: 'दोनों एक्सचेंज पर वैधानिक फाइलिंग, कमाई की रिलीज़ और कॉन्फ़्रेंस कॉल ट्रांसक्रिप्ट मिलती हैं, और कंपनी के अपने इन्वेस्टर पेज पर भी वही दस्तावेज़ होते हैं।' } },
      { q: { en: 'A stock with ₹10 face value trades at ₹900 and pays a ₹10 dividend. The yield is about', hi: '₹10 फ़ेस वैल्यू वाला शेयर ₹900 पर है और ₹10 डिविडेंड देता है। यील्ड लगभग' }, d: 3, opts: [
        { en: '1.1%, because yield is dividend over the market price', hi: '1.1%, क्योंकि यील्ड डिविडेंड ÷ बाज़ार मूल्य है' },
        { en: '100%, because the dividend equals the face value', hi: '100%, क्योंकि डिविडेंड फ़ेस वैल्यू के बराबर है' },
        { en: '5%, because half is reinvested', hi: '5%, क्योंकि आधा फिर से लगता है' },
        { en: 'It cannot be worked out', hi: 'निकाला नहीं जा सकता' }],
        a: 0, why: { en: 'Indian companies often announce dividend per share on the face value, which sounds generous until you divide it by what you actually paid for the share.', hi: 'भारतीय कंपनियाँ अक्सर प्रति शेयर डिविडेंड फ़ेस वैल्यू पर बताती हैं, जो तब तक बड़ा लगता है जब तक आप असल में दिए गए दाम पर भाग नहीं देते।' } },
      { q: { en: 'Book value per share is', hi: 'बुक वैल्यू प्रति शेयर क्या है?' }, d: 2, opts: [
        { en: 'Shareholders’ funds divided by the number of shares', hi: 'शेयरहोल्डर फंड ÷ शेयरों की संख्या' },
        { en: 'The price at which the IPO was issued', hi: 'IPO जिस दाम पर आया था' },
        { en: 'The market price minus the face value', hi: 'बाज़ार मूल्य माइनस फ़ेस वैल्यू' },
        { en: 'Last year’s profit per share', hi: 'पिछले वर्ष प्रति शेयर मुनाफ़ा' }],
        a: 0, why: { en: 'Price to book is only meaningful inside an industry. A lender, a software firm and a factory hold very different assets behind one rupee of equity.', hi: 'बुक पर दाम का अनुपात केवल एक ही उद्योग के अंदर अर्थ रखता है। बैंक, सॉफ़्टवेयर और फैक्ट्री — इक्विटी के एक रुपये के पीछे इनके एसेट बिलकुल अलग होते हैं।' } },
      { q: { en: 'EPS falls this year while revenue grew. Share count rose sharply. The likely cause is', hi: 'इस वर्ष राजस्व बढ़ा पर EPS गिरा, और शेयर संख्या तेज़ी से बढ़ी। कारण संभवतः' }, d: 2, opts: [
        { en: 'Dilution from ESOPs, a QIP or a conversion, which spreads profit over more shares', hi: 'ESOP, QIP या कन्वर्ज़न से डायल्यूशन, जो मुनाफ़े को ज़्यादा शेयरों पर बाँट देता है' },
        { en: 'A dividend that was too large', hi: 'बहुत बड़ा डिविडेंड' },
        { en: 'The stock split being announced late', hi: 'स्टॉक स्प्लिट की देर से घोषणा' },
        { en: 'Higher interest rates on the company’s own deposits', hi: 'कंपनी की अपनी डिपॉज़िट पर ज़्यादा ब्याज' }],
        a: 0, why: { en: 'Growth per share is what reaches a shareholder, so always read profit alongside the share count in the same filing.', hi: 'प्रति शेयर ग्रोथ ही शेयरहोल्डर तक पहुँचती है, इसलिए मुनाफ़े के साथ उसी फाइलिंग में शेयर संख्या भी पढ़ें।' } },
    ],
  },
  {
    id: 'q-macro',
    path: 'p-global',
    title: { en: 'Macro, rates & inflation', hi: 'मैक्रो, दरें और मुद्रास्फीति' },
    qs: [
      { q: { en: 'CPI measures', hi: 'CPI क्या मापता है?' }, d: 1, opts: [
        { en: 'The price change of a fixed basket of consumer goods and services', hi: 'उपभोक्ता वस्तुओं और सेवाओं की तय टोकरी के दाम में बदलाव' },
        { en: 'The total value of everything a country exports', hi: 'देश के कुल निर्यात का मूल्य' },
        { en: 'The stock market’s daily move', hi: 'शेयर बाज़ार की रोज़ की हलचल' },
        { en: 'Bank loan growth per month', hi: 'मासिक बैंक लोन ग्रोथ' }],
        a: 0, why: { en: 'Different baskets and base years give different numbers, so quote which CPI you mean when you compare an inflation claim with a return.', hi: 'अलग टोकरी और आधार वर्ष से अलग संख्याएँ बनती हैं, इसलिए किसी दावे को रिटर्न से जोड़ते समय कौन-सा CPI ली है वह बताएं।' } },
      { q: { en: 'Bond prices and yields move', hi: 'बॉन्ड के दाम और यील्ड' }, d: 2, opts: [
        { en: 'In opposite directions', hi: 'विपरीत दिशा में चलते हैं' },
        { en: 'Together, always', hi: 'हमेशा साथ-साथ' },
        { en: 'Only on the RBI’s policy day', hi: 'केवल RBI की पॉलिसी वाले दिन' },
        { en: 'Independently of each other', hi: 'एक-दूसरे से स्वतंत्र' }],
        a: 0, why: { en: 'A fixed coupon divided by a higher price is a lower yield. That is why a bond fund can fall even though it never defaults.', hi: 'तय कूपन को बड़े दाम पर भाग देने पर यील्ड छोटी होती है। इसीलिए डिफ़ॉल्ट न होते हुए भी बॉन्ड फंड गिर सकता है।' } },
      { q: { en: 'When the RBI raises the repo rate, the usual chain is', hi: 'RBI रेपो दर बढ़ाए तो आम श्रृंखला' }, d: 2, opts: [
        { en: 'Bank lending costs rise, borrowing and spending cool, and rich valuations compress', hi: 'बैंक लोन महँगे होते हैं, उधार और खर्च धीमे होते हैं, और महँगे valuation सिमटते हैं' },
        { en: 'Everything falls immediately and never recovers', hi: 'सब कुछ तुरंत गिरता है और कभी वापस नहीं आता' },
        { en: 'Only government salaries are affected', hi: 'केवल सरकारी वेतन प्रभावित होते हैं' },
        { en: 'Nothing, the repo rate is not linked to loans', hi: 'कुछ नहीं, रेपो दर लोन से जुड़ी नहीं है' }],
        a: 0, why: { en: 'Rate-sensitive sectors — lenders, realty, autos — and long-duration growth stocks feel that first. Floating-rate borrowers feel it in the EMI within a quarter or two.', hi: 'दर-संवेदी सेक्टर — लैंडर, रियल्टी, ऑटो — और लंबी-अवधि की ग्रोथ स्टॉक्स पहले महसूस करते हैं। फ्लोटिंग दर वाले उधारकर्ता को एक-दो तिमाही में EMI पर असर दिखता है।' } },
      { q: { en: 'The 10-year government bond yield matters to equity investors because', hi: '10-साल का सरकारी बॉन्ड यील्ड इक्विटी निवेशकों को क्यों चाहिए?' }, d: 3, opts: [
        { en: 'It is the rupee risk-free rate every valuation model discounts against', hi: 'यह रुपये का जोखिम-मुक्त दर है, जिससे हर valuation मॉडल discount करता है' },
        { en: 'It sets the dividend a company must pay', hi: 'यह तय करता है कि कंपनी कितना डिविडेंड दे' },
        { en: 'It is the same as the FD rate at every bank', hi: 'यह हर बैंक की FD दर के बराबर है' },
        { en: 'It only matters to banks', hi: 'यह केवल बैंकों के लिए है' }],
        a: 0, why: { en: 'Raise the discount rate and the present value of cash flows years away falls the most — which is precisely why high-multiple growth names move with bond yields.', hi: 'discount दर बढ़ाने पर कई वर्ष दूर की कैश फ़्लो का वर्तमान मूल्य सबसे ज़्यादा घटता है — इसीलिए ज़्यादा multiple वाली ग्रोथ कंपनियाँ बॉन्ड यील्ड के साथ हिलती हैं।' } },
      { q: { en: 'A current account deficit means India', hi: 'करंट अकाउंट डेफ़िस का मतलब है कि भारत' }, d: 2, opts: [
        { en: 'Buys more goods, services and transfers from the world than it earns', hi: 'दुनिया से कमाई से ज़्यादा माल, सेवाएँ और ट्रांसफ़र खरीदता है' },
        { en: 'Has no foreign currency at all', hi: 'के पास बिल्कुल विदेशी मुद्रा नहीं है' },
        { en: 'Is defaulting on its loans', hi: 'अपने लोन चुकाने में चूक रहा है' },
        { en: 'Exports more than it imports', hi: 'आयात से ज़्यादा निर्यात करता है' }],
        a: 0, why: { en: 'The gap is financed by foreign investment and remittances. When those thin out, the rupee takes the adjustment, which is why it is watched closely.', hi: 'यह अंतर विदेशी निवेश और प्रेषण से भरा जाता है। वे पतले हों तो समायोजन रुपये पर पड़ता है, इसीलिए इसे ध्यान से देखा जाता है।' } },
      { q: { en: 'The rupee weakens sharply against the dollar. Which business usually suffers most?', hi: 'रुपया डॉलर के मुक़ाबले तेज़ी से कमज़ोर होता है। किस कारोबार को आम तौर पर सबसे ज़्यादा चोट लगती है?' }, d: 3, opts: [
        { en: 'An airline or oil importer with dollar costs and rupee revenue', hi: 'एयरलाइन या ऑयल इम्पोर्टेर, जिसकी लागत डॉलर में और आय रुपये में हो' },
        { en: 'An IT services exporter billing in dollars', hi: 'डॉलर में बिलिंग करने वाला IT एक्सपोर्टेर' },
        { en: 'A domestic food processor selling only in India', hi: 'केवल भारत में बेचने वाला घरेलू फ़ूड प्रोसेसर' },
        { en: 'A gold ETF held by Indian investors', hi: 'भारतीय निवेशकों के पास सोने का ETF' }],
        a: 0, why: { en: 'Costs repriced in dearer dollars hit the margin line almost at once, while the fare or fuel price the business can charge lags behind.', hi: 'महँगे डॉलर में लागत तुरंत मार्जिन पर दिखती है, जबकि कंपनी वसूल सकने वाला किराया या ईंधन दाम पीछे चलता है।' } },
      { q: { en: 'Stagflation is', hi: 'स्टैगफ़्लेशन क्या है?' }, d: 2, opts: [
        { en: 'Weak growth together with high inflation', hi: 'कमज़ोर ग्रोथ और ज़्यादा मुद्रास्फीति, दोनों साथ' },
        { en: 'Fast growth with falling prices', hi: 'तेज़ ग्रोथ और गिरते दाम' },
        { en: 'A stock market bubble', hi: 'शेयर बाज़ार का बुलबुला' },
        { en: 'A type of mutual fund', hi: 'म्यूचुअल फंड का एक प्रकार' }],
        a: 0, why: { en: 'It is the awkward case because the usual fix for inflation (higher rates) makes weak growth worse, so both ends of the portfolio can fall together.', hi: 'यह नाज़ुक स्थिति है क्योंकि महँगाई का आम इलाज (दर बढ़ाना) कमज़ोर ग्रोथ को और बिगाड़ता है, इसलिए पोर्टफोलियो के दोनों छोर साथ गिर सकते हैं।' } },
      { q: { en: 'GDP grows 6% but the index’s aggregate profit pool grows 15%. The most plausible reading is', hi: 'GDP 6% बढ़ता है पर इंडेक्स की कुल कमाई 15%। सबसे युक्तिसंगत व्याख्या' }, d: 3, opts: [
        { en: 'Listed companies are a concentrated slice of the economy that is gaining share or margins', hi: 'सूचीबद्ध कंपनियाँ अर्थव्यवस्था का केंद्रित हिस्सा हैं, जो शेयर या मार्जिन बढ़ा रहा है' },
        { en: 'The GDP number must be wrong', hi: 'GDP की संख्या ग़लत होनी चाहिए' },
        { en: 'Profits and GDP are unrelated by definition', hi: 'परिभाषा से मुनाफ़ा और GDP असंबंधित हैं' },
        { en: 'Inflation has been removed from the profit figure', hi: 'मुनाफ़े की संख्या से महँगाई हटा दी गई है' }],
        a: 0, why: { en: 'Index returns are not GDP returns. The gap can persist for years, but a market priced as if it were the whole economy is the risk in it.', hi: 'इंडेक्स का रिटर्न GDP का रिटर्न नहीं होता। अंतर वर्षों चल सकता है, पर पूरी अर्थव्यवस्था जैसा दाम लगना उसी में जोखिम है।' } },
    ],
  },
  {
    id: 'q-rights',
    path: 'p-beginner',
    title: { en: 'SEBI, rights & redressal', hi: 'SEBI, अधिकार और शिकायत' },
    qs: [
      { q: { en: 'The securities market in India is regulated by', hi: 'भारत में शेयर बाज़ार का रेगुलेटर कौन है?' }, d: 1, opts: [
        { en: 'SEBI, under the SEBI Act', hi: 'SEBI, SEBI अधिनियम के तहत' },
        { en: 'The RBI', hi: 'RBI' },
        { en: 'Each stock exchange on its own', hi: 'हर एक्सचेंज अपने आप' },
        { en: 'The Ministry of Finance alone', hi: 'केवल वित्त मंत्रालय' }],
        a: 0, why: { en: 'The RBI regulates banks and payment systems; SEBI regulates issuers, intermediaries and the market conduct that connects them to you.', hi: 'RBI बैंक और भुगतान प्रणाली को नियंत्रित करता है; SEBI कंपनी, मध्यस्थ और बाज़ार के व्यवहार को नियंत्रित करता है जो आपको उनसे जोड़ते हैं।' } },
      { q: { en: 'Your broker ignores a written grievance. The next documented step is', hi: 'ब्रोकर लिखित शिकायत नज़रअंदाज़ करे। अगला दस्तावेज़ी कदम है' }, d: 2, opts: [
        { en: 'File the complaint with its reference number on SEBI’s SCORES portal', hi: 'रेफ़रेंस नंबर के साथ SEBI के SCORES पोर्टल पर शिकायत दर्ज करना' },
        { en: 'Post on social media and wait', hi: 'सोशल मीडिया पर पोस्ट करके इंतज़ार करना' },
        { en: 'Stop paying the brokerage bill', hi: 'ब्रोकरेज का बिल देना बंद कर देना' },
        { en: 'Open a second account with the same broker', hi: 'उसी ब्रोकर से दूसरा खाता खोलना' }],
        a: 0, why: { en: 'SCORES puts the complaint in the regulator’s tracked system with a deadline for the broker to respond. Keep every email, order slip and contract note.', hi: 'SCORES शिकायत को रेगुलेटर के ट्रैक किए सिस्टम में डालता है और ब्रोकर को जवाब की समयसीमा मिलती है। हर ईमेल, ऑर्डर स्लिप और कॉन्ट्रैक्ट नोट रखें।' } },
      { q: { en: 'Nomination on a Demat account matters because', hi: 'डीमैट खाते में नॉमिनेशन क्यों ज़रूरी है?' }, d: 1, opts: [
        { en: 'It lets the securities move to the nominee without a lengthy court process', hi: 'इससे सिक्योरिटी लंबी कानूनी कार्रवाई के बिना नॉमिनी को मिल जाती हैं' },
        { en: 'It removes the tax on your gains', hi: 'इससे आपके लाभ का टैक्स खत्म हो जाता है' },
        { en: 'It doubles the dividend', hi: 'इससे डिविडेंड दुहरा हो जाता है' },
        { en: 'It lets the broker trade on your behalf', hi: 'इससे ब्रोकर आपकी ओर से ट्रेड कर सकता है' }],
        a: 0, why: { en: 'Without nomination, the family needs a succession document or a court order for each holding. It is a free form and it takes minutes.', hi: 'नॉमिनेशन न हो तो परिवार को हर होल्डिंग के लिए उत्तराधिकार दस्तावेज़ या कोर्ट का आदेश चाहिए। यह फ़्री फॉर्म है और मिनटों में भर जाता है।' } },
      { q: { en: 'In an IPO, ASBA keeps your money', hi: 'IPO में ASBA आपका पैसा कैसे रखता है?' }, d: 2, opts: [
        { en: 'In your own bank account, blocked until allotment or refund', hi: 'आपके अपने बैंक खाते में, allotment या रिफ़ंड तक ब्लॉक' },
        { en: 'With the broker as a loan', hi: 'ब्रोकर के पास लोन की तरह' },
        { en: 'In the company’s savings account', hi: 'कंपनी की सेविंग खाते में' },
        { en: 'Outside India until listing', hi: 'लिस्टिंग तक भारत के बाहर' }],
        a: 0, why: { en: 'Nothing leaves your account unless you are allotted, so an unsuccessful application costs you no float. That is why ASBA replaced the old cheque route.', hi: 'allotment न हो तो खाते से कुछ नहीं जाता, इसलिए निरर्थक आवेदन पर कोई रकम नहीं फंसती। इसीलिए ASBA ने पुराने चेक वाले रास्ते की जगह ली।' } },
      { q: { en: 'A bonus issue of one share for every one held leaves you with', hi: 'एक के बदल एक बोनस इशू में आपको मिलता है' }, d: 2, opts: [
        { en: 'Twice the shares at about half the price, roughly the same value', hi: 'आधे दाम पर दोगुने शेयर, कुल मूल्य लगभग वही' },
        { en: 'Twice the shares and twice the value', hi: 'दोगुने शेयर और दोगुना मूल्य' },
        { en: 'A cash credit equal to the dividend', hi: 'डिविडेंड के बराबर कैश जमा' },
        { en: 'Nothing until the next AGM', hi: 'अगली AGM तक कुछ नहीं' }],
        a: 0, why: { en: 'Bonus converts reserves into share capital. It changes the number on your statement, not your wealth — which is why a bonus is not a return.', hi: 'बोनस रिज़र्व को शेयर कैपिटल में बदलता है। यह आपके स्टेटमेंट की संख्या बदलता है, संपत्ति नहीं — इसीलिए बोनस रिटर्न नहीं है।' } },
      { q: { en: 'Before paying someone who claims to be a SEBI-registered advisor you should', hi: 'SEBI-रजिस्टर्ड सलाहकार दावेदार को पैसा देने से पहले आपको चाहिए' }, d: 3, opts: [
        { en: 'Verify the registration number and the exact category and its limits on SEBI’s list', hi: 'SEBI की सूची पर रजिस्ट्रेशन नंबर, ठीक श्रेणी और उसकी सीमाएँ जाँचना' },
        { en: 'Check if their Instagram has many followers', hi: 'देखना कि Instagram पर फ़ॉलोअर्स ज़्यादा हैं या नहीं' },
        { en: 'Ask for one past tip that worked', hi: 'पिछला एक सही टिप पूछना' },
        { en: 'Pay a small test amount first', hi: 'पहले छोटी रकम टेस्ट के लिए देना' }],
        a: 0, why: { en: 'Registration is category-specific and capped — an investment advisor is not a research analyst, and neither may run pooled schemes or guarantee returns.', hi: 'रजिस्ट्रेशन श्रेणी-विशिष्ट और सीमाबद्ध होता है — इन्वेस्टमेंट एडवाइज़र, रिसर्च एनालिस्ट नहीं होता, और दोनों मिलकर स्कीम नहीं चला सकते या रिटर्न गारंटी नहीं दे सकते।' } },
      { q: { en: 'The legal document that sets out a fund’s risk, costs, benchmark and eligibility is', hi: 'कानूनी दस्तावेज़ जो फंड का जोखिम, लागत, बेंचमार्क और पात्रता तय करता है' }, d: 2, opts: [
        { en: 'The Scheme Information Document, with the Key Statement of Features', hi: 'स्कीम इन्फ़ॉर्मेशन डॉक्युमेंट, Key Statement of Features के साथ' },
        { en: 'The monthly factsheet', hi: 'मासिक फैक्टशीट' },
        { en: 'The broker’s app banner', hi: 'ब्रोकर के ऐप का बैनर' },
        { en: 'The fund manager’s interview', hi: 'फंड मैनेजर का इंटरव्यू' }],
        a: 0, why: { en: 'The SID is what the AMC is bound by; a factsheet is marketing built on top of it. Read the riskometer and the expense structure before the return table.', hi: 'SID पर AMC बंधी होती है; फैक्टशीट उसके ऊपर बना विपणन दस्तावेज़ है। रिटर्न टेबल से पहले riskometer और लागत ढाँचा पढ़ें।' } },
      { q: { en: 'Shares in your Demat account may be used by someone else only when', hi: 'आपके डीमैट खाते के शेयर दूसरा व्यक्ति तभी इस्तेमाल कर सकता है जब' }, d: 2, opts: [
        { en: 'You have opted into the securities-lending programme and the rules’ compensation applies', hi: 'आपने सेक्योरिटीज़ लेंडिंग प्रोग्राम चुना हो और नियमों का मुआवज़ा लागू हो' },
        { en: 'The broker needs it to settle your own trade', hi: 'ब्रोकर को अपना ट्रेड सेटल करने के लिए चाहिए हो' },
        { en: 'You have been inactive for a month', hi: 'आप एक महीने निष्क्रिय रहे हों' },
        { en: 'A tipster asks for a margin pledge', hi: 'किसी टिप्सटर ने मार्जिन प्लेज माँगा हो' }],
        a: 0, why: { en: 'Pledging against your holdings is a real route to losing them. Read any pledge form, and check the depository’s lien register if you did not expect one.', hi: 'आपकी होल्डिंग पर प्लेज उन्हें खोने का असली रास्ता है। कोई भी प्लेज फॉर्म ध्यान से पढ़ें, और अप्रत्याशित लियन दिखे तो डीपॉज़िटरी के रिकॉर्ड में देखें।' } },
    ],
  },
  {
    id: 'q-behaviour',
    path: 'p-trader',
    title: { en: 'Behaviour & traps', hi: 'व्यवहार और जाल' },
    qs: [
      { q: { en: 'Loss aversion means', hi: 'लॉस एवर्शन का मतलब है' }, d: 1, opts: [
        { en: 'A loss feels worse than the same gain feels good, so people hold losers too long', hi: 'नुकसान उसी लाभ से ज़्यादा बुरा लगता है, इसलिए लोग घाटे वाले शेयर ज़्यादा देर पकड़े रखते हैं' },
        { en: 'People refuse every investment that carries risk', hi: 'लोग हर जोखिम वाले निवेश से इनकार कर देते हैं' },
        { en: 'Losses are always smaller than expected', hi: 'नुकसान हमेशा अपेक्षा से छोटे होते हैं' },
        { en: 'Brokers hide losing trades', hi: 'ब्रोकर हार वाले ट्रेड छिपाते हैं' }],
        a: 0, why: { en: 'The practical fix is mechanical: a stop decided before entry, and a written reason for holding that you can check without looking at the price.', hi: 'इलाज यांत्रिक है: एंट्री से पहले तय स्टॉप, और रखने का लिखित कारण जिसे दाम देखे बिना जाँचा जा सके।' } },
      { q: { en: 'Averaging down becomes dangerous when', hi: 'औसत नीचे करना कब खतरनाक हो जाता है?' }, d: 2, opts: [
        { en: 'The reason you bought has changed, not only the price', hi: 'खरीदने का कारण बदल गया हो, सिर्फ़ दाम नहीं' },
        { en: 'The stock is at a 52-week low', hi: 'शेयर 52-सप्ताह के निचले स्तर पर हो' },
        { en: 'Your broker offers margin', hi: 'ब्रोकर मार्जिन दे रहा हो' },
        { en: 'The dividend was cancelled', hi: 'डिविडेंड रद्द हो गया हो' }],
        a: 0, why: { en: 'Averaging a broken thesis converts one loss into a concentrated one. The same action on a business you still understand can be a good plan — the difference is the reason, not the price.', hi: 'टूटी थीसिस पर औसत लेना एक नुकसान को केंद्रित नुकसान बना देता है। समझी हुई कंपनी पर वही काम अच्छी योजना हो सकती है — फ़र्क कारण का है, दाम का नहीं।' } },
      { q: { en: 'The disposition effect is', hi: 'डिस्पोज़िशन इफ़ेक्ट क्या है?' }, d: 2, opts: [
        { en: 'Selling the winners early and holding the losers', hi: 'जीत वाले पहले बेचना और हार वाले पकड़े रखना' },
        { en: 'Buying only in small quantities', hi: 'केवल छोटी मात्रा में खरीदना' },
        { en: 'Keeping cash in a savings account', hi: 'पैसा सेविंग खाते में रखना' },
        { en: 'Reinvesting every dividend', hi: 'हर डिविडेंड फिर से लगाना' }],
        a: 0, why: { en: 'It cuts the winners’ compounding and keeps the losers’ drag. Reviewing the whole book on one scale, in R multiples, is the standard defence.', hi: 'यह जीत वाले की कंपाउंडिंग काट देता है और हार वाले का बोझ रखता है। पूरी बुक को एक ही पैमाने पर, R में देखना मानक बचाव है।' } },
      { q: { en: 'A “sure-shot” tip in a group chat is dangerous mainly because', hi: 'ग्रुप चैट का “पक्का” टिप खतरनाक है मुख्यतः क्योंकि' }, d: 1, opts: [
        { en: 'You cannot see the tipster’s cost, size or intent, so it can be an exit for them', hi: 'आपको टिप देने वाले की लागत, साइज़ या मक़सद नहीं दिखता, इसलिए वह उनके लिए निकासी हो सकती है' },
        { en: 'Tips are always about small companies', hi: 'टिप हमेशा छोटी कंपनियों के बारे में होते हैं' },
        { en: 'The price is too low to profit', hi: 'दाम इतना कम है कि लाभ नहीं होगा' },
        { en: 'It has already been taxed', hi: 'उस पर पहले से टैक्स लग चुका है' }],
        a: 0, why: { en: 'SEBI has repeatedly acted on pump-and-dump through groups. Whoever is most eager to tell you to buy is usually the party with something to sell.', hi: 'SEBI ने ग्रुप के ज़रिए pump-and-dump पर कई बार कार्रवाई की है। खरीदने की सबसे ज़्यादा जल्दी वही करता है जिसके पास बेचने को कुछ है।' } },
      { q: { en: 'Overtrading mostly increases', hi: 'ज़्यादा ट्रेडिंग करने से मुख्यतः क्या बढ़ता है?' }, d: 1, opts: [
        { en: 'Costs, taxes and mistakes', hi: 'लागत, टैक्स और ग़लतियाँ' },
        { en: 'The chance of a good trade', hi: 'अच्छी ट्रेड की संभावना' },
        { en: 'Your capital', hi: 'आपका कैपिटल' },
        { en: 'Nothing, trading is free', hi: 'कुछ नहीं, ट्रेडिंग मुफ़्त है' }],
        a: 0, why: { en: 'Run the round-trip cost calculator on your real turnover. A day of small trades often costs more than one good trade earns.', hi: 'अपने असली टर्नओवर पर राउंड-ट्रिप लागत कैलकुलेटर चलाएँ। छोटी ट्रेडों का एक दिन अक्सर एक अच्छी ट्रेड की कमाई से ज़्यादा खर्च करता है।' } },
      { q: { en: 'Checking your portfolio every hour tends to', hi: 'हर घंटा पोर्टफोलियो देखने से आम तौर पर' }, d: 3, opts: [
        { en: 'Make every swing feel larger and push you into timing mistakes', hi: 'हर हलचल बड़ी लगती है और टाइमिंग की ग़लतियाँ बुलाती हैं' },
        { en: 'Improve long-run returns', hi: 'लंबे अवधि का रिटर्न सुधरता है' },
        { en: 'Reduce the tax bill', hi: 'टैक्स बिल घटता है' },
        { en: 'Have no effect at all', hi: 'कोई असर नहीं होता' }],
        a: 0, why: { en: 'Myopic loss aversion is the documented effect: the shorter the window you look at, the more of the time a long-term holding appears to be losing.', hi: 'Myopic loss aversion प्रमाणित असर है: जितना छोटा दायरा देखें, उतनी ज़्यादा देर तक लंबी-अवधि की होल्डिंग हारती हुई दिखती है।' } },
      { q: { en: 'Anchoring to your buy price causes', hi: 'अपने खरीद दाम से चिपके रहने से' }, d: 2, opts: [
        { en: 'Refusing to sell below it even when the reason for owning it is gone', hi: 'उससे नीचे बेचने से इनकार, भले रखने का कारण खत्म हो चुका हो' },
        { en: 'Lower brokerage', hi: 'कम ब्रोकरेज' },
        { en: 'Automatic averaging', hi: 'अपने आप औसत बनना' },
        { en: 'A higher dividend yield', hi: 'ज़्यादा डिविडेंड यील्ड' }],
        a: 0, why: { en: 'The market never saw your entry. Ask what you would do if the money were cash today — that question dissolves the anchor.', hi: 'बाज़ार को आपकी एंट्री कभी पता नहीं थी। पूछें कि आज यह पैसा कैश होता तो क्या करते — यही सवाल ऐंकर घोल देता है।' } },
      { q: { en: 'The standard defence against a run of bad trades is', hi: 'लगातार खराब ट्रेडों से बचाव का मानक तरीका' }, d: 2, opts: [
        { en: 'A fixed risk per trade, decided before entry, with the stop sized to it', hi: 'एंट्री से पहले तय, प्रति ट्रेड स्थिर जोखिम, और उसी के हिसाब से स्टॉप' },
        { en: 'Doubling the size after each loss', hi: 'हर नुकसान के बाद साइज़ दुहराना' },
        { en: 'Switching to a broker with lower charges', hi: 'कम चार्ज वाले ब्रोकर पर जाना' },
        { en: 'Trading only on expiry day', hi: 'केवल एक्सपायरी वाले दिन ट्रेड करना' }],
        a: 0, why: { en: 'Martingale-style doubling turns a bad week into a ruined account. Position size is the only variable that keeps you in the game long enough for the plan to work.', hi: 'दोगुना करते जाना बुरे हफ़्ते को खाता ख़त्म कर देता है। साइज़ ही एकमात्र चीज़ है जो आपको योजना चलने भर का समय रखती है।' } },
    ],
  },
  {
    id: 'q-money',
    path: 'p-beginner',
    title: { en: 'Personal finance & tax', hi: 'व्यक्तिगत वित्त और टैक्स' },
    qs: [
      { q: { en: 'An emergency fund should', hi: 'इमरजेंसी फंड को चाहिए' }, d: 1, opts: [
        { en: 'Cover several months of essential spending in something you can reach within days', hi: 'कई महीनों की ज़रूरी खर्च ढकना, और वह कुछ दिनों में निकालने लायक हो' },
        { en: 'Be fully invested in the highest-returning equity fund', hi: 'सबसे ज़्यादा रिटर्न वाले इक्विटी फंड में पूरा लगाना' },
        { en: 'Be locked for five years to force discipline', hi: 'अनुशासन के लिए पाँच वर्ष के लिए बंद होना' },
        { en: 'Equal one year of total income', hi: 'एक वर्ष की कुल आय के बराबर होना' }],
        a: 0, why: { en: 'The job of that money is to never need to be sold at a bad price. A sweep fixed deposit or a liquid fund does that; a falling equity fund does not.', hi: 'इस पैसे का काम बुरे दाम पर बेचना न पड़े। Sweep FD या लिक्विड फंड वह करते हैं; गिरता इक्विटी फंड नहीं।' } },
      { q: { en: 'Term insurance is bought to', hi: 'टर्म इंश्योरेंस किसलिए लिया जाता है?' }, d: 1, opts: [
        { en: 'Replace a breadwinner’s income for the people who depend on it', hi: 'कमाने वाले के जाने पर निर्भर लोगों की आय पूरी करना' },
        { en: 'Earn a better return than a mutual fund', hi: 'म्यूचुअल फंड से ज़्यादा रिटर्न कमाना' },
        { en: 'Save tax as its main purpose', hi: 'मुख्य उद्देश्य टैक्स बचाना' },
        { en: 'Fund a retirement payout', hi: 'रिटायरमेंट की रकम देना' }],
        a: 0, why: { en: 'Cheap protection and investing are two different jobs. Blending them into one product usually means paying for both and doing neither well.', hi: 'सस्ता सुरक्षा कवच और निवेश दो अलग काम हैं। एक ही प्रोडक्ट में मिला लेने का मतलब दोनों का पैसा देना और दोनों में कमज़ोरी है।' } },
      { q: { en: 'Money needed for a school fee next year belongs in', hi: 'अगले वर्ष की स्कूल फ़ीस के लिए पैसा कहाँ होना चाहिए?' }, d: 2, opts: [
        { en: 'A liquid or short-duration debt option, or a sweep FD', hi: 'लिक्विड या छोटी-अवधि का डेट साधन, या sweep FD' },
        { en: 'An equity fund, because ten months is long', hi: 'इक्विटी फंड, क्योंकि दस महीने लंबा समय है' },
        { en: 'A sectoral bet that is trending', hi: 'चल रहा सेक्टोरल दांव' },
        { en: 'An F&O position with a stop', hi: 'स्टॉप वाली F&O पोज़िशन' }],
        a: 0, why: { en: 'Match the horizon to the instrument. A deadline you cannot move should never depend on a price you cannot control.', hi: 'अवधि और साधन का मेल ज़रूरी है। जो समय-सीमा टाली नहीं जा सकती, उसे अपने नियंत्रण से बाहर दाम पर नहीं छोड़ना चाहिए।' } },
      { q: { en: 'Two funds earn the same gross return; one charges 2.2% a year and the other 0.2%. Over twenty years the difference', hi: 'दो फंड समान ग्रॉस रिटर्न देते हैं; एक 2.2% और दूसरा 0.2% वर्ष का लेता है। बीस वर्ष में फ़र्क' }, d: 2, opts: [
        { en: 'Compounds into a large gap in the final corpus', hi: 'अंतिम रकम में बड़ा अंतर बनकर कंपाउंड होता है' },
        { en: 'Is only about 4% of the corpus', hi: 'रकम का लगभग 4% ही होता है' },
        { en: 'Does not matter if the fund is good', hi: 'अच्छे फंड में मायने नहीं रखता' },
        { en: 'Is offset by the exit load', hi: 'एग्ज़िट लोड से भर दिया जाता है' }],
        a: 0, why: { en: 'Cost is subtracted every single year, so it is the one input with a guaranteed effect. Put both numbers through the compounding calculator and see the corpus gap.', hi: 'लागत हर वर्ष घटती है, इसलिए यह एकमात्र पक्का असर वाला इनपुट है। दोनों संख्याएँ कंपाउंडिंग कैलकुलेटर में डालकर रकम का अंतर देखें।' } },
      { q: { en: 'Choosing the old or the new tax regime depends mostly on', hi: 'पुराना या नया टैक्स रिजीम चुनना मुख्यतः किस पर निर्भर है?' }, d: 3, opts: [
        { en: 'How much of your income the old regime’s deductions actually shield', hi: 'पुराने रिजीम की छूटें आपकी आय का कितना हिस्सा असल में बचाती हैं' },
        { en: 'Which regime the employer prefers', hi: 'नियोक्ता को कौन-सा रिजीम पसंद है' },
        { en: 'Whether you file on paper', hi: 'आप कागज़ पर फाइल करते हैं या नहीं' },
        { en: 'The number of bank accounts you hold', hi: 'आपके बैंक खातों की संख्या' }],
        a: 0, why: { en: 'The two regimes trade lower rates against fewer deductions, and the crossover moves with your salary, home loan and investments. Model both with the same year’s rules before deciding.', hi: 'दोनों रिजीम कम दर और कम छूट में सौदा करते हैं, और मोड़ आपकी सैलरी, होम लोन और निवेश से बदलता है। तय करने से पहले एक ही वर्ष के नियमों से दोनों बनाकर देखें।' } },
      { q: { en: 'Form 16 and the AIS are used for', hi: 'Form 16 और AIS किसके लिए इस्तेमाल होते हैं?' }, d: 2, opts: [
        { en: 'Proof of salary TDS, and the annual statement of your financial transactions used when filing', hi: 'सैलरी TDS का प्रमाण, और फाइलिंग के समय इस्तेमाल होने वाली आपकी वित्तीय लेन-देन की वार्षिक सूची' },
        { en: 'Opening a Demat account', hi: 'डीमैट खाता खोलना' },
        { en: 'Applying for a loan only', hi: 'केवल लोन के लिए आवेदन' },
        { en: 'Registering a company', hi: 'कंपनी रजिस्टर करना' }],
        a: 0, why: { en: 'The tax department now shows brokers, banks and interest in the AIS. Reconcile your capital-gains statement with it before filing, not after a notice.', hi: 'टैक्स विभाग अब AIS में ब्रोकर, बैंक और ब्याज दिखाता है। नोटिस से पहले, फाइलिंग से अपने कैपिटल-गेन स्टेटमेंट उससे मिलाएँ।' } },
      { q: { en: 'Continuing a SIP through a market fall helps because', hi: 'बाज़ार गिरने पर भी SIP जारी रखने से लाभ होता है क्योंकि' }, d: 2, opts: [
        { en: 'The same monthly money buys more units at a lower NAV', hi: 'वही मासिक रकम कम NAV पर ज़्यादा यूनिट खरीदती है' },
        { en: 'Funds never fall during a crash', hi: 'क्रैश में फंड कभी नहीं गिरते' },
        { en: 'The exit load is waived in a fall', hi: 'गिरावट में एग्ज़िट लोड माफ़ हो जाता है' },
        { en: 'The NAV is fixed by the AMC', hi: 'NAV को AMC तय करती है' }],
        a: 0, why: { en: 'It only helps if the fund’s holdings survive the fall, which is another reason to prefer broad, low-cost exposure over a concentrated bet.', hi: 'यह तभी फ़ायदेमंद है जब फंड की होल्डिंग गिरावट से बच जाएँ, और यही एक और कारण है कि केंद्रित दांव पर चौड़े, सस्ते एक्सपोज़र को तरजीह दें।' } },
      { q: { en: 'A goal fifteen years away and a goal two years away differ mainly because', hi: 'पंद्रह वर्ष दूर का लक्ष्य और दो वर्ष दूर का लक्ष्य मुख्यतः इसीलिए अलग हैं क्योंकि' }, d: 3, opts: [
        { en: 'The longer goal has time to recover from a bad sequence of returns', hi: 'लंबे लक्ष्य के पास खराब क्रम के रिटर्न से उबरने का समय होता है' },
        { en: 'The longer goal can never lose money', hi: 'लंबे लक्ष्य में नुकसान संभव नहीं' },
        { en: 'Short goals get a higher tax exemption', hi: 'छोटे लक्ष्यों पर ज़्यादा टैक्स छूट मिलती है' },
        { en: 'Only the inflation rate differs', hi: 'केवल मुद्रास्फीति दर अलग होती है' }],
        a: 0, why: { en: 'Sequence risk is what kills a near deadline. Two years of horizon is not a longer version of fifteen — it is a different instrument choice.', hi: 'नज़दीकी समय-सीमा को खत्म करने वाली चीज़ sequence risk है। दो वर्ष का दायरा पंद्रह वर्ष का छोटा रूप नहीं, बल्कि साधन चुनने का अलग सवाल है।' } },
    ],
  },
);
