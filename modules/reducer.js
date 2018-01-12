import { combineReducers } from 'redux';

import reservation from './reservation/reducer';
import customers from './customer/reducer';
import { reducer as formReducer } from 'redux-form';

export default {
  reservations: combineReducers({
    reservation,
    customers,
    form: formReducer
  }),
};
