import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image }) => (
  <div>
    <img src={image} />
  </div>
);

Character.propTypes = {
  image: PropTypes.string.isRequired
};

export default Character;
