import { Box, Flex } from '@chakra-ui/react';
import { Video } from '@/components/Icon';

export const LatestVideo: React.VFC<{
  src: string;
  width: number | string;
}> = ({ src, width }) => {
  const chunkSrc = src.split('.');
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <video controls width={width}>
        <source src={src} type={`video/${chunkSrc[chunkSrc.length - 1]}`} />
      </video>
    </Flex>
  );
};
