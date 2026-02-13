import { useTranslations } from '@/hooks';
import Button from '@/ui/button';
import Link from 'next/link';
import { Experience as ExpGenerated } from '../../generated/graphql';
import Experience from './../Experience';

type experienceCardProps = {
  cvUrl?: string;
  experiences: ExpGenerated[];
};

const ExperiencesCard = ({ cvUrl, experiences }: experienceCardProps) => {
  const { labels } = useTranslations('ExperiencesCard');

  return (
    <div className="w-full md:w-1/2 lg:w-1/3 flex items-center justify-center">
      <div className="w-auto md:w-96 h-auto p-4 border border-stone-600 rounded-xl flex flex-col justify-between justify-self-center bg-black/50">
        <>
          <h2 className="font-montserrat font-bold text-carrara">{labels['work']}</h2>
          {experiences.map((experience, index) => {
            return <Experience key={experience?.sys?.id || index} {...experience} />;
          })}
          <div className="mt-4">
            {cvUrl && cvUrl.length > 0 && (
              <Link href={cvUrl} target="_blank">
                <Button primary size="full" content={labels['downloadCV']} />
              </Link>
            )}
          </div>
        </>
      </div>
    </div>
  );
};

export default ExperiencesCard;
