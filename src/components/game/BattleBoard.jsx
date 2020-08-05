import React, { useEffect } from 'react';
import { useDispatch, useCharacter, useEnemy, useLocation } from '../../hooks/gameContext';
import { updateExperience, updateLocation, setEnemy } from '../../data/actions';
import GameControls from '../controls/GameControls';
import CharacterWithStats from '../character/CharacterWithStats';
import Location from '../locations/location';

const BattleBoard = () => {
  const dispatch = useDispatch();
  const character = useCharacter();
  const location = useLocation();
  const enemy = useEnemy();

  useEffect(() => {
    if(enemy.health > 0) return;

    dispatch(updateExperience());
    dispatch(updateLocation(location));
    dispatch(setEnemy(location));
  }, [enemy.health]);

  return (
    <section>
      <Location location={location}/>
      <CharacterWithStats character={character} />
      <GameControls />
      <CharacterWithStats character={enemy} />
    </section>
  );
};

export default BattleBoard;
