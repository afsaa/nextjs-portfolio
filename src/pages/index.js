import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ExperiencePreview from '@/components/ExperiencePreview';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ navItems }) {
  const { data: heroData } = useSWR(`api/contentful/entries/6mIZi967LZB1ytpguyNOR6`, fetcher);
  const { data: experiencePreviewData } = useSWR(`api/contentful/entries/3JSTlKWt2HIcX4biS1eSqk`, fetcher);
  return (
    <ContainerBlock title="Andres Fernando Saa - Frontend Developer" navItems={navItems}>
      <Hero name={heroData?.fields?.name} role={heroData?.fields?.role} description={heroData?.fields?.summary} />
      <ExperiencePreview heading={experiencePreviewData?.fields?.experienceHeading} description={experiencePreviewData?.fields?.experienceDescription} />
    </ContainerBlock>
  );
}
