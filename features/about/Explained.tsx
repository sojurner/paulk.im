import NextLink from 'next/link';

import { IdeaIcon, Logo, MemeIcon, Pepe } from '@/components/Icon';
import { RegularText } from '@/components/Typography';
import { Box, Flex, VStack, Link, Text } from '@chakra-ui/react';
import { usePlaylistContext } from '../playlist';

export const PepePost: Models.Post = {
  title: 'Pepe the Frog',
  slug: 'pepe-the-frog',
  resource: 'https://www.youtube.com/embed/vJMP7RBsoms',
  type: 'youtube',
  tag: ['meme', 'pepe'],
  uploadDate: '2022-04-01',
  asset: {
    url: 'https://media.graphassets.com/hAvgOLgURCOwxmiydNdv',
    height: 360,
    width: 480,
  },
};

export const PepeLink = () => {
  const { usePlaylistIndex } = usePlaylistContext();

  return (
    <RegularText fontSize={'1.2em'}>
      This is Pepe the frog. Pepe is many things. But most importantly:{' '}
      <Text
        as="ins"
        color="green.400"
        cursor="pointer"
        onClick={() => usePlaylistIndex.methods.onAdd('unshift')(PepePost)}
      >
        He is within all of us
      </Text>
      .
    </RegularText>
  );
};

export const Explained = () => {
  return (
    <VStack spacing="5" alignItems="flex-start">
      <RegularText fontSize="1.2em">
        This website is a four year culmination of trial & errors. I suppose in
        another couple years, it will look completely different.
      </RegularText>
      <Flex>
        <NextLink href="/">
          <div>
            <Box cursor="pointer" mr="6" fontSize="3.5em">
              <Logo />
            </Box>
          </div>
        </NextLink>
        <VStack alignItems="flex-start">
          <RegularText fontSize={'1.2em'}>
            I hi-jacked this Logo from {' '}
            <Link
              href="https://www.shutterstock.com/image-vector/modern-abstract-letter-pk-logo-this-1516950476"
              isExternal
              textDecor="underline"
              color="blue.400"
            >
              Gfxvect
            </Link>
            . I just converted it into an svg, and filled it with random colors.
            I&apos;ve come to accept my limitations when it comes design.
          </RegularText>
        </VStack>
      </Flex>
      <Flex>
        <NextLink href="/tils">
          <div>
            <Box cursor="pointer" mr="6" fontSize="3.5em">
              <MemeIcon />
            </Box>
          </div>
        </NextLink>
        <RegularText fontSize={'1.2em'}>
          Here is where I share funny and interesting videos, songs, and images
          I discover throughout the week.
        </RegularText>
      </Flex>
      <Flex>
        <NextLink href="/tils">
          <div>
            <Box cursor="pointer" mr="6" fontSize="3.5em">
              <IdeaIcon />
            </Box>
          </div>
        </NextLink>
        <VStack alignItems="flex-start">
          <RegularText fontSize={'1.2em'}>
            Here is where I post code snippets and random educational fun facts.  
          </RegularText>
        </VStack>
      </Flex>
      <Flex>
        <NextLink href="/about">
          <div>
            <Box mr="6" fontSize="3.5em">
              <Pepe />
            </Box>
          </div>
        </NextLink>
        <VStack alignItems="flex-start">
          <PepeLink />
        </VStack>
      </Flex>
    </VStack>
  );
};
