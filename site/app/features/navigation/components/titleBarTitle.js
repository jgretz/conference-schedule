import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Typography from '@material-ui/core/Typography';

import {selectedConferenceSelector} from '../../schedule/selectors';

const Title = ({classes, conference}) => (
  <Typography variant="h6" className={classes.title}>
    {conference.title}
  </Typography>
);

export default compose(
  withSelector('conference', selectedConferenceSelector),

  withStyles({
    title: {
      color: '#fff',
    },
  }),
)(Title);
