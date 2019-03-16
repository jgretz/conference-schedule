import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {TitleBar, Routes} from './features/shared/components';

import {themeSelector} from './features/shared/selectors';
import {THEMES} from './features/shared/constants';

// themes
const createTheme = (type, primary, secondary) =>
  createMuiTheme({
    palette: {
      type,
      primary: {
        main: primary,
      },
      secondary: {
        main: secondary,
      },
    },
    typography: {
      useNextVariants: true,
    },
  });

const SCARLET = '#bb0000';
const GRAY = '#666';

const THEME_MAP = {
  [THEMES.LIGHT]: createTheme(THEMES.LIGHT, SCARLET, GRAY),
  [THEMES.DARK]: createTheme(THEMES.DARK, SCARLET, GRAY),
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
