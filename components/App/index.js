import React, { PropTypes } from 'react';

import styles from './styles';

const App = ({ children }) => (
  <div className={styles.wrap}>
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.any,
};

export default App;
