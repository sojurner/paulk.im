import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { RegularText } from '../Typography';

import CaretDown from '@/assets/icons/CaretDown.svg';
import CaretRight from '@/assets/icons/CaretRight.svg';

import { µDirectory } from '.';

export const Directory: React.FC<µDirectory.Props> = ({
  children,
  isActive,
  initialExpanded,
  content,
  onClick,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState<boolean>(
    initialExpanded || true
  );
  const [label] = content;

  return (
    <Flex flexDir="column" borderBottom="1px solid" borderColor="gray.200">
      <HStack
        bg={isActive ? 'blue.50' : 'gray.50'}
        pl="10px"
        cursor="pointer"
        onClick={e => {
          setExpanded(state => !state);
          if (onClick) onClick(e);
        }}
        height="30px"
        {...props}
      >
        {expanded ? <CaretDown /> : <CaretRight />}
        <RegularText>{label}</RegularText>
      </HStack>
      {expanded && children}
    </Flex>
  );
};
