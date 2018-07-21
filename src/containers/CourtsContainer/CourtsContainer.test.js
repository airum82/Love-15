import React from 'react';
import { shallow } from 'enzyme';
import { CourtsContainer } from './CourtsContainer';

describe('CourtsContainer', () => {

  it('should match snapshot upon initial render', () => {
    const wrapper = shallow(<CourtsContainer />)

    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot upon receiving closeCourts props', () => {
    const mockCourts = [{}, {}];
    const wrapper = shallow(<CourtsContainer closeCourts={mockCourts} />);
    
    expect(wrapper).toMatchSnapshot();
  })
})