import { combineReducers } from 'redux';

import auth from './auth/reducer';
import deliveries from './deliveries/reducer';
import problems from './problems/reducer';
import recipients from './recipients/reducer';
import couriers from './couriers/reducer';

export default combineReducers({
  auth,
  deliveries,
  problems,
  recipients,
  couriers,
});
