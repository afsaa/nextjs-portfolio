import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ButtonLink from '@/ui/buttonLink';

const TopArea = () => {
  const { locales, locale } = useRouter();
  const [labels, setLabels] = useState({});

  const fetchTranslations = async (componentName: string) => {
    try {
      const labelsResponse = await fetch(`/api/staticdata?locale=${locale}&componentName=${componentName}`);
      if (!labelsResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const labelsData = await labelsResponse.json();
      return setLabels(labelsData);
    } catch (error) {
      console.error('Error fetching labels data:', error);
    }
  };

  useEffect(() => {
    fetchTranslations('TopArea');
  }, []);

  return (
    <div className="p-5 md:px-24 flex items-center justify-end gap-x-2 bg-black">
      <p className="text-carrara font-bold">{labels['languages']}</p>
      {locales?.map((localItem, index) => (
        <form key={index} action="/api/language" method="POST">
          <input type="hidden" name="selectedLocale" value={localItem} />
          <ButtonLink active={locale !== localItem} type="submit" text={localItem} />
        </form>
      ))}
    </div>
  );
};

export default TopArea;
