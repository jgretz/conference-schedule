import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {renderIf} from '@truefit/bach-recompose';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaunchIcon from '@material-ui/icons/Launch';

import {Empty} from '../../shared/components';

import {toggleLinkModal, generateFavoritesLink} from '../../schedule/actions';
import {isAboutRouteSelector} from '../../shared/selectors';

const Icon = ({handleFavoriteClick}) => (
  <ListItem onClick={handleFavoriteClick}>
    <ListItemIcon>
      <LaunchIcon />
    </ListItemIcon>
    <ListItemText primary="Export Favorites" />
  </ListItem>
);

export default compose(
  withActions({toggleLinkModal, generateFavoritesLink}),
  withCallback(
    'handleFavoriteClick',
    ({generateFavoritesLink, toggleLinkModal}) => () => {
      generateFavoritesLink();
      toggleLinkModal();
    },
  ),

  withSelector('isAboutRoute', isAboutRouteSelector),
  renderIf(({isAboutRoute}) => isAboutRoute, Empty),
)(Icon);
