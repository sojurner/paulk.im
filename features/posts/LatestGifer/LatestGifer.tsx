import { Box, Flex } from '@chakra-ui/react';
import { Types } from '.';

export const LatestGifer: React.VFC<Types.Props> = props => {
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <iframe
        width={'100%'}
        height={600}
        frameBorder="0"
        allowFullScreen
        {...props}
      ></iframe>
    </Flex>
  );
};
