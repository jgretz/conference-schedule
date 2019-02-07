import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const SESSIONS = 'SESSIONS';

const INITIAL = getItemFromStorage(SESSIONS);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (_, {sessions}) => {
    setItemInStorage(SESSIONS, sessions);

    return sessions;
  },
});
