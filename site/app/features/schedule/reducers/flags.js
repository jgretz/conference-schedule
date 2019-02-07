import {stateReducer} from 'truefit-react-utils';
import {
  LOADING_CODEMASH_DATA,
  LOADED_CODEMASH_DATA,
  FAILED_CODEMASH_DATA,
  SPEAKERS_SELECTED,
} from '../actions';

const INITIAL = {
  loadingCodeMashData: false,

  selectedSpeakers: null,
  speakerModalOpen: false,
};

export default stateReducer(INITIAL, {
  [LOADING_CODEMASH_DATA]: state => ({...state, loadingCodeMashData: true}),
  [LOADED_CODEMASH_DATA]: state => ({...state, loadingCodeMashData: false}),
  [FAILED_CODEMASH_DATA]: state => ({...state, loadingCodeMashData: false}),

  [SPEAKERS_SELECTED]: (state, payload) => ({
    ...state,

    selectedSpeakers: payload,
    speakerModalOpen: payload && payload.length > 0,
  }),
});
