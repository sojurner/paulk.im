import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { µUseExplorer } from '.';

export const useExplorer = (
  args: µUseExplorer.Types.Args
): µUseExplorer.Types.Return => {
  const router = useRouter();
  const [_, activeDirectory, activeFile] = router.asPath.split('/');

  const [explorer, setExplorer] = useState({
    memes: activeDirectory === 'memes',
    posts: activeDirectory === 'posts',
  });
  const [directoryPosts, setDirectoryPosts] =
    useState<µUseExplorer.Types.State['directoryPosts']>(null);

  const toggleRootDirectory: µUseExplorer.Types.Methods['toggleRootDirectory'] =
    key => {
      setExplorer(state => {
        return { ...state, [key]: !state[key] };
      });
    };

  const togglePostDirectory: µUseExplorer.Types.Methods['togglePostDirectory'] =
    key => {
      setDirectoryPosts(state => {
        if (!state) return state;
        return {
          ...state,
          [key]: { ...state[key], expanded: !state[key].expanded }!,
        };
      });
    };

  useEffect(() => {
    if (directoryPosts) return;
    if (!args.memes.length || !args.posts.length) return;

    setDirectoryPosts(
      µUseExplorer.Utils.mapPostsToCategoryRecord(args.posts, activeFile)
    );
  }, [args, directoryPosts]);

  const state = {
    activeDirectory,
    explorer,
    directoryPosts,
    activeFile,
  };
  const methods = {
    toggleRootDirectory,
    togglePostDirectory,
  };

  return { state, methods };
};
