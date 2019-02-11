import React from 'react';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {withStyles} from '@material-ui/core/styles';

import {toggleFavoritesFilter} from '../../shared/actions';
import {favoritesFilterSelector} from '../../shared/selectors';
import {selectedConferenceSelector} from '../selectors';

const styles = theme => ({
  root: {
    width: '100%',
  },
  toolbar: {
    display: 'flex',
    flex: 1,
    padding: '0 20px',
  },
  toolbarContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',

    width: '100%',
    maxWidth: 1000,
    margin: '0 auto',
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});

const handleFavoriteClick = toggleFavoritesFilter => () => {
  toggleFavoritesFilter();
};

const Filter = ({favoritesFilter, toggleFavoritesFilter}) => (
  <IconButton
    aria-label="Filter List To Favorites"
    color={favoritesFilter ? 'secondary' : 'default'}
    onClick={handleFavoriteClick(toggleFavoritesFilter)}
  >
    <FavoriteIcon />
  </IconButton>
);

const Title = ({selectedConference}) => (
  <Typography variant="h6" color="inherit">
    {selectedConference.title}
  </Typography>
);

const TitleBar = ({
  classes,
  selectedConference,
  favoritesFilter,
  toggleFavoritesFilter,
}) => (
  <AppBar position="static" color="primary">
    <Toolbar className={classes.toolbar}>
      <div className={classes.toolbarContent}>
        <Title classes={classes} selectedConference={selectedConference} />
        <Filter
          favoritesFilter={favoritesFilter}
          toggleFavoritesFilter={toggleFavoritesFilter}
        />
      </div>
    </Toolbar>
  </AppBar>
);

const mapStateToProps = state => ({
  favoritesFilter: favoritesFilterSelector(state),
  selectedConference: selectedConferenceSelector(state),
});

export default connect(
  mapStateToProps,
  {toggleFavoritesFilter},
)(withStyles(styles)(TitleBar));
