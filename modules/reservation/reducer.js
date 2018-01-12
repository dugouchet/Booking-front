import createReducer from '../create-reducer';

import { TYPES } from './constants';

const initialState = {
  list:[],
};

export default createReducer(initialState, {
  [TYPES.FETCH_RESERVATIONS_LIST_SUCCESS](state, {payload: {data}  } ) {
    return {
      ...state,
      list: data,
    };
  },
  [TYPES.FETCH_RESERVATIONS_LIST_FAILURE](state, data) {
    return {
      ...state,
      error: data
    };
  },
});
