import React from 'react';

import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export default () => (
  <Link to="about">
    <IconButton>
      <InfoIcon />
    </IconButton>
  </Link>
);
