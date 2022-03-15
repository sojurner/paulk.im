import { useReducer } from 'react';

import { µUseSearchToggle } from '.';

export const useSearchToggle = (): µUseSearchToggle.Return => {
  const [showSearch, toggleSearch] = useReducer(state => !state, false);

  const state = { showSearch };
  const methods = { toggleSearch };

  return { state, methods };
};
