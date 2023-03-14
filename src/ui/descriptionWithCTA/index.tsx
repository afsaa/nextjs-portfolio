import React from 'react';
import { useRouter } from 'next/router';
import Button from '../button';
import Icon from '@/ui/icon';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
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
  const router = useRouter();
  console.log(linkedinUrl);

  return (
    <div className="w-full md:w-auto flex flex-col items-start">
      <h1 className="mb-10 text-6xl text-carrara font-montserrat">{fields?.name}</h1>
      <h2 className="mb-5 text-3xl text-primary-light font-cabin font-bold">{fields?.role}</h2>
      <h4 className="mb-5 text-lg text-carrara font-montserrat">{fields?.summary}</h4>
      {linkedinUrl && githubUrl && (
        <div className="mb-5 flex items-center justify-evenly gap-2.5">
          <Link referrerPolicy="no-referrer" target="_blank" href={linkedinUrl}>
            <Icon className="text-carrara" icon={<IoLogoLinkedin />} fontSize="30px" color="" />
          </Link>
          <Link referrerPolicy="no-referrer" target="_blank" href={githubUrl}>
            <Icon className="text-carrara" icon={<IoLogoGithub />} fontSize="30px" color="" />
          </Link>
        </div>
      )}
      {!!fields && <Button text="See more" primary onClick={() => router.push(redirectUrl)} />}
    </div>
  );
};

export default DescriptionWithCTA;
