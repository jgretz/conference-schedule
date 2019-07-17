import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'CodeMash 2019',
  loadSchedule,
  loadSession,
  days: ['2019-01-08', '2019-01-09', '2019-01-10', '2019-01-11'],
  tags: ['codemash'],
});
