import {CONFERENCE_SELECTED} from './actions';
import {selectDay} from './selectDay';
import {getDefaultDayForConference} from '../services';

export const selectConference = conference => dispatch => {
  dispatch({
    type: CONFERENCE_SELECTED,
    payload: conference,
  });

  dispatch(selectDay(getDefaultDayForConference(conference)));
};
