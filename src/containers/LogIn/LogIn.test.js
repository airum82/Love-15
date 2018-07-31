import { LogIn, mapDispatchToProps } from './LogIn';
import { shallow, mount} from 'enzyme';
import React, { Component } from 'react';
import { logIn, makeUserList, makeFavoritesList } from '../../actions';
import { auth, db } from '../../firebase';

describe('LogIn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<LogIn />);
  })

  it('should match snapshot upon render', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should call handleAccountEntry on change to form', () => {
    wrapper = shallow(<LogIn />);
    const spy = jest.spyOn(wrapper.instance(), 'handleAccountEntry');
    wrapper.find('form').simulate('change', { target: ''});
    wrapper.find('form').simulate('change', { target: ''});
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

  it('should call signIn on form submit with correct params', async () => {
    const mockHandleLogIn = jest.fn();
    wrapper = shallow(
      <LogIn handleLogIn={mockHandleLogIn} />
    );
    const spy = jest.spyOn(wrapper.instance(), 'signIn');
    const state = wrapper.state();
    await wrapper.find('form').simulate('submit', { preventDefault: jest.fn()});
    expect(spy).toHaveBeenCalled();
  })
  it('signIn should call auth.doSignInWithEmailAndPassword', () => {
    const wrapper = shallow(
     <LogIn
      handleLogIn={jest.fn()}
     />);
    auth.doSignInWithEmailAndPassword = jest.fn().mockImplementation(() => Promise.resolve({
      user: {
        uid: 5455
      }
    }));
    wrapper.instance().signIn();
    expect(auth.doSignInWithEmailAndPassword).toHaveBeenCalled();
  })

  it('grabFavoriteCourts should call db.grabFavoriteCourtsList with correct params', () => {
    wrapper = shallow(
      <LogIn
       fetchFavoritesList={jest.fn()} 
      />)
    db.grabFavoriteCourtsList = jest.fn().mockImplementation(() => Promise.resolve({
      val: jest.fn().mockImplementation(() => ({ key: 4533 }))
    }));
    const mockId = 5;
    wrapper.instance().grabFavoriteCourts(mockId)
    expect(db.grabFavoriteCourtsList).toHaveBeenCalledWith(mockId);
  })

  it('retrieveUsers should call db.onceGetUsers', () => {
    db.onceGetUsers = jest.fn().mockImplementation(() => Promise.resolve({
      val: jest.fn().mockImplementation(() => ({ key: 4533 }))
    }));
    wrapper = shallow(
      <LogIn
       fetchUserList={jest.fn()} 
      />);
    wrapper.instance().retrieveUsers();
    expect(db.onceGetUsers).toHaveBeenCalled();
  })
})


describe('mapDispatchToProps', () => {
  let mockDispatch;
  let mappedProps;
  beforeEach(() => {
    mockDispatch = jest.fn();
    mappedProps = mapDispatchToProps(mockDispatch);
  })

  it('handleLogIn should call dispatch with correct params', () => {
    const mockAccountInfo = {
      email: 'jamie@this.com',
      password: 'eimaj'
    }
    mappedProps.handleLogIn(mockAccountInfo, 5);
    expect(mockDispatch).toHaveBeenCalledWith(logIn(mockAccountInfo, 5));
  })

  it('fetchUserList should call mockDispatch with correct params', () => {
    const mockUserList = [{}, {}, {}];
    mappedProps.fetchUserList(mockUserList);
    expect(mockDispatch).toHaveBeenCalledWith(makeUserList(mockUserList));
  })

  it('fetchFavoritesList should call dispatch with correct params', () => {
    const mockCourtList = [{}, {}, {}];
    mappedProps.fetchFavoritesList(mockCourtList);
    expect(mockDispatch).toHaveBeenCalledWith(makeFavoritesList(mockCourtList))
  })
})