export const entrance = {
  title: 'Ruined Gate House',
  image: 'https://cdna.artstation.com/p/assets/images/images/016/240/058/large/lathanuel-filliol-gate-1.jpg?1551426561',
  description: 'description for a ruined gate'
};

export const roomOne = {
  title: 'Castle Court Yard',
  image: 'https://cdnb.artstation.com/p/assets/images/images/003/294/603/large/nick-carver-germanycourtyardmood01.jpg?1472109287',
  description: 'description for a castle courtyard'
};

export const roomTwo = {
  title: 'Throne Room',
  image: 'https://i.pinimg.com/originals/d3/51/2d/d3512d6c5a5c81ae35d5e2cf8846943a.jpg',
  description: 'description of a throne room'
};

export function newLocation(currentLocation) {
  if(!currentLocation) {
    return entrance;
  }
  if(currentLocation === entrance) {
    return roomOne;
  }
  if(currentLocation === roomOne) {
    return roomTwo;
  }
}
