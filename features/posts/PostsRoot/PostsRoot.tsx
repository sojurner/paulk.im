import React from 'react';
import dynamic from 'next/dynamic';
import {
  Divider,
  Flex,
  VStack,
  Tag,
  useColorMode,
  FlexProps,
  Box,
  HStack,
  useToast,
  Button,
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { SubTitle } from '@/components/Typography';

import { useRouter } from 'next/router';
import {
  ShareLink,
  MemeIcon,
  Video,
  SoundCloudIcon,
  Youtube,
} from '@/components/Icon';

const DynamicVideo = dynamic<any>(() =>
  import('../LatestVideo').then(mod => mod.LatestVideo)
);
const DynamicImage = dynamic<any>(() =>
  import('../LatestImage').then(mod => mod.LatestImage)
);
const DynamicYoutube = dynamic<any>(() =>
  import('../LatestYoutube').then(mod => mod.LatestYoutube)
);
const DynamicSoundcloud = dynamic<any>(() =>
import('../LatestSoundcloud').then(mod => mod.LatestSoundcloud)
);

export const PostsRoot: React.VFC<
  { results: Models.Post[]; tags: string[] } & FlexProps
> = ({ results, tags, ...props }) => {
  const toast = useToast();
  const { collapsible, mediaQueries } = useResponsiveContext();
  const { colorMode } = useColorMode();
  const router = useRouter();

  const onCopyPostLink = (slug: string) => async () => {
    await navigator.clipboard.writeText(`${window.location.origin}/#${slug}`);
    toast({
      title: 'Link Copied!',
      position: 'top',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
  };

  const onTypeClick = (value: string) => () => {
    router.push(`/posts/type/${value}`);
  };

  return (
    <Flex
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      py="2.5em"
      {...(!collapsible.state.collapsed &&
        !mediaQueries.state.isLargerThan500 && {
          onClick: collapsible.methods.toggleCollapsed,
        })}
      {...props}
    >
      <SubTitle my="4" fontSize={'2em'}>
        Posts
      </SubTitle>
      <HStack spacing="5">
        <Box
          onClick={onTypeClick('misc')}
          cursor="pointer"
          py="1"
          fontSize={'1.8em'}
        >
          <Video />
        </Box>
        <Box
          onClick={onTypeClick('youtube')}
          cursor="pointer"
          py="1"
          fontSize={'1.8em'}
        >
          <Youtube />
        </Box>
        <Box
          onClick={onTypeClick('image')}
          cursor="pointer"
          py="1"
          fontSize={'1.8em'}
        >
          <MemeIcon />
        </Box>
        <Box
          onClick={onTypeClick('soundcloud')}
          cursor="pointer"
          py="1"
          fontSize={'1.8em'}
        >
          <SoundCloudIcon />
        </Box>
      </HStack>
      <Flex my="4" flexWrap="wrap" width={['95%', 540]}>
        {tags?.map(TAG => {
          return (
            <Tag
              key={`header-${TAG}`}
              onClick={() => router.push(`/posts/tag/${TAG}`)}
              cursor="pointer"
              variant="outline"
              my="1"
              mr="2"
            >
              #{TAG}
            </Tag>
          );
        })}
      </Flex>
      <VStack py="5" width={['95%', 540]} spacing="5">
        {results.map(POST => {
          return (
            <Flex id={POST.slug} width="100%" key={POST.slug} flexDir="column">
              <Flex
                mb="3"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <SubTitle maxW="calc(100% - 32px)" fontSize="1.2em">
                  {POST.title}
                </SubTitle>

                <Box
                  onClick={onTypeClick(POST.type)}
                  cursor="pointer"
                  py="1"
                  fontSize={'1.8em'}
                >
                  {POST.type === 'youtube' && <Youtube />}
                  {POST.type === 'soundcloud' && <SoundCloudIcon />}
                  {POST.type === 'image' && <MemeIcon />}
                  {POST.type === 'misc' && <Video />}
                </Box>
              </Flex>

              {POST.type === 'youtube' && (
                <DynamicYoutube url={POST.resource as string} />
              )}

              {POST.type === 'soundcloud' && (
                <DynamicSoundcloud url={POST.resource as string} />
              )}

              {POST.type === 'misc' && (
                <DynamicVideo src={POST.resource as string} width={'100%'} />
              )}

              {POST.type === 'image' && (
                <DynamicImage
                  height={POST.asset?.height}
                  width={POST.asset?.width}
                  src={POST.asset?.url as string}
                />
              )}

              <Flex
                width={'100%'}
                justifyContent="space-between"
                alignItems="center"
                mt="2"
              >
                <HStack>
                  {POST.tag.map(TAG => {
                    return (
                      <Tag
                        key={TAG}
                        cursor="pointer"
                        variant={'subtle'}
                        colorScheme={colorMode === 'light' ? 'blue' : 'gray'}
                        onClick={() => {
                          router.push(`/posts/tag/${TAG}`);
                        }}
                        _hover={{
                          outline:
                            colorMode === 'light'
                              ? '1px solid var(--chakra-colors-blue-200)'
                              : '1px solid #fdb54a',
                        }}
                      >
                        #{TAG}
                      </Tag>
                    );
                  })}
                </HStack>
                <Button
                  variant="ghost"
                  onClick={onCopyPostLink(POST.slug)}
                  fontSize="1.2em"
                >
                  <ShareLink />
                </Button>
              </Flex>
              <Divider mt="5" />
            </Flex>
          );
        })}
      </VStack>
    </Flex>
  );
};
