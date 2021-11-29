import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex, Box } from '@chakra-ui/react';

import { Directory } from '@/components/Directory';
import { File, FileList } from '@/components/File';
import { Panel } from '@/components/Panel/Panel';

import { µPanelPosts } from '.';
import { usePanelPosts } from '@/features/posts/hooks';
import { useResponsiveContext } from '@/features/responsive';

import { CaretLeft, CaretRight } from '@/assets/icons';

export const PanelPosts: React.FC<µPanelPosts.Props> = ({
  posts,
  ...props
}) => {
  const { query } = useRouter();
  const panelPosts = usePanelPosts({ posts });
  const { collapsible } = useResponsiveContext();

  return (
    <Panel pos="relative" {...props}>
      <Flex
        position="absolute"
        fontSize="25px"
        height="35px"
        right="-26px"
        alignItems="center"
        zIndex="10"
        top="60px"
        background="white"
        cursor="pointer"
        borderBottomRightRadius="10px"
        borderTopRightRadius="10px"
        border="1px solid"
        borderColor="gray.300"
        borderLeft="0"
        boxShadow="0 2px 5px rgba(0,0,0,0.1)"
        onClick={collapsible.methods.toggleCollapsed}
      >
        {collapsible.state.collapsed ? <CaretRight /> : <CaretLeft />}
      </Flex>
      <Flex flexDir="column" width="100%" position="relative">
        {!collapsible.state.collapsed &&
          Object.entries(panelPosts.state.categories).map(([CAT, POSTS]) => {
            return (
              <Directory
                onClick={() => panelPosts.methods.onDirectoryClick(CAT)}
                initialExpanded={
                  !!(
                    query?.slug && POSTS.some(POST => POST.slug === query?.slug)
                  )
                }
                isActive={panelPosts.state.activeDirectory === CAT}
                key={CAT}
                content={[CAT]}
              >
                <FileList>
                  {POSTS.map(POST => (
                    <NextLink key={POST.slug} href={`/posts/${POST.slug}`}>
                      <File
                        onClick={() => panelPosts.methods.onDirectoryClick('')}
                        isActive={
                          !panelPosts.state.activeDirectory &&
                          query?.slug === POST.slug
                        }
                        isCurrent={
                          !!panelPosts.state.activeDirectory &&
                          query?.slug === POST.slug
                        }
                        content={[POST.title]}
                      />
                    </NextLink>
                  ))}
                </FileList>
              </Directory>
            );
          })}
      </Flex>
    </Panel>
  );
};
