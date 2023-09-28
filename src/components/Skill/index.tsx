import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Skill } from '../../generated/graphql';
import SkillItem from './partials/SkillItem';

interface ISkill {
  skills: Skill[];
  hasHardSkills?: boolean;
  hasSoftSkills?: boolean;
  hasOtherSkills?: boolean;
}

const SkillComponent = ({ skills, hasHardSkills, hasSoftSkills, hasOtherSkills }: ISkill): JSX.Element => {
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
    fetchTranslations('Skill');
  }, []);

  return (
    <>
      {hasHardSkills && (
        <div>
          <h2 className="text-2xl font-montserrat">{labels['hardSkillsHeading']}</h2>
          <div className="my-5 flex items-center justify-around md:justify-start flex-wrap gap-10">
            {skills.map((skill) => {
              return <SkillItem type="hard" name={skill.technology} />;
            })}
          </div>
        </div>
      )}
      {hasSoftSkills && (
        <div>
          <h2 className="text-2xl font-montserrat">{labels['softSkillsHeading']}</h2>
          <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
            {skills.map((skill) => {
              return <SkillItem type="soft" name={skill.technology} />;
            })}
          </div>
        </div>
      )}
      {hasOtherSkills && (
        <div>
          <h2 className="text-2xl font-montserrat"> {labels['otherSkillsHeading']}</h2>
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
