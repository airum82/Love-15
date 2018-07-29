export const userListReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_USER_LIST':
      return action.userList;
    default:
      return state;
  }
}