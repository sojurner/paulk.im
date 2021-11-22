import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';

import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  VStack,
  Tag,
} from '@chakra-ui/react';
import { RegularText, SubTitle, Title } from '@/components/Typography';

import { AvatarPkImage } from '@/assets/images';

import * as µPostsRoot from './types';

export const PostsRoot: React.FC<µPostsRoot.Props> = ({ posts, ...props }) => {
  return (
    <Flex
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      p="2em"
      {...props}
    >
      <Title mb="4">Latest Posts</Title>
      <VStack my="5" spacing="10" alignItems="baseline">
        {posts.map(POST => {
          return (
            <Box
              p="1.5em 1em"
              cursor="pointer"
              borderRadius="10px"
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 5px rgba(0,0,0,0.2)',
              }}
              transition=".1s"
              boxShadow="0 2px 5px rgba(0,0,0,0.1)"
              maxW="450px"
              width="450px"
              key={POST.slug}
            >
              <NextLink href={`/posts/${POST.slug}`}>
                <div>
                  <SubTitle className="post__title" fontSize="28px">
                    {POST.title}
                  </SubTitle>

                  <HStack my="2">
                    <RegularText
                      color="blackAlpha.600"
                      letterSpacing="-.5px"
                      fontSize="14px"
                    >
                      {POST.date}
                    </RegularText>
                    <RegularText color="blackAlpha.600">·</RegularText>
                    {POST.tags.map(TAG => (
                      <Tag size="sm" key={TAG} variant="subtle">
                        {TAG}
                      </Tag>
                    ))}
                  </HStack>

                  <RegularText
                    mt="2"
                    mb="4"
                    color="blackAlpha.700"
                    // fontWeight="bold"
                    fontSize="18px"
                    className="post__excerpt"
                  >
                    {POST.excerpt}
                  </RegularText>

                  <HStack>
                    <NextImage src={AvatarPkImage} height={25} width={33} />
                    <RegularText letterSpacing="-.5px">Paul Kim</RegularText>
                  </HStack>
                </div>
              </NextLink>
            </Box>
          );
        })}
      </VStack>
    </Flex>
  );
};
