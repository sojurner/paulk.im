import { memo } from 'react';
import { MediaPlay } from '@/components/Icon';
import { Box, keyframes, Flex } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

const animationKeyframes = keyframes`
  0% { transform: translate(-50%, -50%) scale(.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7); }
  70% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 0 0 10px rgba(255, 255, 255, 0); }
  100% { transform: translate(-50%, -50%) scale(.95); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
`;

const animation = `${animationKeyframes} 2s infinite`;

export const LatestVideo: React.VFC<{
  img: ImageProps;
  currentlyPlaying: boolean;
  onPlay: () => void;
}> = ({ img, onPlay, currentlyPlaying }) => {
  return (
    <Flex
      width="100%"
      flexDir="column"
      pos="relative"
      onClick={onPlay}
      cursor="pointer"
      {...(currentlyPlaying && { pointerEvents: 'none' })}
      sx={{
        span: {
          ...(currentlyPlaying && { filter: 'brightness(.3)' }),
        },
      }}
      _hover={{
        span: {
          filter: 'brightness(.5)',
        },
      }}
    >
      <Image layout="responsive" alt={'image'} {...img} />
      <Box
        p="2"
        borderRadius={'50%'}
        pos="absolute"
        fontSize="3em"
        top="50%"
        left="50%"
        {...(currentlyPlaying && { animation })}
        {...(!currentlyPlaying && { background: 'blackAlpha.500' })}
        transform="translate(-50%, -50%)"
      >
        <MediaPlay />
      </Box>
    </Flex>
  );
};

export const MemoLatestVideo = memo(LatestVideo, (prev, next) => {
  return prev.currentlyPlaying === next.currentlyPlaying;
});
