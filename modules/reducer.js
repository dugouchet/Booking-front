import { combineReducers } from 'redux';

import counter from './counter/reducer';

export default {
  tutorial: combineReducers({
    counter,
  })
};
