import {
  Box,
  Flex,
  HStack,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import React from 'react';
import { useSettingsContext } from '@/features/settings';
import { SmallText } from '../Typography';

import { SoundCloudControl } from '@/features/soundCloud';
import { FavoritesControl } from '@/features/favorites';
import { µFooterbar } from './types';

export const Footerbar: React.FC<µFooterbar.Props> = props => {
  const { state } = useSettingsContext();
  const [activeControl, setActiveControl] = React.useState<
    µFooterbar.State['activeControl']
  >(µFooterbar.Enums.FeatureControl.NONE);

  const forwardOnSetActiveControl: µFooterbar.Methods['forwardOnSetActiveControl'] =
    control => () => {
      setActiveControl(control);
    };

  const onControlClose = forwardOnSetActiveControl(
    µFooterbar.Enums.FeatureControl.NONE
  );

  return (
    <Flex bg="gray.300" px="10" width="100vw" height="100%" {...props}>
      <HStack spacing="3">
        {state.soundCloud.enabled && (
          <SoundCloudControl
            isOpen={
              activeControl === µFooterbar.Enums.FeatureControl.SOUND_CLOUD
            }
            onOpen={forwardOnSetActiveControl(
              µFooterbar.Enums.FeatureControl.SOUND_CLOUD
            )}
            onClose={onControlClose}
          />
        )}
        {state.favorites.enabled && (
          <FavoritesControl
            isOpen={activeControl === µFooterbar.Enums.FeatureControl.FAVORITES}
            onOpen={forwardOnSetActiveControl(
              µFooterbar.Enums.FeatureControl.FAVORITES
            )}
            onClose={onControlClose}
          />
        )}
      </HStack>

      <HStack spacing="6"></HStack>
    </Flex>
  );
};
