import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import { useGetAllExpsQuery } from '../generated/graphql';

const ExperienceAndProjects = ({ navItems }) => {
  const { loading, error, data } = useGetAllExpsQuery();

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Experience and best projects' }} navItems={navItems}>
      <h1>Experience and Projects</h1>
      {data?.experienceCollection?.items?.map((exp) => {
        return (
          <div key={exp.sys.id}>
            <h2>{exp.jobTitle}</h2>
            <h3>{exp.companyName}</h3>
            <p>{exp.description}</p>
          </div>
        );
      })}
    </ContainerBlock>
  );
};

export default ExperienceAndProjects;
