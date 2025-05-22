
export enum Locale {
    PL = 'pl',
    EN = 'en',
}

export const supportedLocales: string[] = Object.values(Locale);

export const defaultLocale: Locale = Locale.PL;

export interface Translations {
    nav: {
        about: string;
        projects: string;
        contact: string;
    }
}

export async function getTranslations(locale: Locale): Promise<Translations> {
    try {
        const translations = await import(`@/locales/${locale}.json`);
        return translations.default || translations;
    } catch {
        throw new Error(`Translations not found for locale: ${locale}`);
    }
}