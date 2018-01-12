import React, { PropTypes } from 'react';

import styles from './styles';
import Customer from './../../containers/Customer';
import CancelReservation from './../CancelReservation';

const fesses = ({ reservations }) => (
    <div>
      {
        reservations.map(function (reservation) {
          return (
            <div key={reservation.id} className={styles.wrap}>
              {reservation.attributes.mealDate}
              <Customer customerId={reservation.relationships.customer.data.id}/>
              <CancelReservation onSubmit={(values)=>console.log('paff', values)}/>
            </div>
          )
        })
      }
    </div>
);

export default fesses;
