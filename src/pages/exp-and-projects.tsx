import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import { GetAllExpsByLocaleDocument, GetNavigationDocument } from '../generated/graphql';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { createApolloClient } from '../utils/apolloClient';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

export const getStaticProps: GetStaticProps<{ expsData: Experience[]; navigationData: Navigation[] }> = async ({ locale }) => {
  try {
    const client = createApolloClient();
    const getAllExpsByLocalResponse = await client.query({
      query: GetAllExpsByLocaleDocument,
      variables: { locale },
    });
    const navigationResponse = await client.query({
      query: GetNavigationDocument,
      variables: { locale },
    });

    if (getAllExpsByLocalResponse.data.experienceCollection === null) {
      throw new Error('Failed to fetch navigation');
    }
    if (navigationResponse.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }

    const expsData = getAllExpsByLocalResponse.data.experienceCollection.items as unknown as Experience[];
    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];

    return {
      props: {
        expsData,
        navigationData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        expsData: [],
        navigationData: [],
      },
    };
  }
};

const ExperienceAndProjects = ({ expsData, navigationData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Experience and best projects' }} navItems={navigationData}>
      <h1 className="mb-10 text-4xl text-center text-mirage font-montserrat">Experience and Projects</h1>
      <div className="m-0 md:my-4 px-10 py-5 md:py-10 flex flex-wrap items-start justify-around md:flex-nowrap gap-4 md:gap-6">
        {expsData?.map((exp, index) => {
          return (
            <div className="w-full md:w-auto flex flex-col items-start" key={index}>
              <h2 className="mb-5 text-2xl text-primary font-montserrat font-bold">{exp?.jobTitle}</h2>
              <h3 className="mb-5 text-xl text-mirage font-cabin">{exp?.companyName}</h3>
              <div className="font-cabin">{documentToReactComponents(exp?.description?.json)}</div>
            </div>
          );
        })}
      </div>
    </ContainerBlock>
  );
};

export default ExperienceAndProjects;
