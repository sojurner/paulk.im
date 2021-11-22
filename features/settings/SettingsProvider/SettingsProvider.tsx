import React from 'react';
import { useToast } from '@chakra-ui/react';
import { createContextProvider } from '@/lib/createContextProvider';
import { µSettingsProvider } from './types';

export const [SettingsContextProvider, useSettingsContext] =
  createContextProvider<µSettingsProvider.Return>({
    name: 'SettingsContext',
    errorMessage: 'context must be wrapped in Feature Provider',
  });

export const SettingsProvider: React.FC = props => {
  const toast = useToast();

  const [state, setState] = React.useState(
    µSettingsProvider.Constants.LS_SETTINGS_INIT_VAL
  );

  const onSettingsUpdate: µSettingsProvider.Methods['onSettingsUpdate'] = (
    key,
    updateVal
  ) => {
    const validatedStorage = validateSettingsStorage();

    if (!validatedStorage) return onError();

    setState(STATE => {
      return {
        ...STATE,
        [key]: updateVal,
      };
    });

    µSettingsProvider.Utils.updateSettingsStorage(key, updateVal);
  };

  const validateSettingsStorage = (): null | Record<
    µSettingsProvider.Enums.SettingsStorageKey,
    µSettingsProvider.Models.SettingsLS
  > => {
    const settingsStorage =
      µSettingsProvider.Utils.getSettingsStorage() as Record<
        µSettingsProvider.Enums.SettingsStorageKey,
        µSettingsProvider.Models.SettingsLS
      >;

    const storageEntries = Object.entries(settingsStorage);
    const storageEnumValues = Object.values(
      µSettingsProvider.Enums.SettingsStorageKey
    );

    const valid = storageEntries.every(([KEY, VAL]) => {
      const validEnums = storageEnumValues.some(ENUM => ENUM === KEY);
      const validValues = 'enabled' in VAL && 'value' in VAL;

      return validEnums && validValues;
    });

    return valid ? settingsStorage : null;
  };

  const onError = () => {
    µSettingsProvider.Utils.initializeSettingsStorage();

    toast({
      title: 'Corrupted Data',
      description: 'Your settings have been reinitialized',
      status: 'error',
      duration: 4000,
      isClosable: true,
    });
  };

  React.useEffect(() => {
    const validatedStorage = validateSettingsStorage();

    if (!validatedStorage) return onError();

    setState(validatedStorage);
  }, []);

  const methods = { onSettingsUpdate };

  return <SettingsContextProvider value={{ state, methods }} {...props} />;
};
