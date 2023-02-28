import Experience from './../Experience';
import React from 'react';
import Button from '@/ui/button';
import { Experience as ExpGenerated } from '../../generated/graphql';
import PlaceholderImg from '../../public/icons8-image-30.png';

const ExperiencesCard = ({ experiences }: { experiences: ExpGenerated[] }) => {
  return (
    <div className="w-auto md:w-96 h-auto p-4 border border-stone-600 rounded-xl flex flex-col justify-between justify-self-center bg-black/50">
      <>
        <h2 className="font-montserrat font-bold text-carrara">Work</h2>
        {experiences.map((experience) => {
          return <Experience companyLogo={PlaceholderImg} companyName={experience.companyName} role={experience.jobTitle} timeWorked={'2020 - 2023'} />;
        })}
        <div className="mt-5 md:mt-0">
          <Button primary size="full" text="Download CV" />
        </div>
      </>
    </div>
  );
};

export default ExperiencesCard;
