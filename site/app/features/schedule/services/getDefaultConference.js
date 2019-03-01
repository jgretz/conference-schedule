import _ from 'lodash';
import moment from 'moment';
import {CONFERENCES} from '../constants/conferences';

const nearestConference = () => {
  const sorted = _.sortBy(CONFERENCES, c => moment(_.nth(c.days, 0)).unix());
  const noPast = sorted.filter(c =>
    moment(_.last(c.days)).isSameOrAfter(moment()),
  );

  return noPast.length >= 0 ? noPast[0] : null;
};

export default () => {
  const slug = _.trimStart(window.location.pathname, '/').toLowerCase();
  const conference = _.find(CONFERENCES, c => c.tags.includes(slug));

  return conference || nearestConference() || CONFERENCES[0];
};
