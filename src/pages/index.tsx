import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ErrorContainer from '@/ui/error';
import DescriptionWithCTA from '@/ui/descriptionWithCTA';
import ImageContainer from '@/ui/imageContainer';
import ExperiencePreview from '@/components/ExperiencePreview';
import useSWR from 'swr';

const navigationQuery = gql`
  query {
    navigationCollection(order: sys_publishedAt_ASC) {
      items {
        title
        pathname
      }
    }
  }
`;

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Home() {
  const { data } = useQuery(navigationQuery);
  const { data: heroData, error: heroError } = useSWR(`api/contentful/entries/6mIZi967LZB1ytpguyNOR6`, fetcher);
  const { data: experiencePreviewData, error: experiencePreviewError } = useSWR(`api/contentful/entries/3JSTlKWt2HIcX4biS1eSqk`, fetcher);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Frontend Developer' }} navItems={data?.navigationCollection?.items}>
      <Hero
        error={heroError}
        onError={() => <ErrorContainer />}
        render={() => (
          <>
            <DescriptionWithCTA fields={heroData?.fields} redirectUrl="/about" />
            <ImageContainer fields={heroData?.fields} />
          </>
        )}
      />
      <ExperiencePreview heading={experiencePreviewData?.fields?.experienceHeading} description={experiencePreviewData?.fields?.experienceDescription} />
    </ContainerBlock>
  );
}
