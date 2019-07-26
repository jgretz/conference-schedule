import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import Dialog from '@material-ui/core/Dialog';
import Typography from '@material-ui/core/Typography';

import {toggleLinkModal, clearFavoritesLink} from '../actions';
import {modalsSelector, linkSelector} from '../selectors';

const LinkDialog = ({classes, modals, onClose, link}) => (
  <Dialog
    open={modals.linkModalVisible}
    onClose={onClose}
    aria-label="export favorites dialog"
  >
    <div className={classes.content}>
      <Typography variant="h4">Export Link</Typography>
      <Typography variant="subtitle1">
        Your favorites are stored in this bit.ly link. Open it on any to device
        to import them to the local state of that device.
      </Typography>

      <br />
      <a href={link} className={classes.link}>
        {link}
      </a>
    </div>
  </Dialog>
);

export default compose(
  withSelector('modals', modalsSelector),
  withSelector('link', linkSelector),

  withActions({toggleLinkModal, clearFavoritesLink}),
  withCallback('onClose', ({toggleLinkModal, clearFavoritesLink}) => () => {
    toggleLinkModal();
    clearFavoritesLink();
  }),

  withStyles(theme => ({
    content: {
      padding: 24,
    },
    link: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      textDecoration: 'none',
      textAlign: 'center',
    },
  })),
)(LinkDialog);
