import Button from '@/ui/button';
import Markdown from 'markdown-to-jsx';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface IExperiencePreview {
  heading: string;
  description: string;
}

const ExperiencePreview = ({ heading, description }: IExperiencePreview) => {
  const { push, locale } = useRouter();
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
    fetchTranslations('ExperiencePreview');
  }, []);

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
