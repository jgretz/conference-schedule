import React from 'react';
import {compose, withMemo, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

import {toggleTheme} from '../../shared/actions';
import {themeSelector} from '../../shared/selectors';

import {THEMES} from 'constants';

const Icon = ({text, handleToggleTheme}) => (
  <ListItem onClick={handleToggleTheme}>
    <ListItemIcon>
      <InvertColorsIcon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default compose(
  withSelector('theme', themeSelector),

  withMemo('text', ({theme}) =>
    theme === THEMES.LIGHT ? 'Switch to Dark Theme' : 'Switch to Light Theme',
  ),

  withActions({toggleTheme}),
  withCallback('handleToggleTheme', ({toggleTheme}) => () => {
    toggleTheme();
  }),
)(Icon);
