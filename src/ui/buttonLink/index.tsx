import React from 'react';
import { IButton } from '../button';

interface IButtonLink extends IButton {
  active: boolean;
}

const ButtonLink = ({ type, text, active, onClick }: IButtonLink) => {
  return (
    <button className="bg-transparent" type={type} onClick={onClick}>
      <p className={`${active ? 'font-normal' : 'font-bold'} ${active ? 'no-underline' : 'underline decoration-2 underline-offset-4'} font-cabin text-white`}>{text.toLocaleUpperCase()}</p>
    </button>
  );
};

export default ButtonLink;
