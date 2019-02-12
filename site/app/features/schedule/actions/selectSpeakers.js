import {SPEAKERS_SELECTED} from '../constants/actions';

export const selectSpeakers = speakers => ({
  type: SPEAKERS_SELECTED,
  payload: speakers,
});
