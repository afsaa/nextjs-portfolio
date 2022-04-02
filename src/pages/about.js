import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';

const about = ({ navItems }) => {
  return (
    <ContainerBlock title="Andres Fernando Saa - About" navItems={navItems}>
      <h1>About</h1>
    </ContainerBlock>
  );
};

export default about;
