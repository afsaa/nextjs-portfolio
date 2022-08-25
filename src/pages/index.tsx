import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ErrorContainer from '@/ui/error';
import DescriptionWithCTA from '@/ui/descriptionWithCTA';
import ImageContainer from '@/ui/imageContainer';
import ExperiencePreview from '@/components/ExperiencePreview';
import { GetNavigationDocument, GetUserDocument, GetExpPreviewDocument, Navigation, User, Preview } from '../generated/graphql';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createApolloClient } from '../utils/apolloClient';

export const getStaticProps: GetStaticProps<{ navigationData: Navigation[]; userData: User; expPreviewData: Preview }> = async () => {
  try {
    const client = createApolloClient();
    const navigationResponse = await client.query({
      query: GetNavigationDocument,
    });
    const userResponse = await client.query({
      query: GetUserDocument,
      variables: { userId: '6mIZi967LZB1ytpguyNOR6' },
    });
    const expPreviewResponse = await client.query({
      query: GetExpPreviewDocument,
      variables: { previewId: '3JSTlKWt2HIcX4biS1eSqk' },
    });

    if (navigationResponse.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }
    if (userResponse.data.user === null) {
      throw new Error('Failed to fetch user');
    }
    if (expPreviewResponse.data.preview === null) {
      throw new Error('Failed to fetch preview');
    }

    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];
    const userData = userResponse.data.user as User;
    const expPreviewData = expPreviewResponse.data.preview as Preview;

    return {
      props: {
        navigationData,
        userData,
        expPreviewData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        navigationData: [],
        userData: null,
        expPreviewData: null,
      },
    };
  }
};

export default function Home({ navigationData, userData, expPreviewData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Frontend Developer' }} navItems={navigationData}>
      <Hero
        error={false} // TO-DO: pass a variable for the error
        onError={() => <ErrorContainer />}
        render={() => (
          <>
            <DescriptionWithCTA fields={userData} redirectUrl="/about" />
            <ImageContainer profilePicture={userData?.profilePicture} />
          </>
        )}
      />
      <ExperiencePreview heading={expPreviewData?.experienceHeading} description={expPreviewData?.experienceDescription} />
    </ContainerBlock>
  );
}
