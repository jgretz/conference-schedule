import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

import IconButton from '@material-ui/core/IconButton';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

import {toggleTheme} from '../../shared/actions';

const ThemeToggle = ({handleToggleTheme}) => (
  <IconButton
    aria-label="Toggle Light / Dark Themes"
    onClick={handleToggleTheme}
  >
    <InvertColorsIcon />
  </IconButton>
);

export default compose(
  withActions({toggleTheme}),
  withCallback('handleToggleTheme', ({toggleTheme}) => () => {
    toggleTheme();
  }),
)(ThemeToggle);
