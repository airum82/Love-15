import React from 'react';
import { CourtCard } from './CourtCard';
import { shallow } from 'enzyme';

describe('CourtCard', () => {

  it('should match snapShot upon render', () => {
    const wrapper = shallow(<CourtCard />);

    expect(wrapper).toMatchSnapshot();
  })
})