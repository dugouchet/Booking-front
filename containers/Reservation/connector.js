import { connect } from 'react-redux';

import { getReservation } from '../../modules/reservation/actions';



const mapStateToProps = (state) => ({
  reservations: state.reservations.reservation.list,
  entities: state.reservations.reservation.entities,
  error: state.reservations.reservation.error,
});

const mapDispatchToProps = (dispatch) => ({
  getReservation: () => dispatch(getReservation()),
});

export default (Container) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
