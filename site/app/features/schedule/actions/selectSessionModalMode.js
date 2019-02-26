import {
  SESSION_DETAIL_SELECTED,
  SESSION_SPEAKERS_SELECTED,
} from '../constants/actions';

export const selectSessionModalModeDetail = () => ({
  type: SESSION_DETAIL_SELECTED,
});

export const selectSessionModalModeSpeakers = () => ({
  type: SESSION_SPEAKERS_SELECTED,
});
