import { useReducer } from 'react';

import { µUseCollapsible } from '.';

export const useCollapsible = (): µUseCollapsible.Types.Return => {
  const [collapsed, toggleCollapsed] = useReducer(state => !state, false);

  return { state: { collapsed }, methods: { toggleCollapsed } };
};
