import {createSelector} from 'reselect';
import loadingSelector from './loadingSelector';
import sessionsSelector from './sessionsSelector';
import {DATA_STATE} from '../constants/misc';

export default createSelector(
  loadingSelector,
  sessionsSelector,

  (loading, sessions) => {
    if (loading.scheduleData) {
      return sessions?.length > 0
        ? DATA_STATE.LOADING_DATA_OLD_CACHED
        : DATA_STATE.LOADING_DATA_NONE_CACHED;
    }

    return DATA_STATE.READY;
  },
);
