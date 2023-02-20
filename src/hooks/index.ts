import { useRouter } from 'next/router';
import { createContext, useContext } from 'react';

export const useTranslations = async (componentName: string) => {
  const { locale } = useRouter();
  const localeContext = createContext({
    getCurrentLocale() {
      return locale;
    },
    labels: {
      async get(locale: string, componentName?: string) {
        const labelsResponse = await fetch(`api/staticdata?locale=${locale}&componentName=${componentName}`);
        const labels = await labelsResponse.json();
        return labels;
      },
    },
  });

  const context = useContext(localeContext);
  const currentLocale = context.getCurrentLocale();
  const labels = await context.labels.get(currentLocale, componentName);
  return labels;
};
