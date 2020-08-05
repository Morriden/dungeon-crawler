import React from 'react';
import { shallow } from 'enzyme';
import CharacterWithStats from './CharacterWithStats';

describe('CharacterWithStats component', () => {
  it('renders CharacterWithStats', () => {
    const character = {
      image: 'im an image',
      health: 100,
      attack: 5,
      energy: 10,
      experience: 0
    };
    const wrapper = shallow(<CharacterWithStats character={character} />);
    expect(wrapper).toMatchSnapshot();
  });
});
