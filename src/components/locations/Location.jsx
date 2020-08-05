import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ location }) => (
  <section>
    Title: {location.title}
    <img src={location.image} />
    Description: {location.description}
  </section>
);

Location.propTypes = {
  location: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })
};

export default Location;
