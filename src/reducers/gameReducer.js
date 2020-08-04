import {
  goblin,
  orc,
  ogre
} from '../data/enemies';

import {
  UPDATE_EXPERIENCE,
  ATTACK_ENEMY,
  HEAL,
  ATTACK_CHARACTER
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
  enemy: {
    image: 'https://lh3.googleusercontent.com/proxy/NrJv5js3pxontrn5gdrKVXNWyzgso9m-HEJ4HVDd5npejlClQHykz2MmeHc4n9cGhCyllVD86u9JXc4R4xbUs5te0dAHerD7U8aVdE1lK25KbbPE3Dc',
    health: 3,
    attack: 1,
    energy: 10,
    experience: 1
  }
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
    default:
      return state;
  }
}
