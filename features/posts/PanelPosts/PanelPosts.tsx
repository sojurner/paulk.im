import React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Flex } from '@chakra-ui/react';

import { Directory } from '@/components/Directory';
import { File, FileList } from '@/components/File';
import { Panel } from '@/components/Panel/Panel';

import { µPanelPosts } from './types';
import { usePanelPosts } from '@/features/posts/hooks';

export const PanelPosts: React.FC<µPanelPosts.Props> = ({ posts }) => {
  const { query } = useRouter();
  const panelPosts = usePanelPosts({ posts });

  return (
    <Panel>
      <Flex flexDir="column" width="100%" position="relative">
        {Object.entries(panelPosts.state.categories).map(([CAT, POSTS]) => {
          return (
            <Directory
              onClick={() => panelPosts.methods.onDirectoryClick(CAT)}
              initialExpanded={
                !!(query?.slug && POSTS.some(POST => POST.slug === query?.slug))
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
