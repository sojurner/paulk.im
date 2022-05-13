import {
  Box,
  Flex,
  useColorModeValue,
  CloseButton,
  Divider,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player/lazy';
import { LegacyRef, useRef } from 'react';
import { RegularText } from '@/components/Typography';
import {
  MemeIcon,
  Video,
  SoundCloudIcon,
  Youtube,
  Trash,
} from '@/components/Icon';

import { PlayerControls } from './PlayerControls';
import { PlayerSeek } from './PlayerSeek';
import { usePlaylistContext } from './hooks';
import { QueueToggle } from './buttons';
import { FullscreenToggle } from './buttons/FullscreenToggle';

export const PlaylistControl = () => {
  const { usePlaylistIndex, usePlaylistMisc, usePlaylistPlayer } =
    usePlaylistContext();
  const playerRef = useRef<ReactPlayer>();

  const bgColor = useColorModeValue('white', '#1F1B24');
  const hoverColor = useColorModeValue('whiteAlpha.500', 'blackAlpha.500');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

  const handleSeekEnd = (value: number) => {
    usePlaylistPlayer.methods.toggleIsSeeking();
    playerRef?.current?.seekTo(value / 100);
  };

  if (!usePlaylistIndex.state.currentlyPlaying) {
    return null;
  }

  return (
    <Box
      position="fixed"
      width={['100vw', '540px']}
      right={['50%', 'calc(0% + 300px)']}
      bottom={'30px'}
      background={usePlaylistMisc.state.isFullscreen ? 'none' : bgColor}
      borderTop={usePlaylistMisc.state.isFullscreen ? '0' : '1px solid'}
      transition={'transform .3s ease-in-out'}
      height={usePlaylistMisc.state.isFullscreen ? 'max-content' : '150px'}
      transform={`translate(50%, ${
        usePlaylistMisc.state.showQueue ? '-195px' : '0'
      })`}
      borderColor={borderColor}
    >
      <Flex
        flexDir={usePlaylistMisc.state.isFullscreen ? 'column' : 'row'}
        pos="relative"
        height="100%"
        justifyContent="center"
      >
        <ReactPlayer
          id="iframe-player"
          ref={playerRef as unknown as LegacyRef<ReactPlayer>}
          url={usePlaylistIndex.state.currentlyPlaying?.resource}
          playing={usePlaylistPlayer.state.isPlaying}
          width={usePlaylistMisc.state.isFullscreen ? '100%' : '200px'}
          height={
            usePlaylistMisc.state.isFullscreen
              ? usePlaylistIndex.state.currentlyPlaying.type === 'youtube'
                ? '315px'
                : '100%'
              : '150px'
          }
          onEnded={() =>
            usePlaylistIndex.methods.setCurrentIndex(state => state + 1)
          }
          onProgress={state => {
            if (usePlaylistPlayer.state.isSeeking) return;
            usePlaylistPlayer.methods.setPlayed(state.played * 100);
          }}
        />
        <Flex
          pos="relative"
          background={usePlaylistMisc.state.isFullscreen ? bgColor : 'none'}
          flexDir="row"
          flex="1 1 auto"
          justifyContent="center"
          {...(usePlaylistMisc.state.isFullscreen && { minHeight: '100px' })}
        >
          <FullscreenToggle
            justifySelf="center"
            isFullscreen={usePlaylistMisc.state.isFullscreen}
            onClick={usePlaylistMisc.methods.toggleFullscreen}
          />
          <Flex
            flexDir="column"
            flex="1 1 auto"
            alignItems="center"
            justifyContent="center"
            px={usePlaylistMisc.state.isFullscreen ? '3' : '1'}
          >
            <PlayerControls mx="2" mb="3" />
            <PlayerSeek onChangeEnd={handleSeekEnd} />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="flex-end"
            flexDir="column"
            p="1"
          >
            <CloseButton
              zIndex="tooltip"
              onClick={usePlaylistIndex.methods.onClear}
            />
            <QueueToggle
              onClick={usePlaylistMisc.methods.toggleShowQueue}
              showQueue={usePlaylistMisc.state.showQueue}
              queueCount={usePlaylistIndex.state.playlist.length}
            />
          </Flex>
        </Flex>
        <Box
          position="absolute"
          overflow="hidden"
          borderTop="1px solid"
          borderColor={borderColor}
          background={bgColor}
          right={0}
          bottom={0}
          boxSizing="border-box"
          flex="1 1 auto"
          width={'100%'}
          transform={`translate(0, ${
            usePlaylistMisc.state.isFullscreen ? '100%' : '195px'
          } )`}
          maxH="195px"
          height="195px"
        >
          <RegularText ml="1" my="1.5">
            Playlist ({usePlaylistIndex.state.playlist.length})
          </RegularText>

          <Divider />
          <Flex
            flexDir="column"
            alignItems="flex-start"
            overflow="scroll"
            height="calc(100% - 35px)"
          >
            {usePlaylistIndex.state.playlist?.map((ITEM, index) => {
              return (
                <Flex
                  p="2"
                  width="100%"
                  alignItems={'center'}
                  cursor="pointer"
                  _hover={{ background: hoverColor }}
                  key={ITEM.slug}
                  justifyContent="space-between"
                  onClick={() => usePlaylistIndex.methods.onSelectItem(ITEM)}
                >
                  <Flex
                    {...(index !== usePlaylistIndex.state.currentIndex && {
                      filter: 'grayscale(1)',
                      opacity: 0.5,
                    })}
                    fontSize="1.4em"
                  >
                    {ITEM.type === 'youtube' && <Youtube />}
                    {ITEM.type === 'soundcloud' && <SoundCloudIcon />}
                    {ITEM.type === 'image' && <MemeIcon />}
                    {ITEM.type === 'misc' && <Video />}
                    <RegularText
                      ml="2"
                      textOverflow="ellipsis"
                      whiteSpace="pre"
                      overflow="hidden"
                    >
                      {ITEM.title}
                    </RegularText>
                  </Flex>
                  <Box
                    opacity={0.5}
                    ml="auto"
                    onClick={e => {
                      e.stopPropagation();
                      usePlaylistIndex.methods.onRemove(index);
                    }}
                    _hover={{
                      opacity: 1,
                    }}
                  >
                    <Trash />
                  </Box>
                </Flex>
              );
            })}
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
