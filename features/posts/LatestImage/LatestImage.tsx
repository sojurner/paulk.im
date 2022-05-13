import { Flex } from '@chakra-ui/react';
import Image, { ImageProps } from 'next/image';

export const LatestImage: React.VFC<ImageProps> = props => {
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <Image layout="responsive" alt={'image'} {...props} />
    </Flex>
  );
};
