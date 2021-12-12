import React from 'react';
import { Tag, TagLabel } from '@chakra-ui/react';
import { µSoundCloudTag } from '.';

export const SoundCloudTag: React.FC<µSoundCloudTag.Props> = ({
  isActive,
  onClick,
  children,
  ...props
}) => {
  return (
    <Tag
      minWidth="max-content"
      cursor="pointer"
      variant={isActive ? 'solid' : 'outline'}
      onClick={onClick}
      {...props}
    >
      <TagLabel textTransform="capitalize">{children}</TagLabel>
    </Tag>
  );
};
