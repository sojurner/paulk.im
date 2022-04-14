import { useEffect } from 'react';
import { Flex, Box, useColorMode } from '@chakra-ui/react';
import { Imgur, MemeIcon } from '@/components/Icon';
import Image, { ImageProps } from 'next/image';

export const LatestImgur: React.FC<{
  isLargerThan500: boolean;
  imgProps: ImageProps;
}> = ({ isLargerThan500, imgProps }) => {
  return (
    <Flex width="100%" flexDir="column" pos="relative">
      <Box left="-1.8em" pos="absolute" fontSize={'1.6em'}>
        <MemeIcon />
      </Box>
      <Image
        layout="responsive"
        width={isLargerThan500 ? '540px' : '100%'}
        height={isLargerThan500 ? '490px' : '100%'}
        alt={'image'}
        {...imgProps}
      />
    </Flex>
  );
};
