import React from 'react';
import PropTypes from 'prop-types';

const Stats = ({ health, attack, energy, experience }) => (
  <dl>
    <dt>Health</dt>
    <dd>{health}</dd>

    <dt>Attack</dt>
    <dd>{attack}</dd>

    <dt>Energy</dt>
    <dd>{energy}</dd>

    <dt>Experience</dt>
    <dd>{experience}</dd>
  </dl>
);

Stats.propTypes = {
  health: PropTypes.number.isRequired,
  attack: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  experience: PropTypes.number.isRequired
};

export default Stats;
