import React from 'react';
import { CourtCard } from './CourtCard';
import { shallow } from 'enzyme';

describe('CourtCard', () => {

  it('should match snapShot upon render', () => {
    const wrapper = shallow(<CourtCard />);

    expect(wrapper).toMatchSnapshot();
  })

  it('clicking the location should call makeMapKey with correct params', () => {
    const mockMakeMapKey = jest.fn();
    const wrapper = shallow(<CourtCard
      name={'court'}
      location={'anywhere'}
      makeMapKey={mockMakeMapKey} />);
    wrapper.find('p').simulate('click');
    expect(mockMakeMapKey).toHaveBeenCalledWith('court');
  })
})