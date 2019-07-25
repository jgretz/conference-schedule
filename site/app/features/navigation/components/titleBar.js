import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Title from './titleBarTitle';
import Drawer from './drawer';

const TitleBar = ({classes}) => (
  <AppBar position="static" color="primary">
    <Toolbar className={classes.toolbar}>
      <div className={classes.toolbarContent}>
        <Drawer />
        <Title />
      </div>
    </Toolbar>
  </AppBar>
);

export default compose(
  withStyles({
    root: {
      width: '100%',
    },
    toolbar: {
      display: 'flex',
      flex: 1,
      padding: '0 20px',
    },
    toolbarContent: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      width: '100%',
      maxWidth: 1000,
      margin: '0 auto',
    },
  }),
)(TitleBar);
