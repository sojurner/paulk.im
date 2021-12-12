import React from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { RegularText } from '../Typography';

import { µFile } from '.';
import { IconWrapper } from '../Icon';

export const File: React.FC<µFile.Types.Props> = ({
  content,
  isActive,
  isCurrent,
  children,
  ...props
}) => {
  const [filename] = content;
  const bg = useColorModeValue('blue.50', 'blue.900');

  return (
    <Flex
      bg={isActive ? bg : 'initial'}
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
        left: `calc(-9px + ${props.pl})`,
      }}
      {...props}
    >
      <IconWrapper zIndex="10" fontSize="1.1em" isActive={isActive}>
        {children}
      </IconWrapper>
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

export const FileList: React.FC<µFile.Types.FlexProps> = props => (
  <Flex flexDir="column" {...props} />
);
