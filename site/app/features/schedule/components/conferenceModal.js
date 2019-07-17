import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ConferenceButton from './conferenceButton';

import {toggleConferenceModal} from '../actions';
import {modalsSelector} from '../selectors';
import {CONFERENCES} from '../../../util/configureConferences';

// render
const Cancel = ({handleClose}) => (
  <ListItem button onClick={handleClose}>
    <ListItemText primary="Cancel" />
  </ListItem>
);

const ConferenceList = props => (
  <List>
    {CONFERENCES.map(conf => (
      <ConferenceButton key={conf.title} conference={conf} />
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

export default compose(
  withActions({toggleConferenceModal}),
  withSelector('modals', modalsSelector),

  withCallback('handleClose', ({toggleConferenceModal}) => () => {
    toggleConferenceModal();
  }),

  withStyles(),
)(ConferenceModal);
