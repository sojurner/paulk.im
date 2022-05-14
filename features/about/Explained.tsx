import NextLink from 'next/link';

import { IdeaIcon, Logo, Pepe } from '@/components/Icon';
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

export const PepeDesc = () => {
  const { usePlaylistIndex } = usePlaylistContext();

  return (
    <RegularText fontSize={'1.2em'}>
      Pepe is many things. But most importantly:{' '}
      <Text
        as="ins"
        color="green.400"
        cursor="pointer"
        onClick={() => usePlaylistIndex.methods.onAdd('push')(PepePost)}
      >
        He is within all of us
      </Text>
      .
    </RegularText>
  );
};

export const Explained = () => {
  console.log('rerendered')
  return (
    <VStack spacing="5" alignItems="flex-start">
      <RegularText fontSize="1.2em">
        This website is a 4 year culmination of trial & errors. I suppose in
        another 4 years, it will look completely different.
      </RegularText>
      <RegularText fontSize="1.2em">
        I went with short form content, because it felt society&apos;s media
        consumption habits was heading towards this direction. I&apos;ll try my
        best to keep it funny, wholesome, and relatively kosher.
      </RegularText>
      <Flex>
        <NextLink href="/">
          <div>
            <Box cursor="pointer" mr="6" fontSize="4em">
              <Logo />
            </Box>
          </div>
        </NextLink>
        <VStack alignItems="flex-start">
          <RegularText fontSize={'1.2em'}>
            I hi-jacked this Logo from this{' '}
            <Link
              href="https://www.shutterstock.com/image-vector/modern-abstract-letter-pk-logo-this-1516950476"
              isExternal
              textDecor="underline"
              color="blue.400"
            >
              Link
            </Link>
            . I just converted it into an svg, and filled it with random colors.
            I&apos;m a developer, not a designer.
          </RegularText>
          <RegularText fontSize={'1.2em'}>
            Here is where I share videos, songs, and images I find throughout
            the week.
          </RegularText>
        </VStack>
      </Flex>
      <Flex>
        <NextLink href="/tils">
          <div>
            <Box cursor="pointer" mr="6" fontSize="4em">
              <IdeaIcon />
            </Box>
          </div>
        </NextLink>
        <VStack alignItems="flex-start">
          <RegularText fontSize={'1.2em'}>
            I probably wasted a good 2 hours looking for a{' '}
            <strong>Today I Learned (TIL)</strong> icon. Still looking... but
            for now, I&apos;ve settled on this one.
          </RegularText>
          <RegularText fontSize={'1.2em'}>
            Here is where I&apos;ll post code snippets and random educational
            fun facts.
          </RegularText>
        </VStack>
      </Flex>
      <Flex>
        <NextLink href="/about">
          <div>
            <Box mr="6" fontSize="4em">
              <Pepe />
            </Box>
          </div>
        </NextLink>
        <VStack alignItems="flex-start">
          <RegularText fontSize={'1.2em'}>
            Recently, a close friend of mine asked why I chose this
            &apos;frog&apos; image for the About page. Then, it dawned on me
            that he was unaware of the
            <Text as="strong"> Pepe the Frog</Text> meme. It never occured to me
            that I could be friends with someone who lived under a bigger rock
            than I did.
          </RegularText>
          <PepeDesc />
        </VStack>
      </Flex>
    </VStack>
  );
};
