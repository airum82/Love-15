import { favoritesReducer } from './favoriteReducer';

describe('favoritesReducer', () => {

  it('should return the initial state if no action types match', () => {
    const initialState = [];
    const mockAction = {
      type: 'WILD_CARD',
      favorites: [{}, {}]
    }
    const result = favoritesReducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  })

  it('should return an array of courts if action type is GRAB_FAVORITES', () => {
    const mockAction = {
      type: 'GRAB_FAVORITES',
      courtList: [{}, {}, {}]
    }
    const expectedOutput = [{}, {}, {}]
    const result = favoritesReducer(mockAction);
    expect(result).toEqual(expectedOutput);
  })

  it('should return state with added court when action type is ADD_COURT', () => {
    
  })
})