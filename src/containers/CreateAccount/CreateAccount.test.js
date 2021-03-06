import { shallow, mount} from 'enzyme';
import { CreateAccount, mapDispatchToProps } from './CreateAccount';
import React, { Component } from 'react';
import { auth, db } from '../../firebase';

describe('CreateAccount', () => {
  let history;
  let wrapper;
  beforeEach(() => {
    history = {
      push: jest.fn()
    }
    wrapper = shallow(<CreateAccount history={history}/>);
  })

  it('should match snapshot upon initial render', () => { 
    expect(wrapper).toMatchSnapshot()
  })

  it('should call handleDataEntry on change to the form', () => {
    wrapper = mount(
        <CreateAccount history={history}/>
      );
    const spy = jest.spyOn(wrapper.instance(), 'handleDataEntry');
    wrapper.find('form').simulate('change');
    wrapper.find('form').simulate('change');
    expect(spy).toHaveBeenCalled();
  })

  it('handleDataEntry should update the state with input', () => {
    const initialState = {
      name: '',
      email: '',
      password: '',
      dateOfBirth: ''
    }
    const mockEvent = {
      target: {
        name: 'email',
        value: 'pat@pat.com'
      }
    }
    const expectedState = {
      name: '',
      email: 'pat@pat.com',
      password: '',
      dateOfBirth: ''
    }
    expect(wrapper.state()).toEqual(initialState);
    wrapper.instance().handleDataEntry(mockEvent);
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should call auth.doCreateUserWithEmailAndPassword on submit', () => {
    auth.doCreateUserWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.resolve({
    }))
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });
    expect(auth.doCreateUserWithEmailAndPassword).toHaveBeenCalled();
  })
})

describe('mapDispatchToProps', () => {

  it('handleCreateAccount should call dispatch', () => {
    const mockDispatch = jest.fn()
    const mappedProps = mapDispatchToProps(mockDispatch);
    const accountInfo = {
      name: 'bob'
    }
    mappedProps.handleCreateAccount(accountInfo);
    expect(mockDispatch).toHaveBeenCalled
  })
})