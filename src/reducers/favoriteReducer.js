export const favoriteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COURT':
      return [...state, action.court];
    case 'GRAB_FAVORITES':
      return action.courtList
    default:
      return state
  }
}