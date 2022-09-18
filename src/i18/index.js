import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {I18nManager} from 'react-native';
import 'intl-pluralrules';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en:{
    translation:{
        'Title':"Hello world",
        'intro':"Welcome to the test App",
        'column_1':"One",
        'column_2':"Two",
        'column_3':"Three",
        'Title2':"Row Test",
        'Title3':"Input Test",
        placeholder:"Input",
        'button1':"AR",
        "Settings":"Settings",
        "Prfile":"Profile",
        "Home":"Home"
    }
  },
  ar:{
    translation:{
        'Title':'مرحبا بالعالم',
        'Intro':"مرحبًا بك في تطبيق الاختبار",
        'column_1':"واحد",
        'column_2':"إثنان",
        'column_3':"ثلاثة",
        'Title2':"اختبار الصف",
        'Title3':"اختبار الإدخال",
        placeholder:"الإدخال",
        'button1':"EN",
        "Settings":"إعدادات",
        "Profile":"الملف الشخصي"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: I18nManager.isRTL ? 'ar' : 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;