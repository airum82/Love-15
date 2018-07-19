import { combineReducers } from 'redux';
import { courtReducer } from './courtReducer';

const rootReducer = combineReducers({
  closeCourts: courtReducer
});

export default rootReducer;