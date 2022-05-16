import { HStack, Button, StackProps } from '@chakra-ui/react';

import { MediaBack, MediaSkip, MediaPause, MediaPlay } from '@/components/Icon';

import { usePlaylistContext } from '@/features/playlist';

export const PlayerControls: React.VFC<StackProps> = props => {
  const { usePlaylistIndex, usePlaylistPlayer } = usePlaylistContext();

  return (
    <HStack flexDir="row" alignItems={'center'} {...props}>
      <Button
        disabled={!usePlaylistIndex.state.currentIndex}
        variant="ghost"
        fontSize="1.5em"
        _focus={{
          outline: 'none',
        }}
        onClick={() => {
          usePlaylistIndex.methods.setCurrentIndex(state => {
            usePlaylistPlayer.methods.setIsPlaying.on();
            return state - 1;
          });
        }}
      >
        <MediaBack />
      </Button>
      <Button
        fontSize="2.5em"
        variant="unstyled"
        onClick={usePlaylistPlayer.methods.setIsPlaying.toggle}
        _focus={{
          outline: 'none',
        }}
      >
        {usePlaylistPlayer.state.isPlaying ? <MediaPause /> : <MediaPlay />}
      </Button>
      <Button
        disabled={
          usePlaylistIndex.state.playlist.length - 1 ===
          usePlaylistIndex.state.currentIndex
        }
        variant="ghost"
        fontSize="1.5em"
        _focus={{
          outline: 'none',
        }}
        onClick={() =>
          usePlaylistIndex.methods.setCurrentIndex(state => {
            usePlaylistPlayer.methods.setIsPlaying.on();
            return state + 1;
          })
        }
      >
        <MediaSkip />
      </Button>
    </HStack>
  );
};
