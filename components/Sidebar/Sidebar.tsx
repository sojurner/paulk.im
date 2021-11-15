import React from 'react';
import { Flex } from '@chakra-ui/layout';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import { SidebarTab } from '../Tab';
import { µSidebar } from './types';

export const Sidebar: React.FC<µSidebar.Props> = props => {
  const router = useRouter();
  const [_, root, slug] = router.asPath.split('/');
  return (
    <Flex
      flexDir="column"
      width="80px"
      pos="fixed"
      left="0"
      bg="gray.200"
      top="0"
      height="calc(100vh - 30px)"
      justifyContent="space-between"
      {...props}
    >
      <Flex flexDir="column">
        <NextLink href="/posts">
          <SidebarTab isActive={root === 'posts'}>Blog</SidebarTab>
        </NextLink>
        <NextLink href="/memes">
          <SidebarTab isActive={root === 'memes'}>Memes</SidebarTab>
        </NextLink>
        <NextLink href="/about">
          <SidebarTab isActive={root === 'about'}>about</SidebarTab>
        </NextLink>
      </Flex>
      <Flex flexDir="column">
        <SidebarTab>settings</SidebarTab>
      </Flex>
    </Flex>
  );
};
