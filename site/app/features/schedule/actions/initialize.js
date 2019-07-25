import {INITIALIZE} from './actions';
import {getDefaultConference, getDefaultDayForConference} from '../services';

export const initialize = () => {
  const defaultConference = getDefaultConference();
  const defaultDay = getDefaultDayForConference(defaultConference);

  return {
    type: INITIALIZE,
    payload: {
      defaultConference,
      defaultDay,
    },
  };
};
