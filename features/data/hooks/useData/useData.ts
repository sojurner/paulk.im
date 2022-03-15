import { useState } from 'react';
import { µUseData } from '.';

export const useData = (): µUseData.Return => {
  const [initialized, setInitialized] = useState(false);
  const [posts, setPosts] = useState<µUseData.State['posts']>([]);
  const [memes, setMemes] = useState<µUseData.State['memes']>([]);

  const fetchData: µUseData.Methods['fetchData'] = async () => {
    const response = await fetch('/api/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) return;

    const { memes, posts } = await response.json();

    setMemes(memes);
    setPosts(posts);
    setInitialized(true);
  };

  const state = {
    initialized,
    posts,
    memes,
  };

  const methods = {
    fetchData,
  };

  return { state, methods };
};
