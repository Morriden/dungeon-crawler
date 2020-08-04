import React, { useEffect } from 'react';
import { useDispatch, useCharacter, useEnemy } from '../../hooks/gameContext';
import { updateExperience } from '../../data/actions';
import CharacterWithStats from '../character/CharacterWithStats';

const BattleBoard = () => {
  const dispatch = useDispatch();
  const character = useCharacter();
  const enemy = useEnemy();

  useEffect(() => {
    if(enemy.health > 0) return;

    dispatch(updateExperience());
    //need to add knowledge on which enemy is showing up
  }, [enemy.health]);

  return (
    <section>
      <CharacterWithStats character={character} />

      <CharacterWithStats character={enemy} />
    </section>
  );
};

export default BattleBoard;
