import { accountReducer} from './accountReducer';

describe('accountReducer', () => {

  it('should return the state by default', () => {
    const mockAction = {
      type: 'NONYA'
    }
    const result = accountReducer(undefined, mockAction);
    expect(result).toEqual({});
  })

  it('should return an array with account info when type is CREATE_ACCOUNT', () => {
    const mockAction = {
      type: 'CREATE_ACCOUNT',
      accountInfo: {
        name: 'Bill'
      }
    }
    const result = accountReducer(undefined, mockAction);
    const expectedOutput = { name: 'Bill'};
    expect(result).toEqual(expectedOutput);
  })

  it('should return state with accountInfo when action type is LOG_IN', () => {
    const mockAction = {
      type: 'LOG_IN',
      accountInfo: {
        name: 'Bill'
      }
    }
    const result = accountReducer(undefined, mockAction);
    const expectedOutput = { name: 'Bill' };
    expect(result).toEqual(expectedOutput);
  })

  it('should return an empty object when action has type LOG_OUT', () => {
    const mockAction = {
      type: 'LOG_OUT'
    }
    const expectedOutput = {};
    const result = accountReducer(undefined, mockAction);
    expect(result).toEqual(expectedOutput);
  })

  it('should return an object with email and id when action type is FETCH_ACCOUNT', () => {
    const mockAction = {
      type: 'FETCH_ACCOUNT',
      email: 'tory@bbq.net',
      id: 5344554
    }
    const expectedOutput = {
      email: 'tory@bbq.net',
      id: 5344554
    }
    const result = accountReducer(undefined, mockAction);
    expect(result).toEqual(expectedOutput);
  })
})