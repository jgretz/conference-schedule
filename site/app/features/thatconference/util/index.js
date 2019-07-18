import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'ThatConference 2019',
  loadSchedule,
  loadSession,
  days: ['2019-08-04', '2019-08-05', '2019-08-06', '2019-08-07', '2019-08-08'],
  tags: ['thatconference'],
});
