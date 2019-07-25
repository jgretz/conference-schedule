import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'Strange Loop',
  loadSchedule,
  loadSession,
  days: ['2019-09-12', '2019-09-13', '2019-09-14'],
  tags: ['strangeloop'],
});
