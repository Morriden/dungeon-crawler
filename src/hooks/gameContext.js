import React, { useContext } from 'react';
import { attackCharacter } from '../data/actions';

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
  const { character } = useState();
  return character;
};

export const useEnemy = () => {
  const { enemy } = useState();
  return enemy;
};

export const useLocation = () => {
  const { location } = useState();
  return location;
};

export const useTurn = () => {
  const dispatch = useDispatch();
  return action => {
    dispatch(action);
    dispatch(attackCharacter());
  };
};
