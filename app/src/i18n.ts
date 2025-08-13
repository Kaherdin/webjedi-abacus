
import { getRequestConfig } from 'next-intl/server';
import { locales } from './config';

// @ts-ignore - temporary fix for next-intl type issue  
export default getRequestConfig(async ({ locale }) => {
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
