import React from 'react';
import { µPosts } from '@/features/posts';
import { µUsePanelPosts } from '.';

export const usePanelPosts = (
  params: µUsePanelPosts.Params
): µUsePanelPosts.Return => {
  const [activeDirectory, setActiveDirectory] = React.useState('');

  const categories = React.useMemo(
    () => µPosts.Utils.mapPostsToDirectory(params.posts),
    [params.posts.length]
  );

  const onDirectoryClick: µUsePanelPosts.Methods['onDirectoryClick'] = key => {
    if (key === activeDirectory) return;
    setActiveDirectory(key);
  };

  return {
    state: { activeDirectory, categories },
    methods: { onDirectoryClick },
  };
};
