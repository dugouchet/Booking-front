import React, { PropTypes, Component } from 'react';

import connect from './connector';


import ReservationComponent from '../../components/Reservation';

class Reservation extends Component {

  componentDidMount() {
    this.props.getReservation()
  }

  render () {
    console.log('this.props.reservations', this.props.reservations);
    return <div>
      {this.props.reservations.length && <ReservationComponent/>}
      {!this.props.reservations.length && 'sorry no reservation'}
      {JSON.stringify(this.props.error)}
    </div>
  }
}

Reservation.propTypes = {
  reservations: PropTypes.array,
  getReservation: PropTypes.func,
};

export default connect(Reservation);
