import { Enums, Consts, Types } from '.';

export const initializeSettingsStorage = () => {
  localStorage.setItem(
    Consts.LS_SETTINGS_KEY,
    JSON.stringify(Consts.LS_SETTINGS_INIT_VAL)
  );
};

export const getSettingsStorage = (storageKey?: Enums.SettingsStorageKey) => {
  const settingsStorageExists = localStorage.getItem(Consts.LS_SETTINGS_KEY);
  if (!settingsStorageExists) {
    initializeSettingsStorage();
    return Consts.LS_SETTINGS_INIT_VAL;
  }

  const settingsStorage: Record<Enums.SettingsStorageKey, Types.SettingsLS> =
    JSON.parse(settingsStorageExists);

  if (!storageKey) return settingsStorage;

  return settingsStorage[storageKey];
};

export const updateSettingsStorage = (
  featureKey: Enums.SettingsStorageKey,
  updateVal: Types.SettingsLS
) => {
  const settingsStorage = getSettingsStorage();

  if (!settingsStorage) {
    initializeSettingsStorage();
    return;
  }

  localStorage.setItem(
    Consts.LS_SETTINGS_KEY,
    JSON.stringify({
      ...settingsStorage,
      [featureKey]: updateVal,
    })
  );
};
