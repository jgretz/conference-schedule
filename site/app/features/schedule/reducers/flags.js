import {stateReducer} from 'truefit-react-utils';

import {
  LOADING_SCHEDULE_DATA,
  LOADED_SCHEDULE_DATA,
  FAILED_LOADING_SCHEDULE_DATA,
} from '../constants/actions';

import {SPEAKERS_SELECTED} from '../actions/selectSpeakers';

const INITIAL = {
  loadingScheduleData: false,

  selectedSpeakers: null,
  speakerModalOpen: false,

  selectedConference: null,
};

export default stateReducer(INITIAL, {
  [LOADING_SCHEDULE_DATA]: state => ({...state, loadingScheduleData: true}),
  [LOADED_SCHEDULE_DATA]: state => ({...state, loadingScheduleData: false}),
  [FAILED_LOADING_SCHEDULE_DATA]: state => ({
    ...state,
    loadingScheduleData: false,
  }),

  [SPEAKERS_SELECTED]: (state, payload) => ({
    ...state,

    selectedSpeakers: payload,
    speakerModalOpen: payload && payload.length > 0,
  }),
});
