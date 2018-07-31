import React from 'react';
import { UserCard } from './UserCard';
import { shallow } from 'enzyme';

describe('UserCard', () => {

  it('should match snapshot', () => {
    const wrapper = shallow(
     <UserCard
      username={'melissa'} 
    />);
    expect(wrapper).toMatchSnapshot();
  })
})