import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = ({classes}) => (
  <div className={classes.progressContainer}>
    <CircularProgress className={classes.progress} />
  </div>
);

export default compose(
  withStyles(theme => ({
    progressContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      height: '100%',
    },
    progress: {
      margin: theme.spacing(2),
    },
  })),
)(Loading);
