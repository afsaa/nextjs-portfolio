import Experience from './../Experience';
import React, { useState } from 'react';
import Button from '@/ui/button';
import { Experience as ExpGenerated } from '../../generated/graphql';
import Link from 'next/link';
import { useTranslations } from '../../hooks';

type experienceCardProps = {
  cvUrl?: string;
  experiences: ExpGenerated[];
};

const ExperiencesCard = ({ cvUrl, experiences }: experienceCardProps) => {
  const translationsResponse = useTranslations('ExperiencesCard');
  const [labels, setLabels] = useState(async () => {
    await translationsResponse.then((data) => {
      setLabels(data);
    });
  });

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center">
      <div className="w-auto md:w-96 h-auto p-4 border border-stone-600 rounded-xl flex flex-col justify-between justify-self-center bg-black/50">
        <>
          <h2 className="font-montserrat font-bold text-carrara">{labels['work']}</h2>
          {experiences.map((experience) => {
            return <Experience {...experience} />;
          })}
          <div className="mt-4">
            {cvUrl?.length > 0 && (
              <Link href={cvUrl} target="_blank">
                <Button primary size="full" text={labels['downloadCV']} />
              </Link>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default ExperiencesCard;
