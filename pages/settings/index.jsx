import { SettingsRoot, PanelSettings } from '@/features/settings';

import { Appbar } from '@/components/Appbar';

export default function SettingsPage() {
  return (
    <>
      <Appbar gridArea="panel / panel / appbar / appbar" />
      <SettingsRoot gridArea="body / panel / body / body" />
    </>
  );
}
