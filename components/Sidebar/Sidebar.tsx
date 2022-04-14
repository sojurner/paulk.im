import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import {
  Flex,
  Tooltip,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { useResponsiveContext } from '@/features/responsive';

import { SettingsControl } from '@/features/settings';

import { SidebarTab } from '@/components/Tab';
import { Logo, IdeaIcon, IconWrapper } from '@/components/Icon';

import { µSidebar } from '.';
import { SettingsDarkMode } from '@/features/settings/SettingsDarkMode';

export const Sidebar: React.FC<µSidebar.Props> = props => {
  const router = useRouter();
  const [_] = router.asPath.split('/');
  const { mediaQueries } = useResponsiveContext();

  const bg = useColorModeValue('gray.100', 'gray.900');
  const borderColor = useColorModeValue('gray.300', 'gray.600');
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      flexDir="column"
      bg={bg}
      borderRight="1px solid"
      borderColor={borderColor}
      justifyContent="space-between"
      height="100%"
      {...props}
    >
      <Flex flexDir={{ sm: 'row', md: 'column' }} className="category-tabs">
        <NextLink href="/">
          <div>
            <Tooltip
              label="Home"
              placement="right"
              color="white"
              bg={colorMode === 'light' ? 'blue.900' : 'gray.600'}
              hasArrow
            >
              <SidebarTab
                fontSize={['1.4em', '2em']}
                isActive={router.asPath === '/'}
              >
                <IconWrapper isActive={router.asPath === '/'}>
                  <Logo />
                </IconWrapper>
              </SidebarTab>
            </Tooltip>
          </div>
        </NextLink>
        <NextLink href="/tils">
          <div>
            <Tooltip
              label="Today I Learned"
              placement="right"
              color="white"
              hasArrow
              bg={colorMode === 'light' ? 'blue.900' : 'gray.600'}
            >
              <SidebarTab
                fontSize={['1.4em', '2em']}
                isActive={router.asPath === '/tils'}
              >
                <IconWrapper isActive={router.asPath === '/tils'}>
                  <IdeaIcon />
                </IconWrapper>
              </SidebarTab>
            </Tooltip>
          </div>
        </NextLink>
      </Flex>
      <Flex flexDir={{ sm: 'row', md: 'column' }} className="tools-tabs">
        {!mediaQueries.state.isLargerThan500 && (
          <Flex
            onClick={toggleColorMode}
            cursor="pointer"
            alignItems={'center'}
            justifyContent="center"
            pos="relative"
          >
            <SettingsDarkMode enabled={colorMode === 'dark'} />
          </Flex>
        )}
        <Flex
          pos="relative"
          cursor="pointer"
          alignItems={'center'}
          justifyContent="center"
        >
          <SettingsControl />
        </Flex>
      </Flex>
    </Flex>
  );
};
