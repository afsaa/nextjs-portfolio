import React from 'react';
import Image from 'next/image';

const Experience = ({ companyLogo, companyName, role, timeWorked }: { companyLogo?: any; companyName: string; role: string; timeWorked?: string }) => {
  return (
    <div className="w-full mt-4 flex justify-between gap-4">
      <div className="w-14 h-12 flex items-center justify-center border border-stone-600 rounded-full">
        <Image className="m-0" width={45} height={45} src={companyLogo} alt="Company logo" />
      </div>
      <div className="w-full flex flex-col justify-around">
        <h3 className="font-cabin font-bold text-carrara">{companyName}</h3>
        <div className="flex justify-between">
          <p className="font-cabin text-carrara/50">{role}</p>
          <p className="font-cabin text-carrara/50">{timeWorked}</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
