import { connect } from 'react-redux';

import { getReservation } from '../../modules/reservation/actions';

const mapStateToProps = (state) => ({
  reservations: state.reservations.reservation.list,
  error: state.reservations.reservation.error,
});

const mapDispatchToProps = (dispatch) => ({
  getReservation: () => dispatch(getReservation()),
});

export default (Container) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
