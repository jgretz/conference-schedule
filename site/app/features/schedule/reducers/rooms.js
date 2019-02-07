import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const ROOMS = 'ROOMS';

const INITIAL = getItemFromStorage(ROOMS);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (_, {rooms}) => {
    setItemInStorage(ROOMS, rooms);

    return rooms;
  },
});
