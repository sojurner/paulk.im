import React from 'react';
import NextLink from 'next/link';
import { Flex } from '@chakra-ui/react';

import { useDataContext } from '@/features/data';
import { useExplorerContext } from '@/features/explorer';

import { Panel } from '@/components/Panel';
import { Directory } from '@/components/Directory';
import { FileList, File } from '@/components/File';
import { IdeaIcon, MemeIcon } from '@/components/Icon';
import { MidText } from '@/components/Typography';

import { µExplorerPanel } from '.';

export const ExplorerPanel: React.FC<µExplorerPanel.Types.Props> = props => {
  const { data } = useDataContext();
  const { explorer } = useExplorerContext();

  return (
    <Panel zIndex="docked" overflow="hidden" pos="relative" {...props}>
      <Flex flexDir="column" width="100%" position="relative">
        <MidText fontFamily="heading" fontWeight="bold" p="2">
          Explorer
        </MidText>
        <Directory
          onClick={() => explorer.methods.toggleRootDirectory('posts')}
          initialExpanded={explorer.state.explorer.posts}
          content={['posts']}
        >
          {Object.entries(explorer.state.directoryPosts || {}).map(
            ([CAT, POSTS]) => {
              return (
                <Directory
                  onClick={() => explorer.methods.togglePostDirectory(CAT)}
                  initialExpanded={POSTS.expanded}
                  key={CAT}
                  content={[CAT]}
                  pl="20px"
                >
                  <FileList>
                    {POSTS.files.map(POST => {
                      return (
                        <NextLink key={POST.slug} href={`/posts/${POST.slug}`}>
                          <div>
                            <File
                              pl="36px"
                              content={[POST.title]}
                              isActive={explorer.state.activeFile === POST.slug}
                            >
                              <IdeaIcon />
                            </File>
                          </div>
                        </NextLink>
                      );
                    })}
                  </FileList>
                </Directory>
              );
            }
          )}
        </Directory>
        <Directory
          onClick={() => explorer.methods.toggleRootDirectory('memes')}
          initialExpanded={explorer.state.explorer.posts}
          content={['memes']}
        >
          <FileList>
            {data.state.memes.map(MEME => {
              return (
                <NextLink key={MEME.slug} href={`/memes/${MEME.slug}`}>
                  <div>
                    <File
                      pl="27px"
                      isActive={explorer.state.activeFile === MEME.slug}
                      content={[MEME.title]}
                    >
                      <MemeIcon />
                    </File>
                  </div>
                </NextLink>
              );
            })}
          </FileList>
        </Directory>
      </Flex>
    </Panel>
  );
};
