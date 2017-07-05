import { connect } from 'react-redux';

import { incrementCounter } from '../../modules/counter/actions';

const mapStateToProps = (state) => ({
  counter: state.tutorial.counter.count,
});

const mapDispatchToProps = (dispatch) => ({
  incrementCounter: () => dispatch(incrementCounter()),
});

export default (Container) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
