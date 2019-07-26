import {INITIALIZE} from './actions';
import {getDefaultConference, getDefaultDayForConference} from '../services';

const translateFavoriteKey = key => key.replace('+', ' ').replace(' 2019', '');

const parseFavorites = () => {
  if (!window.location.search.includes('favorites')) {
    return null;
  }

  const raw = window.location.search.replace('?favorites=', '');
  const json = JSON.parse(decodeURIComponent(raw));

  return Object.keys(json).reduce((acc, key) => {
    acc[translateFavoriteKey(key)] = json[key];
    return acc;
  }, {});
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
