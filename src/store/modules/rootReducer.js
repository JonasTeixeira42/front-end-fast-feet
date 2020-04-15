import { combineReducers } from 'redux';

import auth from './auth/reducer';
import deliveries from './deliveries/reducer';
import problems from './problems/reducer';

export default combineReducers({
  auth,
  deliveries,
  problems,
});
