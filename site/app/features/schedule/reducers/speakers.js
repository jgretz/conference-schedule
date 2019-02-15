import {stateReducer} from 'truefit-react-utils';
import {LOADED_SCHEDULE_DATA} from '../constants/actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const SPEAKERS = 'SPEAKERS';

const INITIAL = getItemFromStorage(SPEAKERS);

export default stateReducer(INITIAL, {
  [LOADED_SCHEDULE_DATA]: (_, {speakers}) => {
    setItemInStorage(SPEAKERS, speakers);

    return speakers;
  },
});
