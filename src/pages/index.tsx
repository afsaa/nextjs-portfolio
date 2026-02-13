import ContainerBlock from '@/components/ContainerBlock';
import ExperiencePreview from '@/components/ExperiencePreview';
import ExperiencesCard from '@/components/ExperiencesCard';
import Hero from '@/components/Hero';
import DescriptionWithCTA from '@/ui/descriptionWithCTA';
import ErrorContainer from '@/ui/error';
import ImageContainer from '@/ui/imageContainer';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { Experience, GetHomePageDataDocument, Navigation, PersonalInfo, Preview, User } from '../generated/graphql';
import { createApolloClient } from '../utils/apolloClient';

interface HomePageProps {
  navigationData: Navigation[];
  userData: User | null;
  expPreviewData: Preview | null;
  expsData: Experience[];
  personalInfoData: PersonalInfo | null;
}

export const getStaticProps: GetStaticProps<HomePageProps> = async ({ locale }) => {
  try {
    const client = createApolloClient();
    
    // Fetch all home page data in a single batched query
    const response = await client.query({
      query: GetHomePageDataDocument,
      variables: {
        locale,
        userId: '6mIZi967LZB1ytpguyNOR6',
        previewId: '3JSTlKWt2HIcX4biS1eSqk',
        personId: '6n1bd6LTg3WLomldFn08aR',
      },
    });

    // Validate required data
    if (!response.data.navigationCollection) {
      throw new Error('Failed to fetch navigation');
    }
    if (!response.data.user) {
      throw new Error('Failed to fetch user');
    }
    if (!response.data.preview) {
      throw new Error('Failed to fetch preview');
    }
    if (!response.data.experienceCollection) {
      throw new Error('Failed to fetch experiences');
    }
    if (!response.data.personalInfo) {
      throw new Error('Failed to fetch personal info');
    }

    const navigationData = (response.data.navigationCollection.items || []) as Navigation[];
    const userData = response.data.user as User;
    const expPreviewData = response.data.preview as Preview;
    const expsData = (response.data.experienceCollection.items || []) as unknown as Experience[];
    const personalInfoData = response.data.personalInfo as PersonalInfo;

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
    console.error('Error fetching home page data:', error);
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
  // Filter out navigation items with invalid paths
  const validNavItems = navigationData.filter((item) => item.pathname);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Frontend Developer' }} navItems={validNavItems as any}>
      <Hero
        error={false} // TO-DO: pass a variable for the error
        onError={() => <ErrorContainer />}
        render={() => (
          <>
            <DescriptionWithCTA fields={userData ? { name: userData.name || undefined, role: userData.role || undefined, summary: userData.summary || undefined } : undefined} redirectUrl="/about" linkedinUrl={personalInfoData?.linkedin || undefined} githubUrl={personalInfoData?.github || undefined} />
            <ImageContainer profilePicture={userData?.profilePicture ? { url: userData.profilePicture.url || undefined, description: userData.profilePicture.description || undefined } : undefined} />
          </>
        )}
      />
      <div className="my-4 md:my-10 px-10 flex flex-wrap gap-6 md:gap-0">
        <ExperiencePreview heading={expPreviewData?.experienceHeading || ''} description={expPreviewData?.experienceDescription || ''} />
        <ExperiencesCard cvUrl={userData?.cv?.url || undefined} experiences={expsData} />
      </div>
    </ContainerBlock>
  );
}
