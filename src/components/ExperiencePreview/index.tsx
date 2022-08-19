import React from 'react';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import Button from '@/ui/button';

interface IExperiencePreview {
  heading: string;
  description: string;
}

const ExperiencePreview = ({ heading, description }: IExperiencePreview) => {
  const router = useRouter();

  return (
    <section className="m-0 md:my-4 px-10 md:px-24 py-5 md:py-10 h-auto flex flex-col items-center justify-around">
      <article className="w-full flex flex-col  items-center justify-between">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl text-primary font-montserrat font-bold">{heading}</h2>
        </div>
        <div className="mt-5 flex items-center justify-center">
          <Markdown className="font-cabin text-lg text-justify indent-8">{description || ''}</Markdown>
        </div>
      </article>
      <div className="my-5 flex items-center justify-center">
        <Button primary text="See more" onClick={() => router.push('/exp-and-projects')} />
      </div>
    </section>
  );
};

export default ExperiencePreview;
