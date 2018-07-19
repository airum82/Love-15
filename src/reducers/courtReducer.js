export const courtReducer = (state = [], action) => {
  switch (action.type) {
    case 'COURTS':
      return [...action.nearbyCourts]
    default:
      return state
  }
}