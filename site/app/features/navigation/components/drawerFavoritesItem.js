import React from 'react';
import {compose, withMemo, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {toggleFavoritesFilter} from '../../shared/actions';
import {favoritesFilterSelector} from '../../shared/selectors';

const Icon = ({text, handleFavoriteClick}) => (
  <ListItem onClick={handleFavoriteClick}>
    <ListItemIcon>
      <FavoriteIcon />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

export default compose(
  withSelector('favoritesFilter', favoritesFilterSelector),

  withMemo('text', ({favoritesFilter}) =>
    favoritesFilter ? 'Show All Sessions' : 'Filter to Only Favorites',
  ),

  withActions({toggleFavoritesFilter}),
  withCallback('handleFavoriteClick', ({toggleFavoritesFilter}) => () => {
    toggleFavoritesFilter();
  }),
)(Icon);
