import React from 'react';
import {compose, withState, withCallback} from '@truefit/bach';

// I could have used something like https://github.com/JedWatson/react-hammerjs
// but it seemed like overkill for just trying to capture the tap of a card

const Tappable = ({
  children,
  handleTouchStart,
  handleTouchMove,
  handleTouchEnd,
  handleTouchCancel,
}) => (
  <div
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    onTouchCancel={handleTouchCancel}
  >
    {children}
  </div>
);

export default compose(
  withState('tapping', 'setTapping', false),

  withCallback('handleTouchStart', ({setTapping}) => () => {
    setTapping(true);
  }),

  withCallback('handleTouchMove', ({setTapping}) => () => {
    setTapping(false);
  }),

  withCallback('handleTouchEnd', ({tapping, setTapping, onTap}) => event => {
    if (tapping && onTap) {
      event.stopPropagation();
      event.preventDefault();

      onTap();
    }

    setTapping(false);
  }),

  withCallback('handleTouchCancel', ({setTapping}) => () => {
    setTapping(false);
  }),
)(Tappable);
