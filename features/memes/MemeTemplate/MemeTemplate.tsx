import React from 'react';
import NextImage from 'next/image';
import {
  Flex,
  Box,
  HStack,
  Tooltip,
  Tag,
  useColorModeValue,
} from '@chakra-ui/react';

import { useComments } from '@/features/comments';
import { useMemeActions } from '@/features/memes';

import { RegularText, SubTitle } from '@/components/Typography';
import {
  BookmarkIcon,
  MemeIcon,
  EyeIcon,
  IconWrapper,
} from '@/components/Icon';

import { µMemeTemplate } from '.';

export const MemeTemplate: React.FC<µMemeTemplate.Types.Props> = ({
  meme,
  ...props
}) => {
  const memeActions = useMemeActions({ meme });
  const secondaryTxtColor = useColorModeValue('gray.500', 'gray.300');
  const utteranceInversion = useColorModeValue('invert(0)', 'invert(.9)');
  const ref = React.useRef(null);

  useComments({
    url: 'https://utteranc.es/client.js',
    theme: 'github-light',
    issueTerm: meme.slug,
    repo: 'sojurner/paulk.im',
    ref,
  });

  return (
    <Flex
      direction="column"
      pos="relative"
      alignItems="center"
      pt="10"
      overflow="auto"
      {...props}
    >
      {/* header  */}
      <Flex
        pos="relative"
        flexDir="column"
        width={['100%', '500px']}
        px="2"
        alignItems="center"
      >
        <Flex width={'100%'} direction="column" alignItems="flex-start">
          {/* header title  */}
          <SubTitle fontWeight="600" fontSize="2xl">
            {meme.title}
          </SubTitle>

          {/* header details  */}
          <HStack spacing="3" my="2">
            <Flex alignItems="center" color={secondaryTxtColor}>
              <EyeIcon />
              <RegularText ml="4px">{meme.viewCount}</RegularText>
            </Flex>
            <RegularText color="blackAlpha.600">·</RegularText>

            <RegularText fontSize="1em" color={secondaryTxtColor}>
              {meme.date.label}
            </RegularText>
          </HStack>

          {/* resource */}
          <Box width={['100%', '500px']}>
            <NextImage
              src={meme.image.url}
              layout="responsive"
              height="380"
              width="320"
            />
          </Box>

          {/* footer */}
          <Flex
            borderRadius="10px"
            flexDir="row"
            alignItems="flex-start"
            width="100%"
            py="2"
          >
            {/* footer tags */}
            <HStack>
              {meme.tags.map(TAG => {
                return (
                  <Tag size="lg" key={`${meme.slug}-${TAG}`}>
                    {TAG}
                  </Tag>
                );
              })}
            </HStack>

            {/* footer upvote */}
            <Flex
              color="white"
              fontSize="24px"
              ml="auto"
              mr="3"
              flexDir="row"
              alignItems="center"
              pointerEvents={memeActions.state.upvoted ? 'none' : 'initial'}
              cursor="pointer"
              onClick={memeActions.methods.handleUpvote}
              opacity={0.8}
              _hover={{
                opacity: 1,
              }}
            >
              <MemeIcon />
              <RegularText
                ml="2"
                fontSize="20px"
                color={secondaryTxtColor}
                justifyContent="center"
              >
                {memeActions.state.upvoted ? meme.upvotes + 1 : meme.upvotes}
              </RegularText>
            </Flex>

            {/* footer favorite */}
            <Tooltip
              openDelay={500}
              isDisabled={memeActions.state.canFavorite}
              label={'Enable Favorites in Settings to Save!!'}
              hasArrow
              placement="top"
              bg="gray.500"
            >
              <IconWrapper
                cursor={memeActions.state.canFavorite ? 'pointer' : 'initial'}
                fontSize={'1.9em'}
                opacity={memeActions.state.canFavorite ? 1 : 0.5}
                onClick={memeActions.methods.handleFavorite}
                isActive={!memeActions.state.notFavorited}
              >
                <BookmarkIcon />
              </IconWrapper>
            </Tooltip>
          </Flex>
        </Flex>
        <Box filter={utteranceInversion} width="100%" ref={ref} />
      </Flex>
    </Flex>
  );
};
