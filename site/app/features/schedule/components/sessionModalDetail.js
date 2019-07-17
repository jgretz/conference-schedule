import React from 'react';
import {compose} from '@truefit/bach';
import {withSelector} from '@truefit/bach-redux';

import Typography from '@material-ui/core/Typography';
import Divider from './sessionModalDivider';

import {
  roomForSessionSelector,
  speakersForSessionSelector,
  tagsForSessionSelector,
} from '../selectors';

const SessionDetail = ({speakers, room, tags, session}) => (
  <div>
    <Typography variant="subtitle2">
      <span className="bold">Room: </span>
      {room.name}
    </Typography>
    <Typography variant="subtitle2">
      <span className="bold">Speaker{speakers.length === 1 ? '' : 's'}: </span>
      {speakers.map(s => s.name).join(', ')}
    </Typography>
    <Typography variant="subtitle2">
      <span className="bold">Tags: </span>
      {tags.map(c => c.name).join(', ')}
    </Typography>
    <Divider />
    <Typography
      component="p"
      variant="body2"
      dangerouslySetInnerHTML={{__html: session.description}}
    />
  </div>
);

export default compose(
  withSelector('room', roomForSessionSelector),
  withSelector('speakers', speakersForSessionSelector),
  withSelector('tags', tagsForSessionSelector),
)(SessionDetail);
