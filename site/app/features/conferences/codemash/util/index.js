import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'CodeMash',
  loadSchedule,
  loadSession,
  days: ['2020-01-07', '2020-01-08', '2020-01-09', '2020-01-10'],
  tags: ['codemash'],
  location: 'Sandusky, OH',
  site: 'http://www.codemash.org/',
  image:
    'https://pbs.twimg.com/profile_images/575897195/CodeMashLogoSquare_400x400.png',
});
