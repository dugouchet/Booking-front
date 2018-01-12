import React, { PropTypes } from 'react';

const caca = ({ firstName }) => (
  <div>
    {firstName}
  </div>
);
caca.propTypes = {
  firstName: PropTypes.string
};

export default caca;
