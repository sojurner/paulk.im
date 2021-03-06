import React from 'react';

import { SettingsModal } from '@/features/settings/';

import { SidebarTab } from '@/components/Tab';
import { SettingsIcon } from '@/components/Icon';

import { µSettingsControl } from '.';

export const SettingsControl: React.FC<µSettingsControl.Props> = () => {
  const [showSettings, toggleShowSettings] = React.useReducer(
    state => !state,
    false
  );

  return (
    <>
      <SidebarTab onClick={toggleShowSettings}>
        <SettingsIcon />
      </SidebarTab>
      <SettingsModal
        size="lg"
        isOpen={showSettings}
        onClose={toggleShowSettings}
      />
    </>
  );
};
