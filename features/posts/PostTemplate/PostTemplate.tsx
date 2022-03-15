import React from 'react';
import NextImage from 'next/image';
import { useRouter } from 'next/router';
import {
  Flex,
  Box,
  HStack,
  Tag,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { MDXRemote } from 'next-mdx-remote';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx.min';

import { useComments } from '@/features/comments';
import { useResponsiveContext } from '@/features/responsive';

import { RegularText, SubHeading } from '@/components/Typography';
import { ReactLiveEditor } from '@/components/ReactLiveEditor';
import {
  BookmarkIcon,
  EyeIcon,
  UpvoteIcon,
  IconWrapper,
} from '@/components/Icon';
import { AuthorAttribution } from '@/components/AuthorAttribution';

import { µPostTemplate } from '.';
import { usePostActions } from '@/features/posts';

const components = {
  ReactLiveEditor,
};

export const PostTemplate: React.FC<µPostTemplate.Props> = ({ post }) => {
  const { asPath } = useRouter();
  const { collapsible } = useResponsiveContext();
  const postActions = usePostActions({ post });

  const utteranceTheme = useColorModeValue('invert(0)', 'invert(.85)');
  const secondaryTxtColor = useColorModeValue('gray.500', 'gray.400');
  const { colorMode } = useColorMode();

  const ref = React.useRef(null);

  useComments({
    url: 'https://utteranc.es/client.js',
    theme: 'github-light',
    issueTerm: post.slug,
    repo: 'sojurner/paulk.im',
    ref,
  });

  React.useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <Flex
      gridArea="body"
      overflow="auto"
      alignItems="center"
      pos="relative"
      flexDir="column"
    >
      <Flex
        flexDir="column"
        maxW={['100%', '650px']}
        minW={'375px'}
        py="40px"
        px="20px"
      >
        <SubHeading>{post.title}</SubHeading>
        <HStack mt="3">
          <AuthorAttribution />
          <RegularText color={secondaryTxtColor}>·</RegularText>
          <RegularText>{post.date}</RegularText>
          <RegularText color={secondaryTxtColor}>·</RegularText>
          <Flex color={secondaryTxtColor} alignItems="center">
            <EyeIcon />
            <RegularText ml="4px" fontSize="18px" color={secondaryTxtColor}>
              {post.viewCount}
            </RegularText>
          </Flex>
        </HStack>
        <Box my="6">
          <NextImage
            src={post.coverImage.url}
            layout="responsive"
            height="200"
            width="320"
          />
        </Box>
        <Flex
          alignItems="flex-end"
          justifyContent="space-between"
          flex="1"
          width="100%"
        >
          <HStack>
            {post.tags.map(TAG => (
              <Tag size="md" key={TAG} variant="subtle">
                {TAG}
              </Tag>
            ))}
          </HStack>
          <HStack ml="auto" spacing="5" fontSize="1.2em">
            <Flex
              fontSize="1.3em"
              color={secondaryTxtColor}
              alignItems="center"
            >
              <UpvoteIcon />
              <RegularText ml="4px" fontSize="18px" color={secondaryTxtColor}>
                {post.upvotes}
              </RegularText>
            </Flex>
            <IconWrapper
              cursor={postActions.state.canFavorite ? 'pointer' : 'initial'}
              fontSize="1.4em"
              opacity={postActions.state.canFavorite ? 1 : 0.5}
              onClick={postActions.methods.handleFavorite}
              isActive={!postActions.state.notFavorited}
            >
              <BookmarkIcon />
            </IconWrapper>
          </HStack>
        </Flex>

        <µPostTemplate.StyledArticle darkMode={colorMode === 'dark'}>
          <MDXRemote {...post.content} components={components} />
        </µPostTemplate.StyledArticle>
      </Flex>
      <Box width={['100%', '650px']} filter={utteranceTheme} ref={ref} />
    </Flex>
  );
};
