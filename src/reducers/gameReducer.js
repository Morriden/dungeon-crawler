import {
  goblin,
  orc,
  ogre,
  spawnMonster
} from '../data/enemies';

import {
  entrance,
  roomOne,
  roomTwo,
  newLocation,
} from '../data/locations';

import {
  UPDATE_EXPERIENCE,
  ATTACK_ENEMY,
  HEAL,
  ATTACK_CHARACTER,
  UPDATE_LOCATION,
  SET_ENEMY
} from '../data/actions';

export const initialState = {
  character: {
    image: 'https://www.pinclipart.com/picdir/middle/544-5443053_male-medieval-adventurer-with-lantern-medieval-male-adventurers.png',
    health: 20,
    attack: 2,
    energy: 10,
    experience: 0
  },
  enemies: [
    goblin,
    orc,
    ogre
  ],
  locations: [
    entrance,
    roomOne,
    roomTwo
  ],
  enemy: goblin,
  location: entrance
};

export default function reducer(state, action) {
  switch(action.type) {
    case ATTACK_ENEMY:
      return { ...state,
        enemy: { 
          ...state.enemy,
          health: state.enemy.health - state.character.attack 
        } 
      };
    case ATTACK_CHARACTER:
      return { ...state,
        character: {
          ...state.character,
          health: state.character.health - state.enemy.attack
        }
      };
    case HEAL:
      return { ...state,
        character: {
          ...state.character,
          health: state.character.health + action.payload 
        }
      };
    case UPDATE_EXPERIENCE:
      return { ...state,
        character: {
          ...state.character,
          experience: state.character.experience + state.enemy.experience
        }
      };
    case SET_ENEMY:
      return { ...state, enemy: spawnMonster(state.location) };
    case UPDATE_LOCATION:
      return { ...state, location: newLocation(state.location) };
    default:
      return state;
  }
}
