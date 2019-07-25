import React from 'react';
import {compose, withMemo} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';
import {withSelector} from '@truefit/bach-redux';

import {Link} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InfoIcon from '@material-ui/icons/Info';

import {isScheduleRouteSelector} from '../../shared/selectors';

const Info = ({classes, to, text}) => (
  <Link to={to} className={classes.titleLink}>
    <ListItem>
      <ListItemIcon>
        <InfoIcon />
      </ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  </Link>
);

export default compose(
  withSelector('isScheduleRoute', isScheduleRouteSelector),
  withMemo('to', ({isScheduleRoute}) => (isScheduleRoute ? 'about' : '/')),
  withMemo('text', ({isScheduleRoute}) =>
    isScheduleRoute ? 'About' : 'Schedule',
  ),

  withStyles(theme => ({
    titleLink: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  })),
)(Info);
