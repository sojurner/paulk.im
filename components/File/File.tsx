import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import { µFile, µFileList } from './types';
import { RegularText } from '../Typography';
import { LogoIcon } from '@/components/Icon';

export const File: React.FC<µFile.Props> = ({
  content,
  isActive,
  isCurrent,
  ...props
}) => {
  const [filename] = content;
  return (
    <Flex
      paddingLeft="36px"
      bg={isActive ? 'blue.50' : 'initial'}
      display="flex"
      alignItems="center"
      position="relative"
      cursor="pointer"
      overflow="hidden"
      _after={{
        content: '""',
        position: 'absolute',
        height: '100%',
        borderLeft: '1px dashed',
        borderColor: 'gray.300',
        zIndex: 0,
        left: '42px',
      }}
      {...props}
    >
      <Box zIndex="10" bg={isActive ? 'blue.50' : 'gray.100'}>
        <LogoIcon isActive={isActive || isCurrent} />
      </Box>
      <RegularText
        py="4px"
        marginLeft="5px"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {filename}
      </RegularText>
    </Flex>
  );
};

export const FileList: React.FC<µFileList.Props> = props => (
  <Flex flexDir="column" {...props} />
);
