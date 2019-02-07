import _ from 'lodash';
import moment from 'moment';
import {stateReducer} from 'truefit-react-utils';
import {DAY_SELECTED} from '../actions';
import {DAYS} from '../../shared/constants';

const INITIAL = _.find(DAYS, d => d.isSame(moment(), 'day')) || DAYS[0];

export default stateReducer(INITIAL, {
  [DAY_SELECTED]: (_, payload) => payload,
});
