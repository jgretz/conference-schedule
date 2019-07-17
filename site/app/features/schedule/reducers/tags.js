import {stateReducer} from '@truefit/redux-utils';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';
import {LOADED_SCHEDULE_DATA} from '../constants/actions';

const TAGS = 'TAGS';

const INITIAL = getItemFromStorage(TAGS) || [];

export default stateReducer(INITIAL, {
  [LOADED_SCHEDULE_DATA]: (_, {tags}) => {
    setItemInStorage(TAGS, tags);

    return tags;
  },
});
