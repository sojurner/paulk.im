import React from 'react';
import { Box } from '@chakra-ui/react';

import { çSoundCloudWidget } from './types';

export const SoundCloudWidget: React.FC<çSoundCloudWidget.Props> = ({
  playlistUrl,
}) => {
  return (
    <Box height="auto" width="auto">
      <iframe
        id={'sc-iframe'}
        width="100%"
        height="380px"
        scrolling="no"
        frameBorder="no"
        src={`https://w.soundcloud.com/player?url=https://soundcloud.com/paul-kim-590010884/sets/${playlistUrl}&sharing=false&buying=false&share=false&show_user=false&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false`}
      ></iframe>
    </Box>
  );
};
