import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { shallow } from 'enzyme';
import { fetchAccount, makeUserList, makeFavoritesList } from '../../actions';
import { firebase } from '../../firebase';

describe('App', () => {
  
  it('should match snapshot upon initial render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('componentDidMount should call onAuthStateChanged', () => {
    firebase.auth.onAuthStateChanged = jest.fn();
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(firebase.auth.onAuthStateChanged).toHaveBeenCalled();
  })

  it('mapStateToProps should return an object', () => {
    const mockState = {
      closeCourts: [],
      account: {
        email: 'jim@jim.com'
      },
      favorites: [{}, {}]
    }
    const expectedOutput = {
      closeCourts: [],
      account: {
        email: 'jim@jim.com'
      },
      favorites: [{}, {}]
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

  it('fetchUserList should call dispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockUserList = [{}, {}];
    mappedProps.fetchUserList(mockUserList);
    expect(mockDispatch).toHaveBeenCalledWith(makeUserList(mockUserList));
  })

  it('fetchFavoriteCourList should call dispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockCourtList = [{}, {}, {}];
    mappedProps.fetchFavoriteCourtList(mockCourtList);
    expect(mockDispatch).toHaveBeenCalledWith(makeFavoritesList(mockCourtList));
  })
})