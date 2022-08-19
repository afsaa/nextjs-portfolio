import Head from 'next/head';
import { gql, useQuery } from '@apollo/client';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ErrorContainer from '@/ui/error';
import DescriptionWithCTA from '@/ui/descriptionWithCTA';
import ImageContainer from '@/ui/imageContainer';
import ExperiencePreview from '@/components/ExperiencePreview';

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

const userQuery = gql`
  query {
    user(id: "6mIZi967LZB1ytpguyNOR6") {
      name
      role
      summary
      profilePicture {
        title
        url
      }
    }
  }
`;

const expPreviewQuery = gql`
  query {
    preview(id: "3JSTlKWt2HIcX4biS1eSqk") {
      experienceHeading
      experienceDescription
    }
  }
`;

export default function Home() {
  const { data: navigationData } = useQuery(navigationQuery);
  const { error: heroError, data: userData } = useQuery(userQuery);
  const { data: expPreviewData } = useQuery(expPreviewQuery);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Frontend Developer' }} navItems={navigationData?.navigationCollection?.items}>
      <Hero
        error={heroError}
        onError={() => <ErrorContainer />}
        render={() => (
          <>
            <DescriptionWithCTA fields={userData?.user} redirectUrl="/about" />
            <ImageContainer profilePicture={userData?.user?.profilePicture} />
          </>
        )}
      />
      <ExperiencePreview heading={expPreviewData?.preview?.experienceHeading} description={expPreviewData?.preview?.experienceDescription} />
    </ContainerBlock>
  );
}
