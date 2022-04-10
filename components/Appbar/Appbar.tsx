import React from 'react';
import NextLink from 'next/link';
import { Flex, Box, useColorModeValue, useColorMode } from '@chakra-ui/react';

import { useRouterHistory } from '@/features/routerHistory';

import { AppbarTab } from '@/components/Tab';
import { IdeaIcon, MemeIcon, Logo, X, IconWrapper } from '@/components/Icon';

import { µAppbar } from '.';
import { useResponsiveContext } from '@/features/responsive';
import { SettingsDarkMode } from '@/features/settings/SettingsDarkMode';

export const Appbar: React.FC<µAppbar.Props> = props => {
  const bottomBdrColor = useColorModeValue('gray.200', 'gray.700');
  const activeTabBg = useColorModeValue('white', 'gray.800');
  const iconColor = useColorModeValue('black', 'white');
  const { colorMode, toggleColorMode } = useColorMode();
  const routerHistory = useRouterHistory({});

  return (
    <Flex
      bg={useColorModeValue('gray.100', 'gray.900')}
      flexDir="row"
      justifyContent="flex-start"
      width="100%"
      zIndex="docked"
      pos="relative"
      overflow="hidden"
      marginBottom="-1px"
      _before={{
        content: "''",
        pos: 'absolute',
        width: '100%',
        height: '1px',
        borderBottom: '1px',
        borderBottomColor: bottomBdrColor,
        bottom: 0,
        zIndex: 1,
      }}
      {...props}
    >
      <Flex
        width="50px"
        onClick={toggleColorMode}
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
        borderRight="1px solid"
        borderRightColor={bottomBdrColor}
      >
        <SettingsDarkMode enabled={colorMode === 'dark'} />
      </Flex>
      <Flex maxWidth="calc(100% - 50px)" overflow="auto hidden">
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
            <Flex
              pos="relative"
              key={ROUTE.path}
              _after={{
                content: "''",
                position: 'absolute',
                bottom: '0px',
                borderBottom: '1px solid',
                borderBottomColor:
                  ROUTE.path === routerHistory.state.currentPath
                    ? activeTabBg
                    : bottomBdrColor,
                width: '99%',
                height: '1px',
                left: '1px',
                zIndex: 1,
              }}
            >
              <NextLink href={ROUTE.path}>
                <div style={{ cursor: 'pointer', display: 'flex' }}>
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
