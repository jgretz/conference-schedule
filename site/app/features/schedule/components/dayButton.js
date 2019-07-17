import React from 'react';
import moment from 'moment';
import {compose, withCallback, withMemo} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';

import Button from '@material-ui/core/Button';

import {selectDay} from '../actions';
import {selectedDaySelector} from '../selectors';

const Day = ({color, text, handleDayClick}) => (
  <Button color={color} onClick={handleDayClick}>
    {text}
  </Button>
);

export default compose(
  withActions({selectDay}),
  withCallback('handleDayClick', ({day, selectDay}) => () => {
    selectDay(day);
  }),

  withSelector('selectedDay', selectedDaySelector),
  withMemo('color', ({day, selectedDay}) =>
    day.isSame(selectedDay, 'day') ? 'primary' : 'default',
  ),
  withMemo('text', ({day}) => moment(day).format('dddd')),
)(Day);
