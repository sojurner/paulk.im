import React from 'react';
import dynamic from 'next/dynamic';
import {
  Divider,
  Flex,
  VStack,
  Code,
  Tag,
  Box,
  useColorMode,
  FlexProps,
  HStack,
  useToast,
  Button,
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { SubTitle } from '@/components/Typography';

import { useRouter } from 'next/router';
import { ShareLink, AddPlaylist } from '@/components/Icon';
import { TYPE_2_COMPONENT_MAPPING } from '../consts';

import { usePlaylistContext } from '@/features/playlist';

const DynamicImage = dynamic<any>(() =>
  import('../LatestImage').then(mod => mod.LatestImage)
);
const DynamicVideo = dynamic<any>(() =>
  import('../LatestVideo').then(mod => mod.LatestVideo)
);
export const PostsTag: React.VFC<
  FlexProps & { tag: string; posts: Models.Post[]; tags: string[] }
> = ({ posts, tags, tag, ...props }) => {
  const toast = useToast();
  const { collapsible, mediaQueries } = useResponsiveContext();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { usePlaylistIndex, usePlaylistPlayer } = usePlaylistContext();

  const onCopyPostLink = (slug: string) => async () => {
    await navigator.clipboard.writeText(
      `${window.location.origin}/${router.asPath}#${slug}`
    );
    toast({
      title: 'Link Copied!',
      position: 'top',
      status: 'success',
      duration: 4000,
      isClosable: true,
    });
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
      <HStack justifyContent="center">
        <Code fontSize="1.3em">{tag}</Code>
        <SubTitle fontSize={'2em'}>Posts</SubTitle>
      </HStack>

      <Flex my="4" flexWrap="wrap" width={['95%', 540]}>
        {tags?.map(TAG => {
          return (
            <Tag
              key={`header-${TAG}`}
              onClick={() => router.push(`/posts/tag/${TAG}`)}
              variant={TAG === tag ? 'solid' : 'outline'}
              cursor="pointer"
              my="1"
              mr="2"
            >
              {TAG.replace(/_/g, ' ')}
            </Tag>
          );
        })}
      </Flex>
      <VStack py="5" width={['95%', 540]} spacing="5">
        {posts?.map(POST => {
          const inPlaylist = usePlaylistIndex.state.playlist.some(
            PL => PL.slug === POST.slug
          );
          const canAddPlaylist = POST.type !== 'image';
          const Icon = TYPE_2_COMPONENT_MAPPING[POST.type];

          return (
            <Flex id={POST.slug} width="100%" key={POST.slug} flexDir="column">
              <Flex
                mb="3"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <SubTitle
                  {...(router.asPath ===
                    `/posts/type/${POST.type}#${POST.slug}` && {
                    background: 'black',
                  })}
                  maxW="calc(100% - 32px)"
                  fontSize="1.2em"
                >
                  {POST.title}
                </SubTitle>
                <HStack alignItems="center">
                  {POST.type !== 'image' && (
                    <Button
                      p="1px"
                      {...(inPlaylist && {
                        disabled: true,
                      })}
                      onClick={() => {
                        usePlaylistIndex.methods.onAdd('push')(POST);
                        toast({
                          title: 'Added to Playlist!',
                          position: 'top',
                          status: 'success',
                          duration: 4000,
                          isClosable: true,
                        });
                      }}
                      fontSize="2.5em"
                      variant="ghost"
                    >
                      <AddPlaylist />
                    </Button>
                  )}
                  <Box
                    onClick={() => router.push(`/posts/type/${POST.type}`)}
                    cursor="pointer"
                    py="1"
                    fontSize={'1.8em'}
                  >
                    <Icon />
                  </Box>
                </HStack>
              </Flex>
              {POST.type !== 'image' && (
                <DynamicVideo
                  onPlay={() => {
                    usePlaylistIndex.methods.onAdd('unshift')(POST);
                    usePlaylistPlayer.methods.setIsPlaying.on();
                  }}
                  currentlyPlaying={
                    usePlaylistIndex?.state?.currentlyPlaying?.slug ===
                      POST.slug && usePlaylistPlayer.state.isPlaying
                  }
                  img={{
                    height: POST.asset?.height,
                    width: POST.asset?.width,
                    src: POST.asset?.url as string,
                  }}
                />
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
                        width="max-content"
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
                        {TAG.replace(/_/g, ' ')}
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
