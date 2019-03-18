import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

const styles = {
  root: {
    width: '96%',
    maxWidth: 800,
    margin: '20px auto 0 auto',
  },

  text: {
    marginBottom: 24,
  },

  divider: {
    marginBottom: 24,
    marginTop: 24,
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
    <Typography variant="body1" gutterBottom className={classes.text}>
      Hi, I&apos;m Josh Gretz (
      <Link href="https://twitter.com/joshgretz" target="_blank">
        @joshgretz
      </Link>
      ), I&apos;m the CTO at{' '}
      <Link href="https://www.truefit.io" target="_blank">
        Truefit
      </Link>
      , and I built this site.
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.text}>
      As part of my role, I am fortunate to be able to attend quite a few
      conferences each year. In my experience, a key to having a fruitful
      experience is to take the time to figure out what sessions pique your
      interest beforehand. This approach allows you not only to plan a good mix,
      but also enables you to quickly adjust on the fly as the conference
      unfolds.
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.text}>
      Every conference, though, publishes their schedule in a slightly different
      way. Some provide apps or sites that save your favorites, while others
      just put up a read only page - often in an unfortunate format that
      requires both horizontal and vertical scrolling.
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.text}>
      To solve this problem, I created this site to standardize the schedules of
      conferences I attend in a sane, simple, and easy to use format. If you are
      an attendee of one of these conferences, I hope this site helps you as
      well (and feel free to say hi if you see me walking around). If it does,
      and you are feeling generous, I love coffee ... and you can buy me one
      below :)
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

    <Divider className={classes.divider} />

    <Typography variant="body1" gutterBottom className={classes.text}>
      If you&apos;re a developer and you would like to contribute a feature or
      add a conference that I haven&apos;t - I gladly accept pull requests (
      <Link
        href="https://github.com/jgretz/conference-schedule"
        target="_blank"
      >
        github repo
      </Link>
      ).
    </Typography>
  </div>
);

export default withStyles(styles)(About);
