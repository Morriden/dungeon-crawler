import {
  entrance,
  roomOne,
  roomTwo,
} from '../data/locations';

export const goblin = {
  image: 'https://lh3.googleusercontent.com/proxy/NrJv5js3pxontrn5gdrKVXNWyzgso9m-HEJ4HVDd5npejlClQHykz2MmeHc4n9cGhCyllVD86u9JXc4R4xbUs5te0dAHerD7U8aVdE1lK25KbbPE3Dc',
  health: 3,
  attack: 1,
  energy: 10,
  experience: 1
};

export const orc = {
  image: 'https://pngimg.com/uploads/orc/orc_PNG6.png',
  health: 5,
  attack: 3,
  energy: 10,
  experience: 3
};

export const ogre = {
  image: 'https://cdn.imgbin.com/2/3/14/imgbin-dungeons-dragons-ogre-mage-giant-others-Rt2rqvnyD3H46y1kT96k6HBr3.jpg',
  health: 15,
  attack: 5,
  energy: 20,
  experience: 7
};

export function spawnMonster(currentLocation) {
  if(currentLocation === entrance) {
    return goblin;
  }
  if(currentLocation === roomOne) {
    return orc;
  }
  if(currentLocation === roomTwo) {
    return ogre;
  }
}
