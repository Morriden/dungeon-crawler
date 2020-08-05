import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import Stats from '../stats/Stats';

const CharacterWithStats = ({ character }) => (
  <section>
    <Character image={character.image}/>
    <Stats 
      health={character.health}
      attack={character.attack}
      energy={character.energy}
      experience={character.energy}
    />
  </section>
);

CharacterWithStats.propTypes = {
  character: PropTypes.shape({
    health: PropTypes.number.isRequired,
    attack: PropTypes.number.isRequired,
    energy: PropTypes.number.isRequired,
    experience: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })
};

export default CharacterWithStats;
