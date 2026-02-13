import { useTranslations } from '@/hooks';
import { Skill } from '../../generated/graphql';
import SkillItem from './partials/SkillItem';

interface ISkill {
  skills: Skill[];
  hasHardSkills?: boolean;
  hasSoftSkills?: boolean;
  hasOtherSkills?: boolean;
}

const SkillComponent = ({ skills, hasHardSkills, hasSoftSkills, hasOtherSkills }: ISkill): JSX.Element => {
  const { labels } = useTranslations('Skill');

  return (
    <>
      {hasHardSkills && (
        <div>
          <h2 className="text-2xl font-montserrat">{labels['hardSkillsHeading']}</h2>
          <div className="my-5 flex items-center justify-around md:justify-start flex-wrap gap-10">
            {skills.map((skill, index) => {
              return <SkillItem key={skill?.sys?.id || `${skill.technology || 'skill'}-${index}`} type="hard" name={skill.technology || ''} />;
            })}
          </div>
        </div>
      )}
      {hasSoftSkills && (
        <div>
          <h2 className="text-2xl font-montserrat">{labels['softSkillsHeading']}</h2>
          <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
            {skills.map((skill, index) => {
              return <SkillItem key={skill?.sys?.id || `${skill.technology || 'skill'}-${index}`} type="soft" name={skill.technology || ''} />;
            })}
          </div>
        </div>
      )}
      {hasOtherSkills && (
        <div>
          <h2 className="text-2xl font-montserrat"> {labels['otherSkillsHeading']}</h2>
          <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
            {skills.map((skill, index) => {
              return <SkillItem key={skill?.sys?.id || `${skill.technology || 'skill'}-${index}`} type="other" name={skill.technology || ''} />;
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default SkillComponent;
