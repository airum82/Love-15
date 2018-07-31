import { accountReducer} from './accountReducer';

describe('accountReducer', () => {

  it('should return the state by defaul', () => {
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
})