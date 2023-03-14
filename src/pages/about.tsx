import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Icon from '@/ui/icon';
import ArticleSection from '@/ui/articleSection';
import { SiCss3 } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createApolloClient } from '../utils/apolloClient';
import { GetNavigationDocument, GetPersonalInfoDocument, PersonalInfo } from '../generated/graphql';

export const getStaticProps: GetStaticProps<{ navigationData: Navigation[]; personalInfoData: PersonalInfo }> = async ({ locale }) => {
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

    if (navigationResponse.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }
    if (personalInfoResponse.data === null) {
      throw new Error('Failed to fetch personal info');
    }

    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];
    const personalInfoData = personalInfoResponse.data.personalInfo as PersonalInfo;

    return {
      props: {
        navigationData,
        personalInfoData,
      },
    };
  } catch (error) {
    return {
      props: {
        navigationData: [],
        personalInfoData: null,
      },
    };
  }
};

const about = ({ navigationData, personalInfoData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - About' }} navItems={navigationData}>
      <ArticleSection sectionHeading="ABOUT ME" articleContent={personalInfoData.bio} />
      <section className="w-full h-auto mb-10 flex flex-col items-center">
        <h1 className="mb-5 font-montserrat text-4xl">SKILLS</h1>
        <article className="w-full h-auto px-10">
          <h2 className="text-2xl font-montserrat">HARD:</h2>
          <div className="my-5 flex items-center justify-between md:justify-start flex-wrap gap-10">
            <span className="flex flex-col items-center font-cabin">
              <Icon className="mb-2 text-carrara" icon={<SiHtml5 />} fontSize="50px" color="DarkOrange" />
              HTML5
            </span>
            <span className="flex flex-col items-center font-cabin">
              <Icon className="mb-2 text-carrara" icon={<SiCss3 />} fontSize="50px" color="DodgerBlue" />
              CSS3
            </span>
            <span className="flex flex-col items-center font-cabin">
              <Icon className="mb-2 text-carrara bg-black" icon={<SiJavascript />} fontSize="50px" color="yellow" />
              JAVASCRIPT
            </span>
            <span className="flex flex-col items-center font-cabin">
              <Icon className="mb-2 text-carrara" icon={<SiReact />} fontSize="50px" color="DeepSkyBlue" />
              REACT
            </span>
            <span className="flex flex-col items-center font-cabin">
              <Icon className="mb-2 text-carrara" icon={<SiRedux />} fontSize="50px" color="BlueViolet" />
              REDUX
            </span>
            <span className="flex flex-col items-center font-cabin">
              <Icon className="mb-2 text-carrara" icon={<SiGit />} fontSize="50px" color="DarkOrange" />
              GIT
            </span>
          </div>
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
        </article>
      </section>
    </ContainerBlock>
  );
};

export default about;
