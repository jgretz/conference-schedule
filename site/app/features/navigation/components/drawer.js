import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';

import Drawer from '@material-ui/core/Drawer';
import Icon from './drawerIcon';
import Menu from './drawerMenu';

const DrawerMenu = ({open, toggleOpen}) => (
  <>
    <Icon onClick={toggleOpen} />
    <Drawer open={open} onClose={toggleOpen}>
      <Menu toggleOpen={toggleOpen} />
    </Drawer>
  </>
);

export default compose(
  withState('open', 'setOpen', false),
  withCallback('toggleOpen', ({open, setOpen}) => () => {
    setOpen(!open);
  }),
)(DrawerMenu);
