import React, { PropTypes } from 'react';

import styles from './styles';
import Foo from './../Foo';

class Fesses extends React.Component {
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

ReservationReservation.propTypes = {
  changeColor: PropTypes.func,
  color: PropTypes.string,
};

// const toto = (props) => (s
//   <div className={styles.wrap}>
//   <Foo> 3</Foo>
//   </div>
//
// );



export default Reservation;
