import { connect } from 'react-redux';

// import { changeColorAction } from '../../modules/Fesses/actions';

const mapStateToProps = (state) => ({
  color: state.tutorial.color,
});

const mapDispatchToProps = (dispatch) => ({
  changeColor: () => dispatch({
    type: "mon_super_type",
    payload: "hello"
  }),
});

export default (Container) => connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
