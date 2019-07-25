import _ from 'lodash';
import {createSelector} from 'reselect';

import loadingSelector from './loadingSelector';
import sessionsSelector from './sessionsSelector';
import selectedSelector from './selectedSelector';

import {DATA_STATE} from 'constants';

// selector
export default createSelector(
  loadingSelector,
  sessionsSelector,
  selectedSelector,

  (loading, sessions, {sessionId}) => {
    if (loading.sessionDetail) {
      const session = _.find(sessions, s => s.id === sessionId);
      const hasDescription = session?.description?.length > 0;

      return hasDescription
        ? DATA_STATE.LOADING_DATA_OLD_CACHED
        : DATA_STATE.LOADING_DATA_NONE_CACHED;
    }

    return DATA_STATE.READY;
  },
);
