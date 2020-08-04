import React, { useContext } from 'react';

export const GameContext = React.createContext();

export const useState = () => {
  const { state } = useContext(GameContext);
  return state;
};

export const useDispatch = () => {
  const { dispatch } = useContext(GameContext);
  return dispatch;
};

export const useCharacter = () => {
  const { character } = useContext(GameContext);
  return character;
};

export const useEnemy = () => {
  const { enemy } = useContext(GameContext);
  return enemy;
};
