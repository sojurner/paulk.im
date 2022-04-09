import { useState } from 'react';
import { µUseData } from '.';

export const useData = () => {
  const [initialized, setInitialized] = useState(false);
  const [tags, setTags] = useState<µUseData.State['tils']>([]);

  const fetchData: µUseData.Methods['fetchData'] = async () => {
    const response = await fetch('/api/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response?.ok) return;
    const jsonResult = await response.json();

    setTags(jsonResult.tags);
    setInitialized(true);
  };

  const state = {
    initialized,
    tags,
  };

  const methods = {
    fetchData,
  };

  return { state, methods };
};
