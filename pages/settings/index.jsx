import { SettingsRoot, PanelSettings } from '@/features/settings';

import { Appbar } from '@/components/Appbar';

export default function SettingsPage() {
  return (
    <>
      <PanelSettings gridArea="panel" />
      <Appbar gridArea="appbar" />
      <SettingsRoot gridArea="body" />
    </>
  );
}
