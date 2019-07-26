import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'Abstractions',
  loadSchedule,
  loadSession,
  days: ['2019-08-21', '2019-08-22', '2019-08-23'],
  tags: ['abstractions'],
  location: 'Pittsburgh, PA',
  site: 'https://abstractions.io/',
  image:
    'https://pbs.twimg.com/profile_images/1069761762491277313/hTHI0nY1_400x400.jpg',
});
