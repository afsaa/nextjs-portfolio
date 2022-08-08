import React from 'react';

interface IArticleSection {
  sectionHeading: string;
  articleHeading?: string;
  articleContent: JSX.Element;
}

const ArticleSection = ({ sectionHeading, articleHeading, articleContent }: IArticleSection) => {
  return (
    <section className="w-full h-auto mb-10 flex flex-col items-center">
      <h1 className="mb-5 font-montserrat text-4xl">{sectionHeading}</h1>
      <article className="h-auto px-10 flex flex-col justify-between gap-5 font-cabin text-lg">
        {!!articleHeading && <h2 className="text-2xl font-montserrat">{articleHeading}</h2>}
        {articleContent}
      </article>
    </section>
  );
};

export default ArticleSection;
