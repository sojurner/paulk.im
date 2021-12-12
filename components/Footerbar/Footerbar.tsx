import React from 'react';
import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';

import { useSettingsContext } from '@/features/settings';
import { SoundCloudControl } from '@/features/soundCloud';
import { FavoritesControl } from '@/features/favorites';

import { µFooterbar } from '.';

export const Footerbar: React.FC<µFooterbar.Types.Props> = props => {
  const { state } = useSettingsContext();
  const bg = useColorModeValue('gray.50', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  const [activeControl, setActiveControl] = React.useState<
    µFooterbar.Types.State['activeControl']
  >(µFooterbar.Enums.FeatureControl.NONE);

  const forwardOnSetActiveControl: µFooterbar.Types.Methods['forwardOnSetActiveControl'] =
    control => () => {
      setActiveControl(control);
    };

  const onControlClose = forwardOnSetActiveControl(
    µFooterbar.Enums.FeatureControl.NONE
  );

  return (
    <Flex
      bg={bg}
      borderTop="1px solid"
      borderColor={borderColor}
      px="10"
      width="100%"
      height="100%"
      {...props}
    >
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
    </Flex>
  );
};
