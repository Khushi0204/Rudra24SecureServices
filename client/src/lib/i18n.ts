import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      // Navigation
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About Us",
      "nav.careers": "Careers",
      "nav.contact": "Contact",
      "nav.securityAudit": "Security Audit",
      "nav.feedback": "Feedback",
      "nav.clientLogin": "Client Login",
      
      // Homepage
      "home.hero.title": "Professional Security & Housekeeping Services",
      "home.hero.subtitle": "Comprehensive protection for your property with trained security guards and professional housekeeping",
      "home.hero.cta": "Get a Free Assessment",
      
      // Services
      "services.title": "Our Services",
      "services.subtitle": "Comprehensive security and housekeeping solutions for all your needs",
      "services.guards.title": "Security Guards",
      "services.guards.description": "Professional, trained security personnel for complete protection",
      "services.surveillance.title": "Surveillance Systems",
      "services.surveillance.description": "Advanced monitoring technology for 24/7 protection",
      "services.housekeeping.title": "Housekeeping Services",
      "services.housekeeping.description": "Professional cleaning and maintenance for your property",
      "services.maintenance.title": "Property Maintenance",
      "services.maintenance.description": "Complete property upkeep and maintenance services",
      
      // Contact
      "contact.title": "Contact Us",
      "contact.subtitle": "Get in touch with our team",
      "contact.form.name": "Full Name",
      "contact.form.email": "Email Address",
      "contact.form.phone": "Phone Number",
      "contact.form.message": "Message",
      "contact.form.submit": "Send Message",
      "contact.form.success": "Message sent successfully!",
      
      // Careers
      "careers.title": "Join Our Team",
      "careers.subtitle": "Build your career with SecureGuard Services",
      "careers.openings": "Current Openings",
      "careers.apply": "Apply Now",
      "careers.form.title": "Job Application Form",
      "careers.form.name": "Full Name",
      "careers.form.email": "Email Address",
      "careers.form.phone": "Phone Number",
      "careers.form.position": "Position",
      "careers.form.experience": "Years of Experience",
      "careers.form.resume": "Upload Resume",
      "careers.form.coverletter": "Cover Letter",
      "careers.form.submit": "Submit Application",
      "careers.form.success": "Application submitted successfully!",
      
      // About
      "about.title": "About SecureGuard Services",
      "about.subtitle": "Your trusted partner in security and housekeeping",
      "about.history": "Our History",
      "about.mission": "Our Mission",
      "about.team": "Our Team",
      
      // Security Audit
      "audit.title": "Security Audit & Assessment",
      "audit.subtitle": "Get a comprehensive security evaluation for your property",
      "audit.cta": "Start Your Free Assessment",
      
      // Client Feedback
      "feedback.title": "Your Feedback Matters",
      "feedback.subtitle": "Help us improve our services by sharing your experience",
      "feedback.form.name": "Full Name",
      "feedback.form.namePlaceholder": "Enter your name",
      "feedback.form.email": "Email Address",
      "feedback.form.emailPlaceholder": "Enter your email",
      "feedback.form.overallRating": "Overall Rating",
      "feedback.form.serviceQuality": "Service Quality",
      "feedback.form.reportQuality": "Report Quality",
      "feedback.form.selectRating": "Select a rating",
      "feedback.form.additionalComments": "Additional Comments",
      "feedback.form.commentsPlaceholder": "Please share your thoughts or suggestions...",
      "feedback.form.commentsHelp": "Your comments help us understand how we can better serve you",
      "feedback.form.submit": "Submit Feedback",
      "feedback.form.submitting": "Submitting...",
      
      // Footer
      "footer.rights": "All Rights Reserved",
      "footer.privacy": "Privacy Policy",
      "footer.terms": "Terms of Service",
    }
  },
  hi: {
    translation: {
      // Navigation
      "nav.home": "होम",
      "nav.services": "सेवाएं",
      "nav.about": "हमारे बारे में",
      "nav.careers": "कैरियर",
      "nav.contact": "संपर्क",
      "nav.securityAudit": "सुरक्षा ऑडिट",
      "nav.feedback": "प्रतिक्रिया",
      "nav.clientLogin": "क्लाइंट लॉगिन",
      
      // Homepage
      "home.hero.title": "पेशेवर सुरक्षा और हाउसकीपिंग सेवाएं",
      "home.hero.subtitle": "प्रशिक्षित सुरक्षा गार्ड और पेशेवर हाउसकीपिंग के साथ आपकी संपत्ति के लिए व्यापक सुरक्षा",
      "home.hero.cta": "निःशुल्क मूल्यांकन प्राप्त करें",
      
      // Services
      "services.title": "हमारी सेवाएं",
      "services.subtitle": "आपकी सभी जरूरतों के लिए व्यापक सुरक्षा और हाउसकीपिंग समाधान",
      "services.guards.title": "सुरक्षा गार्ड",
      "services.guards.description": "पूर्ण सुरक्षा के लिए पेशेवर, प्रशिक्षित सुरक्षा कर्मचारी",
      "services.surveillance.title": "निगरानी प्रणाली",
      "services.surveillance.description": "24/7 सुरक्षा के लिए उन्नत निगरानी तकनीक",
      "services.housekeeping.title": "हाउसकीपिंग सेवाएं",
      "services.housekeeping.description": "आपकी संपत्ति के लिए पेशेवर सफाई और रखरखाव",
      "services.maintenance.title": "संपत्ति रखरखाव",
      "services.maintenance.description": "पूर्ण संपत्ति की देखभाल और रखरखाव सेवाएं",
      
      // Contact
      "contact.title": "संपर्क करें",
      "contact.subtitle": "हमारी टीम से संपर्क करें",
      "contact.form.name": "पूरा नाम",
      "contact.form.email": "ईमेल पता",
      "contact.form.phone": "फोन नंबर",
      "contact.form.message": "संदेश",
      "contact.form.submit": "संदेश भेजें",
      "contact.form.success": "संदेश सफलतापूर्वक भेजा गया!",
      
      // Careers
      "careers.title": "हमारी टीम में शामिल हों",
      "careers.subtitle": "सिक्योरगार्ड सर्विसेज के साथ अपना करियर बनाएं",
      "careers.openings": "वर्तमान नौकरियां",
      "careers.apply": "अभी आवेदन करें",
      "careers.form.title": "नौकरी आवेदन फॉर्म",
      "careers.form.name": "पूरा नाम",
      "careers.form.email": "ईमेल पता",
      "careers.form.phone": "फोन नंबर",
      "careers.form.position": "पद",
      "careers.form.experience": "अनुभव के वर्ष",
      "careers.form.resume": "रिज्यूमे अपलोड करें",
      "careers.form.coverletter": "कवर लेटर",
      "careers.form.submit": "आवेदन जमा करें",
      "careers.form.success": "आवेदन सफलतापूर्वक जमा किया गया!",
      
      // About
      "about.title": "सिक्योरगार्ड सर्विसेज के बारे में",
      "about.subtitle": "सुरक्षा और हाउसकीपिंग में आपका विश्वसनीय साथी",
      "about.history": "हमारा इतिहास",
      "about.mission": "हमारा मिशन",
      "about.team": "हमारी टीम",
      
      // Security Audit
      "audit.title": "सुरक्षा ऑडिट और मूल्यांकन",
      "audit.subtitle": "अपनी संपत्ति के लिए व्यापक सुरक्षा मूल्यांकन प्राप्त करें",
      "audit.cta": "अपना निःशुल्क मूल्यांकन शुरू करें",
      
      // Client Feedback
      "feedback.title": "आपकी प्रतिक्रिया महत्वपूर्ण है",
      "feedback.subtitle": "अपने अनुभव को साझा करके हमें अपनी सेवाओं को बेहतर बनाने में मदद करें",
      "feedback.form.name": "पूरा नाम",
      "feedback.form.namePlaceholder": "अपना नाम दर्ज करें",
      "feedback.form.email": "ईमेल पता",
      "feedback.form.emailPlaceholder": "अपना ईमेल दर्ज करें",
      "feedback.form.overallRating": "समग्र रेटिंग",
      "feedback.form.serviceQuality": "सेवा की गुणवत्ता",
      "feedback.form.reportQuality": "रिपोर्ट की गुणवत्ता",
      "feedback.form.selectRating": "रेटिंग चुनें",
      "feedback.form.additionalComments": "अतिरिक्त टिप्पणियां",
      "feedback.form.commentsPlaceholder": "कृपया अपने विचार या सुझाव साझा करें...",
      "feedback.form.commentsHelp": "आपकी टिप्पणियां हमें समझने में मदद करती हैं कि हम आपकी बेहतर सेवा कैसे कर सकते हैं",
      "feedback.form.submit": "प्रतिक्रिया भेजें",
      "feedback.form.submitting": "भेजा जा रहा है...",
      
      // Footer
      "footer.rights": "सर्वाधिकार सुरक्षित",
      "footer.privacy": "गोपनीयता नीति",
      "footer.terms": "सेवा की शर्तें",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;