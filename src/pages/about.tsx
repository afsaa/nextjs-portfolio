import ContainerBlock from '@/components/ContainerBlock';
import ArticleSection from '@/ui/articleSection';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createApolloClient } from '../utils/apolloClient';
import { GetAllSkillsDocument, GetNavigationDocument, GetPersonalInfoDocument, PersonalInfo, Skill } from '../generated/graphql';
import SkillComponent from '../components/Skill';

export const getStaticProps: GetStaticProps<{ navigationData: Navigation[]; personalInfoData: PersonalInfo; skillsData: Skill[] }> = async ({ locale }) => {
  try {
    const client = createApolloClient();
    const navigationResponse = await client.query({
      query: GetNavigationDocument,
      variables: { locale },
    });

    const personalInfoResponse = await client.query({
      query: GetPersonalInfoDocument,
      variables: { personId: '6n1bd6LTg3WLomldFn08aR', locale },
    });

    const skillsResponse = await client.query({
      query: GetAllSkillsDocument,
      variables: { locale },
    });

    if (navigationResponse.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }
    if (personalInfoResponse.data === null) {
      throw new Error('Failed to fetch personal info');
    }
    if (skillsResponse.data.skillCollection === null) {
      throw new Error('Failed to fetch skills');
    }

    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];
    const personalInfoData = personalInfoResponse.data.personalInfo as PersonalInfo;
    const skillsData = skillsResponse.data.skillCollection.items as Skill[];

    return {
      props: {
        navigationData,
        personalInfoData,
        skillsData,
      },
    };
  } catch (error) {
    return {
      props: {
        navigationData: [],
        personalInfoData: null,
        skillsData: [],
      },
    };
  }
};

const about = ({ navigationData, personalInfoData, skillsData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const hardSkills: Skill[] = skillsData.filter((skill) => skill.isHardSkill === true);
  const softSkills: Skill[] = skillsData.filter((skill) => skill.isSoftSkill === true);
  const otherSkills: Skill[] = skillsData.filter((skill) => skill.isOtherSkill === true);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - About' }} navItems={navigationData}>
      <ArticleSection sectionHeading="ABOUT ME" articleContent={personalInfoData.bio} />
      <ArticleSection
        sectionHeading="SKILLS"
        articleContent={
          <>
            <SkillComponent skills={hardSkills} hasHardSkills />
            <SkillComponent skills={softSkills} hasSoftSkills />
            <SkillComponent skills={otherSkills} hasOtherSkills />
          </>
        }
      />
    </ContainerBlock>
  );
};

export default about;
