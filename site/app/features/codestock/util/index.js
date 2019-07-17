import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'CodeStock 2019',
  loadSchedule,
  loadSession,
  days: ['2019-04-12', '2019-04-13'],
  tags: ['codestock'],
});
