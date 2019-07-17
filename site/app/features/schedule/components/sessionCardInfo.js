import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions} from '@truefit/bach-redux';

import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Hidden from '@material-ui/core/Hidden';

import {Tappable} from '../../shared/components';

import {selectSession} from '../actions';

const Info = ({handleSessionSelection}) => (
  <Hidden smDown>
    <Tappable onTap={handleSessionSelection}>
      <IconButton aria-label="More Info" onClick={handleSessionSelection}>
        <InfoIcon />
      </IconButton>
    </Tappable>
  </Hidden>
);

export default compose(
  withActions({selectSession}),
  withCallback('handleSessionSelection', ({selectSession, session}) => () => {
    selectSession(session);
  }),
)(Info);
