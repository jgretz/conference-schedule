import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {pipe, withHandlers} from '@synvox/rehook';

import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import InfoIcon from '@material-ui/icons/Info';
import InvertColorsIcon from '@material-ui/icons/InvertColors';

import {toggleConferenceModal} from '../../schedule/actions';
import {toggleFavoritesFilter, toggleTheme} from '../actions';
import {favoritesFilterSelector, isScheduleRouteSelector} from '../selectors';
import {selectedConferenceSelector} from '../../schedule/selectors';

// styles
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

  titleLink: {
    textDecoration: 'none',
  },
});

// render
const FilterFavorites = ({favoritesFilter, handleFavoriteClick}) => (
  <IconButton
    aria-label="Filter List To Favorites"
    color={favoritesFilter ? 'secondary' : 'default'}
    onClick={handleFavoriteClick}
  >
    <FavoriteIcon />
  </IconButton>
);

const Info = () => (
  <Link to="about">
    <IconButton>
      <InfoIcon />
    </IconButton>
  </Link>
);

const ThemeToggle = ({handleToggleTheme}) => (
  <IconButton
    aria-label="Toggle Light / Dark Themes"
    onClick={handleToggleTheme}
  >
    <InvertColorsIcon />
  </IconButton>
);

const TitleScheduleLink = ({classes, selectedConference}) => (
  <Link to="/" className={classes.titleLink}>
    <Button>
      <Typography variant="h6" className={classes.title}>
        {selectedConference.title}
      </Typography>
    </Button>
  </Link>
);

const TitleSelectConference = ({
  classes,
  selectedConference,
  handleToggleConferenceModal,
}) => (
  <Button onClick={handleToggleConferenceModal}>
    <Typography variant="h6" className={classes.title}>
      {selectedConference.title}
    </Typography>
  </Button>
);

const TitleBar = ({classes, isScheduleRoute, ...props}) => {
  const Title = isScheduleRoute ? TitleSelectConference : TitleScheduleLink;

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.toolbar}>
        <div className={classes.toolbarContent}>
          <Title classes={classes} {...props} />

          <div>
            <ThemeToggle {...props} />
            <Info />
            <FilterFavorites {...props} />
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

// hooks
const ComposedTitleBar = pipe(
  withHandlers({
    handleFavoriteClick: ({toggleFavoritesFilter}) => () => {
      toggleFavoritesFilter();
    },

    handleToggleConferenceModal: ({toggleConferenceModal}) => () => {
      toggleConferenceModal();
    },

    handleToggleTheme: ({toggleTheme}) => () => {
      toggleTheme();
    },
  }),

  TitleBar,
);

// redux
const mapStateToProps = state => ({
  favoritesFilter: favoritesFilterSelector(state),
  selectedConference: selectedConferenceSelector(state),
  isScheduleRoute: isScheduleRouteSelector(state),
});

export default connect(
  mapStateToProps,
  {toggleFavoritesFilter, toggleConferenceModal, toggleTheme},
)(withStyles(styles)(ComposedTitleBar));
