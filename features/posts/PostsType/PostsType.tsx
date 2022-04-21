import React from 'react';
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
} from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { RegularText, SubTitle } from '@/components/Typography';
import { LatestSoundcloud } from '@/features/posts/LatestSoundcloud';
import { LatestYoutube } from '@/features/posts/LatestYoutube';

import { LatestVideo } from '../LatestVideo';
import { LatestImage } from '../LatestImage';
import { useRouter } from 'next/router';

import { typeIconMapping } from '../consts';
import {
  ShareLink,
  MemeIcon,
  Video,
  SoundCloudIcon,
  Youtube,
  IconWrapper,
} from '@/components/Icon';
import { SelectButtonGroup } from '@/components/SelectButtonGroup/SelectButtonGroup';

export const PostsType: React.VFC<
  FlexProps & { type: string; posts: Models.Post[] }
> = ({ posts, type, ...props }) => {
  const toast = useToast();
  const { collapsible, mediaQueries } = useResponsiveContext();
  const { colorMode } = useColorMode();
  const router = useRouter();

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
      <SubTitle fontSize={'2em'}>Posts</SubTitle>
      <SelectButtonGroup
        groupProps={{ my: '6', spacing: 7 }}
        value={type}
        onChange={val => router.push(`/posts/type/${val}`)}
      >
        <IconWrapper value="misc" cursor="pointer" py="1" fontSize={'1.8em'}>
          <Video />
        </IconWrapper>
        <IconWrapper value="youtube" cursor="pointer" py="1" fontSize={'1.8em'}>
          <Youtube />
        </IconWrapper>
        <IconWrapper value="image" cursor="pointer" py="1" fontSize={'1.8em'}>
          <MemeIcon />
        </IconWrapper>
        <IconWrapper
          value="soundcloud"
          cursor="pointer"
          py="1"
          fontSize={'1.8em'}
        >
          <SoundCloudIcon />
        </IconWrapper>
      </SelectButtonGroup>
      <VStack py="5" width={['95%', 540]} spacing="5">
        {posts?.map(POST => {
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
              </Flex>
              {POST.type === 'youtube' && (
                <LatestYoutube url={POST.resource as string} />
              )}

              {POST.type === 'soundcloud' && (
                <LatestSoundcloud url={POST.resource as string} />
              )}

              {POST.type === 'misc' && (
                <LatestVideo src={POST.resource as string} width={'100%'} />
              )}

              {POST.type === 'image' && (
                <LatestImage
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
