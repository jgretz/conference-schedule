import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'CodeStock',
  loadSchedule,
  loadSession,
  days: ['2019-04-12', '2019-04-13'],
  tags: ['codestock'],
  location: 'Knoxville, TN',
  site: 'http://codestock.org/',
  image:
    'https://pbs.twimg.com/profile_images/512627590209605632/3B-s08QB_400x400.png',
});
