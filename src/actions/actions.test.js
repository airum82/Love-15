import * as actions from './index';

describe('actions', () => {

  it('fetchCourts should return an object with type COURTS',() => {
    const mockNearbyCourts = [{name: 'court1'}, {name: 'court2'}];
    const expectedOutput = {
      type: 'COURTS',
      nearbyCourts: [{ name: 'court1' }, { name: 'court2' }]
    }
    expect(actions.fetchCourts(mockNearbyCourts)).toEqual(expectedOutput);
  })

  it('createAccount should return an object with type CREATE_ACCOUNT', () => {
    const mockAccount = {
      email: 'yoda@degoba.com',
      password: 'secret it is'
    }
    const expectedOutput = {
      type: 'CREATE_ACCOUNT',
      accountInfo: {
        email: 'yoda@degoba.com',
        password: 'secret it is'
      }
    }
    expect(actions.createAccount(mockAccount)).toEqual(expectedOutput);
  })

  it('logIn should return an object with type LOG_IN', () => {
    const mockemail = 'misty@ihatebugs.com';
    const id = 'where is my bike';
    const expectedOutput = {
      type: 'LOG_IN',
      email: 'misty@ihatebugs.com',
      id: 'where is my bike'
    }
    const result = actions.logIn(mockemail, id);
    expect(result).toEqual(expectedOutput);
  })

  it('logOut should return an object with type LOG_OUT', () => {
    const expectedOutput = { type: 'LOG_OUT' };
    const result = actions.logOut();
    expect(result).toEqual(expectedOutput);
  })

  it('fetchAccount should return an object with type FETCH_ACCOUNT', () => {
    const mockAccountInfo = 'patrick@stewart.com';
    const mockId = 5;
    const expectedOutput = {
      type: 'FETCH_ACCOUNT',
      email: 'patrick@stewart.com',
      id: 5
    }
    const result = actions.fetchAccount(mockAccountInfo, mockId);
    expect(result).toEqual(expectedOutput);
  })

  it('addFavorite should return an object with type ADD_COURT', () => {
    const mockCourt = { name: 'court 3' };
    const expectedOutput = {
      type: 'ADD_COURT',
      court: {
        name: 'court 3'
      }
    }
    const result = actions.addFavorite(mockCourt);
    expect(result).toEqual(expectedOutput);
  })

  it('makeUserList should return an object with type ADD_USER_LIST', () => {
    const mockUserList = [{name: 'carl'}, {name: 'michonne'}];
    const expectedOutput = {
      type: 'ADD_USER_LIST',
      userList: [{ name: 'carl' }, { name: 'michonne' }]
    }
    const result = actions.makeUserList(mockUserList);
    expect(result).toEqual(expectedOutput);
  })

  it('clearUserList should return an object with type CLEAR_USER_LIST', () => {
    const expectedOutput = { type: 'CLEAR_USER_LIST' };
    const result = actions.clearUserList();
    expect(result).toEqual(expectedOutput);
  })

  it('makeFavoriteList should return an object with type GRAB_FAVORITES', () => {
    const mockCourtList = [{name: 'favorite1'}, {name: 'favorite2'}];
    const expectedOutput = {
      type: 'GRAB_FAVORITES',
      courtList: [{ name: 'favorite1' }, { name: 'favorite2' }]
    }
    const result = actions.makeFavoritesList(mockCourtList);
    expect(result).toEqual(expectedOutput);
  })

  it('clearFavorites should return an object with type CLEAR_FAVORITES', () => {
    const expectedOutput = { type: 'CLEAR_FAVORITES' };
    const result = actions.clearFavorites();
    expect(result).toEqual(expectedOutput);
  })
}) 