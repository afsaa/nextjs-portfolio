import { useTranslations } from '@/hooks';
import ArticleSection from '@/ui/articleSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import ContainerBlock from '../components/ContainerBlock';
import { Contact, GetContactDocument, GetNavigationDocument, Navigation } from '../generated/graphql';
import { createApolloClient } from '../utils/apolloClient';

interface ContactPageProps {
  navigationData: Navigation[];
  contactData: Contact | null;
}

export const getStaticProps: GetStaticProps<ContactPageProps> = async ({ locale }) => {
  try {
    const client = createApolloClient();

    const navigationResponse = await client.query({
      query: GetNavigationDocument,
      variables: { locale },
    });

    const contactResponse = await client.query({
      query: GetContactDocument,
      variables: { contactId: 'Giej5xkiHd6hOM1VZxy31', locale },
    });

    if (!navigationResponse.data.navigationCollection) {
      throw new Error('Failed to fetch navigation');
    }

    if (!contactResponse.data.contact) {
      throw new Error('Failed to fetch contact data');
    }

    const navigationData = (navigationResponse.data.navigationCollection.items || []) as Navigation[];
    const contactData = contactResponse.data.contact as Contact;

    return {
      props: {
        navigationData,
        contactData,
      },
    };
  } catch (error) {
    console.error('Error fetching contact page data:', error);
    return {
      props: {
        navigationData: [],
        contactData: null,
      },
    };
  }
};

const contact = ({ navigationData, contactData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { labels } = useTranslations('Contact');

  // Filter out navigation items with invalid paths
  const validNavItems = navigationData.filter((item) => item.pathname);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Contact' }} navItems={validNavItems as any}>
      <div className="md:h-[calc(100vh-250px)] h-auto flex flex-col items-start gap-4">
        <div className="w-full">
          <ArticleSection
            sectionHeading={labels['contactHeading']}
            articleContent={
              <>
                <p className="font-cabin text-center">{contactData?.mainParagraph || ''}</p>
                {contactData?.contactSectionsCollection?.items?.map((contactSection: any, index: number) => (
                  <div key={index}>
                    <h2 className="text-2xl font-montserrat">{contactSection.heading}</h2>
                    {documentToReactComponents(contactSection.description.json)}
                  </div>
                ))}
              </>
            }
          />
        </div>
      </div>
    </ContainerBlock>
  );
};

export default contact;
