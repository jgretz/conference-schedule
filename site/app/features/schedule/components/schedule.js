import React from 'react';
import {compose} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withLifecycle} from '@truefit/bach-recompose';
import {withStyles} from '@truefit/bach-material-ui';
import {withGATracker} from '../../shared/enhancers';

import SessionList from './sessionList';
import DaySelection from './daySelection';
import SessionModal from './sessionModal';
import ConferenceModal from './conferenceModal';

import {execute} from '../actions';
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
  withActions({execute}),
  withSelector('selectedConference', selectedConferenceSelector),

  withLifecycle({
    componentDidMount: ({selectedConference, execute}) => {
      execute(selectedConference.loadData);
    },

    componentDidUpdate: ({selectedConference, execute}, prevProps) => {
      if (selectedConference !== prevProps?.selectedConference) {
        execute(selectedConference.loadData);
      }
    },
  }),

  withStyles({
    schedule: {
      margin: '20px 20px 0 20px',
    },
  }),

  withGATracker(),
)(Schedule);
