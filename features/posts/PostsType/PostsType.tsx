import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import {
  Divider,
  Flex,
  VStack,
  Tag,
  useColorMode,
  FlexProps,
  HStack,
  Box,
  useToast,
  Button,
  Text,
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { SubTitle } from '@/components/Typography';

import {
  ShareLink,
  MemeIcon,
  Video,
  SoundCloudIcon,
  Youtube,
  IconWrapper,
  // AddPlaylist,
} from '@/components/Icon';
import { SelectButtonGroup } from '@/components/SelectButtonGroup/SelectButtonGroup';
import { usePlaylistContext, usePlaylistPlayer } from '@/features/playlist';
import { TYPE_2_COMPONENT_MAPPING } from '../consts';

const DynamicVideo = dynamic<any>(() =>
  import('../LatestVideo').then(mod => mod.MemoLatestVideo)
);
const DynamicImage = dynamic<any>(() =>
  import('../LatestImage').then(mod => mod.LatestImage)
);

export const PostsType: React.VFC<
  FlexProps & { type: string; posts: Models.Post[] }
> = ({ posts, type, ...props }) => {
  const toast = useToast();
  const { collapsible, mediaQueries } = useResponsiveContext();
  const { colorMode } = useColorMode();
  const { usePlaylistIndex, usePlaylistPlayer } = usePlaylistContext();
  const router = useRouter();

  // const canAddPlaylist = type !== 'image';

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

  const HeaderIcon = TYPE_2_COMPONENT_MAPPING[type];

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
      <HStack fontSize="2em" spacing="6">
        <HeaderIcon />
        <SubTitle fontSize={'1em'}>Posts</SubTitle>
        <HeaderIcon />
      </HStack>
      <SelectButtonGroup
        groupProps={{ my: '6', spacing: 7 }}
        value={type}
        onChange={val => router.push(`/posts/type/${val}`)}
      >
        {['misc', 'youtube', 'image', 'soundcloud']
          .filter(TYP => TYP !== type)
          .map(TYP => {
            const Icon = TYPE_2_COMPONENT_MAPPING[TYP];

            return (
              <IconWrapper
                key={`nav-${TYP}`}
                value={TYP}
                cursor="pointer"
                py="1"
                fontSize={'1.8em'}
              >
                <Icon />
              </IconWrapper>
            );
          })}
      </SelectButtonGroup>
      {type !== 'image' && (
        <Button
          py="2"
          px="3"
          variant="outline"
          onClick={() => {
            usePlaylistIndex.methods.onAddMultiple(type as any)(posts);
            toast({
              title: 'Added to Playlist!',
              position: 'top',
              status: 'success',
              duration: 4000,
              isClosable: true,
            });
          }}
        >
          Play All ({posts.length})
        </Button>
      )}
      <VStack py="5" width={['95%', 540]} spacing="5">
        {posts?.map(POST => {
          // const inPlaylist = usePlaylistIndex.state.playlist.some(
          //   PL => PL.slug === POST.slug
          // );

          return (
            <Flex id={POST.slug} width="100%" key={POST.slug} flexDir="column">
              <Flex
                mb="3"
                alignItems="center"
                width="100%"
                justifyContent="space-between"
              >
                <SubTitle
                  {...(router.asPath === `/posts/type/${type}#${POST.slug}` && {
                    background: 'black',
                  })}
                  maxW="calc(100% - 32px)"
                  fontSize="1.2em"
                >
                  {POST.title}
                </SubTitle>
                <HStack alignItems="center">
                  {/* {canAddPlaylist && (
                    <Button
                      p="1px"
                      {...(inPlaylist && {
                        disabled: true,
                      })}
                      onClick={() => {
                        usePlaylistIndex.methods.onAdd()(POST);
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
                  )} */}

                  <Box
                    onClick={() => router.push(`/posts/type/${POST.type}`)}
                    cursor="pointer"
                    py="1"
                    fontSize={'1.8em'}
                  >
                    {POST.type === 'youtube' && <Youtube />}
                    {POST.type === 'soundcloud' && <SoundCloudIcon />}
                    {POST.type === 'image' && <MemeIcon />}
                    {POST.type === 'misc' && <Video />}
                  </Box>
                </HStack>
              </Flex>
              {POST.type !== 'image' && (
                <DynamicVideo
                  currentlyPlaying={
                    usePlaylistIndex?.state?.currentlyPlaying?.slug ===
                      POST.slug && usePlaylistPlayer.state.isPlaying
                  }
                  onPlay={() => {
                    usePlaylistIndex.methods.onAdd('unshift')(POST);
                  }}
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
                width="100%"
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
