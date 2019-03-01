import React from 'react';
import {connect} from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {withStyles} from '@material-ui/core/styles';

import {toggleConferenceModal} from '../actions';
import {toggleFavoritesFilter} from '../../shared/actions';
import {favoritesFilterSelector} from '../../shared/selectors';
import {selectedConferenceSelector} from '../selectors';

const styles = () => ({
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
    color: '#fff',
  },
});

const handleFavoriteClick = toggleFavoritesFilter => () => {
  toggleFavoritesFilter();
};

const handleToggleConferenceModal = toggleConferenceModal => () => {
  toggleConferenceModal();
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

const Title = ({classes, selectedConference, toggleConferenceModal}) => (
  <Button onClick={handleToggleConferenceModal(toggleConferenceModal)}>
    <Typography variant="h6" className={classes.title}>
      {selectedConference.title}
    </Typography>
  </Button>
);

const TitleBar = ({classes, ...props}) => (
  <AppBar position="static" color="primary">
    <Toolbar className={classes.toolbar}>
      <div className={classes.toolbarContent}>
        <Title classes={classes} {...props} />
        <Filter {...props} />
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
  {toggleFavoritesFilter, toggleConferenceModal},
)(withStyles(styles)(TitleBar));
