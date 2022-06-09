import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ navItems }) {
  const { data, error } = useSWR(`api/contentful/entries/6mIZi967LZB1ytpguyNOR6`, fetcher);
  console.log(data);
  console.log(error);

  return (
    <ContainerBlock title="Andres Fernando Saa - Frontend Developer" navItems={navItems}>
      <Hero name={data?.fields?.name} role={data?.fields?.heading} description={data?.fields?.subheading} />
    </ContainerBlock>
  );
}
