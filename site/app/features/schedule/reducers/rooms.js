import {stateReducer} from 'truefit-react-utils';
import {LOADED_SCHEDULE_DATA} from '../constants/actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const ROOMS = 'ROOMS';

const INITIAL = getItemFromStorage(ROOMS);

export default stateReducer(INITIAL, {
  [LOADED_SCHEDULE_DATA]: (_, {rooms}) => {
    setItemInStorage(ROOMS, rooms);

    return rooms;
  },
});
