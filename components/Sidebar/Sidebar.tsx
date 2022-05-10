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

import { SidebarTab } from '@/components/Tab';
import { Logo, IdeaIcon, Pepe, IconWrapper } from '@/components/Icon';

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
                fontSize={['1.6em', '2em']}
                isActive={router.asPath === '/'}
                width={['50px', '100%']}
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
                width={['50px', '100%']}
              >
                <IconWrapper isActive={router.asPath === '/tils'}>
                  <IdeaIcon />
                </IconWrapper>
              </SidebarTab>
            </Tooltip>
          </div>
        </NextLink>
        <NextLink href="/about">
          <div>
            <Tooltip
              label="About Me"
              placement="right"
              color="white"
              hasArrow
              bg={colorMode === 'light' ? 'blue.900' : 'gray.600'}
            >
              <SidebarTab
                fontSize={['1.8em', '2.5em']}
                width={['50px', '100%']}
                isActive={router.asPath === '/about'}
              >
                <IconWrapper isActive={router.asPath === '/about'}>
                  <Pepe />
                </IconWrapper>
              </SidebarTab>
            </Tooltip>
          </div>
        </NextLink>
      </Flex>
      <Flex flexDir={{ sm: 'row', md: 'column' }} className="tools-tabs">
        {!mediaQueries.state.isLargerThan500 && (
          <SidebarTab
            width="50px"
            alignItems="center"
            justifyContent="center"
            onClick={toggleColorMode}
          >
            <SettingsDarkMode enabled={colorMode === 'dark'} />
          </SidebarTab>
        )}
        {/* <Flex
          cursor="pointer"
          alignItems={'center'}
          justifyContent="center"
          fontSize={['1.4em', '2em']}
        >
          <SettingsControl />
        </Flex> */}
      </Flex>
    </Flex>
  );
};
