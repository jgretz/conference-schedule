import _ from 'lodash';

export default sessions => {
  const times = _.uniq(sessions.map(s => s.startTime));

  return times.map(t => ({
    time: t,
    sessions: sessions.filter(s => s.startTime === t),
  }));
};
