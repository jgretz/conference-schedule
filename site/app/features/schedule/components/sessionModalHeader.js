import React from 'react';
import {compose, withCallback, withMemo} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

import {toggleFavorite} from '../actions';

import {
  selectedConferenceSelector,
  isFavoriteSessionSelector,
} from '../selectors';

const Header = ({classes, session, color, handleFavoriteClick}) => (
  <div className={classes.header}>
    <Typography variant="h6">{session.title}</Typography>

    <IconButton
      aria-label="Add to favorites"
      color={color}
      onClick={handleFavoriteClick}
    >
      <FavoriteIcon />
    </IconButton>
  </div>
);

export default compose(
  withSelector('conference', selectedConferenceSelector),
  withSelector('isFavorite', isFavoriteSessionSelector),

  withMemo('color', ({isFavorite}) => (isFavorite ? 'secondary' : 'default')),

  withActions({toggleFavorite}),
  withCallback(
    'handleFavoriteClick',
    ({toggleFavorite, conference, session}) => () => {
      toggleFavorite(conference, session);
    },
  ),

  withStyles({
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  }),
)(Header);
