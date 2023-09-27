import Head from 'next/head';
import ContainerBlock from '@/components/ContainerBlock';
import Hero from '@/components/Hero';
import ErrorContainer from '@/ui/error';
import DescriptionWithCTA from '@/ui/descriptionWithCTA';
import ImageContainer from '@/ui/imageContainer';
import ExperiencePreview from '@/components/ExperiencePreview';
import { GetNavigationDocument, GetUserDocument, GetExpPreviewDocument, Navigation, User, Preview, Experience, GetAllExpsDocument, PersonalInfo, GetPersonalInfoDocument } from '../generated/graphql';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createApolloClient } from '../utils/apolloClient';
import ExperiencesCard from '@/components/ExperiencesCard';

export const getStaticProps: GetStaticProps<{ navigationData: Navigation[]; userData: User; expPreviewData: Preview; expsData: Experience[]; personalInfoData: PersonalInfo }> = async ({ locale }) => {
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
    const personalInfoResponse = await client.query({
      query: GetPersonalInfoDocument,
      variables: { personId: '6n1bd6LTg3WLomldFn08aR', locale },
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
    if (personalInfoResponse.data === null) {
      throw new Error('Failed to fetch personal info');
    }

    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];
    const userData = userResponse.data.user as User;
    const expPreviewData = expPreviewResponse.data.preview as Preview;
    const expsData = allExpsResponse.data.experienceCollection.items as unknown as Experience[];
    const personalInfoData = personalInfoResponse.data.personalInfo as PersonalInfo;

    return {
      props: {
        navigationData,
        userData,
        expPreviewData,
        expsData,
        personalInfoData,
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
        personalInfoData: null,
      },
    };
  }
};

export default function Home({ navigationData, userData, expPreviewData, expsData, personalInfoData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Frontend Developer' }} navItems={navigationData}>
      <Hero
        error={false} // TO-DO: pass a variable for the error
        onError={() => <ErrorContainer />}
        render={() => (
          <>
            <DescriptionWithCTA fields={userData} redirectUrl="/about" linkedinUrl={personalInfoData?.linkedin} githubUrl={personalInfoData?.github} />
            <ImageContainer profilePicture={userData?.profilePicture} />
          </>
        )}
      />
      <div className="my-4 md:my-10 px-10 flex flex-wrap gap-6 md:gap-0">
        <ExperiencePreview heading={expPreviewData?.experienceHeading} description={expPreviewData?.experienceDescription} />
        <ExperiencesCard cvUrl={userData?.cv.url} experiences={expsData} />
      </div>
    </ContainerBlock>
  );
}
