import _ from 'lodash';
import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';

import {toggleConferenceModal, selectConference} from '../actions';

const format = day => day.format('MMM Do, YYYY');

const Secondary = ({conference}) => (
  <>
    <span>{conference.location}</span>
    <br />
    <span>
      {format(conference.days |> _.first)}-{format(conference.days |> _.last)}
    </span>
  </>
);

const ConferenceButton = ({conference, handleSelectConference}) => (
  <ListItem button onClick={handleSelectConference}>
    <ListItemAvatar>
      <Avatar src={conference.image} />
    </ListItemAvatar>
    <ListItemText
      primary={conference.title}
      secondary={<Secondary conference={conference} />}
    />
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
