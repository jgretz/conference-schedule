import React from 'react';
import {compose, withMemo, withState, withCallback} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';
import {renderIf} from '@truefit/bach-recompose';

import Button from '@material-ui/core/Button';
import Loading from './loading';
import Speakers from './sessionModalSpeakers';
import Detail from './sessionModalDetail';
import Empty from './empty';

import {
  loadingSessionDetailSelector,
  speakersForSessionSelector,
} from '../selectors';
import {DATA_STATE} from '../constants/misc';

const MODE = {
  DETAIL: 0,
  SPEAKERS: 1,
};

// selection
const SelectionButtonContent = ({color, children, handleClick}) => (
  <Button color={color} onClick={handleClick}>
    {children}
  </Button>
);

const SelectionButton = compose(
  withMemo('color', ({mode, value}) =>
    mode === value ? 'primary' : 'default',
  ),
  withCallback('handleClick', ({setMode, value}) => () => {
    setMode(value);
  }),
)(SelectionButtonContent);

const SelectionContent = ({classes, mode, setMode, speakers}) => (
  <div className={classes.modeSelection}>
    <SelectionButton value={MODE.DETAIL} mode={mode} setMode={setMode}>
      Detail
    </SelectionButton>
    <SelectionButton value={MODE.SPEAKERS} mode={mode} setMode={setMode}>
      Speaker{speakers.length <= 1 ? '' : 's'}
    </SelectionButton>
  </div>
);

const Selection = compose(
  withSelector('speakers', speakersForSessionSelector),

  withStyles({
    modeSelection: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
    },
  }),
)(SelectionContent);

// content
const Content = compose(
  withSelector('loading', loadingSessionDetailSelector),

  renderIf(
    ({loading}) => loading === DATA_STATE.LOADING_DATA_NONE_CACHED,
    Loading,
  ),
  renderIf(
    ({mode}) => mode === MODE.SPEAKERS,
    ({session}) => <Speakers session={session} />,
  ),
  renderIf(
    ({mode}) => mode === MODE.DETAIL,
    ({session}) => <Detail session={session} />,
  ),
)(Empty);

// combine
const ModalContent = props => (
  <>
    <Selection {...props} />
    <Content {...props} />
  </>
);

export default compose(withState('mode', 'setMode', MODE.DETAIL))(ModalContent);
