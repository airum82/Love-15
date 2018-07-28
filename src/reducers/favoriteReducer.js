export const favoriteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COURT':
      return [...state, action.court];
    default:
      return state
  }
}