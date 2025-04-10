
export const supportedLocales = ['pl', 'en'] as const;

export type Locale = (typeof supportedLocales)[number];

export const defaultLocale: Locale = 'pl';

export interface Translations {
    welcomeMessage?: string;
    language?: string;
}

export async function getTranslations(locale: Locale | string): Promise<Translations> {
    // Validate the locale, fallback to default if invalid
    const validLocale = supportedLocales.includes(locale as Locale)
        ? (locale as Locale)
        : defaultLocale;

    try {
        const messages = await import(`@/locales/${validLocale}.json`);
        // `.default` is often needed for dynamic JSON imports
        return messages.default || messages;
    } catch (error) {
        console.error(`Could not load translations for locale: ${locale} (fell back to ${validLocale})`, error);
        // Try to load default locale as a final fallback
        try {
            const defaultMessages = await import(`@/locales/${defaultLocale}.json`);
            return defaultMessages.default || defaultMessages;
        } catch (fallbackError) {
            console.error(`Could not load default translations (${defaultLocale})`, fallbackError);
            // Return empty if even default fails
            return {};
        }
    }
}