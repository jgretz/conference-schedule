import moment from 'moment';
import {loadCodeMashData} from '../../codemash/actions';
import {loadCodeStockData} from '../../codestock/actions';

const DATE_FORMAT = 'YYYY-MM-DD';

export const CONFERENCES = [
  {
    title: 'CodeStock 2019',
    loadData: loadCodeStockData,
    days: [
      moment('2019-04-12', DATE_FORMAT),
      moment('2019-04-13', DATE_FORMAT),
    ],
  },
  {
    title: 'CodeMash 2019',
    loadData: loadCodeMashData,
    days: [
      moment('2019-01-08', DATE_FORMAT),
      moment('2019-01-09', DATE_FORMAT),
      moment('2019-01-10', DATE_FORMAT),
      moment('2019-01-11', DATE_FORMAT),
    ],
  },
];
