import React from 'react';
import {pipe, withState, withHandlers} from '@synvox/rehook';

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

export default pipe(
  withState('tapping', 'setTapping', false),
  withHandlers({
    handleTouchStart: ({setTapping}) => () => {
      setTapping(true);
    },

    handleTouchMove: ({setTapping}) => () => {
      setTapping(false);
    },

    handleTouchEnd: ({tapping, setTapping, onTap}) => event => {
      if (tapping && onTap) {
        event.stopPropagation();
        event.preventDefault();

        onTap();
      }

      setTapping(false);
    },

    handleTouchCancel: ({setTapping}) => () => {
      setTapping(false);
    },
  }),

  Tappable,
);
