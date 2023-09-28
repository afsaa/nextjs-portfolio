import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Button from '../button';
import Icon from '@/ui/icon';
import Link from 'next/link';

interface IDescriptionWithCTA {
  fields?: {
    name?: string;
    role?: string;
    summary?: string;
  };
  redirectUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

const DescriptionWithCTA = ({ fields, redirectUrl, linkedinUrl, githubUrl }: IDescriptionWithCTA) => {
  const { push, locale } = useRouter();
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
    fetchTranslations('descriptionWithCTA');
  }, []);

  return (
    <div className="w-full md:w-1/2 lg:w-2/3 p-0 md:pr-6 flex flex-col items-start justify-center">
      <h1 className="mb-10 text-6xl text-carrara font-montserrat">{fields?.name}</h1>
      <h2 className="mb-5 text-3xl text-primary-light font-cabin font-bold">{fields?.role}</h2>
      <h4 className="mb-5 text-lg text-carrara font-montserrat">{fields?.summary}</h4>
      {linkedinUrl && githubUrl && (
        <div className="mb-5 flex items-center justify-evenly gap-2.5">
          <Link referrerPolicy="no-referrer" target="_blank" href={linkedinUrl}>
            <Icon className="text-carrara" icon="SiLinkedin" fontSize="30px" color="" />
          </Link>
          <Link referrerPolicy="no-referrer" target="_blank" href={githubUrl}>
            <Icon className="text-carrara" icon="SiGithub" fontSize="30px" color="" />
          </Link>
        </div>
      )}
      {!!fields && <Button text={labels['seeMore']} primary onClick={() => push(redirectUrl)} />}
    </div>
  );
};

export default DescriptionWithCTA;
