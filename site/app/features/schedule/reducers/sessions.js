import produce from 'immer';
import {stateReducer} from '@truefit/redux-utils';
import {
  CONFERENCE_SELECTED,
  LOADED_SCHEDULE_DATA,
  LOADED_SESSION_DETAIL,
} from '../constants/actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const SESSIONS = 'SESSIONS';

const INITIAL = getItemFromStorage(SESSIONS);

export default stateReducer(INITIAL, {
  [CONFERENCE_SELECTED]: state => {
    setItemInStorage(SESSIONS, []);

    return produce(state, () => []);
  },

  [LOADED_SCHEDULE_DATA]: (state, {sessions}) => {
    setItemInStorage(SESSIONS, sessions);

    return produce(state, () => sessions);
  },

  [LOADED_SESSION_DETAIL]: (state, {session}) => {
    const sessions = produce(state, draft => {
      const draftSession = draft[draft.findIndex(d => d.id === session.id)];
      draftSession.description = session.description;
    });

    setItemInStorage(SESSIONS, sessions);

    return sessions;
  },
});
