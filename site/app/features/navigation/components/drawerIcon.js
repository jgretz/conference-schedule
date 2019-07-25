import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const Icon = ({classes, onClick}) => (
  <IconButton onClick={onClick} className={classes.button}>
    <MenuIcon />
  </IconButton>
);

export default compose(
  withStyles({
    button: {
      padding: 0,
    },
  }),
)(Icon);
