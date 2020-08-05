import React from 'react';
import { shallow } from 'enzyme';
import Location from './Location';

describe('location component', () => {
  it('renders the location', () => {
    const location = {
      title: 'im a title',
      image: 'im an image',
      description: 'im an image'
    };
    const wrapper = shallow(<Location location={location} />);
    expect(wrapper).toMatchSnapshot();
  });
});
