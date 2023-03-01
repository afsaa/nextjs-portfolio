import React from 'react';
import { useRouter } from 'next/router';
import Button from '../button';

interface IDescriptionWithCTA {
  fields?: {
    name?: string;
    role?: string;
    summary?: string;
  };
  redirectUrl?: string;
}

const DescriptionWithCTA = ({ fields, redirectUrl }: IDescriptionWithCTA) => {
  const router = useRouter();

  return (
    <div className="w-full md:w-auto flex flex-col items-start">
      <h1 className="mb-10 text-6xl text-carrara font-montserrat">{fields?.name}</h1>
      <h2 className="mb-5 text-3xl text-primary-light font-cabin font-bold">{fields?.role}</h2>
      <h4 className="mb-5 text-lg text-carrara font-montserrat">{fields?.summary}</h4>
      {!!fields && <Button text="See more" primary onClick={() => router.push(redirectUrl)} />}
    </div>
  );
};

export default DescriptionWithCTA;
