import { courtReducer } from './courtReducer';

describe('courtReducer', () => {

  it('should return the initialState by default', () => {
    const expectedOutput = [];
    const action = {
      type: 'NONE',
      courts: [{}, {}]
    }
    expect(courtReducer([], action)).toEqual(expectedOutput);
  })

  it('should return an array of courts when action has type of courts', () => {
    const expectedOutput = [{ name: 'court1'}, { name: 'court2'}];
    const initialState = [];
    const action = {
      type: 'COURTS',
      nearbyCourts: [{ name: 'court1'}, { name: 'court2'}]
    }
    expect(courtReducer(initialState, action)).toEqual(expectedOutput);
  })
})