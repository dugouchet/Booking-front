import React, { PropTypes } from 'react';

import styles from './styles';

const Counter = ({ counter, incrementCounter }) => (
  <div className={styles.wrap}>
    counter: {counter} <input type="button" onClick={() => incrementCounter()} value="Add one" />
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number,
  incrementCounter: PropTypes.func,
};

export default Counter;
