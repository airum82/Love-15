export const accountReducer = (state = {}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return {...action.accountInfo};
    case 'LOG_IN':
      return {...action.accountInfo};
    case 'LOG_OUT':
      return {};
    case 'FETCH_ACCOUNT':
      return { email: action.email };
    default:
      return state
  }
}