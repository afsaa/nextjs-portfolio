import React from 'react';
import { IconContext, IconType } from 'react-icons';
import * as siIcons from 'react-icons/si';
import * as giIcons from 'react-icons/gi';

const allIcons = { ...siIcons, ...giIcons };

type IconProps = {
  className: string;
  icon: string;
  fontSize: string;
  color: string;
};

const Icon = ({ className, icon, fontSize = '20px', color = 'black' }: IconProps): JSX.Element => {
  const ReactIcon: IconType = allIcons[icon];

  return (
    <div className="flex items-center space-x-2">
      <IconContext.Provider value={{ style: { fontSize, color } }}>{ReactIcon && <ReactIcon />}</IconContext.Provider>
    </div>
  );
};

export default Icon;
