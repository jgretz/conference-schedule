import React from 'react';
import {compose, withEffect} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';
import {withGATracker} from '../../shared/enhancers';

import SessionList from './sessionList';
import DaySelection from './daySelection';
import SessionModal from './sessionModal';
import ConferenceModal from './conferenceModal';

import {loadSchedule} from '../actions';
import {selectedConferenceSelector} from '../selectors';

const Schedule = ({classes}) => {
  return (
    <div className={classes.schedule}>
      <DaySelection />
      <SessionList />

      <SessionModal />
      <ConferenceModal />
    </div>
  );
};

export default compose(
  withActions({loadSchedule}),
  withSelector('selectedConference', selectedConferenceSelector),

  withEffect(
    ({loadSchedule, selectedConference}) => {
      loadSchedule(selectedConference);
    },
    ['selectedConference'],
  ),

  withStyles({
    schedule: {
      margin: '20px 20px 0 20px',
    },
  }),

  withGATracker(),
)(Schedule);
