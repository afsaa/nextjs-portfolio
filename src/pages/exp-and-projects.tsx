import ContainerBlock from '@/components/ContainerBlock';
import { useTranslations } from '@/hooks';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ProjectCard from '../components/ProjectCard';
import { GetNavigationDocument, GetProjectsDocument, Navigation, Project } from '../generated/graphql';
import { createApolloClient } from '../utils/apolloClient';

interface ExperienceAndProjectsPageProps {
  projectsData: Project[];
  navigationData: Navigation[];
}

export const getStaticProps: GetStaticProps<ExperienceAndProjectsPageProps> = async ({ locale }) => {
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

    if (!getAllProjects.data.projectCollection) {
      throw new Error('Failed to fetch projects');
    }
    if (!navigationResponse.data.navigationCollection) {
      throw new Error('Failed to fetch navigation');
    }

    const projectsData = (getAllProjects.data.projectCollection.items || []) as Project[];
    const navigationData = (navigationResponse.data.navigationCollection.items || []) as Navigation[];

    return {
      props: {
        projectsData,
        navigationData,
      },
    };
  } catch (error) {
    console.error('Error fetching experience and projects page data:', error);
    return {
      props: {
        projectsData: [],
        navigationData: [],
      },
    };
  }
};

const ExperienceAndProjects = ({ projectsData, navigationData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { labels } = useTranslations('Projects');

  // Filter out navigation items with invalid paths
  const validNavItems = navigationData.filter((item) => item.pathname);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Experience and best projects' }} navItems={validNavItems as any}>
      <h1 className="mb-10 text-4xl text-center text-carrara font-montserrat">{labels['projectsHeading']}</h1>
      <div className="m-0 md:my-4 px-10 py-5 md:py-10 flex flex-wrap items-start justify-around gap-6 md:gap-8">
        {projectsData.map((project, index) => {
          return <ProjectCard key={project?.sys?.id || index} {...project} />;
        })}
      </div>
    </ContainerBlock>
  );
};

export default ExperienceAndProjects;
