import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ErrorContainer from '@/ui/error';
import DescriptionWithCTA from '@/ui/descriptionWithCTA';
import ImageContainer from '@/ui/imageContainer';
import ExperiencePreview from '@/components/ExperiencePreview';
import { GetNavigationDocument, GetUserDocument, GetExpPreviewDocument, Navigation, User, Preview, Experience, GetAllExpsDocument } from '../generated/graphql';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createApolloClient } from '../utils/apolloClient';
import Button from '../ui/button';
import Image from 'next/image';
import ExperiencesCard from '@/components/ExperiencesCard';

export const getStaticProps: GetStaticProps<{ navigationData: Navigation[]; userData: User; expPreviewData: Preview; expsData: Experience[] }> = async ({ locale }) => {
  try {
    const client = createApolloClient();
    const navigationResponse = await client.query({
      query: GetNavigationDocument,
      variables: { locale },
    });
    const userResponse = await client.query({
      query: GetUserDocument,
      variables: { userId: '6mIZi967LZB1ytpguyNOR6', locale },
    });
    const expPreviewResponse = await client.query({
      query: GetExpPreviewDocument,
      variables: { previewId: '3JSTlKWt2HIcX4biS1eSqk', locale },
    });
    const allExpsResponse = await client.query({
      query: GetAllExpsDocument,
      variables: { locale },
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
    if (allExpsResponse.data.experienceCollection === null) {
      throw new Error('Failed to fetch experiences');
    }

    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];
    const userData = userResponse.data.user as User;
    const expPreviewData = expPreviewResponse.data.preview as Preview;
    const expsData = allExpsResponse.data.experienceCollection.items as unknown as Experience[];

    return {
      props: {
        navigationData,
        userData,
        expPreviewData,
        expsData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        navigationData: [],
        userData: null,
        expPreviewData: null,
        expsData: [],
      },
    };
  }
};

export default function Home({ navigationData, userData, expPreviewData, expsData }: InferGetStaticPropsType<typeof getStaticProps>) {
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
      <div className="h-auto md:h-96 px-10 grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 grid-row-1 md:grid-row-2 gap-5 md:gap-40">
        <ExperiencePreview heading={expPreviewData?.experienceHeading} description={expPreviewData?.experienceDescription} />
        <ExperiencesCard experiences={expsData} />
      </div>
    </ContainerBlock>
  );
}

function undefined({ PlaceholderImg }) {
  return (
    <div className="w-auto md:w-96 h-auto p-4 border border-stone-600 rounded-xl flex flex-col justify-between justify-self-center bg-black/50">
      <h2 className="font-montserrat font-bold text-carrara">Work</h2>
      <div className="w-full flex justify-between gap-4">
        <div className="w-14 h-12 flex items-center justify-center border border-stone-600 rounded-full">
          <Image className="m-0" width={45} height={45} src={PlaceholderImg} alt="Company logo" />
        </div>
        <div className="w-full flex flex-col justify-around">
          <h3 className="font-cabin font-bold text-carrara">Abocato</h3>
          <div className="flex justify-between">
            <p className="font-cabin text-carrara/50">Work role</p>
            <p className="font-cabin text-carrara/50">Time working</p>
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-0">
        <Button primary size="full" text="Download CV" />
      </div>
    </div>
  );
}
