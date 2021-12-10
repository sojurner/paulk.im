import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { RegularText } from '../Typography';

import { CaretDown, CaretRight } from '@/components/Icon';

import { µDirectory } from '.';

export const Directory: React.FC<µDirectory.Types.Props> = ({
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
        bg="gray.50"
        pos="relative"
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
