import React from 'react';
import { Route, IndexRoute } from 'react-router';

import config from './utils/config';

import Component from './index';
import Reservation from './containers/Reservation';

export default (
  <Route key={config.path} path={config.path} component={Component}>
    <IndexRoute component={Reservation} />
    <Route path="list" component={Reservation} />
  </Route>
);
