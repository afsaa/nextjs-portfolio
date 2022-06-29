import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Markdown from 'markdown-to-jsx';
import Button from '../../ui/button';

const ExperiencePreview = ({ heading, description }) => {
  const router = useRouter();

  return (
    <section className="px-5 py-5 h-80 px-10 flex flex-col items-center justify-center">
      <article className="w-full flex flex-col  items-center justify-between">
        <div className="flex items-center justify-center">
          <h2 className="text-3xl text-primary font-montserrat font-bold">{heading}</h2>
        </div>
        <div className="mt-5 px-12 flex items-center justify-center">
          <Markdown className="font-cabin text-lg text-justify indent-8">{description || ''}</Markdown>
        </div>
      </article>
      <div className="my-5 flex items-center justify-center">
        <Button text="See more" bg="black" color="white" onClick={() => router.push('/exp&projects')} />
      </div>
    </section>
  );
};

ExperiencePreview.propTypes = {
  heading: PropTypes.string,
  description: PropTypes.string,
};

export default ExperiencePreview;
