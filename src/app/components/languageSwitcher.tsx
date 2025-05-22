// app/components/LanguageSwitcher.tsx
"use client"; // <-- IMPORTANT: Marks this as a Client Component

import { Locale } from '@/lib/translations';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook for current URL path

// Define props if needed, though we might get locale from pathname
interface LanguageSwitcherProps {
    currentLang: Locale;
}

// Assumes that there are only two languages: 'pl' and 'en'
export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
    const pathname = usePathname();

    // Helper function to generate the link for a different language
    const getLocalizedHref = (targetLocale: Locale) => {
        if (!pathname) return `/${targetLocale}`; // Default path if pathname is not available

        // Split the path: ['', 'en', 'about'] or ['', 'about'] or ['']
        const segments = pathname.split('/');

        if (segments[1] === currentLang) {
            segments[1] = targetLocale; // Replace it
            return segments.join('/');
        } else {
            // Should not happen with the [lang] structure, but as a fallback:
            return `/${targetLocale}${pathname}`;
        }
    };

    let languageText = null
    let href = null
    if (currentLang === Locale.PL) {
        languageText = 'EN'
        href = getLocalizedHref(Locale.EN)
    } else {
        languageText = 'PL'
        href = getLocalizedHref(Locale.PL)
    }

    return (
        <Link
            href={href}
            style={{
                margin: '0 0.5rem',
                textDecoration: 'underline',
                fontWeight: 'bold'
            }}
        >
            {languageText}
        </Link>
    );
}