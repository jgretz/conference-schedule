import React from 'react';
import ReactGA from 'react-ga';
import {pipe, lifecycle} from '@synvox/rehook';

export default (WrappedComponent, options = {}) => {
  const Component = () => <WrappedComponent {...options} />;

  return pipe(
    lifecycle({
      componentDidMount: () => {
        ReactGA.pageview(window.location.pathname);
      },
    }),

    Component,
  );
};
