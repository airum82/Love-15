import { combineReducers } from 'redux';
import { courtReducer } from './courtReducer';
import { accountReducer } from './accountReducer';
import { favoriteReducer } from './favoriteReducer';
import { userListReducer } from './userListReducer';

const rootReducer = combineReducers({
  closeCourts: courtReducer,
  account: accountReducer,
  favorites: favoriteReducer,
  userList: userListReducer
});

export default rootReducer;