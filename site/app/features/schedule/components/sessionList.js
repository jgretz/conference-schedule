import React from 'react';
import {compose, withMemo} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';
import {renderIf} from '@truefit/bach-recompose';

import Grid from '@material-ui/core/Grid';
import Loading from './loading';
import SessionListGroup from './sessionListGroup';

import {
  sessionsForSelectedDaySelector,
  loadingScheduleSelector,
} from '../selectors';

import {groupSessionsBySlot} from '../services';

import {DATA_STATE} from '../constants/misc';

const renderGroup = group => (
  <SessionListGroup key={group.time} group={group} />
);

const List = ({classes, sessionGroups}) => (
  <div className={classes.root}>
    <Grid container>
      <Grid item xs={12}>
        {sessionGroups.map(renderGroup)}
      </Grid>
    </Grid>
  </div>
);

export default compose(
  withSelector('sessions', sessionsForSelectedDaySelector),
  withSelector('loadingState', loadingScheduleSelector),

  withMemo('sessionGroups', ({sessions}) => groupSessionsBySlot(sessions)),

  renderIf(
    ({loadingState}) => loadingState === DATA_STATE.LOADING_DATA_NONE_CACHED,
    Loading,
  ),

  withStyles({
    root: {
      flexGrow: 1,
    },
  }),
)(List);
