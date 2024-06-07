import React from 'react';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'full';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ content, primary, size, onClick }: ButtonProps) => {
  return (
    <>
      <button
        className={`${size === 'full' ? 'w-full' : ''} py-2 px-4 rounded-full font-cabin font-bold ${primary ? 'bg-primary-light' : 'bg-secondary-dark/80'} ${
          primary ? 'text-black' : 'text-carrara'
        } hover:opacity-80 focus:opacity-80`}
        onClick={onClick}
      >
        {content}
      </button>
    </>
  );
};

export default Button;
