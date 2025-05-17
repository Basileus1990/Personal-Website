import LanguageSwitcher from '@/app/components/languageSwitcher';

import {
  getTranslations,
  type Translations,
  supportedLocales,
  type Locale,
} from '@/lib/translations';

export async function generateStaticParams() {
  return supportedLocales.map((lang) => ({
    lang: lang,
  }));
}

interface LangHomePageProps {
  params: Promise<{ lang: Locale }>;
}

export default async function HomePage({ params }: LangHomePageProps) {
  const { lang } = await params;

  const t: Translations = await getTranslations(lang);

  return (
    <main>
      <h1>{t.welcomeMessage}</h1>

      <p>Current Language Code: {lang}</p>

      {/* We will add the language switcher component here */}
      {/* Since the switcher needs browser interaction (links), it will be a Client Component */}
      {/* <LanguageSwitcher currentLang={currentLang} /> */}
      <LanguageSwitcher currentLang={lang} />
    </main>
  );
}
