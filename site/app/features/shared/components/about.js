import React from 'react';
import {compose} from '@truefit/bach';
import {withStyles} from '@truefit/bach-material-ui';
import {withGATracker} from '../enhancers';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

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
      ) and I built this site.
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.text}>
      By day I&apos;m the CTO at{' '}
      <Link href="https://www.truefit.io" target="_blank">
        Truefit
      </Link>{' '}
      and as part of my role, I have the good fortune to attend quite a few
      conferences each year. In my experience, a key to having a fruitful
      experience at a conference is to take the time to figure out what sessions
      pique your interest beforehand. This approach allows you not only to plan
      a good mix, but also enables you to quickly adjust on the fly as the
      conference unfolds.
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.text}>
      Every conference, though, publishes their schedule in a slightly different
      way. Some provide apps of varying quality; some build sites; while others
      just put up a read only page. In any case, I find many of the provided
      schedules don&apos;t quite work for me - and an increasing number
      unfortunately requires both horizontal and vertical scrolling.
    </Typography>
    <Typography variant="body1" gutterBottom className={classes.text}>
      To address this problem, I created this site to standardize the
      presentation of conference schedules in a sane, simple, and easy to use
      format. Since this is a side project, the conferences supported are the
      conferences I attend. If you are also an attendee of one of these
      conferences, I hope this site helps you as well (and feel free to say hi
      if you see me walking around - I&apos;ll likely be in shorts). If you do
      enjoy using this site, and you are feeling generous, I love coffee ... and
      here is a convenient link to buy me one:
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

export default compose(
  withStyles({
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
  }),

  withGATracker(),
)(About);
