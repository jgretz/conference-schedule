import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'CodeMash',
  loadSchedule,
  loadSession,
  days: ['2019-01-08', '2019-01-09', '2019-01-10', '2019-01-11'],
  tags: ['codemash'],
  location: 'Sandusky, OH',
  site: 'http://www.codemash.org/',
  image:
    'https://pbs.twimg.com/profile_images/575897195/CodeMashLogoSquare_400x400.png',
});
