import {createSelector} from 'reselect';
import loadingSelector from './loadingSelector';
import {DATA_STATE} from '../constants/misc';

export default createSelector(
  loadingSelector,
  loading => {
    return loading.scheduleData
      ? DATA_STATE.LOADING_DATA_NONE_CACHED
      : DATA_STATE.READY;
  },
);
