import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import {toggleConferenceModal, selectConference} from '../actions';

const ConferenceButton = ({conference, handleSelectConference}) => (
  <ListItem button onClick={handleSelectConference}>
    <ListItemText primary={conference.title} />
  </ListItem>
);

export default compose(
  withActions({toggleConferenceModal, selectConference}),

  withCallback(
    'handleSelectConference',
    ({conference, toggleConferenceModal, selectConference}) => () => {
      selectConference(conference);
      toggleConferenceModal();
    },
  ),
)(ConferenceButton);
