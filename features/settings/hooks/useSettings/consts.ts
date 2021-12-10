import * as Enums from './enums';
import * as Types from './types';

export const LS_SETTINGS_KEY = 'pk-settings';

export const LS_SETTINGS_INIT_VAL: Record<
  Enums.SettingsStorageKey,
  Types.SettingsLS
> = {
  [Enums.SettingsStorageKey.SOUND_CLOUD]: {
    enabled: false,
    value: '',
  },
  [Enums.SettingsStorageKey.OPEN_WEATHER]: {
    enabled: false,
    value: '',
  },
  [Enums.SettingsStorageKey.FAVORITES]: {
    enabled: false,
    value: '',
  },
};
