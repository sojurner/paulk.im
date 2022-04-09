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
import {
  BookmarkIcon,
  EyeIcon,
  UpvoteIcon,
  IconWrapper,
} from '@/components/Icon';
import { AuthorAttribution } from '@/components/AuthorAttribution';

import { µTilTemplate } from '.';

export const PostTemplate: React.FC<µTilTemplate.Props> = ({ til }) => {
  const { asPath } = useRouter();
  const { collapsible } = useResponsiveContext();

  const utteranceTheme = useColorModeValue('invert(0)', 'invert(.85)');
  const secondaryTxtColor = useColorModeValue('gray.500', 'gray.400');
  const { colorMode } = useColorMode();

  const ref = React.useRef(null);

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
        <SubHeading>{til.title}</SubHeading>
        <HStack mt="3">
          <AuthorAttribution />
          <RegularText color={secondaryTxtColor}>·</RegularText>
          <RegularText>{til.date}</RegularText>
          <RegularText color={secondaryTxtColor}>·</RegularText>
        </HStack>
        <Flex
          alignItems="flex-end"
          justifyContent="space-between"
          flex="1"
          width="100%"
        >
          <HStack>
            {til.tags.map(TAG => (
              <Tag size="md" key={TAG} variant="subtle">
                {TAG}
              </Tag>
            ))}
          </HStack>
          <HStack ml="auto" spacing="5" fontSize="1.2em">
            {/* <IconWrapper
              cursor={postActions.state.canFavorite ? 'pointer' : 'initial'}
              fontSize="1.4em"
              opacity={postActions.state.canFavorite ? 1 : 0.5}
              onClick={postActions.methods.handleFavorite}
              isActive={!postActions.state.notFavorited}
            >
              <BookmarkIcon />
            </IconWrapper> */}
          </HStack>
        </Flex>

        <µTilTemplate.StyledArticle darkMode={colorMode === 'dark'}>
          <MDXRemote {...til.content} />
        </µTilTemplate.StyledArticle>
      </Flex>
      <Box width={['100%', '650px']} filter={utteranceTheme} ref={ref} />
    </Flex>
  );
};
