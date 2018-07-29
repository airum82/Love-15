export const fetchCourts = (nearbyCourts) => ({
  type: 'COURTS',
  nearbyCourts
})

export const createAccount = (accountInfo) => ({
  type: 'CREATE_ACCOUNT',
  accountInfo
})

export const logIn = (accountInfo) => ({
  type: 'LOG_IN',
  accountInfo
})

export const logOut = () => ({
  type: 'LOG_OUT',
})

export const fetchAccount = (accountInfo, id) => ({
  type: 'FETCH_ACCOUNT',
  email: accountInfo,
  id: id
})

export const addFavorite = (court) => ({
  type: 'ADD_COURT',
  court
})

export const makeUserList = (userList) => ({
  type: 'ADD_USER_LIST',
  userList
})

export const clearUserList = () => ({
  type: 'CLEAR_USER_LIST'
})