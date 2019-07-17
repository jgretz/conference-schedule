import {useEffect} from 'react';
import ReactGA from 'react-ga';

export default () => () => {
  return {
    dependencies: {useEffect, ReactGA},
    initialize: `
      useEffect(function() {
        ReactGA.pageview(window.location.pathname);
      }, []);
    `,
    props: [],
  };
};
