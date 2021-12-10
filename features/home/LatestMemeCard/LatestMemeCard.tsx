import React from 'react';
import { Flex, HStack, Tag } from '@chakra-ui/react';
import NextImage from 'next/image';

import { LatestCard } from '@/features/home';

import { MemeIcon, EyeIcon } from '@/components/Icon';
import { RegularText, SubTitle } from '@/components/Typography';

import { µLatestMemeCard } from '.';

export const LatestMemeCard: React.FC<µLatestMemeCard.Types.Props> = ({
  width,
  meme,
  ...props
}) => {
  return (
    <LatestCard maxW={width} width={width} minW={width} {...props}>
      <HStack p="2" alignItems="center">
        <HStack>
          {meme.tags.map(TAG => {
            return (
              <Tag size="lg" key={`${meme.slug}-${TAG}`}>
                {TAG}
              </Tag>
            );
          })}
        </HStack>
      </HStack>
      <NextImage
        src={meme?.image?.url}
        layout="responsive"
        height="390"
        width="420"
      />
      <Flex flex="1" flexDir="column" p="2">
        <SubTitle>{meme.title}</SubTitle>

        <RegularText my="1" fontSize="1em" color="blackAlpha.700">
          {meme.date.label}
        </RegularText>

        <HStack fontSize="1.3em" spacing="3" ml="auto" mt="auto">
          <Flex alignItems="center" color="blackAlpha.700">
            <EyeIcon />
            <RegularText ml="4px">{meme.viewCount}</RegularText>
          </Flex>
          <RegularText color="blackAlpha.600">·</RegularText>
          <Flex alignItems="center">
            <MemeIcon />
            <RegularText
              ml="2"
              fontSize="20px"
              color="blackAlpha.700"
              justifyContent="center"
            >
              {meme.upvotes}
            </RegularText>
          </Flex>
        </HStack>
      </Flex>
    </LatestCard>
  );
};
