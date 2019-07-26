import {INITIALIZE} from './actions';
import {getDefaultConference, getDefaultDayForConference} from '../services';

const parseFavorites = () => {
  if (!window.location.search.includes('favorites')) {
    return null;
  }

  const raw = window.location.search.replace('?favorites=', '');
  const json = JSON.parse(decodeURIComponent(raw));

  return json;
};

export const initialize = () => {
  const defaultConference = getDefaultConference();
  const defaultDay = getDefaultDayForConference(defaultConference);
  const favorites = parseFavorites();

  return {
    type: INITIALIZE,
    payload: {
      defaultConference,
      defaultDay,
      favorites,
    },
  };
};
