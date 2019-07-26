import React from 'react';
import {compose, withCallback, withMemo} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ConferenceButton from './conferenceButton';

import {toggleConferenceModal} from '../actions';
import {modalsSelector} from '../selectors';
import {groupConferencesByDate} from '../services';

const ConferenceList = ({conferences}) => (
  <List>
    {conferences.map(conf => (
      <ConferenceButton key={conf.title} conference={conf} />
    ))}
  </List>
);

const ConferenceModal = ({classes, modals, conferences, handleClose}) => (
  <Dialog
    open={modals.conferenceModalVisible}
    onClose={handleClose}
    aria-label="conference dialog"
  >
    <Typography variant="h5" className={classes.title}>
      Conferences
    </Typography>

    <ConferenceList conferences={conferences.present} />

    <Divider />
    <Typography variant="h5" className={classes.title}>
      Past Conferences
    </Typography>
    <ConferenceList conferences={conferences.past} />
  </Dialog>
);

export default compose(
  withActions({toggleConferenceModal}),
  withSelector('modals', modalsSelector),

  withMemo('conferences', () => groupConferencesByDate(), []),

  withCallback('handleClose', ({toggleConferenceModal}) => () => {
    toggleConferenceModal();
  }),

  withStyles({
    title: {
      margin: '18px 0 0 12px',
    },
  }),
)(ConferenceModal);
