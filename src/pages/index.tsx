import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ErrorContainer from '@/ui/error';
import DescriptionWithCTA from '@/ui/descriptionWithCTA';
import ImageContainer from '@/ui/imageContainer';
import ExperiencePreview from '@/components/ExperiencePreview';
import { useGetExpPreviewQuery, useGetNavigationQuery, useGetUserQuery } from '../generated/graphql';

export default function Home() {
  const { loading: navigationLoading, error: navigationError, data: navigationData } = useGetNavigationQuery();
  const { loading: heroLoading, error: heroError, data: userData } = useGetUserQuery({ variables: { userId: '6mIZi967LZB1ytpguyNOR6' } });
  const { loading: expPreviewLoading, error: expPreviewError, data: expPreviewData } = useGetExpPreviewQuery({ variables: { previewId: '3JSTlKWt2HIcX4biS1eSqk' } });

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
