import produce from 'immer';
import {stateReducer} from 'truefit-react-utils';
import {
  LOADED_SCHEDULE_DATA,
  LOADED_SESSION_DETAIL,
} from '../constants/actions';
import {getItemFromStorage, setItemInStorage} from '../../shared/services';

const SPEAKERS = 'SPEAKERS';

const INITIAL = getItemFromStorage(SPEAKERS) || [];

export default stateReducer(INITIAL, {
  [LOADED_SCHEDULE_DATA]: (state, {speakers}) => {
    setItemInStorage(SPEAKERS, speakers);

    return produce(state, () => speakers);
  },

  [LOADED_SESSION_DETAIL]: (state, {speakers}) => {
    const update = produce(state, draft => {
      speakers.forEach(speaker => {
        const draftSpeaker = draft[draft.findIndex(d => d.id === speaker.id)];
        draftSpeaker.bio = speaker.bio;
        draftSpeaker.profilePicture = speaker.profilePicture;
      });
    });

    setItemInStorage(SPEAKERS, update);

    return update;
  },
});
