import React, { Component } from 'react';
import { shallow, mount } from 'enzyme';
import { MapContainer, mapStateToProps, mapDispatchToProps } from './GoogleMap';
import { geoKey } from '../../APIKey';
import { fetchCourts } from '../../actions';

describe('MapContainer', () => {

  it('should match snapshot upon initial render', () => {
    const wrapper = shallow(<MapContainer />);

    expect(wrapper).toMatchSnapshot();
  })

  it('should call fetchcoords upon submit', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: [
          {
            geometry: {
              location: {}
            }
          }
        ]
      })
    }))
    const wrapper = mount(<MapContainer />);
    const spy = jest.spyOn(wrapper.instance(), 'fetchCoords');
    wrapper.find('form').simulate('submit');
    expect(spy).toHaveBeenCalled();
  })

  it('fetchCoords should call fetch with correct params', () => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=denver,+co&key=' + geoKey;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: [
          { geometry: {
              location: {}
            } 
          }
        ]
      })
    }))
    const wrapper = shallow(<MapContainer />);
    wrapper.instance().fetchCoords('denver co');
    expect(window.fetch).toHaveBeenCalledWith(url);
  })

  it('fetchCoords should setState with coordinates of location', async () => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=denver,+co&key=' + geoKey;
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve({
        results: [
          {
            geometry: {
              location: {
                lat: 15,
                lng: 12
              }
            }
          }
        ]
      })
    }))
    const initialState = {
      coords: {},
      location: '',
      map: '',
      errorMessage: ''
    }
    const expectedState = {
      coords: {
        lat: 15,
        lng: 12
      },
      location: '',
      map: '',
      errorMessage: ''
    }
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.state()).toEqual(initialState);
    await wrapper.instance().fetchCoords('denver co');
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('should set state with error message if fetch fails', async () => {
    const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=denver,+co&key=' + geoKey;
    window.fetch = jest.fn().mockImplementation(() => Promise.reject(
      new Error('error, invalid location')
    ))
    const initialState = {
      coords: {},
      location: '',
      map: '',
      errorMessage: ''
    }
    const expectedState = {
      coords: {},
      location: '',
      map: '',
      errorMessage: 'error, invalid location'
    }
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.state()).toEqual(initialState);
    await wrapper.instance().fetchCoords('denver co');
    wrapper.update();
    expect(wrapper.state()).toEqual(expectedState);
  })

  it('mapStateToProps should return an object with a closeCourts key', () => {
    const mockState = {
      closeCourts: [{}, {}]
    }
    const expectedOutput = {
      closeCourts: [{}, {}]
    }
    expect(mapStateToProps(mockState)).toEqual(expectedOutput)
  })

  it('handlefetchCourts should call mockDispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const courts = [{}, {}];
    mappedProps.handlefetchCourts(courts);
    expect(mockDispatch).toHaveBeenCalledWith(fetchCourts(courts));
  })

  it('handleLocationEntry should set state on change', () => {
    const wrapper = shallow(<MapContainer />);
    expect(wrapper.state().location).toEqual('');
    const mockEvent = {
      target: {
        value: 'denver'
      }
    }
    wrapper.instance().handleLocationEntry(mockEvent);
    expect(wrapper.state().location).toEqual('denver');
  })
})