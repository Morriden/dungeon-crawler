import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character image', () => {
    const wrapper = shallow(<Character image="im an image" />);
    expect(wrapper).toMatchSnapshot();
  });
});
