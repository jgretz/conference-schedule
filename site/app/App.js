import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withRouter} from 'react-router';

import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TitleBar, Routes} from './features/shared/components';

import {themeSelector} from './features/shared/selectors';
import {THEME_MAP} from './features/schedule/constants/themes';

// render
const App = ({theme}) => (
  <MuiThemeProvider theme={THEME_MAP[theme]}>
    <CssBaseline />

    <div className="root">
      <TitleBar />
      <Routes />
    </div>
  </MuiThemeProvider>
);

export default compose(withSelector('theme', themeSelector))(withRouter(App));
