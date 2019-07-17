import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';
import {renderIf} from '@truefit/bach-recompose';

import Divider from '@material-ui/core/Divider';
import Empty from './empty';

const ModalDivider = ({classes}) => (
  <Divider className={classes.divider} variant="middle" />
);

export default compose(
  renderIf(({index, arrayLength}) => index && index >= arrayLength - 1, Empty),
  withStyles({
    divider: {
      marginTop: 10,
      marginBottom: 10,
    },
  }),
)(ModalDivider);
