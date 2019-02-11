import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';

import List from './list';
import DaySelection from './daySelection';

import {selectedConferenceSelector} from '../selectors';

const Schedule = () => (
  <div className="schedule">
    <DaySelection />
    <List />
  </div>
);

const ComposedSchedule = compose(
  withLifecycle({
    onDidMount({selectedConference, dispatch}) {
      selectedConference.loadData(dispatch);
    },
  }),
)(Schedule);

const mapStateToProps = state => ({
  selectedConference: selectedConferenceSelector(state),
});

export default connect(mapStateToProps)(ComposedSchedule);
