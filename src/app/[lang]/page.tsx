import LanguageSwitcher from '@/app/components/languageSwitcher';

import {
  getTranslations,
  type Translations, // Use "type" keyword for importing types
  supportedLocales,
  type Locale,       // Import the Locale type if needed elsewhere
} from '@/lib/translations';

export async function generateStaticParams() {
  return supportedLocales.map((lang) => ({
    lang: lang,
  }));
}

interface LangHomePageProps {
  params: {
    lang: Locale | string; // Use the Locale type for better safety, fallback to string
  }
}

// This is the main component for your homepage (e.g., localhost:3000/ or /en or /es)
// It receives `params` which will contain the language code.
export default async function HomePage({ params }: LangHomePageProps) {

  // The `lang` parameter comes from the URL structure defined by i18n in next.config.js
  // e.g., if you visit /es, params.lang will be "es"
  // If you visit /, params.lang will be your defaultLocale ("en")
  const { lang } = await params;

  const currentLang = lang

  // Load the translations for the current language
  // This happens on the server because page.tsx is a Server Component
  const t: Translations = await getTranslations(currentLang);

  // We need the language switcher to be interactive, so we'll create it separately

  return (
    <main>
      <h1>{t.welcomeMessage || 'Welcome!'}</h1>

      <p>Current Language Code: {currentLang}</p>

      {/* We will add the language switcher component here */}
      {/* Since the switcher needs browser interaction (links), it will be a Client Component */}
      {/* <LanguageSwitcher currentLang={currentLang} /> */}
      <LanguageSwitcher currentLang={currentLang} />

      {/* Example of using the translation */}

      {/* You can add the rest of your portfolio content here */}
      <div>
        {/* Example content */}
        <p>This is my portfolio content...</p>
      </div>
    </main>
  );
}
