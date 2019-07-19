import moment from 'moment';
import configureCodeMash from '../features/codemash/util';
import configureCodestock from '../features/codestock/util';
import configureStirTrek from '../features/stirtrek/util';
import configureThatConference from '../features/thatconference/util';
import configureAbstractions from '../features/abstractions/util';

const configurations = [
  configureCodeMash,
  configureCodestock,
  configureStirTrek,
  configureThatConference,
  configureAbstractions,
];

export const CONFERENCES = [];

const DATE_FORMAT = 'YYYY-MM-DD';
const configureAndStore = conferenceConfig => {
  const conference = conferenceConfig();

  CONFERENCES.push({
    ...conference,
    days: conference.days.map(x => moment(x, DATE_FORMAT)),
  });
};

export default () => {
  configurations.forEach(configureAndStore);
};
