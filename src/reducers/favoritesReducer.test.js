import { favoriteReducer } from './favoriteReducer';

describe('favoriteReducer', () => {

  it('should return the initial state if no action types match', () => {
    const initialState = [];
    const mockAction = {
      type: 'WILD_CARD',
      favorites: [{}, {}]
    }
    const result = favoriteReducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  })

  it('should return an array of courts if action type is GRAB_FAVORITES', () => {
    const mockAction = {
      type: 'GRAB_FAVORITES',
      courtList: [{}, {}, {}]
    }
    const expectedOutput = [{}, {}, {}]
    const result = favoriteReducer(undefined, mockAction);
    expect(result).toEqual(expectedOutput);
  })

  it('should return state with added court when action type is ADD_COURT', () => {
    const mockAction = {
      type: 'ADD_COURT',
      court: {
        name: 'bill'
      }
    }
    const expectedOutput = [{ name: 'bill' }];
    const result = favoriteReducer(undefined, mockAction);
    expect(result).toEqual(expectedOutput);
  })

  it('should return a state of an empty array when action type is CLEAR_FAVORITES', () => {
    const mockAction = {
      type: 'CLEAR_FAVORITES',
    }
    const expectedOutput = [];
    const result = favoriteReducer(undefined, mockAction);
    expect(result).toEqual(expectedOutput);
  })
})