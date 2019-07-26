import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import FavoriteItem from './drawerFavoritesItem';
import ThemeItem from './drawerThemeItem';
import InfoItem from './drawerInfoItem';
import ChangeConferenceItem from './drawerConferenceItem';
import ConferenceSiteItem from './drawerConferenceSiteItem';
import DrawerShareItem from './drawerShareItem';

const Menu = ({classes, toggleOpen}) => (
  <div
    className={classes.list}
    role="presentation"
    onClick={toggleOpen}
    onKeyDown={toggleOpen}
  >
    <List>
      <ConferenceSiteItem />
      <InfoItem />
    </List>
    <Divider />
    <List>
      <FavoriteItem />
      <ThemeItem />
      <DrawerShareItem />
    </List>
    <Divider />
    <List>
      <ChangeConferenceItem />
    </List>
  </div>
);

export default compose(
  withStyles({
    list: {
      width: 250,
    },
  }),
)(Menu);
