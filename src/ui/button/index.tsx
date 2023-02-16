import React from 'react';

export interface IButton {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  primary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, text, primary, onClick }: IButton) => {
  return (
    <>
      <button
        type={type || 'button'}
        className={`py-2 px-4 rounded-full font-cabin font-bold ${primary ? 'bg-primary' : 'bg-mirage'} ${primary ? 'text-white' : 'text-primary'} hover:opacity-80 focus:opacity-80`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
