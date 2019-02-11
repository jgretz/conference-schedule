import {stateReducer} from 'truefit-react-utils';
import {LOADING_SCHEDULE_DATA} from '../constants/actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const SESSIONS = 'SESSIONS';

const INITIAL = getItemFromStorage(SESSIONS);

export default stateReducer(INITIAL, {
  [LOADING_SCHEDULE_DATA]: (_, {sessions}) => {
    setItemInStorage(SESSIONS, sessions);

    return sessions;
  },
});
