import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

// The layout receives children (the page content) and params
// The root layout doesn't directly get the 'lang' param easily here without extra setup.
// We'll handle language loading in page.tsx where 'lang' is available.
export default async function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string }; // This will be the language code from the URL
}) {
  const { lang } = await params;
  return (
    <div lang={lang} className={inter.className}> {/* Example usage */}
      {/* You could have language-specific headers/footers here */}
      {children} {/* This will be the content from app/[lang]/page.tsx */}
    </div>
  );
}