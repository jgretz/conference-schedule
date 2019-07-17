import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {toggleFavoritesFilter} from '../actions';
import {favoritesFilterSelector} from '../selectors';

const FilterFavorites = ({favoritesFilter, handleFavoriteClick}) => (
  <IconButton
    aria-label="Filter List To Favorites"
    color={favoritesFilter ? 'secondary' : 'default'}
    onClick={handleFavoriteClick}
  >
    <FavoriteIcon />
  </IconButton>
);

export default compose(
  withSelector('favoritesFilter', favoritesFilterSelector),

  withActions({toggleFavoritesFilter}),
  withCallback('handleFavoriteClick', ({toggleFavoritesFilter}) => () => {
    toggleFavoritesFilter();
  }),
)(FilterFavorites);
