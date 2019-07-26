import _ from 'lodash';
import moment from 'moment';
import {CONFERENCES} from '../../../util/configureConferences';

const isInThePast = c =>
  moment().isSameOrAfter(moment(c.days |> _.last).add(1, 'd'));

export default () => ({
  present: CONFERENCES.filter(c => !isInThePast(c)),
  past: CONFERENCES.filter(c => isInThePast(c)),
});
