import Button from '@/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Experience as ExpGenerated } from '../../generated/graphql';
import Experience from './../Experience';

type experienceCardProps = {
  cvUrl?: string;
  experiences: ExpGenerated[];
};

const ExperiencesCard = ({ cvUrl, experiences }: experienceCardProps) => {
  const { locale } = useRouter();
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
    fetchTranslations('ExperiencesCard');
  }, []);

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center">
      <div className="w-auto md:w-96 h-auto p-4 border border-stone-600 rounded-xl flex flex-col justify-between justify-self-center bg-black/50">
        <>
          <h2 className="font-montserrat font-bold text-carrara">{labels['work']}</h2>
          {experiences.map((experience, index) => {
            return <Experience key={experience?.sys?.id || index} {...experience} />;
          })}
          <div className="mt-4">
            {cvUrl?.length > 0 && (
              <Link href={cvUrl} target="_blank">
                <Button primary size="full" content={labels['downloadCV']} />
              </Link>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default ExperiencesCard;
