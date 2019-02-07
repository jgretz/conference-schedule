import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const SPEAKERS = 'SPEAKERS';

const INITIAL = getItemFromStorage(SPEAKERS);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (_, {speakers}) => {
    setItemInStorage(SPEAKERS, speakers);

    return speakers;
  },
});
