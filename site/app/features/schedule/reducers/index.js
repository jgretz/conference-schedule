/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import categories from './categories.js';
import favorites from './favorites.js';
import loading from './loading.js';
import modals from './modals.js';
import rooms from './rooms.js';
import selected from './selected.js';
import sessions from './sessions.js';
import speakers from './speakers.js';

export default combineReducers({
  categories,
  favorites,
  loading,
  modals,
  rooms,
  selected,
  sessions,
  speakers,
});
