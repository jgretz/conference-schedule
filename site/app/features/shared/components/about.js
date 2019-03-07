import React from 'react';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
  root: {
    width: '96%',
    maxWidth: 800,
    margin: '20px auto 0 auto',
  },

  coffee: {
    marginTop: 24,
    display: 'flex',
    justifyContent: 'center',
  },

  bmcButton: {
    lineHeight: '36px !important',
    height: '37px !important',
    textDecoration: 'none !important',
    display: 'inline-flex !important',
    color: '#ffffff !important',
    backgroundColor: '#ff813f !important',
    borderRadius: '3px !important',
    border: '1px solid transparent !important',
    padding: '0px 9px !important',
    fontSize: '17px !important',
    letterSpacing: '-0.08px !important',
    boxShadow: '0px 1px 2px rgba(190, 190, 190, 0.5) !important',
    WebkitBoxShadow: '0px 1px 2px 2px rgba(190, 190, 190, 0.5) !important',
    fontFamily: "'Lato', sans-serif !important",
    WebkitBoxSizing: 'border-box !important',
    boxSizing: 'border-box !important',
    OTransition: '0.3s all linear !important',
    WebkitTransition: '0.3s all linear !important',
    MozTransition: '0.3s all linear !important',
    MsTransition: '0.3s all linear !important',
    transition: '0.3s all linear !important',
    userSelect: 'none',
  },

  bmcImage: {
    width: '27px !important',
    marginBottom: '1px !important',
    boxShadow: 'none !important',
    border: 'none !important',
    verticalAlign: 'middle !important',
  },

  bmcText: {
    marginLeft: 5,
  },
};

const About = ({classes}) => (
  <div className={classes.root}>
    <Typography variant="h4" align="center" gutterBottom>
      Alternative Conference Schedule
    </Typography>
    <Typography variant="body1" gutterBottom>
      I am fortunate to be able to attend quite a few conferences each year. I
      have found that a big key to having a successful experience is to take the
      time to figure out what talks pique your interest beforehand, so you can
      quickly adjust on the fly as the conference unfolds. The thing that most
      often gets in the way of this goal is that each conference publishes the
      schedule in a slightly different way. Some provide apps or sites that save
      your favorites, while others just put up a read only page - often in an
      unfortunate format that requires both horizontal and vertical scrolling.
    </Typography>
    <Typography variant="body1" gutterBottom>
      To solve this problem, I created this site to standardize the schedules of
      conferences I attend in a sane, simple, and easy to use format. If you are
      an attendee of one of these conferences, I hope this site helps you as
      well (and feel free to say hi if you see me walking around). If it does, I
      love coffee ... and you can buy me one below :)
    </Typography>
    <Typography variant="body1" gutterBottom>
      If you are developer and you would like to contribute a feature or add a
      conference that I don&apos;t attend - I accept pull requests, so please
      visit the{' '}
      <a href="https://github.com/jgretz/conference-schedule">github repo</a>.
    </Typography>
    <div className={classes.coffee}>
      <a
        className={classes.bmcButton}
        target="_blank"
        href="https://www.buymeacoffee.com/joshgretz"
      >
        <img
          src="https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg"
          alt="Buy me a coffee"
          className={classes.bmcImage}
        />
        <span className={classes.bmcText}>Buy me a coffee</span>
      </a>
    </div>
  </div>
);

export default withStyles(styles)(About);
