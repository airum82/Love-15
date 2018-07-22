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