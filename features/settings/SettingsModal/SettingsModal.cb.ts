import { ChangeEventHandler } from 'react';
import { ModalProps } from '@chakra-ui/react';

import { µUseSettings } from '@/features/settings';

export interface Props extends Omit<ModalProps, 'children'> {}

export interface Methods {
  forwardOnSettingsChange: (
    settingType: µUseSettings.SettingsStorageKey
  ) => ChangeEventHandler<HTMLInputElement>;
}
