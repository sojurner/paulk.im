import { useEffect, useState } from 'react';
import { µUsePanelMemes } from './types';

export const usePanelMemes = (
  params: µUsePanelMemes.Params
): µUsePanelMemes.Return => {
  const [activeMeme, setActiveMeme] = useState(params.activeMeme);

  return { state: { activeMeme }, methods: { setActiveMeme } };
};
