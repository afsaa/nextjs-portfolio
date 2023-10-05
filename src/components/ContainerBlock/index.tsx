import React, { ReactNode } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Navbar from '@/components/Navbar';
import { INavItem } from '../Navbar/partials/NavItem';
import TopArea from '../TopArea';
import Footer from '../Footer';

interface IContainerBlock {
  children: ReactNode;
  navItems: INavItem[];
  customMeta?: object;
}

function ContainerBlock({ children, navItems, ...customMeta }: IContainerBlock) {
  const router = useRouter();

  const meta = {
    title: 'Andres Fernando Saa | Expert Frontend Developer Portfolio',
    description: `Explore the impressive frontend development portfolio of Andres Fernando Saa, a skilled and innovative developer specialized in crafting seamless web experiences. Perfect for IT recruiters seeking a top-tier talent for their projects. Check out my work now!`,
    image: '/avatar.png',
    type: 'website',
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://www.saacodes.com/${router.asPath}`} />
        <link rel="canonical" href={`https://www.saacodes.com/${router.asPath}`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Andres Fernando Saa" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@afsaa" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <main className="w-full bg-mirage text-carrara">
        <div>
          <TopArea />
          <Navbar navItems={navItems} />
          <div>{children}</div>
          <Footer navItems={navItems} />
        </div>
      </main>
    </div>
  );
}

export default ContainerBlock;
