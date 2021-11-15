import React from 'react';
import NextLink from 'next/link';
import { Flex } from '@chakra-ui/react';

import { AppbarTab } from '@/components/Tab';
import { µAppbar } from './types';
import { useRouterHistory } from '@/features/routerHistory/hooks/useRouterHistory';
import { RegularText } from '../Typography';

export const Appbar: React.FC<µAppbar.Props> = props => {
  const routerHistory = useRouterHistory({});

  return (
    <Flex
      bg="gray.200"
      flexDir="row"
      justifyContent="flex-start"
      h={'100%'}
      zIndex="docked"
      width={`calc(100vw - 400px)`}
      {...props}
    >
      {routerHistory.state.routeHistory.map(ROUTE => {
        return (
          <Flex pos="relative" key={ROUTE.path}>
            <NextLink href={ROUTE.path}>
              <AppbarTab
                isActive={ROUTE.path === routerHistory.state.currentPath}
              >
                {ROUTE.name}
              </AppbarTab>
            </NextLink>
            <RegularText
              color="gray.400"
              fontSize="20px"
              position="absolute"
              right="10px"
              top="50%"
              transform="translate(0,-50%)"
              cursor="pointer"
              _hover={{
                color: 'gray.500'
              }}
              onClick={() => {
                routerHistory.methods.onRemoveRoute(ROUTE.path);
              }}
            >
              x
            </RegularText>
          </Flex>
        );
      })}
    </Flex>
  );
};
