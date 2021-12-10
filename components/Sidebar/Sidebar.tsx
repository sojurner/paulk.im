import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/layout';

import { SidebarTab } from '@/components/Tab';
import {
  Logo,
  IdeaIcon,
  MemeIcon,
  SettingsIcon,
  SearchIcon,
  IconWrapper,
} from '@/components/Icon';

import { µSidebar } from '.';
import { useSearchContext } from '@/features/search';
import { SettingsControl } from '@/features/settings';

export const Sidebar: React.FC<µSidebar.Types.Props> = props => {
  const router = useRouter();
  const [_, root] = router.asPath.split('/');

  const { searchToggle } = useSearchContext();

  return (
    <Flex
      flexDir="column"
      bg="whiteAlpha.800"
      borderRight="1px solid"
      borderColor="blackAlpha.100"
      justifyContent="space-between"
      height="100%"
      {...props}
    >
      <Flex flexDir={{ sm: 'row', md: 'column' }} className="category-tabs">
        <NextLink href="/">
          <div>
            <SidebarTab fontSize={['1.4em', '2em']} isActive={!root}>
              <IconWrapper isActive={!root}>
                <Logo />
              </IconWrapper>
            </SidebarTab>
          </div>
        </NextLink>
        <NextLink href="/posts">
          <div>
            <SidebarTab fontSize={['1.4em', '2em']} isActive={root === 'posts'}>
              <IconWrapper isActive={root === 'posts'}>
                <IdeaIcon />
              </IconWrapper>
            </SidebarTab>
          </div>
        </NextLink>
        <NextLink href="/memes">
          <div>
            <SidebarTab fontSize={['1.4em', '2em']} isActive={root === 'memes'}>
              <IconWrapper isActive={root === 'memes'}>
                <MemeIcon />
              </IconWrapper>
            </SidebarTab>
          </div>
        </NextLink>
      </Flex>
      <Flex flexDir={{ sm: 'row', md: 'column' }} className="tools-tabs">
        <SidebarTab
          onClick={searchToggle.methods.toggleSearch}
          fontSize={['1.4em', '2em']}
        >
          <SearchIcon isActive />
        </SidebarTab>
        <Flex pos="relative">
          <SettingsControl>
            <SidebarTab pos="relative" fontSize={['1.4em', '2em']}>
              <SettingsIcon />
            </SidebarTab>
          </SettingsControl>
        </Flex>
      </Flex>
    </Flex>
  );
};
