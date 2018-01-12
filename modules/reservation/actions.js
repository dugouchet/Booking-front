import { TYPES } from './constants';
import {CALL_API} from 'redux-api-middleware';

export const getReservation = () => ((dispatch)  => {
  dispatch({
      [CALL_API]: {
        endpoint: 'http://www.lafourchette.integ4.lafourchette.io/stub.json',
        method: 'GET',
        types: [TYPES.FETCH_RESERVATIONS_LIST_REQUEST, TYPES.FETCH_RESERVATIONS_LIST_SUCCESS, TYPES.FETCH_RESERVATIONS_LIST_FAILURE]
      }
  })
});
