import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

import {selectDay} from '../actions';
import {selectedConferenceSelector, selectedDaySelector} from '../selectors';

const handleDayClick = (day, selectDay) => () => {
  selectDay(day);
};

const colorForDay = (day, selectedDay) =>
  day.isSame(selectedDay, 'day') ? 'primary' : 'default';

const renderDay = ({selectedDay, selectDay}) => day => (
  <Button
    key={day}
    color={colorForDay(day, selectedDay)}
    onClick={handleDayClick(day, selectDay)}
  >
    {moment(day).format('dddd')}
  </Button>
);

const Days = ({selectedConference, ...props}) => {
  const days = selectedConference.days.map(renderDay(props));

  return <div className="day-select">{days}</div>;
};

const mapStateToProps = state => ({
  selectedConference: selectedConferenceSelector(state),
  selectedDay: selectedDaySelector(state),
});

export default connect(
  mapStateToProps,
  {selectDay},
)(Days);
