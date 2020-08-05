import React from 'react';
import { shallow } from 'enzyme';
import Stats from './Stats';

describe('Stats component', () => {
  it('should render stat block', () => {
    const wrapper = shallow(<Stats health={10} attack={1} energy={10} experience={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
