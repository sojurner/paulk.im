import { useState } from 'react';
import { µUsePanelMemes } from '.';

export const usePanelMemes = (
  args: µUsePanelMemes.Types.Args
): µUsePanelMemes.Types.Return => {
  const [activeMeme, setActiveMeme] = useState(args.activeMeme);

  return { state: { activeMeme }, methods: { setActiveMeme } };
};
