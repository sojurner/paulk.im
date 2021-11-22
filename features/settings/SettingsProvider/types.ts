import { Dispatch, SetStateAction } from 'react';
import { µSoundCloudControl } from '@/features/settings';

export namespace µSettingsProvider {
  export interface State {
    soundCloud: Models.SettingsLS;
    openWeather: Models.SettingsLS;
    favorites: Models.SettingsLS;
  }

  export interface Methods {
    onSettingsUpdate: (
      key: Enums.SettingsStorageKey,
      update: Models.SettingsLS
    ) => void;
  }

  export interface Return {
    state: State;
    methods: Methods;
  }

  export namespace Models {
    export interface SettingsLS {
      enabled: boolean;
      value?: string;
    }
  }

  export namespace Enums {
    export enum SettingsStorageKey {
      SOUND_CLOUD = 'soundCloud',
      OPEN_WEATHER = 'openWeather',
      FAVORITES = 'favorites',
    }
  }

  export class Constants {
    static LS_SETTINGS_KEY = 'pk-settings';

    static LS_SETTINGS_INIT_VAL: Record<
      Enums.SettingsStorageKey,
      Models.SettingsLS
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
  }

  export class Utils {
    static getSettingsStorage = (storageKey?: Enums.SettingsStorageKey) => {
      const settingsStorageExists = localStorage.getItem(
        Constants.LS_SETTINGS_KEY
      );
      if (!settingsStorageExists) {
        Utils.initializeSettingsStorage();
        return Constants.LS_SETTINGS_INIT_VAL;
      }

      const settingsStorage: Record<
        Enums.SettingsStorageKey,
        Models.SettingsLS
      > = JSON.parse(settingsStorageExists);

      if (!storageKey) return settingsStorage;

      return settingsStorage[storageKey];
    };

    static updateSettingsStorage = (
      featureKey: Enums.SettingsStorageKey,
      updateVal: Models.SettingsLS
    ) => {
      const settingsStorage = Utils.getSettingsStorage();

      if (!settingsStorage) {
        Utils.initializeSettingsStorage();
        return;
      }

      localStorage.setItem(
        Constants.LS_SETTINGS_KEY,
        JSON.stringify({
          ...settingsStorage,
          [featureKey]: updateVal,
        })
      );
    };

    static initializeSettingsStorage = () => {
      localStorage.setItem(
        Constants.LS_SETTINGS_KEY,
        JSON.stringify(Constants.LS_SETTINGS_INIT_VAL)
      );
    };
  }
}
