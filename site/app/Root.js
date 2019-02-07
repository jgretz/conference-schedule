import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {hot} from 'react-hot-loader';

import App from './App';

const Root = ({store, history}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(Root);
