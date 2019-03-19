import ReactGA from 'react-ga';

export const configureGA = () => {
  ReactGA.initialize('UA-68944174-3');
  ReactGA.pageview(window.location.pathname + window.location.search);
};
