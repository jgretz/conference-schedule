import React, {Fragment} from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';
import {withStyles} from '@truefit/bach-material-ui';

import WorkerImage from 'react-sw-img';
import Typography from '@material-ui/core/Typography';
import Divider from './sessionModalDivider';

import {speakersForSessionSelector} from '../selectors';

import {AVATAR} from 'constants';

const SpeakerContent = ({classes, speaker}) => (
  <>
    <div className={classes.speakerTitle}>
      <WorkerImage
        alt={speaker.name}
        placeholder={AVATAR}
        src={speaker.profilePicture}
        className={classes.avatar}
      />
      <Typography variant="h6">{speaker.name}</Typography>
    </div>
    <Typography
      component="p"
      variant="body2"
      dangerouslySetInnerHTML={{__html: speaker.bio}}
    />
  </>
);

const Speaker = compose(
  withStyles({
    speakerTitle: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginBottom: 10,
    },
    avatar: {
      marginRight: 10,

      height: 50,
      width: 50,

      borderRadius: 25,
    },
  }),
)(SpeakerContent);

const Speakers = ({speakers}) => {
  return (
    <div>
      {speakers.map((speaker, i) => (
        <Fragment key={speaker.id}>
          <Speaker speaker={speaker} />
          <Divider index={i} arrayLength={speakers.length} />
        </Fragment>
      ))}
    </div>
  );
};

export default compose(withSelector('speakers', speakersForSessionSelector))(
  Speakers,
);
