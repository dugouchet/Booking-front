import React from 'react';
import { Route, IndexRoute } from 'react-router';

import config from './utils/config';

import Component from './index';
import Counter from './components/Counter';

export default (
  <Route key={config.path} path={config.path} component={Component}>
    <IndexRoute component={Counter} />
    <Route path="/counter" component={Counter} />
  </Route>
);
