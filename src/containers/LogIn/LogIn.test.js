import { LogIn, mapDispatchToProps } from './LogIn';
import { shallow, mount} from 'enzyme';
import React, { Component } from 'react';
import { logIn } from '../../actions';

describe('LogIn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogIn />);
  })

  it('should match snapshot upon render', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleAccountEntry on change to form', () => {
    wrapper = mount(<LogIn />);
    const spy = jest.spyOn(wrapper.instance(), 'handleAccountEntry');
    wrapper.find('form').simulate('change');
    wrapper.find('form').simulate('change');
    expect(spy).toHaveBeenCalled();
  })

  it('handleAccountEntry should update state with user input', () => {
    const initialState = {
      email: '',
      password: ''
    }
    const mockEvent = {
      target: {
        name: 'email',
        value: 'jim@jim.com'
      }
    }
    const updatedState = {
      email: 'jim@jim.com',
      password: ''
    }
    expect(wrapper.state()).toEqual(initialState);
    wrapper.instance().handleAccountEntry(mockEvent);
    expect(wrapper.state()).toEqual(updatedState);
  })

  it('should call handleLogIn on form submit with correct params', () => {
    const mockHandleLogIn = jest.fn()
    wrapper = mount(<LogIn handleLogIn={mockHandleLogIn} />);
    const state = wrapper.state();
    wrapper.find('form').simulate('submit');
    expect(mockHandleLogIn).toHaveBeenCalledWith(state);
  })
})

describe('mapDispatchToProps', () => {

  it('handleLogIn should call dispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockAccountInfo = {
      email: 'jamie@this.com',
      password: 'eimaj'
    }
    mappedProps.handleLogIn(mockAccountInfo);
    expect(mockDispatch).toHaveBeenCalledWith(logIn(mockAccountInfo));
  })
})