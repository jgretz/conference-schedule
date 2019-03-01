import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

// styles
const styles = theme => ({
  progressContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    height: '100%',
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const Loading = ({classes}) => (
  <div className={classes.progressContainer}>
    <CircularProgress className={classes.progress} />
  </div>
);

export default withStyles(styles)(Loading);
