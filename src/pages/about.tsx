import ContainerBlock from '@/components/ContainerBlock';
import { useTranslations } from '@/hooks';
import ArticleSection from '@/ui/articleSection';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import SkillComponent from '../components/Skill';
import { GetAboutPageDataDocument, Navigation, PersonalInfo, Skill } from '../generated/graphql';
import { createApolloClient } from '../utils/apolloClient';

interface AboutPageProps {
  navigationData: Navigation[];
  personalInfoData: PersonalInfo | null;
  skillsData: Skill[];
}

export const getStaticProps: GetStaticProps<AboutPageProps> = async ({ locale }) => {
  try {
    const client = createApolloClient();
    
    // Fetch all about page data in a single batched query
    const response = await client.query({
      query: GetAboutPageDataDocument,
      variables: {
        locale,
        personId: '6n1bd6LTg3WLomldFn08aR',
      },
    });

    if (response.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }
    if (!response.data.navigationCollection) {
      throw new Error('Failed to fetch navigation');
    }
    if (response.data.personalInfo === null) {
      throw new Error('Failed to fetch personal info');
    }
    if (response.data.skillCollection === null) {
      throw new Error('Failed to fetch skills');
    }

    const navigationData = (response.data.navigationCollection?.items || []) as Navigation[];
    const personalInfoData = response.data.personalInfo as PersonalInfo;
    const skillsData = (response.data.skillCollection?.items || []) as Skill[];

    return {
      props: {
        navigationData,
        personalInfoData,
        skillsData,
      },
    };
  } catch (error) {
    console.error('Error fetching about page data:', error);
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
  const { labels } = useTranslations('About');

  // Filter out navigation items with invalid paths
  const validNavItems = navigationData.filter((item) => item.pathname);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - About' }} navItems={validNavItems as any}>
      <ArticleSection sectionHeading={labels['aboutMeHeading']} articleText={personalInfoData?.bio || ''} />
      <ArticleSection
        sectionHeading={labels['skillsHeading']}
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
