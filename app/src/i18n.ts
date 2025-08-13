
import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is valid, fallback to default if undefined or invalid
  const validLocale = locale && locales.includes(locale as any) ? locale : defaultLocale;
  
  try {
    return {
      locale: validLocale,
      messages: (await import(`../messages/${validLocale}.json`)).default
    };
  } catch (error) {
    console.error(`Failed to load messages for locale '${validLocale}':`, error);
    // Fallback to default locale messages
    return {
      locale: defaultLocale,
      messages: (await import(`../messages/${defaultLocale}.json`)).default
    };
  }
});
