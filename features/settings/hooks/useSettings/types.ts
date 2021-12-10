import * as Enums from './enums';

export interface State {
  soundCloud: SettingsLS;
  openWeather: SettingsLS;
  favorites: SettingsLS;
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
