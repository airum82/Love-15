import React from 'react';
import { CourtCard } from './CourtCard';
import { shallow } from 'enzyme';

describe('CourtCard', () => {
  let wrapper;
  let mockIsFavorite;
  let mockRemoveFromFavorites;
  let mockAddFavoriteCourt;
  let mockHandleFavorite;
  let db;
  
  beforeEach(() => {
    db = {
      grabFavoriteCourtsList: jest.fn()
        .mockImplementation(() => Promise.resolve({
          val: jest.fn()
        }))
    }
    mockIsFavorite = jest.fn();
    mockRemoveFromFavorites = jest.fn();
    mockAddFavoriteCourt = jest.fn(); 
    mockHandleFavorite = jest.fn();
    wrapper = shallow(
      <CourtCard
       name={'courtney'}
       location={'aruba'}
       id={5}
       db={db}
       account={{ name: 'bill', id: 564 }}
       court={{ name: 'courtney' }}
       addFavoriteCourt={mockAddFavoriteCourt}
       removeFromFavorites={mockRemoveFromFavorites}
       handleFavorite={mockHandleFavorite} 
       isFavorite={mockIsFavorite}
      />)
  })

  it('should match snapshot upon render', () => {

    expect(wrapper).toMatchSnapshot();
  })

  it('should call isFavorite with correct params on click', () => {
    wrapper.find('button').simulate('click');
    expect(mockIsFavorite).toHaveBeenCalledWith('courtney');
  })
})