import {loadSchedule, loadSession} from '../actions';

export default () => ({
  title: 'StirTrek',
  loadSchedule,
  loadSession,
  days: ['2019-04-26'],
  tags: ['stirtrek'],
  location: 'Columbus, OH',
  site: 'https://stirtrek.com/',
  image:
    'https://pbs.twimg.com/profile_images/3690155019/2f627576558baaf23806739b4f2fbda6_400x400.png',
});
