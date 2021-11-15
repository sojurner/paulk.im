import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { RegularText } from '../Typography';
import { µDirectory } from './types';

import CaretDown from '@/assets/images/CaretDown.svg';
import CaretRight from '@/assets/images/CaretRight.svg';

export const Directory: React.FC<µDirectory.Props> = ({
  children,
  isActive,
  initialExpanded,
  content,
  onClick,
  ...props
}) => {
  const [expanded, setExpanded] = React.useState(initialExpanded || false);
  const [label] = content;

  return (
    <Flex flexDir="column" borderBottom="1px solid" borderColor="gray.200">
      <HStack
        bg={isActive ? 'blue.50' : 'initial'}
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
