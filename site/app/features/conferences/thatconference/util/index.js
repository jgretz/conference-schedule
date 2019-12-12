import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'ThatConference',
  loadSchedule,
  loadSession,
  days: ['2019-08-04', '2019-08-05', '2019-08-06', '2019-08-07', '2019-08-08'],
  tags: ['thatconference'],
  location: 'Wisconsin Dells, WI',
  site: 'https://www.thatconference.com/',
  image: 'https://www.thatconference.com/svgs/THATConference.svg',
});
