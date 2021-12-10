import React from 'react';
import NextImage from 'next/image';
import { Flex, HStack, VStack, Tag } from '@chakra-ui/react';

import { LatestCard } from '@/features/home';

import { RegularText, SubTitle } from '@/components/Typography';
import { AuthorAttribution } from '@/components/AuthorAttribution';

import { EyeIcon, UpvoteIcon } from '@/components/Icon';

import { µLatestBlogCard } from '.';

export const LatestBlogCard: React.FC<µLatestBlogCard.Types.Props> = ({
  width,
  post,
  ...props
}) => {
  return (
    <LatestCard maxW={width} width={width} minW={width} {...props}>
      <NextImage
        src={post?.coverImage?.url}
        layout="responsive"
        height="200"
        width="320"
        // objectFit="fill" // Scale your image down to fit into the container
      />
      <VStack flex="1 1 auto" p="4" alignItems="flex-start">
        <SubTitle cursor="pointer" fontSize="28px">
          {post.title}
        </SubTitle>

        <HStack>
          <RegularText
            color="blackAlpha.600"
            letterSpacing="-.5px"
            fontSize="14px"
          >
            {post.date}
          </RegularText>
          <RegularText color="blackAlpha.600">·</RegularText>

          {post.tags.map(TAG => (
            <Tag size="sm" key={TAG} variant="subtle">
              {TAG}
            </Tag>
          ))}
        </HStack>

        <RegularText color="blackAlpha.700" fontSize="18px" cursor="pointer">
          {post.excerpt}
        </RegularText>

        <Flex
          alignItems="flex-end"
          justifyContent="space-between"
          flex="1"
          width="100%"
        >
          <AuthorAttribution />
          <HStack ml="auto" fontSize="1.2em">
            <Flex color="blackAlpha.500" alignItems="center">
              <EyeIcon />
              <RegularText
                ml="4px"
                fontSize="15px"
                color="blackAlpha.700"
                fontWeight="bold"
              >
                {post.viewCount}
              </RegularText>
            </Flex>
            <RegularText color="blackAlpha.600">·</RegularText>
            <Flex color="blackAlpha.500" alignItems="center">
              <UpvoteIcon />
              <RegularText
                ml="2px"
                fontSize="15px"
                color="blackAlpha.700"
                fontWeight="bold"
              >
                {post.upvotes}
              </RegularText>
            </Flex>
          </HStack>
        </Flex>
      </VStack>
    </LatestCard>
  );
};
