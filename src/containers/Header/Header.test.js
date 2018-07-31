import React from 'react';
import { shallow } from 'enzyme';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { auth } from '../../firebase';

describe('Header', () => {
  it('should match snapshot upon render', () => {
    const wrapper = shallow(
      <Header
       account={{ email: 'billy@billy.net' }} 
      />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should call auth.doSignOut on click', () => {
    auth.doSignOut = jest.fn().mockImplementation(() => Promise.resolve());
    const wrapper = shallow(
      <Header
        account={{ email: 'billy@billy.net' }}
        handleLogOut={jest.fn()}
        clearUserList={jest.fn()}
        clearFavorites={jest.fn()}
        history={{
          push: jest.fn()
        }}
      />);

    wrapper.find('.welcome').find('.log-out').simulate('click');
    expect(auth.doSignOut).toHaveBeenCalled();
  })

  it('mapStateToProps should return an object with appropriate keys', () => {
    const mockState = {
      account: {
        email: 'billybob@truckhat.org'
      }
    }
    const result = mapStateToProps(mockState);
    const expectedOutput = {
      account: {
        email: 'billybob@truckhat.org'
      }
    }
    expect(result).toEqual(expectedOutput);
  })

  describe('mapDispatchToProps', () => {
    let mockDispatch;
    let mappedProps;
    beforeEach(() => {
      mockDispatch = jest.fn();
      mappedProps = mapDispatchToProps(mockDispatch);
    })

    it('handleLogOut should call dispatch', () => {
      mappedProps.handleLogOut();
      expect(mockDispatch).toHaveBeenCalled();
    })

    it('clearUserList should call dispatch', () => {
      mappedProps.clearUserList();
      expect(mockDispatch).toHaveBeenCalled();
    })

    it('clearFavorites should call dispatch', () => {
      mappedProps.clearFavorites();
      expect(mockDispatch).toHaveBeenCalled();
    })
  })
})