import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';

import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {toggleFavorite} from '../actions';
import {
  selectedConferenceSelector,
  isFavoriteSessionSelector,
} from '../selectors';

const Favorite = ({isFavorite, handleFavoriteClick}) => (
  <IconButton
    aria-label="Add to favorites"
    color={isFavorite ? 'secondary' : 'default'}
    onClick={handleFavoriteClick}
  >
    <FavoriteIcon />
  </IconButton>
);

export default compose(
  withSelector('conference', selectedConferenceSelector),
  withSelector('isFavorite', isFavoriteSessionSelector),

  withActions({toggleFavorite}),
  withCallback(
    'handleFavoriteClick',
    ({toggleFavorite, conference, session}) => () => {
      toggleFavorite(conference, session);
    },
  ),
)(Favorite);
