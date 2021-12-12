import { Enums } from '.';
import { ColorMode } from '@chakra-ui/react';

export interface State {
  soundCloud: SettingsLS;
  openWeather: SettingsLS;
  favorites: SettingsLS;
  darkMode: SettingsLS;
}

export interface Methods {
  onSettingsUpdate: (key: Enums.SettingsStorageKey, update: SettingsLS) => void;
}

export interface Return {
  state: State;
  methods: Methods;
}

export interface SettingsLS {
  enabled: boolean;
  value?: string;
}

export type { ColorMode };
