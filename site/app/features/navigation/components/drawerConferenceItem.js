import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {renderIf} from '@truefit/bach-recompose';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExploreIcon from '@material-ui/icons/Explore';

import {Empty} from '../../shared/components';

import {toggleConferenceModal} from '../../schedule/actions';
import {isAboutRouteSelector} from '../../shared/selectors';

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

  withSelector('isAboutRoute', isAboutRouteSelector),
  renderIf(({isAboutRoute}) => isAboutRoute, Empty),
)(Icon);
