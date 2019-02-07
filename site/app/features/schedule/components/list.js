import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import SessionCard from './sessionCard';
import SpeakerModal from './speakerModal';
import {sessionsForSelectedDaySelector} from '../selectors';

const styles = () => ({
  root: {
    flexGrow: 1,
  },
  group: {
    margin: '0 auto',
    maxWidth: 1000,
  },
});

const groupSessions = sessions => {
  const times = _.uniq(sessions.map(s => s.startsAt));

  return times.map(t => ({
    time: t,
    sessions: sessions.filter(s => s.startsAt === t),
  }));
};

const renderSessionCard = session => (
  <SessionCard key={session.id} session={session} />
);

const renderSessionGroup = classes => group => (
  <div key={group.time} className={classes.group}>
    <h2>{moment(group.time).format('dddd @ h:mm A')}</h2>
    {group.sessions.map(renderSessionCard)}
  </div>
);

const List = ({classes, sessions}) => {
  const sessionGroups = groupSessions(sessions);

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.grid}>
          {sessionGroups.map(renderSessionGroup(classes))}

          <SpeakerModal />
        </Grid>
      </Grid>
    </div>
  );
};

const StyledList = withStyles(styles)(List);

const mapStateToProps = state => ({
  sessions: sessionsForSelectedDaySelector(state),
});

export default connect(mapStateToProps)(StyledList);
