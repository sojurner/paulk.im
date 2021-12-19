import React from 'react';
import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';

import { useSettingsContext } from '@/features/settings';
import { SoundCloudControl } from '@/features/soundCloud';
import { FavoritesControl } from '@/features/favorites';

import { MidText } from '../Typography';

import { µFooterbar } from '.';

export const Footerbar: React.FC<µFooterbar.Types.Props> = props => {
  const { state } = useSettingsContext();

  const bg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const iconColor = useColorModeValue('blue.900', 'white');

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

  const handleLinkClick: µFooterbar.Types.Methods['handleContactItemClick'] =
    React.useCallback(contact => {
      if (contact.type === µFooterbar.Enums.LinkType.EMAIL) {
        window.location.href = contact.link;
      } else {
        window.open(contact.link, '_blank');
      }
    }, []);

  return (
    <Flex
      bg={bg}
      borderTop="1px solid"
      borderColor={borderColor}
      px="12"
      width="100%"
      height="100%"
      {...props}
    >
      <HStack spacing="5">
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
      <Flex alignItems="center" mx="auto">
        <MidText>© 2022 Paul Kim</MidText>
      </Flex>
      <HStack spacing="7">
        {µFooterbar.Consts.contactLinks.map(ELE => {
          return (
            <Flex
              color={iconColor}
              cursor="pointer"
              _hover={{
                filter: "invert(.5)"
              }}
              onClick={handleLinkClick.bind(null, ELE)}
              fontSize="1.3em"
              key={ELE.name}
            >
              <ELE.Icon />
            </Flex>
          );
        })}
      </HStack>
    </Flex>
  );
};
