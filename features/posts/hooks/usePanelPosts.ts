import React from 'react';
import { ƒPosts } from '../types';
import { µUsePanelPosts } from './types';

export const usePanelPosts = (
  params: µUsePanelPosts.Params
): µUsePanelPosts.Return => {
  const [activeDirectory, setActiveDirectory] = React.useState('');

  const categories = React.useMemo(
    () => ƒPosts.Utils.mapPostsToDirectory(params.posts),
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