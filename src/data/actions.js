export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const updateExperience = () => ({
  type: UPDATE_EXPERIENCE
});

export const UPDATE_LOCATION = 'UPDATE_LOCATION';
export const updateLocation = () => ({
  type: UPDATE_LOCATION
});

export const ATTACK_ENEMY = 'ATTACK_ENEMY';
export const attackEnemy = () => ({
  type: ATTACK_ENEMY
});

export const SET_ENEMY = 'SET_ENEMY';
export const setEnemy = () => ({
  type: SET_ENEMY,
});

export const HEAL = 'HEAL';
export const heal = () => ({
  type: HEAL,
  payload: 10
});

export const ATTACK_CHARACTER = 'ATTACK_CHARACTER';
export const attackCharacter = () => ({
  type: ATTACK_CHARACTER
});
