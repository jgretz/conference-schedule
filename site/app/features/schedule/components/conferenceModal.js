import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import {toggleConferenceModal, selectConference} from '../actions';
import {modalsSelector} from '../selectors';
import {CONFERENCES} from '../constants/conferences';

// styling
const styles = {};

// actions
const handleClose = toggleConferenceModal => () => {
  toggleConferenceModal();
};

const handleSelectConference = (
  conference,
  toggleConferenceModal,
  selectConference,
) => () => {
  selectConference(conference);
  toggleConferenceModal();
};

// render
const Conference = ({conference, toggleConferenceModal, selectConference}) => (
  <ListItem
    button
    onClick={handleSelectConference(
      conference,
      toggleConferenceModal,
      selectConference,
    )}
  >
    <ListItemText primary={conference.title} />
  </ListItem>
);

const Cancel = ({toggleConferenceModal}) => (
  <ListItem button onClick={handleClose(toggleConferenceModal)}>
    <ListItemText primary="Cancel" />
  </ListItem>
);

const ConferenceList = props => (
  <List>
    {CONFERENCES.map(conf => (
      <Conference key={conf.title} conference={conf} {...props} />
    ))}
    <Cancel key="Cancel" {...props} />
  </List>
);

const ConferenceModal = ({modals, toggleConferenceModal, ...props}) => (
  <Dialog
    open={modals.conferenceModalVisible}
    onClose={handleClose(toggleConferenceModal)}
    aria-labelledby="conf-dialog-title"
  >
    <DialogTitle id="conf-dialog-title">Select A Conference</DialogTitle>
    <div>
      <ConferenceList
        toggleConferenceModal={toggleConferenceModal}
        {...props}
      />
    </div>
  </Dialog>
);

// build up
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
)(withStyles(styles)(ConferenceModal));
