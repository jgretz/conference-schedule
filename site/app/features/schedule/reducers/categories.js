import _ from 'lodash';
import {stateReducer} from 'truefit-react-utils';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';
import {LOADING_SCHEDULE_DATA} from '../constants/actions';

const CATEGORIES = 'CATEGORIES';

const INITIAL = getItemFromStorage(CATEGORIES);

export default stateReducer(INITIAL, {
  [LOADING_SCHEDULE_DATA]: (state, {categories}) => {
    const items = _.flatMap(categories, c => c.items);

    setItemInStorage(CATEGORIES, items);

    return items;
  },
});
