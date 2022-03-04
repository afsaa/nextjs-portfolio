import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';

const navItems = [
  {
    id: 1,
    pathname: '/',
    title: 'Home',
  },
  {
    id: 2,
    pathname: '/about',
    title: 'About me',
  },
  {
    id: 3,
    pathname: '/exp-&-projects',
    title: 'Experience and Projects',
  },
  {
    id: 4,
    pathname: '/contact',
    title: 'Contact',
  },
];

export default function Home() {
  return (
    <ContainerBlock title="Andres Fernando Saa - Developer" navItems={navItems}>
      <h1>Hero!</h1>
    </ContainerBlock>
  );
}
