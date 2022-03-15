import React from 'react';
import { useToast, useColorMode } from '@chakra-ui/react';
import { µUseSettings } from '.';

export const useSettings = (): µUseSettings.Return => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const [settings, setSettings] = React.useState<
    Record<µUseSettings.SettingsStorageKey, µUseSettings.SettingsLS>
  >({
    ...µUseSettings.LS_SETTINGS_INIT_VAL,
    [µUseSettings.SettingsStorageKey.DARK_MODE]: {
      enabled: colorMode === 'light',
      value: '',
    },
  });

  const onSettingsUpdate: µUseSettings.Methods['onSettingsUpdate'] = (
    key,
    updateVal
  ) => {
    const validatedStorage = validateSettingsStorage();

    if (!validatedStorage) return onError();

    if (key === µUseSettings.SettingsStorageKey.DARK_MODE) {
      toggleColorMode();
    }

    setSettings(STATE => {
      return {
        ...STATE,
        [key]: updateVal,
      };
    });

    µUseSettings.updateSettingsStorage(key, updateVal);
  };

  const validateSettingsStorage = (): null | Record<
    µUseSettings.SettingsStorageKey,
    µUseSettings.SettingsLS
  > => {
    const settingsStorage = µUseSettings.getSettingsStorage() as Record<
      µUseSettings.SettingsStorageKey,
      µUseSettings.SettingsLS
    >;

    const storageEntries = Object.entries(settingsStorage);
    const storageEnumValues = Object.values(µUseSettings.SettingsStorageKey);

    const valid = storageEntries.every(([KEY, VAL]) => {
      const validEnums = storageEnumValues.some(ENUM => ENUM === KEY);
      const validValues = 'enabled' in VAL && 'value' in VAL;

      return validEnums && validValues;
    });

    return valid ? settingsStorage : null;
  };

  const onError = () => {
    µUseSettings.initializeSettingsStorage();

    toast({
      title: 'Corrupted Data',
      description: 'Your settings have been reset',
      status: 'error',
      duration: 4000,
      isClosable: true,
    });
  };

  React.useEffect(() => {
    const validatedStorage = validateSettingsStorage();

    if (!validatedStorage) return onError();

    setSettings(validatedStorage);
  }, []);

  const state = {
    ...settings,
  };

  const methods = {
    onSettingsUpdate,
  };

  return { state, methods };
};
