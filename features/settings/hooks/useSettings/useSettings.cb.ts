import { ColorMode } from '@chakra-ui/react';

// ================================================================================
// Consts
// ================================================================================
export const LS_SETTINGS_KEY = 'pk-settings';

export enum SettingsStorageKey {
  SOUND_CLOUD = 'soundCloud',
  OPEN_WEATHER = 'openWeather',
  FAVORITES = 'favorites',
  DARK_MODE = 'darkMode',
}

export const LS_SETTINGS_INIT_VAL: Record<SettingsStorageKey, SettingsLS> = {
  [SettingsStorageKey.SOUND_CLOUD]: {
    enabled: false,
    value: '',
  },
  [SettingsStorageKey.OPEN_WEATHER]: {
    enabled: false,
    value: '',
  },
  [SettingsStorageKey.FAVORITES]: {
    enabled: false,
    value: '',
  },
  [SettingsStorageKey.DARK_MODE]: {
    enabled: false,
    value: '',
  },
};

// ================================================================================
// Types
// ================================================================================
export interface State {
  soundCloud: SettingsLS;
  openWeather: SettingsLS;
  favorites: SettingsLS;
  darkMode: SettingsLS;
}

export interface Methods {
  onSettingsUpdate: (key: SettingsStorageKey, update: SettingsLS) => void;
}

export interface Return {
  state: State;
  methods: Methods;
}

export interface SettingsLS {
  enabled: boolean;
  value?: string;
}

// ================================================================================
// Utils
// ================================================================================
export const initializeSettingsStorage = () => {
  localStorage.setItem(LS_SETTINGS_KEY, JSON.stringify(LS_SETTINGS_INIT_VAL));
};

export const getSettingsStorage = (storageKey?: SettingsStorageKey) => {
  // check storage
  const settingsStorageExists = localStorage.getItem(LS_SETTINGS_KEY);
  if (!settingsStorageExists) {
    initializeSettingsStorage();
    return LS_SETTINGS_INIT_VAL;
  }

  // check parsed data
  const settingsStorage: Record<SettingsStorageKey, SettingsLS> = JSON.parse(
    settingsStorageExists
  );
  if (!storageKey) return settingsStorage;

  return settingsStorage[storageKey];
};

export const updateSettingsStorage = (
  featureKey: SettingsStorageKey,
  updateVal: SettingsLS
) => {
  // check settings storage
  const settingsStorage = getSettingsStorage();
  if (!settingsStorage) {
    return initializeSettingsStorage();
  }

  // update ls
  localStorage.setItem(
    LS_SETTINGS_KEY,
    JSON.stringify({
      ...settingsStorage,
      [featureKey]: updateVal,
    })
  );
};

export type { ColorMode };
