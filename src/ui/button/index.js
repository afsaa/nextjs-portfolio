import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ type, text, bg, color, onClick }) => {
  return (
    <>
      <button type={type} className={`py-2 px-4 rounded-full font-cabin font-bold bg-mirage text-white hover:opacity-80 focus:opacity-80`} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  bg: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  text: 'Click me',
  bg: 'mirage',
  color: 'white',
};

export default Button;
