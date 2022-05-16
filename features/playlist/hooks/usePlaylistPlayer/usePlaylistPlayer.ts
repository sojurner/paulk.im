import { useBoolean } from '@chakra-ui/react';
import { useReducer, useState } from 'react';

export const usePlaylistPlayer = () => {
  // currently playing
  const [isPlaying, setIsPlaying] = useBoolean(true);
  // amount played (0-100)
  const [played, setPlayed] = useState(0);
  // prevent normal progression from updating `played`
  const [isSeeking, toggleIsSeeking] = useReducer(state => !state, false);

  const state = {
    isPlaying,
    played,
    isSeeking,
  };

  const methods = {
    setIsPlaying,
    setPlayed,
    toggleIsSeeking,
  };

  return { state, methods };
};
