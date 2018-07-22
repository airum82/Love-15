import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  
  it('should match snapshot upon initial render', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  })

  it('mapStateToProps should return an object', () => {
    const mockState = {
      closeCourts: []
    }
    const expectedOutput = {
      closeCourts: []
    }
    expect(mapStateToProps(mockState)).toEqual(expectedOutput);
  })
})