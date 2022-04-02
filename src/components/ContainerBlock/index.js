import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
// import Footer from './Footer';

export default function ContainerBlock({ children, navItems, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: 'Andres Fernando Saa - Frontend Developer, Personal Finance Enthusiast',
    description: `I've been developing websites and web apps for 3 years straight. Get in touch with me to know more.`,
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
        <meta property="og:url" content={`https://andresfernandosaa.com${router.asPath}`} />
        <link rel="canonical" href={`https://andresfernandosaa.com${router.asPath}`} />
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
        {meta.date && <meta property="article:published_time" content={meta.date} />}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar navItems={navItems} />
        <div>{children}</div>
        {/* <Footer /> */}
      </main>
    </div>
  );
}

ContainerBlock.propTypes = {
  children: PropTypes.node.isRequired,
  customMeta: PropTypes.object,
  navItems: PropTypes.arrayOf(PropTypes.object),
};

ContainerBlock.defaultProps = {
  customMeta: {
    title: '',
    description: '',
    image: '',
    type: '',
  },
  navItems: [{}],
};
