import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import { GetNavigationDocument, GetProjectsDocument, Project } from '../generated/graphql';
import { createApolloClient } from '../utils/apolloClient';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ProjectCard from '../components/ProjectCard';
import { useTranslations } from '../hooks';
import { useState } from 'react';

export const getStaticProps: GetStaticProps<{ projectsData: Project[]; navigationData: Navigation[] }> = async ({ locale }) => {
  try {
    const client = createApolloClient();
    const getAllProjects = await client.query({
      query: GetProjectsDocument,
      variables: { locale },
    });
    const navigationResponse = await client.query({
      query: GetNavigationDocument,
      variables: { locale },
    });

    if (getAllProjects.data.projectCollection === null) {
      throw new Error('Failed to fetch projects');
    }
    if (navigationResponse.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }

    const projectsData = getAllProjects.data.projectCollection.items as Project[];
    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];

    return {
      props: {
        projectsData,
        navigationData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        projectsData: [],
        navigationData: [],
      },
    };
  }
};

const ExperienceAndProjects = ({ projectsData, navigationData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const translationsResponse = useTranslations('Projects');
  const [labels, setLabels] = useState(async () => {
    await translationsResponse.then((data) => {
      setLabels(data);
    });
  });

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Experience and best projects' }} navItems={navigationData}>
      <h1 className="mb-10 text-4xl text-center text-carrara font-montserrat">{labels['projectsHeading']}</h1>
      <div className="m-0 md:my-4 px-10 py-5 md:py-10 flex flex-wrap items-start justify-around gap-6 md:gap-8">
        {projectsData.map((project) => {
          return <ProjectCard {...project} />;
        })}
      </div>
    </ContainerBlock>
  );
};

export default ExperienceAndProjects;
