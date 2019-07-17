import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {roomForSessionSelector, tagsForSessionSelector} from '../selectors';

const Content = ({room, tags, classes}) => (
  <CardContent>
    <div className={classes.contentFooter}>
      <Typography component="p" className={classes.room}>
        {room.name}
      </Typography>
      <Typography component="p">{tags.map(c => c.name).join(', ')}</Typography>
    </div>
  </CardContent>
);

export default compose(
  withSelector('tags', tagsForSessionSelector),
  withSelector('room', roomForSessionSelector),

  withStyles({
    contentFooter: {
      marginTop: 10,
      paddingTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    room: {
      minWidth: 100,
    },
  }),
)(Content);
