import React from 'react';
import {Switch, Route} from 'react-router';

import {Schedule} from '../../schedule/components';
import About from './about';
import NotFound from './notFound';

import {ROUTES} from '../constants';

export default () => (
  <Switch>
    <Route path={ROUTES.about.route} component={About} />

    <Route path={ROUTES.schedule.route} component={Schedule} />
    <Route component={NotFound} />
  </Switch>
);
