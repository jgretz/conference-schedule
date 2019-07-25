import _ from 'lodash';
import moment from 'moment';

import {getItemFromStorage} from '../../shared/services';

import {CONFERENCE} from '../actions';
import {CONFERENCES} from '../../../util/configureConferences';

const nearestConference = () => {
  const sorted = _.sortBy(CONFERENCES, c => moment(_.nth(c.days, 0)).unix());
  const noPast = sorted.filter(c =>
    moment(_.last(c.days)).isSameOrAfter(moment()),
  );

  return noPast.length >= 0 ? noPast[0] : null;
};

const selectedConference = () => {
  const title = getItemFromStorage(CONFERENCE);
  if (!title) {
    return null;
  }

  return _.find(CONFERENCES, c => c.title === title);
};

export default () => {
  const slug = _.trimStart(window.location.pathname, '/').toLowerCase();
  const conference = _.find(CONFERENCES, c => c.tags.includes(slug));

  return (
    conference || selectedConference() || nearestConference() || CONFERENCES[0]
  );
};
