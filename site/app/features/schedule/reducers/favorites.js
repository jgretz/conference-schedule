import produce from 'immer';
import {stateReducer} from '@truefit/redux-utils';
import {TOGGLE_FAVORITE} from '../actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const FAVORITES = 'ALL_FAVORITES';
const INITIAL = getItemFromStorage(FAVORITES) || {};

const lookupOrCreateConference = (draft, conference) => {
  return draft[conference.title] || (draft[conference.title] = []);
};

const toggleSession = (confArray, {id}) => {
  if (confArray.includes(id)) {
    confArray.splice(confArray.indexOf(id), 1);
  } else {
    confArray.push(id);
  }
};

export default stateReducer(INITIAL, {
  [TOGGLE_FAVORITE]: (state, {conference, session}) => {
    const newState = produce(state, draft => {
      const confArray = lookupOrCreateConference(draft, conference);

      toggleSession(confArray, session);
    });

    setItemInStorage(FAVORITES, newState);

    return newState;
  },
});
