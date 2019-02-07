export const SPEAKERS_SELECTED = 'SPEAKERS_SELECTED';

export const selectSpeakers = speakers => ({
  type: SPEAKERS_SELECTED,
  payload: speakers,
});
