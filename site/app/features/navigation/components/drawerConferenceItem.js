import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreIcon from '@material-ui/icons/Explore';

import {toggleConferenceModal} from '../../schedule/actions';

const Icon = ({handleClick}) => (
  <ListItem onClick={handleClick}>
    <ListItemIcon>
      <ExploreIcon />
    </ListItemIcon>
    <ListItemText primary="Change Conference" />
  </ListItem>
);

export default compose(
  withActions({toggleConferenceModal}),
  withCallback('handleClick', ({toggleConferenceModal}) => () => {
    toggleConferenceModal();
  }),
)(Icon);
