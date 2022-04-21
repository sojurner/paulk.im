import { Flex, Box } from '@chakra-ui/react';
import { MemeIcon } from '@/components/Icon';
import Image, { ImageProps } from 'next/image';

export const LatestImage: React.VFC<ImageProps> = (props) => {
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <Image layout="responsive" alt={'image'} {...props} />
    </Flex>
  );
};
