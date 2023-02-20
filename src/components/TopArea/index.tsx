import { useRouter } from 'next/router';
import React, { useState } from 'react';
import ButtonLink from '@/ui/buttonLink';
import { useTranslations } from '../../hooks';

const TopArea = () => {
  const { locales, locale } = useRouter();
  const [labels, setLabels] = useState(async () => {
    await useTranslations('TopArea').then((data) => {
      setLabels(data);
    });
  });

  return (
    <div className="p-5 md:px-24 flex items-center justify-end gap-x-2 bg-primary/75">
      <p className="text-white font-bold">{labels['languages']}</p>
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
