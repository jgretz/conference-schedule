import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {renderIf} from '@truefit/bach-recompose';
import {withStyles} from '@truefit/bach-material-ui';

import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {toggleConferenceModal} from '../../schedule/actions';
import {isScheduleRouteSelector} from '../selectors';
import {selectedConferenceSelector} from '../../schedule/selectors';

const Title = ({classes, conference, handleButtonClick}) => (
  <Button onClick={handleButtonClick}>
    <Typography variant="h6" className={classes.title}>
      {conference.title}
    </Typography>
  </Button>
);

const TitleLink = ({classes, conference}) => (
  <Link to="/" className={classes.titleLink}>
    <Title classes={classes} conference={conference} />
  </Link>
);

export default compose(
  withSelector('conference', selectedConferenceSelector),
  withSelector('isScheduleRoute', isScheduleRouteSelector),

  withActions({toggleConferenceModal}),
  withCallback('handleButtonClick', ({toggleConferenceModal}) => () => {
    toggleConferenceModal();
  }),

  withStyles({
    title: {
      color: '#fff',
    },

    titleLink: {
      textDecoration: 'none',
    },
  }),

  renderIf(({isScheduleRoute}) => !isScheduleRoute, TitleLink),
)(Title);
