import React from 'react';
import { shallow } from 'enzyme';
import { CourtsContainer, mapDispatchToProps, mapStateToProps } from './CourtsContainer';
import { CourtCard } from '../../components/CourtCard/CourtCard';
import { fetchCourts, makeFavoritesList } from '../../actions';
import { db } from '../../firebase';

describe('CourtsContainer', () => {
  let wrapper;
  let location;
  let mockHandleSubmitCourts;

  beforeEach(() => {
    mockHandleSubmitCourts = jest.fn();
    location = {
      pathname: '/'
    }
    wrapper = shallow(
    <CourtsContainer
     closeCourts={[]}
     location={location}
     handleSubmitCourts={mockHandleSubmitCourts}
     favorites={[{ name: 'bobby'}, { name: 'jane'}, { name: 'jorge'}]}
    />)
    
  })
  it('should match snapshot upon initial render', () => {
    expect(wrapper).toMatchSnapshot();
  })

  it('should match snapshot upon receiving closeCourts props', () => {
    const mockCourts = [{}, {}];
    const wrapper = shallow(
      <CourtsContainer
       closeCourts={mockCourts}
       location={{
         pathname: '/'
        }} 
      />);
    
    expect(wrapper).toMatchSnapshot();
  })

  it('makeCourts should return an array of court components', () => {
    const mockisFavorite = jest.fn();
    const mockHandleFavorite = jest.fn();
    const mockCourts = [
      { name: 'jim' , location: 'over there'}, 
      { name: 'sarah', location: 'not here'}
    ];
    const wrapper = shallow(
      <CourtsContainer
       closeCourts={mockCourts}
       location={{
         pathname: '/'
        }}
       isFavorite={mockisFavorite}
       favorites={[]}
       handleFavorite={mockHandleFavorite}
       account={{}}
      />);
      const spy = jest.spyOn(wrapper.instance(), 'isFavorite');
    const expectedOutput = [
      <CourtCard
        key={0}
        name={'jim'}
        location={'over there'}
        court={mockCourts[0]}
        addFavoriteCourt={db.addFavoriteCourt}
        removeFromFavorites={db.removeFavoriteFromList}
        handleFavorite={mockHandleFavorite}
        account={{}}
        id={0}
        db={db}
        favorites={[]}
        isFavorite={spy}
      />,
      <CourtCard
        key={1}
        name={'sarah'}
        location={'not here'}
        court={mockCourts[1]}
        addFavoriteCourt={db.addFavoriteCourt}
        removeFromFavorites={db.removeFavoriteFromList}
        handleFavorite={mockHandleFavorite}
        account={{}}
        id={1}
        db={db}
        favorites={[]}
        isFavorite={spy}
      />
    ];
    expect(wrapper.instance().makeCourts(mockCourts)).toEqual(expectedOutput);
  })

  it('isFavorite should return a single court object if name matches', () => {
    const expectedOutput = {
      name: 'bobby'
    }
    const result = wrapper.instance().isFavorite('bobby');
    expect(result).toEqual(expectedOutput);
  })

  it('handleSubmitCourts should call dispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockCourts = [{}, {}];
    mappedProps.handleSubmitCourts(mockCourts);
    expect(mockDispatch).toHaveBeenCalledWith(fetchCourts(mockCourts));
  })

  it('handleFavorite should call dispatch with correct params', () => {
    const mockDispatch = jest.fn();
    const mappedProps = mapDispatchToProps(mockDispatch);
    const mockCourts = [{}, {}];
    mappedProps.handleFavorite(mockCourts);
    expect(mockDispatch).toHaveBeenCalledWith(makeFavoritesList(mockCourts));
  })

  it('mapStateToProps should return an object with the correct keys', () => {
    const mockState = {
      closeCourts: [{}, {}],
      account: { name: 'bill' },
      favorites: [{}, {}]
    }
    const expectedOutput = {
      closeCourts: [{}, {}],
      account: { name: 'bill' },
      favorites: [{}, {}]
    }
    const result = mapStateToProps(mockState);
    expect(result).toEqual(expectedOutput);
  })

})