import { UserList, mapStateToProps } from './UserList';
import { shallow } from 'enzyme';
import { UserCard } from '../../components/UserCard/UserCard';
import React from 'react';

describe('UserList', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <UserList
       userList={[{username: 'Bill'}, {username: 'Paulene'}]}
       />);
  })

  it('should match snapshot upon render with users', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot upon render with no users', () => {
    wrapper = shallow(
      <UserList
       userList={[]}
      />);
    expect(wrapper).toMatchSnapshot();
  })

  it('UserList should return an array of user cards', () => {
    const expectedOutput = [
      <UserCard
       key={0}
       username={'Bill'}
      />,
      <UserCard
       key={1}
       username={'Paulene'}
      />
    ];
    const result = wrapper.instance().makeUserCard();
    expect(result).toEqual(expectedOutput);
  })

  it('mapStateToProps should return an object with correct keys', () => {
    const mockState = {
      userList: [{}, {}]
    }
    const expectedOutput = {
      userList: [{}, {}]
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expectedOutput);
  })
})