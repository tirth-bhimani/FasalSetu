import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'ml' | 'hi';

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services', 
    'nav.vision': 'Vision',
    'nav.app': 'FasalSetu APP',
    'nav.contact': 'Contact',
    'nav.tagline': 'Agriculture Technology Hub',
    
    // Common
    'common.learnMore': 'Learn More',
    'common.getStarted': 'Get Started',
    'common.downloadApp': 'Download FasalSetu APP',
    'common.readMore': 'Read More',
    'common.contactUs': 'Contact Us',
    
    // Hero Section
    'hero.title': 'FasalSetu',
    'hero.subtitle': 'Empowering Indian Farmers with Smart Agricultural Solutions',
    'hero.description': 'Join the digital farming revolution with FasalSetu - your comprehensive platform for modern agriculture, expert guidance, and sustainable farming practices.',
    
    // Features
    'features.title': 'Why Choose FasalSetu?',
    'features.description': 'FasalSetu brings together traditional farming wisdom with modern technology to create sustainable solutions for india\'s agricultural future.',

    // Vision Page
    'vision.badge': 'Our Vision',
    'vision.heading': 'Building the Future of',
    'vision.highlight1.title': 'Digital India Agriculture',
    'vision.highlight1.desc': 'Transforming traditional farming through cutting-edge AI technology to build a self-reliant agricultural ecosystem.',
    'vision.highlight2.title': 'Farmer Empowerment',
    'vision.highlight2.desc': 'Providing every farmer with free access to intelligent farming solutions, regardless of farm size or economic background.',
    'vision.highlight3.title': 'Sustainable Future',
    'vision.highlight3.desc': 'Promoting eco-friendly farming practices that protect our environment while ensuring food security for all citizens.',
    'vision.highlight4.title': 'Economic Growth',
    'vision.highlight4.desc': 'Boosting agricultural productivity and farmer income through data-driven insights and smart farming techniques.',
    
    // About Page
    'about.badge': 'About FasalSetu',
    'about.title': 'Transforming Agriculture Through Technology',
    'about.description': 'FasalSetu is a pioneering digital platform designed to revolutionize agricultural practices in India. By bridging traditional farming methods with cutting-edge technological solutions, FasalSetu addresses the critical challenges facing modern agriculture in the region.',
    'about.history.title': 'Our Story',
    'about.history.content': 'FasalSetu was conceived as part of India\'s ambitious digital transformation initiative, recognizing agriculture as the backbone of the country\'s economy. With over 60% of the population directly or indirectly dependent on agriculture, the need for technological intervention became paramount.',
    'about.mission.content': 'Launched under the auspices of the Department of Agriculture, Government of india, FasalSetu represents a collaborative effort between agricultural scientists, technology experts, and farming communities to create a comprehensive ecosystem for modern agriculture.',
    
    // Services
    'services.title': 'Comprehensive Agricultural Services',
    'services.description': 'FasalSetu offers a complete suite of digital services designed to support farmers at every stage of their agricultural journey, from planning to harvest and beyond.',
    'services.cta.title': 'Ready to Transform Your Farming?',
    'services.cta.description': 'Download the FasalSetu mobile app or register on our platform to start accessing all these comprehensive agricultural services today.',
    
    // Contact
    'contact.badge': 'Contact Us',
    'contact.title': 'Get in Touch with FasalSetu',
    'contact.description': 'We\'re here to help you with any questions about FasalSetu platform, agricultural services, or technical support. Reach out to us through any of the channels below.',
    'contact.email.title': 'Email Support',
    'contact.email.description': 'Get help via email within 24 hours',
    'contact.phone.title': 'Phone Support',
    'contact.phone.description': 'Speak with our agricultural experts',
    'contact.visit.title': 'Visit Us',
    'contact.visit.description': 'Come meet our team in person',
    
    // App Page
    'app.title': 'FasalSetu Mobile App',
    'app.description': 'Take the power of FasalSetu wherever you go. Access all agricultural services, connect with experts, and manage your farming activities from your smartphone.',
    'app.features.title': 'Why Choose FasalSetu App?',
    'app.cta.title': 'Download FasalSetu Today',
    'app.cta.description': 'Join over 1 million farmers who are already using FasalSetu app to make smarter farming decisions and increase their income.',
  },
  
  ml: {
    // Navigation
    'nav.home': 'ഹോം',
    'nav.about': 'കുറിച്ച്',
    'nav.services': 'സേവനങ്ങൾ',
    'nav.vision': 'ദർശനം',
    'nav.app': 'ഫസൽസേതു ആപ്',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'nav.tagline': 'കേരള കാർഷിക സാങ്കേതികവിദ്യാ കേന്ദ്രം',
    
    // Common
    'common.learnMore': 'കൂടുതൽ അറിയുക',
    'common.getStarted': 'ആരംഭിക്കുക',
    'common.downloadApp': 'ഫസൽസേതു ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക',
    'common.readMore': 'കൂടുതൽ വായിക്കുക',
    'common.contactUs': 'ബന്ധപ്പെടുക',
    
    // Hero Section
    'hero.title': 'ഫസൽസേതു',
    'hero.subtitle': 'സ്മാർട്ട് കാർഷിക പരിഹാരങ്ങളിലൂടെ കേരള കർഷകരെ ശാക്തീകരിക്കുന്നു',
    'hero.description': 'ഫസൽസേതുവിനൊപ്പം ഡിജിറ്റൽ കാർഷിക വിപ്ലവത്തിൽ ചേരുക - ആധുനിക കൃഷി, വിദഗ്ധ മാർഗനിർദേശം, സുസ്ഥിര കാർഷിക രീതികൾ എന്നിവയ്ക്കുള്ള നിങ്ങളുടെ സമഗ്ര പ്ലാറ്റ്ഫോം.',
    
    // Features
    'features.title': 'എന്തുകൊണ്ട് ഫസൽസേതു തിരഞ്ഞെടുക്കണം?',
    'features.description': 'ഫസൽസേതു പരമ്പരാഗത കാർഷിക ജ്ഞാനത്തെ ആധുനിക സാങ്കേതികവിദ്യയുമായി സംയോജിപ്പിച്ച് കേരളത്തിന്റെ കാർഷിക ഭാവിക്കായി സുസ്ഥിര പരിഹാരങ്ങൾ സൃഷ്ടിക്കുന്നു.',

    // Vision Page
    'vision.badge': 'ഞങ്ങളുടെ ദർശനം',
    'vision.heading': 'ഇന്ത്യൻ കാർഷികത്തിന്റെ ഭാവി',
    'vision.highlight1.title': 'ഡിജിറ്റൽ ഇന്ത്യ കാർഷികം',
    'vision.highlight1.desc': 'സ്വയംപര്യാപ്ത കാർഷിക പരിസ്ഥിതി സൃഷ്ടിക്കാൻ അത്യാധുനിക AI ഉപയോഗിച്ച് പരമ്പരാഗത കൃഷിയെ മാറ്റുന്നു.',
    'vision.highlight2.title': 'കർഷക ശാക്തീകരണം',
    'vision.highlight2.desc': 'കൃഷിയിടത്തിന്റെ വലിപ്പമോ സാമ്പത്തിക പശ്ചാത്തലമോ നോക്കാതെ ബുദ്ധിമാനായ കാർഷിക പരിഹാരങ്ങളിലേക്ക് സൗജന്യ പ്രവേശനം നൽകുന്നു.',
    'vision.highlight3.title': 'സുസ്ഥിര ഭാവി',
    'vision.highlight3.desc': 'പരിസ്ഥിതിയെ സംരക്ഷിക്കുന്നതോടൊപ്പം എല്ലാവർക്കും ഭക്ഷ്യസുരക്ഷ ഉറപ്പാക്കുന്ന സൗഹൃദ കൃഷിരീതികൾ പ്രോത്സാഹിപ്പിക്കുന്നു.',
    'vision.highlight4.title': 'സാമ്പത്തിക വളർച്ച',
    'vision.highlight4.desc': 'ഡാറ്റയെ അടിസ്ഥാനമാക്കിയുള്ള ഉൾക്കാഴ്ചകളും സ്മാർട്ട് കൃഷിരീതികളും വഴി കാർഷിക ഉൽപാദനക്ഷമതയും കർഷകവരുമാനവും വർദ്ധിപ്പിക്കുന്നു.',
    
    // About Page
    'about.badge': 'ഫസൽസേതുവിനെക്കുറിച്ച്',
    'about.title': 'സാങ്കേതികവിദ്യയിലൂടെ കൃഷിയെ പരിവർത്തനം ചെയ്യുന്നു',
    'about.description': 'ഫസൽസേതു (കേരള കാർഷിക സാങ്കേതികവിദ്യാ കേന്ദ്രവും വിവര സംഭരണിയും) കേരളത്തിലെ കാർഷിക രീതികളിൽ വിപ്ലവം സൃഷ്ടിക്കാൻ രൂപകൽപ്പന ചെയ്ത ഒരു പയനിയറിംഗ് ഡിജിറ്റൽ പ്ലാറ്റ്ഫോമാണ്.',
    'about.history.title': 'ഞങ്ങളുടെ കഥ',
    'about.history.content': 'കേരളത്തിന്റെ അഭിലാഷകരമായ ഡിജിറ്റൽ പരിവർത്തന സംരംഭത്തിന്റെ ഭാഗമായാണ് ഫസൽസേതു വിഭാവനം ചെയ്യപ്പെട്ടത്.',
    'about.mission.content': 'കേരള സർക്കാരിന്റെ കൃഷി വകുപ്പിന്റെ ആഭിമുഖ്യത്തിൽ ആരംഭിച്ച ഫസൽസേതു കാർഷിക ശാസ്ത്രജ്ഞർ, സാങ്കേതിക വിദഗ്ധർ, കാർഷിക സമുദായങ്ങൾ എന്നിവർ തമ്മിലുള്ള സഹകരണ ശ്രമത്തെ പ്രതിനിധീകരിക്കുന്നു.',
    
    // Services
    'services.title': 'സമഗ്ര കാർഷിക സേവനങ്ങൾ',
    'services.description': 'ഫസൽസേതു ആസൂത്രണം മുതൽ വിളവെടുപ്പ് വരെയും അതിനപ്പുറവും കർഷകരെ പിന്തുണയ്ക്കുന്നതിനായി രൂപകൽപ്പന ചെയ്ത സമ്പൂർണ്ണ ഡിജിറ്റൽ സേവനങ്ങൾ വാഗ്ദാനം ചെയ്യുന്നു.',
    'services.cta.title': 'നിങ്ങളുടെ കൃഷിയെ പരിവർത്തനം ചെയ്യാൻ തയ്യാറാണോ?',
    'services.cta.description': 'ഈ സമഗ്ര കാർഷിക സേവനങ്ങൾ ഇന്ന് തന്നെ ആക്സസ് ചെയ്യാൻ ഫസൽസേതു മൊബൈൽ ആപ്പ് ഡൗൺലോഡ് ചെയ്യുക അല്ലെങ്കിൽ ഞങ്ങളുടെ പ്ലാറ്റ്ഫോമിൽ രജിസ്റ്റർ ചെയ്യുക.',
    
    // Contact
    'contact.badge': 'ബന്ധപ്പെടുക',
    'contact.title': 'ഫസൽസേതുവുമായി ബന്ധപ്പെടുക',
    'contact.description': 'ഫസൽസേതു പ്ലാറ്റ്ഫോം, കാർഷിക സേവനങ്ങൾ, അല്ലെങ്കിൽ സാങ്കേതിക പിന്തുണയെക്കുറിച്ചുള്ള ചോദ്യങ്ങളിൽ ഞങ്ങൾ നിങ്ങളെ സഹായിക്കാൻ ഇവിടെയുണ്ട്.',
    'contact.email.title': 'ഇമെയിൽ സപ്പോർട്ട്',
    'contact.email.description': '24 മണിക്കൂറിനുള്ളിൽ ഇമെയിൽ വഴി സഹായം നേടുക',
    'contact.phone.title': 'ഫോൺ സപ്പോർട്ട്',
    'contact.phone.description': 'ഞങ്ങളുടെ കാർഷിക വിദഗ്ധരുമായി സംസാരിക്കുക',
    'contact.visit.title': 'ഞങ്ങളെ സന്ദർശിക്കുക',
    'contact.visit.description': 'ഞങ്ങളുടെ ടീമിനെ നേരിട്ട് കാണാൻ വരൂ',
    
    // App Page
    'app.title': 'ഫസൽസേതു മൊബൈൽ ആപ്പ്',
    'app.description': 'ഫസൽസേതുവിന്റെ ശക്തി നിങ്ങൾ എവിടെ പോയാലും കൊണ്ടുപോകുക. എല്ലാ കാർഷിക സേവനങ്ങളും ആക്സസ് ചെയ്യുക, വിദഗ്ധരുമായി ബന്ധപ്പെടുക, നിങ്ങളുടെ സ്മാർട്ട്ഫോണിൽ നിന്ന് കാർഷിക പ്രവർത്തനങ്ങൾ കൈകാര്യം ചെയ്യുക.',
    'app.features.title': 'എന്തുകൊണ്ട് ഫസൽസേതു ആപ്പ് തിരഞ്ഞെടുക്കണം?',
    'app.cta.title': 'ഇന്ന് തന്നെ ഫസൽസേതു ഡൗൺലോഡ് ചെയ്യുക',
    'app.cta.description': 'മികച്ച കാർഷിക തീരുമാനങ്ങൾ എടുക്കാനും വരുമാനം വർധിപ്പിക്കാനും ഫസൽസേതു ആപ്പ് ഇതിനകം ഉപയോഗിക്കുന്ന 10 ലക്ഷത്തിലധികം കർഷകരുടെ കൂട്ടത്തിൽ ചേരുക.',
  },
  
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'के बारे में',
    'nav.services': 'सेवाएं',
    'nav.vision': 'दृष्टि',
    'nav.app': 'फसलसेतु ऐप',
    'nav.contact': 'संपर्क',
    'nav.tagline': 'केरल कृषि प्रौद्योगिकी केंद्र',
    
    // Common
    'common.learnMore': 'और जानें',
    'common.getStarted': 'शुरू करें',
    'common.downloadApp': 'फसलसेतु ऐप डाउनलोड करें',
    'common.readMore': 'और पढ़ें',
    'common.contactUs': 'संपर्क करें',
    
    // Hero Section
    'hero.title': 'फसलसेतु',
    'hero.subtitle': 'स्मार्ट कृषि समाधानों के साथ केरल के किसानों को सशक्त बनाना',
    'hero.description': 'फसलसेतु के साथ डिजिटल खेती की क्रांति में शामिल हों - आधुनिक कृषि, विशेषज्ञ मार्गदर्शन और टिकाऊ खेती प्रथाओं के लिए आपका व्यापक मंच।',
    
    // Features
    'features.title': 'फसलसेतु क्यों चुनें?',
    'features.description': 'फसलसेतु पारंपरिक खेती की बुद्धि को आधुनिक तकनीक के साथ मिलाकर केरल के कृषि भविष्य के लिए टिकाऊ समाधान बनाता है।',

    // Vision Page
    'vision.badge': 'हमारी दृष्टि',
    'vision.heading': 'भारतीय कृषि का भविष्य',
    'vision.highlight1.title': 'डिजिटल इंडिया कृषि',
    'vision.highlight1.desc': 'आत्मनिर्भर कृषि पारिस्थितिकी तंत्र बनाने के लिए अत्याधुनिक AI के साथ पारंपरिक खेती को बदलना।',
    'vision.highlight2.title': 'किसान सशक्तिकरण',
    'vision.highlight2.desc': 'खेत के आकार या आर्थिक पृष्ठभूमि की परवाह किए बिना प्रत्येक किसान को बुद्धिमान खेती समाधानों तक निःशुल्क पहुंच।',
    'vision.highlight3.title': 'टिकाऊ भविष्य',
    'vision.highlight3.desc': 'पर्यावरण की रक्षा करते हुए सभी के लिए खाद्य सुरक्षा सुनिश्चित करने वाली पर्यावरण अनुकूल खेती प्रथाओं को बढ़ावा देना।',
    'vision.highlight4.title': 'आर्थिक वृद्धि',
    'vision.highlight4.desc': 'डेटा-चालित अंतर्दृष्टि और स्मार्ट खेती तकनीकों के माध्यम से कृषि उत्पादकता और किसान आय को बढ़ावा देना।',
    
    // About Page
    'about.badge': 'फसलसेतु के बारे में',
    'about.title': 'प्रौद्योगिकी के माध्यम से कृषि का रूपांतरण',
    'about.description': 'फसलसेतु (केरल कृषि प्रौद्योगिकी केंद्र और सूचना भंडार) एक अग्रणी डिजिटल प्लेटफॉर्म है जो केरल में कृषि प्रथाओं में क्रांति लाने के लिए डिज़ाइन किया गया है।',
    'about.history.title': 'हमारी कहानी',
    'about.history.content': 'फसलसेतु की कल्पना केरल की महत्वाकांक्षी डिजिटल परिवर्तन पहल के हिस्से के रूप में की गई थी।',
    'about.mission.content': 'केरल सरकार के कृषि विभाग के तत्वावधान में शुरू किया गया, फसलसेतु कृषि वैज्ञानिकों, प्रौद्योगिकी विशेषज्ञों और कृषक समुदायों के बीच एक सहयोगी प्रयास का प्रतिनिधित्व करता है।',
    
    // Services
    'services.title': 'व्यापक कृषि सेवाएं',
    'services.description': 'फसलसेतु योजना से लेकर फसल तक और उससे आगे, किसानों के कृषि सफर के हर चरण में उनका समर्थन करने के लिए डिज़ाइन की गई डिजिटल सेवाओं का एक पूरा सूट प्रदान करता है।',
    'services.cta.title': 'अपनी खेती को बदलने के लिए तैयार हैं?',
    'services.cta.description': 'इन सभी व्यापक कृषि सेवाओं तक पहुंच शुरू करने के लिए आज ही फसलसेतु मोबाइल ऐप डाउनलोड करें या हमारे प्लेटफॉर्म पर पंजीकरण करें।',
    
    // Contact
    'contact.badge': 'संपर्क करें',
    'contact.title': 'फसलसेतु से संपर्क करें',
    'contact.description': 'हम फसलसेतु प्लेटफॉर्म, कृषि सेवाओं या तकनीकी सहायता के बारे में आपके किसी भी प्रश्न में आपकी सहायता के लिए यहां हैं।',
    'contact.email.title': 'ईमेल सपोर्ट',
    'contact.email.description': '24 घंटे के भीतर ईमेल के माध्यम से सहायता प्राप्त करें',
    'contact.phone.title': 'फोन सपोर्ट',
    'contact.phone.description': 'हमारे कृषि विशेषज्ञों से बात करें',
    'contact.visit.title': 'हमसे मिलें',
    'contact.visit.description': 'व्यक्तिगत रूप से हमारी टीम से मिलने आएं',
    
    // App Page
    'app.title': 'फसलसेतु मोबाइल ऐप',
    'app.description': 'फसलसेतु की शक्ति को जहां भी जाएं, साथ ले जाएं। सभी कृषि सेवाओं तक पहुंचें, विशेषज्ञों से जुड़ें, और अपने स्मार्टफोन से अपनी कृषि गतिविधियों का प्रबंधन करें।',
    'app.features.title': 'फसलसेतु ऐप क्यों चुनें?',
    'app.cta.title': 'आज ही फसलसेतु डाउनलोड करें',
    'app.cta.description': '10 लाख से अधिक किसानों के साथ जुड़ें जो पहले से ही बेहतर कृषि निर्णय लेने और अपनी आय बढ़ाने के लिए फसलसेतु ऐप का उपयोग कर रहे हैं।',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = (key: string): string => {
    return translations[currentLanguage][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};