import { combineReducers } from 'redux';
import { courtReducer } from './courtReducer';
import { accountReducer } from './accountReducer';
import { favoriteReducer } from './favoriteReducer';

const rootReducer = combineReducers({
  closeCourts: courtReducer,
  account: accountReducer,
  favorites: favoriteReducer
});

export default rootReducer;