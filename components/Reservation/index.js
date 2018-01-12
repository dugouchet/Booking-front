import React, { PropTypes } from 'react';

import styles from './styles';

class Reservation extends React.Component {
  state = {
    isOpen: 'blablabla',
    bidule: 'bidule'
  };
changeColor = () => {
  this.setState({
    isOpen: 'nouveau blabla'
  },()=> {
    console.log('je suis à jour')
  });
};

  render (props) {
    {JSON.stringify(props)}
    const { changeColor} = this.props;
    return (
      <div className={styles.wrap}>
        <div className="box" onClick={changeColor}>

          je suis bar, {this.state.isOpen}
        </div>
      </div>
    )
  }
}

Reservation.propTypes = {
  changeColor: PropTypes.func,
  color: PropTypes.string,
};

export default Reservation;
