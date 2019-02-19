/* eslint-disable sort-imports */
import {combineReducers} from 'redux';
import favorites from './favorites.js';
import loading from './loading.js';
import modals from './modals.js';
import rooms from './rooms.js';
import selected from './selected.js';
import sessions from './sessions.js';
import speakers from './speakers.js';
import tags from './tags.js';

export default combineReducers({
  favorites,
  loading,
  modals,
  rooms,
  selected,
  sessions,
  speakers,
  tags,
});
