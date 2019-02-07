import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import {selectSpeakers} from '../actions';
import {flagsSelector} from '../selectors';

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
  header: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 10,
  },
  headerImg: {
    height: 50,
    width: 50,
    marginRight: 10,
  },
  grow: {
    flexGrow: 1,
  },
});

const handleClose = selectSpeakers => () => {
  selectSpeakers(null);
};

const renderSpeakerInfo = (classes, selectSpeakers) => speaker => (
  <div key={speaker.id}>
    <div className={classes.header}>
      <Avatar src={speaker.profilePicture} className={classes.headerImg} />
      <Typography variant="title">{speaker.fullName}</Typography>

      <div className={classes.grow} />

      <IconButton
        aria-label="Close Speaker Modal"
        onClick={handleClose(selectSpeakers)}
      >
        <CloseIcon />
      </IconButton>
    </div>
    <Typography
      variant="body2"
      dangerouslySetInnerHTML={{__html: speaker.bio}}
    />
  </div>
);

const SpeakerModal = ({classes, flags, selectSpeakers}) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={flags.speakerModalOpen}
    onClose={handleClose(selectSpeakers)}
  >
    <div className={classes.paper}>
      {(flags.selectedSpeakers || []).map(
        renderSpeakerInfo(classes, selectSpeakers),
      )}
    </div>
  </Modal>
);

const mapStateToProps = state => ({
  flags: flagsSelector(state),
});

export default connect(
  mapStateToProps,
  {selectSpeakers},
)(withStyles(styles)(SpeakerModal));
