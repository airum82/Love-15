import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { fetchAccount } from '../../actions';

describe('App', () => {
  
  it('should match snapshot upon initial render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('mapStateToProps should return an object', () => {
    const mockState = {
      closeCourts: [],
      account: {
        email: 'jim@jim.com'
      }
    }
    const expectedOutput = {
      closeCourts: [],
      account: {
        email: 'jim@jim.com'
      }
    }
    expect(mapStateToProps(mockState)).toEqual(expectedOutput);
  })

  it('fetchUser should call mockDispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockUser = 'jim@jim.com';
    mappedProps.fetchUser(mockUser);
    expect(mockDispatch).toHaveBeenCalledWith(fetchAccount(mockUser));
  })
})