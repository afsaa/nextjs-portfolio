import React from 'react';
import { IButton } from '../button';

interface IButtonLink extends IButton {
  active: boolean;
}

const ButtonLink = ({ type, text, active, onClick }: IButtonLink) => {
  return (
    <button className="bg-transparent" type={type} onClick={onClick}>
      <p className={`p-2 ${active ? 'font-normal' : 'font-bold'} ${active ? 'outline-none' : 'ring-2 ring-carrara'} font-cabin text-white`}>{text.toLocaleUpperCase()}</p>
    </button>
  );
};

export default ButtonLink;
