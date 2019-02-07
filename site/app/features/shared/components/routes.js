import React from 'react';
import {Switch, Route} from 'react-router';

import {Schedule} from '../../schedule/components';
import NotFound from './notFound';

import {ROUTES} from '../constants';

export default () => (
  <Switch>
    <Route exact route={ROUTES.schedule} component={Schedule} />
    <Route component={NotFound} />
  </Switch>
);
