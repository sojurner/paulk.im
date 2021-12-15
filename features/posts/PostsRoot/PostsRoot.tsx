import React from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';
import { Flex, HStack, VStack, Tag } from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { RegularText, SubTitle, Title } from '@/components/Typography';
import { EyeIcon, UpvoteIcon } from '@/components/Icon';

import { AvatarPkImage } from '@/assets/images';

import { µPostsRoot } from '.';

export const PostsRoot: React.FC<µPostsRoot.Types.Props> = ({
  posts,
  ...props
}) => {
  const { collapsible, mediaQueries } = useResponsiveContext();

  return (
    <Flex
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      py="4em"
      {...(!collapsible.state.collapsed &&
        !mediaQueries.state.isLargerThan500 && {
          onClick: collapsible.methods.toggleCollapsed,
        })}
      {...props}
    >
      <Title mb="5" letterSpacing="3px">
        Blog Posts
      </Title>
      <Flex
        my="5"
        flexWrap="wrap"
        justifyContent="center"
        maxWidth="1240px"
        spacing="10"
      >
        {posts.map((POST, index) => {
          const width = [
            '100%',
            '500px',
            index % 4 === 0 || (index - 3) % 4 === 0 ? '500px' : '320px',
            index % 4 === 0 ? '500px' : '320px',
          ];
          return (
            <Flex
              transition=".15s linear"
              cursor="pointer"
              boxShadow="0 2px 5px rgba(0,0,0,0.1)"
              maxW={width}
              width={width}
              minW={width}
              minH="541"
              pos="relative"
              m="1"
              flexDir="column"
              key={POST.slug}
              _hover={{
                transform: 'translate(0, -2px)',
                boxShadow: '0 4px 5px rgba(0,0,0,0.2)',
              }}
            >
              <NextLink href={`/posts/${POST.slug}`}>
                <div
                  style={{
                    display: 'flex',
                    flex: '1',
                    flexDirection: 'column',
                  }}
                >
                  <NextImage
                    src={POST?.coverImage?.url}
                    layout="responsive"
                    height="200"
                    width="320"
                    // objectFit="fill" // Scale your image down to fit into the container
                  />
                  <VStack flex="1 1 auto" p="4" alignItems="flex-start">
                    <SubTitle
                      cursor="pointer"
                      className="post__title"
                      fontSize="28px"
                    >
                      {POST.title}
                    </SubTitle>

                    <HStack>
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
                      color="blackAlpha.700"
                      fontSize="18px"
                      className="post__excerpt"
                      cursor="pointer"
                    >
                      {POST.excerpt}
                    </RegularText>

                    <Flex
                      py="2"
                      alignItems="flex-end"
                      justifyContent="space-between"
                      flex="1"
                      width="100%"
                    >
                      <HStack>
                        <NextImage src={AvatarPkImage} height={25} width={33} />
                        <RegularText letterSpacing="-.5px">
                          Paul Kim
                        </RegularText>
                      </HStack>
                      <HStack ml="auto">
                        <Flex
                          fontSize="15px"
                          color="blackAlpha.500"
                          alignItems="center"
                        >
                          <EyeIcon />
                          <RegularText
                            ml="4px"
                            fontSize="14px"
                            color="blackAlpha.700"
                            fontWeight="bold"
                          >
                            {POST.viewCount}
                          </RegularText>
                        </Flex>
                        <RegularText color="blackAlpha.600">·</RegularText>
                        <Flex
                          fontSize="15px"
                          color="blackAlpha.500"
                          alignItems="center"
                        >
                          <UpvoteIcon />
                          <RegularText
                            ml="2px"
                            fontSize="14px"
                            color="blackAlpha.700"
                            fontWeight="bold"
                          >
                            {POST.upvotes}
                          </RegularText>
                        </Flex>
                      </HStack>
                    </Flex>
                  </VStack>
                </div>
              </NextLink>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
