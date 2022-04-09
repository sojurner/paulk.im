import { Flex, Box } from '@chakra-ui/react';
import { Imgur } from '@/components/Icon';

export const LatestImgur: React.FC<{ url: string }> = ({ url }) => {
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <Box top="1" left="-1.7em" pos="absolute" fontSize={'2em'}>
        <Imgur />
      </Box>
      <blockquote
        className="imgur-embed-pub"
        lang="en"
        data-id={url}
      ></blockquote>
    </Flex>
  );
};
