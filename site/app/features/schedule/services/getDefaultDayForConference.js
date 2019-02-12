import _ from 'lodash';
import moment from 'moment';

export default ({days}) => {
  return _.find(days, d => d.isSame(moment(), 'day')) || days[0];
};
