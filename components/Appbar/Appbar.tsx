import React from 'react';
import NextLink from 'next/link';
import { Flex, Box } from '@chakra-ui/react';

import { AppbarTab } from '@/components/Tab';
import { useRouterHistory } from '@/features/routerHistory/hooks/useRouterHistory';
import { BlogIcon, MemeIcon, LogoIcon } from '@/components/Icon';
import { XIcon } from '@/components/Icon';

import { µAppbar } from '.';

export const Appbar: React.FC<µAppbar.Props> = props => {
  const routerHistory = useRouterHistory({});

  return (
    <Flex
      overflow="scroll"
      bg="gray.200"
      flexDir="row"
      justifyContent="flex-start"
      h={'100%'}
      zIndex="docked"
      {...props}
    >
      {routerHistory.state.routeHistory.map(ROUTE => {
        const [_, type, file] = ROUTE.path.split('/');

        let Icon;

        if (!file) {
          Icon = LogoIcon;
        } else if (type === 'memes') {
          Icon = MemeIcon;
        } else {
          Icon = BlogIcon;
        }

        return (
          <Flex pos="relative" key={ROUTE.path}>
            <Box
              fontSize="20px"
              position="absolute"
              left="10px"
              top="50%"
              transform="translate(0,-50%)"
            >
              <Icon isActive={ROUTE.path === routerHistory.state.currentPath} />
            </Box>
            <NextLink href={ROUTE.path}>
              <div style={{ display: 'flex' }}>
                <AppbarTab
                  isActive={ROUTE.path === routerHistory.state.currentPath}
                >
                  {ROUTE.name}
                </AppbarTab>
              </div>
            </NextLink>
            <Box
              color="gray.400"
              fontSize="20px"
              position="absolute"
              right="10px"
              top="50%"
              transform="translate(0,-50%)"
              cursor="pointer"
              pointerEvents={
                routerHistory.state.routeHistory.length === 1
                  ? 'none'
                  : 'initial'
              }
              _hover={{
                color: 'gray.500',
              }}
              onClick={() => {
                routerHistory.methods.onRemoveRoute(ROUTE.path);
              }}
            >
              <XIcon />
            </Box>
          </Flex>
        );
      })}
    </Flex>
  );
};
