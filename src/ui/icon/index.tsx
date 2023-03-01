import React from 'react';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const Icon = ({ className, icon, fontSize, color }) => {
  return (
    <IconContext.Provider value={{ style: { fontSize, color } }}>
      <div className={className}>{icon}</div>
    </IconContext.Provider>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
};

Icon.defaultProps = {
  fontSize: '20px',
  color: 'black',
};

export default Icon;
