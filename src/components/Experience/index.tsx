import React from 'react';
import Image from 'next/image';
import PlaceholderImg from '../../public/icons8-image-30.png';
import { Experience as ExpGenerated } from '../../generated/graphql';

const Experience = ({ companyLogo, companyName, jobTitle, timeWorked }: ExpGenerated) => {
  return (
    <div className="w-full mt-4 flex justify-between gap-4">
      <div className="w-14 h-12 flex items-center justify-center border border-stone-600 rounded-full">
        <Image className="m-0 rounded-full" width={45} height={45} src={companyLogo?.url || PlaceholderImg} alt={companyLogo?.description || 'Company logo'} />
      </div>
      <div className="w-full flex flex-col justify-around">
        <h3 className="font-cabin font-bold text-carrara">{companyName}</h3>
        <div className="flex justify-between">
          <p className="font-cabin text-carrara/50">{jobTitle}</p>
          <p className="font-cabin text-carrara/50">{timeWorked}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
