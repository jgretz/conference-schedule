import _ from 'lodash';
import {LOAD_SCHEDULE, LOAD_SESSION} from '../actions';
import {selectedConferenceSelector} from '../selectors';

const loadSchedule = (store, conference) => {
  store.dispatch(conference.loadSchedule);
};

const loadSession = (store, session) => {
  if (!session) {
    return;
  }

  const conference = selectedConferenceSelector(store.getState());
  store.dispatch(conference.loadSession(session));
};

export default store => next => action => {
  if (!_.isObject(action)) {
    next(action);
    return;
  }

  if (action.type === LOAD_SCHEDULE) {
    loadSchedule(store, action.payload);
    return;
  }

  if (action.type === LOAD_SESSION) {
    loadSession(store, action.payload);
    return;
  }

  next(action);
};
