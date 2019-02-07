import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'recompose';
import withLifecycle from '@hocs/with-lifecycle';

import List from './list';
import DaySelection from './daySelection';

import {loadCodeMashData} from '../actions';

const Schedule = () => (
  <div className="schedule">
    <DaySelection />
    <List />
  </div>
);

const ComposedSchedule = compose(
  withLifecycle({
    onDidMount({loadCodeMashData}) {
      loadCodeMashData();
    },
  }),
)(Schedule);

export default connect(
  null,
  {loadCodeMashData},
)(ComposedSchedule);
