import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';

import List from './list';
import DaySelection from './daySelection';
import SessionModal from './sessionModal';
import ConferenceModal from './conferenceModal';

import {execute} from '../actions';
import {selectedConferenceSelector} from '../selectors';

const Schedule = () => (
  <div className="schedule">
    <DaySelection />
    <List />

    <SessionModal />
    <ConferenceModal />
  </div>
);

const ComposedSchedule = compose(
  withLifecycle({
    onDidMount({selectedConference, execute}) {
      execute(selectedConference.loadData);
    },

    onDidUpdate(prevProps, {selectedConference, execute}) {
      if (selectedConference !== prevProps.selectedConference) {
        execute(selectedConference.loadData);
      }
    },
  }),
)(Schedule);

const mapStateToProps = state => ({
  selectedConference: selectedConferenceSelector(state),
});

export default connect(
  mapStateToProps,
  {execute},
)(ComposedSchedule);
