import React from 'react';
import NextLink from 'next/link';
import { Flex, Box } from '@chakra-ui/react';

import { useRouterHistory } from '@/features/routerHistory';

import { AppbarTab } from '@/components/Tab';
import {
  IdeaIcon,
  MemeIcon,
  Logo,
  X,
  CaretLeft,
  CaretRight,
  IconWrapper,
} from '@/components/Icon';

import { µAppbar } from '.';
import { useResponsiveContext } from '@/features/responsive';

export const Appbar: React.FC<µAppbar.Types.Props> = props => {
  const routerHistory = useRouterHistory({});
  const { collapsible } = useResponsiveContext();

  return (
    <Flex
      bg="gray.100"
      flexDir="row"
      justifyContent="flex-start"
      h={'100%'}
      width="100%"
      zIndex="docked"
      pos="relative"
      overflow="hidden"
      {...props}
    >
      <Flex
        width="40px"
        onClick={collapsible.methods.toggleCollapsed}
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        _hover={{
          background: 'blackAlpha.50',
        }}
      >
        {collapsible.state.collapsed ? <CaretRight /> : <CaretLeft />}
      </Flex>
      <Flex maxWidth="calc(100% - 40px)" overflowX="auto">
        {routerHistory.state.routeHistory.map(ROUTE => {
          const [_, type, file] = ROUTE.path.split('/');

          let Icon;

          if (!file) {
            Icon = Logo;
          } else if (type === 'memes') {
            Icon = MemeIcon;
          } else {
            Icon = IdeaIcon;
          }

          return (
            <Flex pos="relative" key={ROUTE.path}>
              <IconWrapper
                fontSize="20px"
                position="absolute"
                left="10px"
                top="50%"
                transform="translate(0,-50%)"
                isActive={ROUTE.path === routerHistory.state.currentPath}
              >
                <Icon />
              </IconWrapper>
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
                <X />
              </Box>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};
