import React from 'react';
import NextImage from 'next/image';
import { Flex, Box, HStack, Tooltip, Tag } from '@chakra-ui/react';

import { RegularText, SubTitle } from '@/components/Typography';
import { BookmarkIcon, MemeIcon } from '@/components/Icon';
import { EyeIcon } from '@/assets/icons';
import { useMemeActions } from '@/features/memes';

import { µMemeTemplate } from '.';

export const MemeTemplate: React.FC<µMemeTemplate.Props> = ({
  meme,
  ...props
}) => {
  const memeActions = useMemeActions({ meme });

  return (
    <Flex
      direction="column"
      pos="relative"
      alignItems="center"
      py="10"
      {...props}
    >
      {/* header  */}
      <Flex
        pos="relative"
        width="430px"
        direction="column"
        alignItems="flex-start"
      >
        {/* header title  */}
        <SubTitle fontWeight="600" fontSize="2xl">
          {meme.title}
        </SubTitle>

        {/* header details  */}
        <HStack my="1">
          <Flex alignItems="center" color="blackAlpha.700">
            <EyeIcon />
            <RegularText ml="4px">{meme.viewCount}</RegularText>
          </Flex>
          <RegularText color="blackAlpha.600">·</RegularText>

          <RegularText fontSize="1em" color="blackAlpha.700">
            {meme.date.label}
          </RegularText>
        </HStack>

        {/* resource */}
        <Box>
          <NextImage src={meme.image.url} height="500px" width="500px" />
        </Box>

        {/* footer */}
        <Flex
          borderRadius="10px"
          flexDir="row"
          alignItems="flex-start"
          width="100%"
          px="2"
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
            <MemeIcon isActive={memeActions.state.upvoted} />
            <RegularText
              ml="2"
              fontSize="20px"
              color="blackAlpha.700"
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
            <Box
              cursor={memeActions.state.canFavorite ? 'pointer' : 'initial'}
              fontSize="2em"
              opacity={memeActions.state.canFavorite ? 1 : 0.5}
              onClick={memeActions.methods.handleFavorite}
              {...(memeActions.state.notFavorited && {
                filter: 'grayscale(1)',
              })}
            >
              <BookmarkIcon />
            </Box>
          </Tooltip>
        </Flex>
      </Flex>
    </Flex>
  );
};
