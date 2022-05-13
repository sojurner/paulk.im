import { MediaPlay } from '@/components/Icon';
import { Box, Flex } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

export const LatestVideo: React.VFC<{
  img: ImageProps;
  onPlay: () => void;
}> = ({ img, onPlay }) => {
  return (
    <Flex
      width="100%"
      flexDir="column"
      pos="relative"
      onClick={onPlay}
      cursor="pointer"
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
        background="blackAlpha.500"
        transform="translate(-50%, -50%)"
      >
        <MediaPlay />
      </Box>
    </Flex>
  );
};
