import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import {pipe, withHandlers} from '@synvox/rehook';

import {withStyles} from '@material-ui/core/styles';
import {selectDay} from '../actions';
import {selectedConferenceSelector, selectedDaySelector} from '../selectors';

// styles
const styles = {
  daySelect: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// Day Component
const colorForDay = (day, selectedDay) =>
  day.isSame(selectedDay, 'day') ? 'primary' : 'default';

const Day = ({day, selectedDay, handleDayClick}) => (
  <Button color={colorForDay(day, selectedDay)} onClick={handleDayClick}>
    {moment(day).format('dddd')}
  </Button>
);

const ComposedDay = pipe(
  withHandlers({
    handleDayClick: ({day, selectDay}) => () => {
      selectDay(day);
    },
  }),

  Day,
);

// Days List
const Days = ({classes, selectedConference, ...props}) => (
  <div className={classes.daySelect}>
    {selectedConference.days.map(day => (
      <ComposedDay key={day} day={day} {...props} />
    ))}
  </div>
);

// redux
const mapStateToProps = state => ({
  selectedConference: selectedConferenceSelector(state),
  selectedDay: selectedDaySelector(state),
});

export default connect(
  mapStateToProps,
  {selectDay},
)(withStyles(styles)(Days));
