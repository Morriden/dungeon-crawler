import React from 'react';
import PropTypes from 'prop-types';

import Character from './Character';

const CharacterWithStats = ({ character }) => (
  <section>
    <Character />
  </section>
);

CharacterWithStats.propTypes = {
  character: PropTypes.shape({
    health: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    energy: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default CharacterWithStats;
