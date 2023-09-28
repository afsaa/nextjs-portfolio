import React, { useEffect, useState } from 'react';
import ContainerBlock from '../components/ContainerBlock';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createApolloClient } from '../utils/apolloClient';
import { Contact, ContactSection, GetContactDocument, GetNavigationDocument } from '../generated/graphql';
import ArticleSection from '@/ui/articleSection';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { useRouter } from 'next/router';

export const getStaticProps: GetStaticProps<{ navigationData: Navigation[]; contactData: Contact }> = async ({ locale }) => {
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

    if (navigationResponse.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }

    if (contactResponse.data.contact === null) {
      throw new Error('Failed to fetch contact data');
    }

    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];

    const contactData = contactResponse.data.contact as Contact;

    return {
      props: {
        navigationData,
        contactData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        navigationData: [],
        contactData: null,
      },
    };
  }
};

const contact = ({ navigationData, contactData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { locale } = useRouter();
  const [labels, setLabels] = useState({});

  const fetchTranslations = async (componentName: string) => {
    try {
      const labelsResponse = await fetch(`/api/staticdata?locale=${locale}&componentName=${componentName}`);
      if (!labelsResponse.ok) {
        throw new Error('Network response was not ok');
      }
      const labelsData = await labelsResponse.json();
      return setLabels(labelsData);
    } catch (error) {
      console.error('Error fetching labels data:', error);
    }
  };

  useEffect(() => {
    fetchTranslations('Contact');
  }, []);

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Contact' }} navItems={navigationData}>
      <div className="md:h-[calc(100vh-508px)] h-auto flex flex-col items-start  gap-4">
        <div className="w-full">
          <ArticleSection
            sectionHeading={labels['contactHeading']}
            articleContent={
              <>
                <p className="font-cabin text-center">{contactData.mainParagraph}</p>
                {contactData.contactSectionsCollection.items.map((contactSection: ContactSection, index) => (
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
