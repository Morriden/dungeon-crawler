import React from 'react';
import { attackEnemy } from '../../data/actions';
import { useTurn } from '../../hooks/gameContext';

const GameControls = () => {

  const turnUse = useTurn();

  return (
    <section>
      <button onClick={() => turnUse(attackEnemy())}>Attack</button>
    </section>
  );
};

export default GameControls;
