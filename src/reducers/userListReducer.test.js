import { userListReducer } from './userListReducer';

describe('userListReducer', () => {

  it('should return the initial state if no action types match', () => {
    const initialState = [];
    const mockAction = {
      type: 'NONYA'
    }
    const result = userListReducer(undefined, mockAction);
    expect(result).toEqual(initialState);
  })

  it('should add the user list when action type is USER_LIST', () => {
    const mockAction = {
      type: 'ADD_USER_LIST',
      userList: [{}, {}]
    }
    const result = userListReducer(undefined, mockAction);
    const expectedOutput = [{}, {}];
    expect(result).toEqual(expectedOutput);
  })

  it('should return an empty array when action has type CLEAR_USER_LIST', () => {
    const mockAction = {
      type: 'CLEAR_USER_LIST'
    }
    const result = userListReducer(undefined, mockAction);
    expect(result).toEqual([]);
  })
})