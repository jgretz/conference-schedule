import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {toggleFavorite, selectSpeakers} from '../actions';

import {
  speakersForSessionSelector,
  roomForSessionSelector,
  categoriesForSessionSelector,
  isFavoriteSessionSelector,
} from '../selectors';

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

const handleSpeakerClick = (speakers, selectSpeakers) => () => {
  selectSpeakers(speakers);
};

const handleFavoriteClick = (session, toggleFavorite) => () => {
  toggleFavorite(session.id);
};

const Favorite = ({session, isFavorite, toggleFavorite}) => (
  <IconButton
    aria-label="Add to favorites"
    color={isFavorite ? 'secondary' : 'default'}
    onClick={handleFavoriteClick(session, toggleFavorite)}
  >
    <FavoriteIcon />
  </IconButton>
);

const Content = ({session, room, categories, classes}) => (
  <CardContent>
    <Typography
      component="p"
      dangerouslySetInnerHTML={{__html: session.description}}
    />
    <div className={classes.contentFooter}>
      <Typography component="p" className={classes.room}>
        {room.name}
      </Typography>
      <Typography component="p">
        {categories.map(c => c.name).join(', ')}
      </Typography>
    </div>
  </CardContent>
);

const SessionCard = ({
  classes,
  session,
  speakers,
  room,
  categories,
  isFavorite,

  toggleFavorite,
  selectSpeakers,
}) => (
  <Card className={classes.card}>
    <CardHeader
      title={session.title}
      subheader={
        <Button
          className={classes.speakerButton}
          onClick={handleSpeakerClick(speakers, selectSpeakers)}
        >
          {speakers.map(s => s.fullName).join(', ')}
        </Button>
      }
      action={
        <Favorite
          session={session}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      }
      className="card-header"
    />
    <Content
      session={session}
      room={room}
      categories={categories}
      classes={classes}
    />
  </Card>
);

const mapStateToProps = (state, props) => ({
  speakers: speakersForSessionSelector(state, props),
  room: roomForSessionSelector(state, props),
  categories: categoriesForSessionSelector(state, props),
  isFavorite: isFavoriteSessionSelector(state, props),
});

export default connect(
  mapStateToProps,
  {toggleFavorite, selectSpeakers},
)(withStyles(styles)(SessionCard));
