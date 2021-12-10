import React from 'react';
import NextImage from 'next/image';
import { HStack } from '@chakra-ui/react';

import { RegularText } from '@/components/Typography';

import { AvatarPkImage } from '@/assets/images';

import { µAuthorAttribution } from '.';

export const AuthorAttribution: React.FC<µAuthorAttribution.Types.Props> =
  props => {
    return (
      <HStack {...props}>
        <NextImage src={AvatarPkImage} height={25} width={33} />
        <RegularText letterSpacing="-.5px">Paul Kim</RegularText>
      </HStack>
    );
  };
