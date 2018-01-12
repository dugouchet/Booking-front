import createReducer from '../create-reducer';

const initialState = {
  entities: {},
};

export default createReducer(initialState, {
  ['API_REQUEST/included/customers'](state, {payload } ) {
    return {
      ...state,
      entities: {
        ...state.entities,
        [payload.id]: payload.attributes
      },
    };
  },
});
