import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';

export default function Home({ navItems }) {
  return (
    <ContainerBlock title="Andres Fernando Saa - Frontend Developer" navItems={navItems}>
      <Hero />
    </ContainerBlock>
  );
}
