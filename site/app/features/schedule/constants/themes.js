import {createMuiTheme} from '@material-ui/core/styles';
import {THEMES} from '../../shared/constants';

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

const PRIMARY = '#d65828';
const SECONDARY = '#ebac94';

export const THEME_MAP = {
  [THEMES.LIGHT]: createTheme(THEMES.LIGHT, PRIMARY, SECONDARY),
  [THEMES.DARK]: createTheme(THEMES.DARK, PRIMARY, SECONDARY),
};
