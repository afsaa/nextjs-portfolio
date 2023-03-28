import React from 'react';
import { Skill } from '../../generated/graphql';
import SkillItem from './partials/SkillItem';

interface ISkill {
  skills: Skill[];
  hasHardSkills?: boolean;
  hasSoftSkills?: boolean;
  hasOtherSkills?: boolean;
}

const SkillComponent = ({ skills, hasHardSkills, hasSoftSkills, hasOtherSkills }: ISkill): JSX.Element => {
  return (
    <>
      {hasHardSkills && (
        <div>
          <h2 className="text-2xl font-montserrat">HARD:</h2>
          <div className="my-5 flex items-center justify-around md:justify-start flex-wrap gap-10">
            {skills.map((skill) => {
              return <SkillItem type="hard" name={skill.technology} />;
            })}
          </div>
        </div>
      )}
      {hasSoftSkills && (
        <div>
          <h2 className="text-2xl font-montserrat">SOFT:</h2>
          <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
            {skills.map((skill) => {
              return <SkillItem type="soft" name={skill.technology} />;
            })}
          </div>
        </div>
      )}
      {hasOtherSkills && (
        <div>
          <h2 className="text-2xl font-montserrat">OTHERS:</h2>
          <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
            {skills.map((skill) => {
              return <SkillItem type="other" name={skill.technology} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillComponent;
