import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TitleBar, Routes} from './features/shared/components';

import {themeSelector} from './features/shared/selectors';
import {THEMES} from './features/shared/constants';

// themes
const createTheme = type =>
  createMuiTheme({
    palette: {
      type,
    },
    typography: {
      useNextVariants: true,
    },
  });

const THEME_MAP = {
  [THEMES.LIGHT]: createTheme(THEMES.LIGHT),
  [THEMES.DARK]: createTheme(THEMES.DARK),
};

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
