import React from 'react';
import moment from 'moment';
import {compose, withMemo} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import SessionCard from './sessionCard';
import Typography from '@material-ui/core/Typography';

const SessionGroup = ({classes, group, text}) => (
  <div className={classes.group}>
    <Typography variant="h5" gutterBottom>
      {text}
    </Typography>

    {group.sessions.map(session => (
      <SessionCard key={session.id} session={session} />
    ))}
  </div>
);

export default compose(
  withMemo('text', ({group}) => moment(group.time).format('dddd @ h:mm A')),

  withStyles({
    group: {
      margin: '0 auto',
      maxWidth: 1000,
    },
  }),
)(SessionGroup);
