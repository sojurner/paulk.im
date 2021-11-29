import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/layout';

import { SidebarTab } from '@/components/Tab';
import {
  LogoIcon,
  BlogIcon,
  MemeIcon,
  SettingsIcon,
  SearchIcon,
} from '@/components/Icon';

import { µSidebar } from '.';

export const Sidebar: React.FC<µSidebar.Props> = props => {
  const router = useRouter();
  const [_, root] = router.asPath.split('/');

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
              <LogoIcon isActive={!root} />
            </SidebarTab>
          </div>
        </NextLink>
        <NextLink href="/posts">
          <div>
            <SidebarTab fontSize={['1.4em', '2em']} isActive={root === 'posts'}>
              <BlogIcon isActive={root === 'posts'} />
            </SidebarTab>
          </div>
        </NextLink>
        <NextLink href="/memes">
          <div>
            <SidebarTab fontSize={['1.4em', '2em']} isActive={root === 'memes'}>
              <MemeIcon isActive={root === 'memes'} />
            </SidebarTab>
          </div>
        </NextLink>
      </Flex>
      <Flex flexDir={{ sm: 'row', md: 'column' }} className="tools-tabs">
        <NextLink href="/search">
          <div>
            <SidebarTab
              isActive={root === 'search'}
              fontSize={['1.4em', '2em']}
            >
              <SearchIcon isActive={root === 'search'} />
            </SidebarTab>
          </div>
        </NextLink>
        <NextLink href="/settings">
          <div>
            <SidebarTab
              isActive={root === 'settings'}
              fontSize={['1.4em', '2em']}
            >
              <SettingsIcon isActive={root === 'settings'} />
            </SidebarTab>
          </div>
        </NextLink>
      </Flex>
    </Flex>
  );
};
