import React from 'react';
import {compose, withCallback} from '@truefit/bach';
import {withActions, withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';
import {withLifecycle, renderIf} from '@truefit/bach-recompose';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Header from './sessionModalHeader';
import Content from './sessionModalContent';
import Empty from './empty';

import {execute, selectSession} from '../actions';

import {
  modalsSelector,
  selectedConferenceSelector,
  selectedSessionSelector,
} from '../selectors';

const SessionModal = ({classes, modals, session, handleClose}) => (
  <Dialog
    open={modals.sessionModalVisible}
    onClose={handleClose}
    scroll="body"
    aria-labelledby="scroll-dialog-title"
    maxWidth="md"
    fullWidth={true}
    className="session-modal"
  >
    <DialogTitle id="scroll-dialog-title" className={classes.dialogTitle}>
      <Header session={session} />
    </DialogTitle>
    <DialogContent>
      <Content session={session} />
    </DialogContent>
  </Dialog>
);

export default compose(
  withSelector('modals', modalsSelector),
  withSelector('conference', selectedConferenceSelector),
  withSelector('session', selectedSessionSelector),

  withActions({execute, selectSession}),

  withCallback('handleClose', ({selectSession}) => () => {
    selectSession(null);
  }),

  withLifecycle({
    componentDidUpdate: ({execute, conference, session}, prevProps) => {
      if (session && (!prevProps || prevProps.session?.id !== session?.id)) {
        execute(conference.loadSessionDetail, session);
      }
    },
  }),

  withStyles({
    dialogTitle: {
      paddingBottom: 0,
    },
  }),

  renderIf(({session}) => !session, Empty),
)(SessionModal);
