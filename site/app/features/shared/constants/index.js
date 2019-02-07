import moment from 'moment';

export const ROUTES = {
  schedule: {key: 'schedule', name: 'Schedule', route: '/'},
};

export const CODEMASH_DATA_URL =
  'https://sessionize.com/api/v2/mqm7pgek/view/all';

const FORMAT = 'YYYY-MM-DD';
export const DAYS = [
  moment('2019-01-08', FORMAT),
  moment('2019-01-09', FORMAT),
  moment('2019-01-10', FORMAT),
  moment('2019-01-11', FORMAT),
];
