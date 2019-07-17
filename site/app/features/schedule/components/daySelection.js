import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import DayButton from './dayButton';

import {selectedConferenceSelector} from '../selectors';

const Days = ({classes, selectedConference}) => (
  <div className={classes.daySelect}>
    {selectedConference.days.map(day => (
      <DayButton key={day} day={day} />
    ))}
  </div>
);

export default compose(
  withSelector('selectedConference', selectedConferenceSelector),
  withStyles({
    daySelect: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
)(Days);
