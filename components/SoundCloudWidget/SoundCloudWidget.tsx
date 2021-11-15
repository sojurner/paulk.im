import React from 'react';
import { IconButton, Box } from '@chakra-ui/react';

const SoundCloudWidgetPlayer: React.FC<{ onClose: () => void }> = ({
  onClose,
}) => {
  const [showOptions, toggleOptions] = React.useReducer(state => !state, false);
  const [selectedPlaylist, setSelectedPlaylist] = React.useState();

  return (
    <Box width="100vw" position="fixed" left="0" bottom="0">
      <iframe
        width="100%"
        height="100px"
        scrolling="no"
        frameBorder="no"
        src={`https://w.soundcloud.com/player?url=${selectedPlaylist}&sharing=false&buying=false&share=false&show_user=false&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false&show_artwork=false`}
      ></iframe>
    </Box>
  );
};

// https://api.soundcloud.com/resolve.json?url=https://soundcloud.com/wowtashawow/bed-song-1?si=49014e490a5747fea8603b9f64baa309&client_id=67129366c767d009ecc75cec10fa3d0f
