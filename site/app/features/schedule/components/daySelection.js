import React from 'react';
import moment from 'moment';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';

import {selectDay} from '../actions';
import {selectedDaySelector} from '../selectors';
import {DAYS} from '../../shared/constants';

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

const Days = props => {
  const days = DAYS.map(renderDay(props));

  return <div className="day-select">{days}</div>;
};

const mapStateToProps = state => ({
  selectedDay: selectedDaySelector(state),
});

export default connect(
  mapStateToProps,
  {selectDay},
)(Days);
