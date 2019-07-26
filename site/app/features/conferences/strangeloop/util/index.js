import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'Strange Loop',
  loadSchedule,
  loadSession,
  days: ['2019-09-12', '2019-09-13', '2019-09-14'],
  tags: ['strangeloop'],
  location: 'St. Louis, MO',
  site: 'https://www.thestrangeloop.com/',
  image: 'https://pbs.twimg.com/profile_images/1883816998/slsquare_400x400.jpg',
});
