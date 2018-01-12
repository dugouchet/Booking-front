import { combineReducers } from 'redux';

import reservation from './reservation/reducer';

export default {
  reservations: combineReducers({
    reservation,
  })
};
