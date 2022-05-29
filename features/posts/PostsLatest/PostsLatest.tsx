import React, { useEffect, useReducer, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
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
  Spinner,
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { SubTitle, RegularText } from '@/components/Typography';
import { ShareLink, AddPlaylist } from '@/components/Icon';
import { usePlaylistContext } from '@/features/playlist';

import { TYPE_2_COMPONENT_MAPPING } from '../consts';

const DynamicVideo = dynamic<any>(() =>
  import('../LatestVideo').then(mod => mod.MemoLatestVideo)
);
const DynamicImage = dynamic<any>(() =>
  import('../LatestImage').then(mod => mod.LatestImage)
);

export const PostsLatest: React.VFC<
  { results: Models.Post[]; tags: string[]; pageCount: number } & FlexProps
> = ({ results, tags, pageCount, ...props }) => {
  const [posts, setPosts] = useState<Models.Post[]>(results);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, toggleLoading] = useReducer(state => !state, false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const toast = useToast();
  const { collapsible, mediaQueries } = useResponsiveContext();
  const { colorMode } = useColorMode();
  const router = useRouter();
  const { usePlaylistIndex, usePlaylistPlayer } = usePlaylistContext();

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

  useEffect(() => {
    let ref = bottomRef.current;
    if (!ref) return;

    const io = new IntersectionObserver(
      ([values]) => {
        if (!values.isIntersecting) return;
        if (currentPage >= pageCount) return;

        toggleLoading();
        toast({
          title: (
            <HStack spacing="5" alignItems={'center'}>
              <Spinner my="2" />
              <RegularText>Getting moar...</RegularText>
            </HStack>
          ),
          containerStyle: { width: 'max-content' },
          position: 'bottom',
          status: 'info',
          duration: 2000,
          isClosable: true,
        });

        fetch(`/api/post/${currentPage + 1}`)
          .then(res => {
            if (!res.ok) throw new Error('something went wrong');
            return res.json();
          })
          .then(({ response }: { response: { posts: Models.Post[] } }) => {
            setPosts(state => [...state, ...response.posts]);
            setCurrentPage(state => state + 1);
          })
          .catch(err => {
            console.error(err);
          })
          .finally(toggleLoading);
      },
      { threshold: 0.1 }
    );

    io.observe(ref);

    return () => io.disconnect();
  }, [currentPage, pageCount]);

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
      <SubTitle my="2" fontSize={'2em'}>
        Latest Posts
      </SubTitle>
      <HStack my="4" spacing="5">
        {['misc', 'youtube', 'image', 'soundcloud'].map(TYPE => {
          const Icon = TYPE_2_COMPONENT_MAPPING[TYPE];

          return (
            <Box
              key={`${TYPE}-icon`}
              onClick={onTypeClick(TYPE)}
              cursor="pointer"
              py="1"
              fontSize={'1.8em'}
            >
              <Icon />
            </Box>
          );
        })}
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
              {TAG.replace(/_/g, ' ')}
            </Tag>
          );
        })}
      </Flex>

      <VStack py="5" width={['95%', 540]} spacing="5">
        {posts.map(POST => {
          const inPlaylist = usePlaylistIndex.state.playlist.some(
            PL => PL.slug === POST.slug
          );

          const Icon = TYPE_2_COMPONENT_MAPPING[POST.type];

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
                <HStack spacing="2">
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
                      fontSize="2em"
                      variant="ghost"
                    >
                      <AddPlaylist />
                    </Button>
                  )}
                  <Box
                    onClick={onTypeClick(POST.type)}
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
      <Box height="150px" ref={bottomRef} />
    </Flex>
  );
};
