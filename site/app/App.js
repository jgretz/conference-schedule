import React from 'react';
import {compose, withEffect} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {renderIf} from '@truefit/bach-recompose';
import {withRouter} from 'react-router';

import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TitleBar, Routes} from './features/shared/components';
import {Empty} from './features/schedule/components';

import {initialize} from './features/schedule/actions';

import {themeSelector} from './features/shared/selectors';
import {selectedConferenceSelector} from './features/schedule/selectors';

import {THEME_MAP} from './features/schedule/constants/themes';

const Content = () => (
  <div className="root">
    <TitleBar />
    <Routes />
  </div>
);

const Container = compose(
  withSelector('conference', selectedConferenceSelector),

  renderIf(({conference}) => !conference, Empty),
)(Content);

const App = ({theme}) => (
  <MuiThemeProvider theme={THEME_MAP[theme]}>
    <CssBaseline />
    <Container />
  </MuiThemeProvider>
);

export default compose(
  withSelector('theme', themeSelector),

  withActions({initialize}),
  withEffect(({initialize}) => {
    initialize();
  }, []),
)(withRouter(App));
