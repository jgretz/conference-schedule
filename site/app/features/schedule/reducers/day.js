import _ from 'lodash';
import moment from 'moment';
import {stateReducer} from 'truefit-react-utils';
import {DAY_SELECTED} from '../actions';

const INITIAL = _.find([], d => d.isSame(moment(), 'day')) || {};

export default stateReducer(INITIAL, {
  [DAY_SELECTED]: (_, payload) => payload,
});
