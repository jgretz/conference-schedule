import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';
import {withSelector} from '@truefit/bach-redux';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CloudIcon from '@material-ui/icons/Cloud';

import {selectedConferenceSelector} from '../../schedule/selectors';

const Info = ({classes, conference}) => (
  <a href={conference.site} target="_blank" className={classes.titleLink}>
    <ListItem>
      <ListItemIcon>
        <CloudIcon />
      </ListItemIcon>
      <ListItemText primary={`${conference.title} Site`} />
    </ListItem>
  </a>
);

export default compose(
  withSelector('conference', selectedConferenceSelector),

  withStyles(theme => ({
    titleLink: {
      color: theme.palette.text.primary,
      textDecoration: 'none',
    },
  })),
)(Info);
