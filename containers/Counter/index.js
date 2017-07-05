import React from 'react';

import connect from './connector';

import Counter from '../../components/Counter';

const Wrapper = (props) => <Counter {...props} />;

export default connect(Wrapper);
