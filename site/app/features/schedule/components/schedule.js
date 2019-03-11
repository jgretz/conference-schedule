import React from 'react';
import {connect} from 'react-redux';
import {pipe, lifecycle} from '@synvox/rehook';

import List from './list';
import DaySelection from './daySelection';
import SessionModal from './sessionModal';
import ConferenceModal from './conferenceModal';

import {execute} from '../actions';
import {selectedConferenceSelector} from '../selectors';

const Schedule = () => {
  return (
    <div className="schedule">
      <DaySelection />
      <List />

      <SessionModal />
      <ConferenceModal />
    </div>
  );
};

const ComposedSchedule = pipe(
  lifecycle({
    componentDidMount() {
      const {selectedConference, execute} = this.props;

      execute(selectedConference.loadData);
    },

    componentDidUpdate(prevProps) {
      const {selectedConference, execute} = this.props;
      if (prevProps && prevProps.selectedConference !== selectedConference) {
        execute(selectedConference.loadData);
      }
    },
  }),

  Schedule,
);

const mapStateToProps = state => ({
  selectedConference: selectedConferenceSelector(state),
});

export default connect(
  mapStateToProps,
  {execute},
)(ComposedSchedule);
