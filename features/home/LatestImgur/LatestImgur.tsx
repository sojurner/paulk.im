import { Flex, Box, useColorMode } from '@chakra-ui/react';
import { Imgur } from '@/components/Icon';

export const LatestImgur: React.FC<{
  id: string;
  isLargerThan500: boolean;
}> = ({ id, isLargerThan500 }) => {
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <Box left="-1.6em" pos="absolute" fontSize={'2em'}>
        <Imgur />
      </Box>
      <iframe
        allowFullScreen={true}
        className={'imgur-embed-iframe-pub imgur-embed-iframe-pub-a-${id}'}
        scrolling="no"
        width={isLargerThan500 ? '700px' : '100%'}
        height={isLargerThan500 ? '690px' : '550px'}
        id={`imgur-embed-iframe-pub-a-${id}`}
        src={`http://imgur.com/a/${id}/embed?context=false&pub=true`}
      />
    </Flex>
  );
};
