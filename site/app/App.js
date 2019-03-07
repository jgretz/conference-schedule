import React from 'react';
import {withRouter} from 'react-router';

import {TitleBar, Routes} from './features/shared/components';

const Container = () => (
  <div className="root">
    <TitleBar />
    <Routes />
  </div>
);

export default withRouter(Container);
