import Experience from './../Experience';
import React from 'react';
import Button from '@/ui/button';
import { Experience as ExpGenerated } from '../../generated/graphql';

const ExperiencesCard = ({ experiences }: { experiences: ExpGenerated[] }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center">
      <div className="w-auto md:w-96 h-auto p-4 border border-stone-600 rounded-xl flex flex-col justify-between justify-self-center bg-black/50">
        <>
          <h2 className="font-montserrat font-bold text-carrara">Work</h2>
          {experiences.map((experience) => {
            return <Experience {...experience} />;
          })}
          <div className="mt-4">
            <Button primary size="full" text="Download CV" />
          </div>
        </>
      </div>
    </div>
  );
};

export default ExperiencesCard;
