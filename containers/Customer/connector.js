import { connect } from 'react-redux';

const mapStateToProps = (state, { customerId }) => ({
  firstName: state.reservations.customers.entities[customerId].firstName,
});

export default (Container) => connect(
  mapStateToProps,
)(Container);
