import React, { PropTypes } from 'react';

import connect from './connector';


import Reservation from '../../components/Reservation';

// class FessesContainer extends React.Component {
//   render() {
//     return <Fesses />
//   }
// }

export default connect(Reservation);
