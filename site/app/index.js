import './babelHelpers';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import 'typeface-roboto';
import './styles/styles.scss';

import React from 'react';
import {render} from 'react-dom';
import {createBrowserHistory} from 'history';

import Root from './Root';
import {configureStore, configureHttp, configureGA} from './util';

// configure stuff
configureGA();

const history = createBrowserHistory();
const store = configureStore(history);

configureHttp(store);

// load it into the page
render(
  <Root store={store} history={history} />,
  document.getElementById('app'),
);
