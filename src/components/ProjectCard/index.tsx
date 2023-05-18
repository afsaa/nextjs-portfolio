import React from 'react';
import { Project } from '../../generated/graphql';
import Icon from '../../ui/icon';

interface ProjectCardProps extends Project {}

const ProjectCard = ({ title, description, technologies, image, url }: ProjectCardProps): JSX.Element => {
  return (
    <div className="border border-stone-600 rounded-xl bg-black/50 shadow-md  overflow-hidden hover:opacity-80 focus:opacity-80">
      <img src={image?.url || 'https://via.placeholder.com/400x250'} alt={title} className="w-full h-48 object-fill" />
      <div className="p-4">
        <h3 className="mb-2 font-montserrat font-bold text-xl">{title}</h3>
        <p className="mb-4 font-cabin text-carrara/50 whitespace-normal">{description}</p>
        <div className="flex flex-wrap">
          {technologies.map((technology) => (
            <span key={technology} className="mr-2 mb-2 py-1 px-2 rounded-full bg-primary-light text-mirage  font-cabin font-medium text-sm">
              {technology}
            </span>
          ))}
        </div>
        <div className="mt-2">
          <p className="flex items-center gap-2 text-white font-cabin">
            <Icon icon="BiLink" fontSize="20px" color="white" />
            {url}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
