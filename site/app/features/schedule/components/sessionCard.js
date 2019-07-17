import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import Favorite from './sessionCardFavorite';
import Info from './sessionCardInfo';
import Content from './sessionCardContent';
import {Tappable} from '../../shared/components';

import {selectSession} from '../actions';

import {speakersForSessionSelector} from '../selectors';

const SessionCard = ({
  classes,
  session,
  speakers,

  handleSessionSelection,
}) => (
  <Card className={classes.card}>
    <CardHeader
      title={
        <Tappable onTap={handleSessionSelection}>
          <Typography variant="h5">{session.title}</Typography>
        </Tappable>
      }
      subheader={
        <Tappable onTap={handleSessionSelection}>
          <Typography component="p">
            {speakers.map(s => s.name).join(', ')}
          </Typography>
        </Tappable>
      }
      action={
        <div>
          <Info session={session} />
          <Favorite session={session} />
        </div>
      }
    />

    <Tappable onTap={handleSessionSelection}>
      <Content session={session} />
    </Tappable>
  </Card>
);

export default compose(
  withSelector('speakers', speakersForSessionSelector),

  withActions({selectSession}),
  withCallback('handleSessionSelection', ({selectSession, session}) => () => {
    selectSession(session);
  }),

  withStyles({
    card: {
      marginBottom: 20,
    },
    actions: {
      display: 'flex',
    },
    speakerButton: {
      margin: 0,
      padding: 0,
    },
  }),
)(SessionCard);
