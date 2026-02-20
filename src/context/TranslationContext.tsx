import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

type Labels = Record<string, any>;

interface TranslationContextType {
  locale: string;
  getLabels: (componentName: string) => Promise<Labels>;
  cachedLabels: Record<string, Labels>;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { locale = 'en-US' } = useRouter();
  const [cachedLabels, setCachedLabels] = useState<Record<string, Labels>>({});

  const getLabels = async (componentName: string): Promise<Labels> => {
    // Return cached labels if available
    const cacheKey = `${locale}:${componentName}`;
    if (cachedLabels[cacheKey]) {
      return cachedLabels[cacheKey];
    }

    try {
      const response = await fetch(
        `/api/staticdata?locale=${locale}&componentName=${componentName}`
      );

      if (!response.ok) {
        console.error(`Failed to fetch labels for ${componentName}`);
        return {};
      }

      const labels = await response.json();

      // Cache the labels
      setCachedLabels((prev) => ({
        ...prev,
        [cacheKey]: labels,
      }));

      return labels;
    } catch (error) {
      console.error(`Error fetching labels for ${componentName}:`, error);
      return {};
    }
  };

  return (
    <TranslationContext.Provider value={{ locale, getLabels, cachedLabels }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = (componentName: string) => {
  const context = useContext(TranslationContext);

  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }

  const [labels, setLabels] = useState<Labels>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLabels = async () => {
      setLoading(true);
      setError(null);
      try {
        const fetchedLabels = await context.getLabels(componentName);
        setLabels(fetchedLabels);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchLabels();
  }, [componentName, context.locale, context]);

  return { labels, loading, error, locale: context.locale };
};
