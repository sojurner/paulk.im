import React from 'react';

import { createContextProvider } from '@/lib/core';
import { useSettings, µUseSettings } from '@/features/settings';

export const [SettingsContextProvider, useSettingsContext] =
  createContextProvider<µUseSettings.Return>({
    name: 'SettingsContext',
    errorMessage: 'context must be wrapped in Feature Provider',
  });

export const SettingsProvider: React.FC = props => {
  const settings = useSettings();

  return <SettingsContextProvider value={settings} {...props} />;
};
