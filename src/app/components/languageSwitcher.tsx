// app/components/LanguageSwitcher.tsx
"use client"; // <-- IMPORTANT: Marks this as a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Hook for current URL path

// Define props if needed, though we might get locale from pathname
interface LanguageSwitcherProps {
    currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
    const pathname = usePathname(); // Gets the current path, like "/es/about" or "/en"

    // Helper function to generate the link for a different language
    const getLocalizedPath = (targetLocale: string) => {
        if (!pathname) return `/${targetLocale}`; // Default path if pathname is not available

        // Split the path: ['', 'en', 'about'] or ['', 'about'] or ['']
        const segments = pathname.split('/');

        // Check if the first *actual* segment is the current language code
        if (segments[1] === currentLang) {
            segments[1] = targetLocale; // Replace it
            return segments.join('/');
        } else {
            // Should not happen with the [lang] structure, but as a fallback:
            return `/${targetLocale}${pathname}`;
        }
    };

    return (
        <nav style={{ padding: '1rem 0', borderTop: '1px solid #ccc', marginTop: '1rem' }}>
            Switch Language:
            <Link
                href={getLocalizedPath('pl')}
                style={{
                    margin: '0 0.5rem',
                    textDecoration: 'underline',
                    fontWeight: currentLang === 'pl' ? 'bold' : 'normal' // Highlight active
                }}
            >
                PL
            </Link>
            |
            <Link
                href={getLocalizedPath('en')}
                style={{
                    margin: '0 0.5rem',
                    textDecoration: 'underline',
                    fontWeight: currentLang === 'en' ? 'bold' : 'normal' // Highlight active
                }}
            >
                EN
            </Link>
        </nav>
    );
}