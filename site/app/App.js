import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {MuiThemeProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TitleBar, Routes} from './features/shared/components';

import {themeSelector} from './features/shared/selectors';
import {THEME_MAP} from './features/schedule/constants/themes';

// render
const Container = ({theme}) => (
  <MuiThemeProvider theme={THEME_MAP[theme]}>
    <CssBaseline />

    <div className="root">
      <TitleBar />
      <Routes />
    </div>
  </MuiThemeProvider>
);

// redux
const mapStateToProps = state => ({
  theme: themeSelector(state),
});

export default connect(mapStateToProps)(withRouter(Container));
