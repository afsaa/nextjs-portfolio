import Button from '@/ui/button';
import Markdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';
import { useTranslations } from '@/hooks';

interface IExperiencePreview {
  heading?: string;
  description?: string;
}

const ExperiencePreview = ({ heading, description }: IExperiencePreview) => {
  const { push } = useRouter();
  const { labels } = useTranslations('ExperiencePreview');

  return (
    <section className="w-full md:w-1/2 lg:w-2/3 p-0 md:pr-10 flex flex-col items-center justify-evenly">
      <article className="w-full flex flex-col  items-center justify-between">
        <div className="flex items-center justify-center">
          <h2 className="text-center text-3xl text-carrara font-montserrat font-bold">{heading}</h2>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Markdown className="font-cabin text-lg text-justify indent-8">{description || ''}</Markdown>
        </div>
      </article>
      <div className="my-5 flex items-center justify-center">
        <Button primary content={labels['seeMore']} onClick={() => push('/exp-and-projects')} />
      </div>
    </section>
  );
};

export default ExperiencePreview;
