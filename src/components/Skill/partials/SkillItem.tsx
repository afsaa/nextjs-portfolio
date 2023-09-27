import React from 'react';
import Icon from '@/ui/icon';

interface ISkillItem {
  type: 'hard' | 'soft' | 'other';
  name: string;
}

const SkillItem = ({ type, name }: ISkillItem): JSX.Element => {
  const hasSoftOrOtherSkill: boolean = type === 'soft' || type === 'other';

  return (
    <>
      {type === 'hard' && (
        <span className="flex flex-col items-center font-cabin">
          <Icon className="mb-2 text-carrara" icon={`Si${name}`} fontSize="50px" color="" />
          {name}
        </span>
      )}
      {hasSoftOrOtherSkill && (
        <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
          <p>{name}</p>
        </div>
      )}
    </>
  );
};

export default SkillItem;
