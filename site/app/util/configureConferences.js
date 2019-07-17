import moment from 'moment';
import configureCodeMash from '../features/codemash/util';
import configureCodestock from '../features/codestock/util';
import configureStirTrek from '../features/stirtrek/util';

const DATE_FORMAT = 'YYYY-MM-DD';

export const CONFERENCES = [];

const store = conference => {
  CONFERENCES.push({
    ...conference,
    days: conference.days.map(x => moment(x, DATE_FORMAT)),
  });
};

export default () => {
  store(configureCodeMash());
  store(configureCodestock());
  store(configureStirTrek());
};
