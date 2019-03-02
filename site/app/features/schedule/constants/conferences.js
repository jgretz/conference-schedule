import moment from 'moment';
import * as codemashActions from '../../codemash/actions';
import * as codestockActions from '../../codestock/actions';
import * as stirtrekActions from '../../stirtrek/actions';

const DATE_FORMAT = 'YYYY-MM-DD';

export const CONFERENCES = [
  {
    title: 'StirTrek 2019',
    loadData: stirtrekActions.loadData,
    loadSessionDetail: stirtrekActions.loadSessionDetail,
    days: [moment('2019-04-26', DATE_FORMAT)],
    tags: ['stirtrek'],
  },
  {
    title: 'CodeStock 2019',
    loadData: codestockActions.loadData,
    loadSessionDetail: codestockActions.loadSessionDetail,
    days: [
      moment('2019-04-12', DATE_FORMAT),
      moment('2019-04-13', DATE_FORMAT),
    ],
    tags: ['codestock'],
  },
  {
    title: 'CodeMash 2019',
    loadData: codemashActions.loadData,
    loadSessionDetail: codemashActions.loadSessionDetail,
    days: [
      moment('2019-01-08', DATE_FORMAT),
      moment('2019-01-09', DATE_FORMAT),
      moment('2019-01-10', DATE_FORMAT),
      moment('2019-01-11', DATE_FORMAT),
    ],
    tags: ['codemash'],
  },
];
