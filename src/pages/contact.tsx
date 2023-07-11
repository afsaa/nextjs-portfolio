import React, { useState } from 'react';
import ContainerBlock from '../components/ContainerBlock';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { createApolloClient } from '../utils/apolloClient';
import { GetNavigationDocument } from '../generated/graphql';
import ArticleSection from '@/ui/articleSection';
import { useTranslations } from '../hooks';

export const getStaticProps: GetStaticProps<{ navigationData: Navigation[] }> = async ({ locale }) => {
  try {
    const client = createApolloClient();

    const navigationResponse = await client.query({
      query: GetNavigationDocument,
      variables: { locale },
    });

    if (navigationResponse.data.navigationCollection === null) {
      throw new Error('Failed to fetch navigation');
    }

    const navigationData = navigationResponse.data.navigationCollection.items as Navigation[];

    return {
      props: {
        navigationData,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        navigationData: [],
      },
    };
  }
};

const contact = ({ navigationData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const translationsResponse = useTranslations('Contact');
  const [labels, setLabels] = useState(async () => {
    await translationsResponse.then((data) => {
      setLabels(data);
    });
  });

  return (
    <ContainerBlock customMeta={{ title: 'Andres Fernando Saa - Contact' }} navItems={navigationData}>
      <div className="h-auto flex flex-col items-start  gap-4">
        <div className="w-full">
          <ArticleSection
            sectionHeading={labels['contactHeading']}
            articleContent={
              <>
                <p className="font-cabin text-center">
                  Thank you for visiting my portfolio! If you have any questions or would like to get in touch, please feel free to reach out to me via the following channels:
                </p>
                <div>
                  <h2 className="text-2xl font-montserrat">Email</h2>
                  <p className="font-cabin">
                    You can send me an email at{' '}
                    <a className="font-bold text-primary-light hover:text-primary" href="mailto:andressaa.dev@gmail.com">
                      andressaa.dev@gmail.com
                    </a>
                    . I try to respond to all emails within 24 hours.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-montserrat">LinkedIn</h2>
                  <p className="font-cabin">
                    Please visit my LinkedIn profile at{' '}
                    <a className="font-bold text-primary-light hover:text-primary" href="https://linkedin.com/in/andres-saa" target="_blank">
                      andres-saa
                    </a>
                    . I am always happy to connect with fellow professionals and discuss industry trends.
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-montserrat">Github</h2>
                  <p className="font-cabin">
                    Check out my Github profile at{' '}
                    <a className="font-bold text-primary-light hover:text-primary" href="https://github.com/afsaa" target="_blank">
                      afsaa
                    </a>
                    . You can see some of my recent projects and code samples. Thank you once again for your interest in my work. I look forward to hearing from you soon!
                  </p>
                </div>
              </>
            }
          />
        </div>
      </div>
    </ContainerBlock>
  );
};

export default contact;
