import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ExperiencePreview from '@/components/ExperiencePreview';
import Button from '../ui/button';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home({ navItems }) {
  const router = useRouter();
  const { data: heroData } = useSWR(`api/contentful/entries/6mIZi967LZB1ytpguyNOR6`, fetcher);
  const { data: experiencePreviewData } = useSWR(`api/contentful/entries/3JSTlKWt2HIcX4biS1eSqk`, fetcher);

  return (
    <ContainerBlock title="Andres Fernando Saa - Frontend Developer" navItems={navItems}>
      <Hero>
        <div className="w-full md:w-auto flex flex-col items-start">
          <h1 className="mb-10 text-6xl text-mirage font-montserrat">{heroData?.fields?.name}</h1>
          <h2 className="mb-5 text-3xl text-primary font-cabin font-bold">{heroData?.fields?.role}</h2>
          <h4 className="mb-5 text-lg text-mirage font-montserrat">{heroData?.fields?.summary}</h4>
          <Button text="See more" primary onClick={() => router.push('/about')} />
        </div>
        <div className="w-full md:w-auto mt-10 md:ml-2 flex items-center justify-center">
          <Image
            className="rounded-md drop-shadow-xl"
            src={heroData?.fields?.profilePicture?.fields?.file?.url ? `https:${heroData?.fields?.profilePicture?.fields?.file?.url}` : '/me.jpg'}
            alt="Photo of me"
            width={500}
            height={500}
          />
        </div>
      </Hero>
      <ExperiencePreview heading={experiencePreviewData?.fields?.experienceHeading} description={experiencePreviewData?.fields?.experienceDescription} />
    </ContainerBlock>
  );
}
