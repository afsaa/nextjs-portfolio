import React from 'react';

export interface IButton {
  type?: 'button' | 'submit' | 'reset';
  text: string;
  primary?: boolean;
  size?: 'full';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ type, text, primary, size, onClick }: IButton) => {
  return (
    <>
      <button
        type={type || 'button'}
        className={`${size === 'full' ? 'w-full' : ''} py-2 px-4 rounded-full font-cabin font-bold ${primary ? 'bg-primary-light' : 'bg-secondary-dark/80'} ${
          primary ? 'text-black' : 'text-carrara'
        } hover:opacity-80 focus:opacity-80`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
