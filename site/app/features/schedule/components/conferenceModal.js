import React from 'react';
import {connect} from 'react-redux';
import {pipe, withHandlers} from '@synvox/rehook';

import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import {toggleConferenceModal, selectConference} from '../actions';
import {modalsSelector} from '../selectors';
import {CONFERENCES} from '../constants/conferences';

// Conference Component
const Conference = ({conference, handleSelectConference}) => (
  <ListItem button onClick={handleSelectConference}>
    <ListItemText primary={conference.title} />
  </ListItem>
);

const ComposedConference = pipe(
  withHandlers({
    handleSelectConference: ({
      conference,
      toggleConferenceModal,
      selectConference,
    }) => () => {
      selectConference(conference);
      toggleConferenceModal();
    },
  }),

  Conference,
);

// render
const Cancel = ({handleClose}) => (
  <ListItem button onClick={handleClose}>
    <ListItemText primary="Cancel" />
  </ListItem>
);

const ConferenceList = props => (
  <List>
    {CONFERENCES.map(conf => (
      <ComposedConference key={conf.title} conference={conf} {...props} />
    ))}
    <Cancel key="Cancel" {...props} />
  </List>
);

const ConferenceModal = ({modals, handleClose, ...props}) => (
  <Dialog
    open={modals.conferenceModalVisible}
    onClose={handleClose}
    aria-labelledby="conf-dialog-title"
  >
    <DialogTitle id="conf-dialog-title">Select A Conference</DialogTitle>
    <div>
      <ConferenceList handleClose={handleClose} {...props} />
    </div>
  </Dialog>
);

// hooks
const ComposedConferenceModal = pipe(
  withHandlers({
    handleClose: ({toggleConferenceModal}) => () => {
      toggleConferenceModal();
    },
  }),

  ConferenceModal,
);

// redux
const mapStateToProps = state => ({
  modals: modalsSelector(state),
});

const mapDispatchToProps = {
  toggleConferenceModal,
  selectConference,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles({})(ComposedConferenceModal));
