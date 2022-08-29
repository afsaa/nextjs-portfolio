import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import { GetAllExpsDocument } from '../generated/graphql';
import { useQuery } from '@apollo/client';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ExperienceAndProjects = ({ navItems }) => {
  const { loading, error, data } = useQuery(GetAllExpsDocument);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Experience and best projects' }} navItems={navItems}>
      <h1 className="mb-10 text-4xl text-center text-mirage font-montserrat">Experience and Projects</h1>
      <div className="m-0 md:my-4 px-10 py-5 md:py-10 flex flex-wrap items-start justify-around md:flex-nowrap gap-4 md:gap-6">
        {data?.experienceCollection?.items?.map((exp) => {
          return (
            <div className="w-full md:w-auto flex flex-col items-start" key={exp.sys.id}>
              <h2 className="mb-5 text-2xl text-primary font-montserrat font-bold">{exp.jobTitle}</h2>
              <h3 className="mb-5 text-xl text-mirage font-cabin">{exp.companyName}</h3>
              <div className="font-cabin">{documentToReactComponents(exp.description?.json)}</div>
            </div>
          );
        })}
      </div>
    </ContainerBlock>
  );
};

export default ExperienceAndProjects;
