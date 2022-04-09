import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { SettingsControl } from '@/features/settings';

import { SidebarTab } from '@/components/Tab';
import {
  Logo,
  IdeaIcon,
  IconWrapper,
} from '@/components/Icon';

import { µSidebar } from '.';

export const Sidebar: React.FC<µSidebar.Props> = props => {
  const router = useRouter();
  const [_] = router.asPath.split('/');

  const bg = useColorModeValue('gray.100', 'gray.900');
  const borderColor = useColorModeValue('gray.300', 'gray.600');

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
            <SidebarTab
              fontSize={['1.4em', '2em']}
              isActive={router.asPath === '/'}
            >
              <IconWrapper isActive={router.asPath === '/'}>
                <Logo />
              </IconWrapper>
            </SidebarTab>
          </div>
        </NextLink>
        <NextLink href="/tils">
          <div>
            <SidebarTab
              fontSize={['1.4em', '2em']}
              isActive={router.asPath === '/tils'}
            >
              <IconWrapper isActive={router.asPath === '/tils'}>
                <IdeaIcon />
              </IconWrapper>
            </SidebarTab>
          </div>
        </NextLink>
      </Flex>
      <Flex flexDir={{ sm: 'row', md: 'column' }} className="tools-tabs">
        <Flex pos="relative">
          <SettingsControl />
        </Flex>
      </Flex>
    </Flex>
  );
};
