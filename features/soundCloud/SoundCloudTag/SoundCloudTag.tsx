import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/react';
import { çSoundCloudTag } from './types';

export const SoundCloudTag: React.FC<çSoundCloudTag.Props> = ({
  isActive,
  onClick,
  children,
  ...props
}) => {
  return (
    <Tag
      cursor="pointer"
      variant={isActive ? 'solid' : 'outline'}
      onClick={onClick}
      {...props}
    >
      <TagLabel textTransform="capitalize">{children}</TagLabel>
    </Tag>
  );
};
