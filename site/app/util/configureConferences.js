import moment from 'moment';
import configureCodeMash from '../features/conferences/codemash/util';
import configureCodestock from '../features/conferences/codestock/util';
import configureStirTrek from '../features/conferences/stirtrek/util';
import configureThatConference from '../features/conferences/thatconference/util';
import configureAbstractions from '../features/conferences/abstractions/util';
import configureStrangeLoop from '../features/conferences/strangeloop/util';

const configurations = [
  configureCodeMash,
  configureCodestock,
  configureStirTrek,
  configureThatConference,
  configureAbstractions,
  configureStrangeLoop,
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
