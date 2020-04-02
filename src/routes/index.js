import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '~/pages/Login';
import Deliveries from '~/pages/Deliveries';
import Couriers from '~/pages/Couriers';
import Problems from '~/pages/Problems';
import Recipients from '~/pages/Recipients';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/delivery" component={Deliveries} isPrivate />
      <Route path="/couriers" component={Couriers} isPrivate />
      <Route path="/recipients" component={Recipients} isPrivate />
      <Route path="/problems" component={Problems} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
