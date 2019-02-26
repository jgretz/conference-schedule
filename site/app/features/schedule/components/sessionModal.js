import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Divider from '@material-ui/core/Divider';

import {
  selectSession,
  toggleFavorite,
  selectSessionModalModeDetail,
  selectSessionModalModeSpeakers,
} from '../actions';

import {
  modalsSelector,
  selectedConferenceSelector,
  selectedSessionSelector,
  speakersForSessionSelector,
  roomForSessionSelector,
  tagsForSessionSelector,
  isFavoriteSessionSelector,
} from '../selectors';

import {
  SESSION_DETAIL_SELECTED,
  SESSION_SPEAKERS_SELECTED,
} from '../constants/actions';

const styles = theme => ({
  paper: {
    margin: '30px auto',
    width: '90%',
    maxWidth: 900,
    minWidth: 300,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  grow: {
    flexGrow: 1,
  },

  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  modeSelection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  speakerTitle: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    marginRight: 10,

    height: 50,
    width: 50,

    borderRadius: 25,
  },

  splitRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  divider: {
    marginTop: 10,
    marginBottom: 10,
  },
});

// helpers
const colorForButton = (modals, value) =>
  modals.sessionModalMode === value ? 'secondary' : 'default';

// actions
const handleClose = (selectSession, selectSessionModalModeDetail) => () => {
  selectSession(null);
  selectSessionModalModeDetail();
};

const handleFavoriteClick = (session, toggleFavorite) => () => {
  toggleFavorite(session.id);
};

// render
const Speakers = ({classes, speakers}) => {
  const divider = index =>
    index < speakers.length - 1 ? (
      <Divider className={classes.divider} variant="middle" />
    ) : null;

  return (
    <div>
      {speakers.map((speaker, i) => (
        <div key={speaker.id}>
          <div className={classes.speakerTitle}>
            <img
              alt={speaker.name}
              src={speaker.profilePicture}
              className={classes.avatar}
            />
            {speaker.name}
          </div>
          <Typography
            component="p"
            variant="body2"
            dangerouslySetInnerHTML={{__html: speaker.bio}}
          />

          {divider(i)}
        </div>
      ))}
    </div>
  );
};

const SessionDetail = ({classes, speakers, room, tags, session}) => (
  <div>
    <div className={classes.splitRow}>
      <div>Room: {room.name}</div>
      <div>Tags: {tags.map(c => c.name).join(', ')}</div>
    </div>
    <div>
      Speaker{speakers.length === 1 ? '' : 's'}:{' '}
      {speakers.map(s => s.name).join(', ')}
    </div>

    <Divider className={classes.divider} variant="middle" />

    <Typography
      component="p"
      variant="body2"
      dangerouslySetInnerHTML={{__html: session.description}}
    />
  </div>
);

const Content = ({modals, ...props}) => {
  if (modals.sessionModalMode === SESSION_DETAIL_SELECTED) {
    return <SessionDetail {...props} />;
  }

  return <Speakers {...props} />;
};

const ModeSelection = ({
  classes,
  modals,
  selectSessionModalModeDetail,
  selectSessionModalModeSpeakers,
  speakers,
}) => (
  <div className={classes.modeSelection}>
    <Button
      color={colorForButton(modals, SESSION_DETAIL_SELECTED)}
      onClick={selectSessionModalModeDetail}
    >
      Detail
    </Button>
    <Button
      color={colorForButton(modals, SESSION_SPEAKERS_SELECTED)}
      onClick={selectSessionModalModeSpeakers}
    >
      Speaker{speakers.length <= 1 ? '' : 's'}
    </Button>
  </div>
);

const Header = ({classes, session, isFavorite, toggleFavorite}) => (
  <div className={classes.header}>
    <Typography variant="title">{session.title}</Typography>

    <div className={classes.grow} />

    <IconButton
      aria-label="Add to favorites"
      color={isFavorite ? 'secondary' : 'default'}
      onClick={handleFavoriteClick(session, toggleFavorite)}
    >
      <FavoriteIcon />
    </IconButton>
  </div>
);

const Session = props => (
  <div>
    <Header {...props} />
    <ModeSelection {...props} />
    <Content {...props} />
  </div>
);

const SessionModal = ({
  classes,
  session,
  modals,

  selectSession,
  selectSessionModalModeDetail,

  ...props
}) => {
  const onClose = handleClose(selectSession, selectSessionModalModeDetail);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={modals.sessionModalVisible}
      onClose={onClose}
      scroll="paper"
    >
      <div className={classes.paper}>
        <Session
          classes={classes}
          session={session}
          modals={modals}
          selectSessionModalModeDetail={selectSessionModalModeDetail}
          {...props}
        />
      </div>
    </Modal>
  );
};

// HOC build
const ComposedSessionModal = compose(
  withLifecycle({
    onDidUpdate(prevProps, props) {
      if (props.session && prevProps.session !== props.session) {
        // conference.loadSessionDetail(dispatch, store, session);
        // console.log(props);
      }
    },
  }),
)(SessionModal);

const mapStateToProps = (state, props) => ({
  conference: selectedConferenceSelector(state),
  session: selectedSessionSelector(state),
  modals: modalsSelector(state),

  speakers: speakersForSessionSelector(state, props),
  room: roomForSessionSelector(state, props),
  tags: tagsForSessionSelector(state, props),
  isFavorite: isFavoriteSessionSelector(state, props),
});

const mapDispatchToProps = {
  selectSession,
  toggleFavorite,
  selectSessionModalModeDetail,
  selectSessionModalModeSpeakers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(styles)(ComposedSessionModal));
