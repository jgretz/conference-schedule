import '@babel/polyfill';
import './babelHelpers';

import './styles/styles.scss';

import React from 'react';
import {render} from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import Root from './Root';
import {configureStore, configureHttp} from './util';

// configure stuff
const history = createHistory();
const store = configureStore(history);

configureHttp(store);

// load it into the page
render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);
