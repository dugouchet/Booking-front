import createReducer from '../create-reducer';

import { TYPES } from './constants';

const initialState = {
  count: 0,
};

export default createReducer(initialState, {
  [TYPES.INCREMENT_COUNTER](state) {
    return {
      ...state,
      count: state.count + 1,
    };
  },
});
