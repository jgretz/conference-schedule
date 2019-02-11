import moment from 'moment';
import {loadCodeMashData} from '../../codemash/actions';

const FORMAT = 'YYYY-MM-DD';

export const CONFERENCES = [
  {
    title: 'CodeMash 2019',
    loadData: loadCodeMashData,
    days: [
      moment('2019-01-08', FORMAT),
      moment('2019-01-09', FORMAT),
      moment('2019-01-10', FORMAT),
      moment('2019-01-11', FORMAT),
    ],
  },
];
