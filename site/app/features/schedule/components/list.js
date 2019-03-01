import _ from 'lodash';
import moment from 'moment';
import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Loading from './loading';
import SessionCard from './sessionCard';
import {sessionsForSelectedDaySelector, loadingSelector} from '../selectors';

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
  const times = _.uniq(sessions.map(s => s.startTime));

  return times.map(t => ({
    time: t,
    sessions: sessions.filter(s => s.startTime === t),
  }));
};

// render
const SessionGroup = ({classes, group}) => (
  <div className={classes.group}>
    <h2>{moment(group.time).format('dddd @ h:mm A')}</h2>
    {group.sessions.map(session => (
      <SessionCard key={session.id} session={session} />
    ))}
  </div>
);

const List = ({classes, sessions, loading}) => {
  if (loading.scheduleData) {
    return <Loading />;
  }

  const sessionGroups = groupSessions(sessions);

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} className={classes.grid}>
          {sessionGroups.map(group => (
            <SessionGroup key={group.time} group={group} classes={classes} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

const StyledList = withStyles(styles)(List);

const mapStateToProps = state => ({
  sessions: sessionsForSelectedDaySelector(state),
  loading: loadingSelector(state),
});

export default connect(mapStateToProps)(StyledList);
