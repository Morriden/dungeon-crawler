export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const updateExperience = () => ({
  type: UPDATE_EXPERIENCE
});

export const ATTACK_ENEMY = 'ATTACK_ENEMY';
export const attackEnemy = () => ({
  type: ATTACK_ENEMY
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
