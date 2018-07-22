import { combineReducers } from 'redux';
import { courtReducer } from './courtReducer';
import { accountReducer } from './accountReducer';

const rootReducer = combineReducers({
  closeCourts: courtReducer,
  account: accountReducer
});

export default rootReducer;