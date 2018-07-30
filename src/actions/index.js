export const fetchCourts = (nearbyCourts) => ({
  type: 'COURTS',
  nearbyCourts
})

export const createAccount = (accountInfo) => ({
  type: 'CREATE_ACCOUNT',
  accountInfo
})

export const logIn = (email, id) => ({
  type: 'LOG_IN',
  email,
  id,
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

export const makeFavoritesList = (courtList) => ({
  type: 'GRAB_FAVORITES',
  courtList
})