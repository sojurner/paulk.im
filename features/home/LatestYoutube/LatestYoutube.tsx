import { Box, Flex } from '@chakra-ui/react';
import { Youtube } from '@/components/Icon';

export const LatestYoutube: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <Box left="-2em" pos="absolute" fontSize={'1.5em'}>
        <Youtube />
      </Box>
      <iframe
        width="100%"
        height="315"
        src={url}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        loading="lazy"
      />
    </Flex>
  );
};