import { Flex, Box, FlexProps } from '@chakra-ui/react';

import { Youtube, SoundCloudIcon, MemeIcon, Video, Trash } from '@/components/Icon';
import { RegularText } from '@/components/Typography';

export type Props = FlexProps & {
  ITEM: Models.Post;
  isActive: boolean;
  onRemove: () => void;
};

export const PlaylistItem: React.FC<Props> = ({ ITEM, isActive, onRemove }) => {
  return (
    <Flex
      p="2"
      width="100%"
      alignItems={'center'}
      cursor="pointer"
      justifyContent="space-between"
    >
      <Flex
        {...(!isActive && {
          filter: 'grayscale(1)',
          opacity: 0.5,
        })}
        fontSize="1.4em"
      >
        {ITEM.type === 'youtube' && <Youtube />}
        {ITEM.type === 'soundcloud' && <SoundCloudIcon />}
        {ITEM.type === 'image' && <MemeIcon />}
        {ITEM.type === 'misc' && <Video />}
        <RegularText
          ml="2"
          textOverflow="ellipsis"
          whiteSpace="pre"
          overflow="hidden"
        >
          {ITEM.title}
        </RegularText>
      </Flex>
      <Box
        opacity={0.5}
        ml="auto"
        onClick={onRemove}
        _hover={{
          opacity: 1,
        }}
      >
        <Trash />
      </Box>
    </Flex>
  );
};
