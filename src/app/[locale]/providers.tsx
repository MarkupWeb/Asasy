// providers.js or providers.tsx
import { NextIntlClientProvider } from 'next-intl';




// Function to dynamically load messages based on the locale
const loadMessages = (locale: any) => {
  try {
    return require(`../../../messages/${locale}.json`);
  } catch (error) {
    console.error(`Could not load messages for locale "${locale}"`);
    return {};
  }
};

export function Providers({ children, locale }: any) {
  const messages = loadMessages(locale);

  return (
    <NextIntlClientProvider timeZone="UTC" locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
