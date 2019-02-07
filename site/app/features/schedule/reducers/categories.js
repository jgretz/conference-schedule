import _ from 'lodash';
import {stateReducer} from 'truefit-react-utils';
import {LOADED_CODEMASH_DATA} from '../actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const CATEGORIES = 'CATEGORIES';

const INITIAL = getItemFromStorage(CATEGORIES);

export default stateReducer(INITIAL, {
  [LOADED_CODEMASH_DATA]: (state, {categories}) => {
    const items = _.flatMap(categories, c => c.items);

    setItemInStorage(CATEGORIES, items);

    return items;
  },
});
