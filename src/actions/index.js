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

export const fetchAccount = (accountInfo) => ({
  type: 'FETCH_ACCOUNT',
  email: accountInfo
})

export const addFavorite = (court) => ({
  type: 'ADD_COURT',
  court
})

export const makeUserList = (userList) => ({
  type: 'ADD_USER_LIST',
  userList
})