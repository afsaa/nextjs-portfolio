import { useTranslations } from '@/hooks';
import ButtonLink from '@/ui/buttonLink';
import { useRouter } from 'next/router';

const TopArea = () => {
  const { locales, locale } = useRouter();
  const { labels } = useTranslations('TopArea');

  return (
    <div className="p-5 md:px-24 flex items-center justify-end gap-x-2 bg-black">
      <p className="text-carrara font-bold">{labels['languages']}</p>
      {locales?.map((localItem, index) => (
        <form key={index} action="/api/language" method="POST">
          <input type="hidden" name="selectedLocale" value={localItem} />
          <ButtonLink active={locale !== localItem} type="submit" content={localItem} />
        </form>
      ))}
    </div>
  );
};

export default TopArea;
