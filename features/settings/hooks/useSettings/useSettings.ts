import React from 'react';
import { useToast, useColorMode } from '@chakra-ui/react';
import { µUseSettings } from '.';

export const useSettings = (): µUseSettings.Types.Return => {
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const [settings, setSettings] = React.useState(
    µUseSettings.Consts.LS_SETTINGS_INIT_VAL
  );

  const onSettingsUpdate: µUseSettings.Types.Methods['onSettingsUpdate'] = (
    key,
    updateVal
  ) => {
    const validatedStorage = validateSettingsStorage();

    if (!validatedStorage) return onError();

    setSettings(STATE => {
      return {
        ...STATE,
        [key]: updateVal,
      };
    });

    if (key === µUseSettings.Enums.SettingsStorageKey.DARK_MODE) {
      toggleColorMode();
    }
    
    µUseSettings.Utils.updateSettingsStorage(key, updateVal);
  };

  const validateSettingsStorage = (): null | Record<
    µUseSettings.Enums.SettingsStorageKey,
    µUseSettings.Types.SettingsLS
  > => {
    const settingsStorage = µUseSettings.Utils.getSettingsStorage() as Record<
      µUseSettings.Enums.SettingsStorageKey,
      µUseSettings.Types.SettingsLS
    >;

    const storageEntries = Object.entries(settingsStorage);
    const storageEnumValues = Object.values(
      µUseSettings.Enums.SettingsStorageKey
    );

    const valid = storageEntries.every(([KEY, VAL]) => {
      const validEnums = storageEnumValues.some(ENUM => ENUM === KEY);
      const validValues = 'enabled' in VAL && 'value' in VAL;

      return validEnums && validValues;
    });

    return valid ? settingsStorage : null;
  };

  const onError = () => {
    µUseSettings.Utils.initializeSettingsStorage();

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
    if (validatedStorage.darkMode && colorMode === 'light') {
      toggleColorMode();
    }

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
