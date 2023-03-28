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
  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - About' }} navItems={navigationData}>
      <ArticleSection sectionHeading="ABOUT ME" articleContent={personalInfoData.bio} />
      <ArticleSection
        sectionHeading="SKILLS"
        articleContent={
          <>
            <SkillComponent skills={skillsData} hasHardSkills />
            <h2 className="text-2xl font-montserrat">SOFT:</h2>
            <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
              <p>WRITTEN COMMUNICATION</p>
              <p>ACTIVE LISTENING</p>
              <p>EMPATHY</p>
              <p>TEAMWORK</p>
              <p>QUANTITATIVE REASONING</p>
            </div>
            <h2 className="text-2xl font-montserrat">OTHERS:</h2>
            <div className="my-5 flex md:flex-row flex-col items-center justify-start gap-10 font-cabin">
              <p>SPANISH - NATIVE</p>
              <p>ENGLISH - B2</p>
            </div>
          </>
        }
      />
    </ContainerBlock>
  );
};

export default about;
