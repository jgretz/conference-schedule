import React from 'react';
import {connect} from 'react-redux';
import {pipe, withHandlers} from '@synvox/rehook';

import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import Hidden from '@material-ui/core/Hidden';

import {Tappable} from '../../shared/components';

import {toggleFavorite, selectSession} from '../actions';
import {
  selectedConferenceSelector,
  speakersForSessionSelector,
  roomForSessionSelector,
  tagsForSessionSelector,
  isFavoriteSessionSelector,
} from '../selectors';

// styles
const styles = () => ({
  card: {
    marginBottom: 20,
  },
  actions: {
    display: 'flex',
  },
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
  speakerButton: {
    margin: 0,
    padding: 0,
  },
});

// render
const Favorite = ({isFavorite, handleFavoriteClick}) => (
  <IconButton
    aria-label="Add to favorites"
    color={isFavorite ? 'secondary' : 'default'}
    onClick={handleFavoriteClick}
  >
    <FavoriteIcon />
  </IconButton>
);

const Info = ({handleSessionSelection}) => (
  <Hidden smDown>
    <IconButton aria-label="More Info" onClick={handleSessionSelection}>
      <InfoIcon />
    </IconButton>
  </Hidden>
);

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

const SessionCard = ({
  classes,
  session,
  speakers,

  handleSessionSelection,

  ...props
}) => (
  <Tappable onTap={handleSessionSelection}>
    <Card className={classes.card}>
      <CardHeader
        title={session.title}
        subheader={
          <Typography component="p">
            {speakers.map(s => s.name).join(', ')}
          </Typography>
        }
        action={
          <div>
            <Info
              session={session}
              handleSessionSelection={handleSessionSelection}
              {...props}
            />
            <Favorite session={session} {...props} />
          </div>
        }
      />
      <Content classes={classes} session={session} {...props} />
    </Card>
  </Tappable>
);

// hooks
const ComposedSessionCard = pipe(
  withHandlers({
    handleSessionSelection: ({selectSession, session}) => () => {
      selectSession(session);
    },

    handleFavoriteClick: ({toggleFavorite, conference, session}) => () => {
      toggleFavorite(conference, session);
    },
  }),

  SessionCard,
);

// redux
const mapStateToProps = (state, props) => ({
  conference: selectedConferenceSelector(state, props),
  speakers: speakersForSessionSelector(state, props),
  room: roomForSessionSelector(state, props),
  tags: tagsForSessionSelector(state, props),
  isFavorite: isFavoriteSessionSelector(state, props),
});

export default connect(
  mapStateToProps,
  {toggleFavorite, selectSession},
)(withStyles(styles)(ComposedSessionCard));
