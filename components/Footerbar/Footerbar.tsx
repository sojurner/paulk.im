import React from 'react';
import { Flex, HStack, useColorModeValue } from '@chakra-ui/react';

import { useSettingsContext } from '@/features/settings';
import { SoundCloudControl } from '@/features/soundCloud';

import { MidText } from '../Typography';

import { µFooterbar } from '.';

export const Footerbar: React.FC<µFooterbar.Props> = props => {
  const { state } = useSettingsContext();

  const bg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const iconColor = useColorModeValue('blue.900', 'white');

  const [activeControl, setActiveControl] = React.useState<
    µFooterbar.State['activeControl']
  >(µFooterbar.FeatureControl.NONE);

  const forwardOnSetActiveControl: µFooterbar.Methods['forwardOnSetActiveControl'] =
    control => () => {
      setActiveControl(control);
    };

  const onControlClose = forwardOnSetActiveControl(
    µFooterbar.FeatureControl.NONE
  );

  const handleLinkClick: µFooterbar.Methods['handleContactItemClick'] =
    React.useCallback(contact => {
      if (contact.type === µFooterbar.LinkType.EMAIL) {
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
      px={['5', '10']}
      width="100%"
      height="100%"
      {...props}
    >
      <HStack spacing="5">
        {state.soundCloud.enabled && (
          <SoundCloudControl
            isOpen={activeControl === µFooterbar.FeatureControl.SOUND_CLOUD}
            onOpen={forwardOnSetActiveControl(
              µFooterbar.FeatureControl.SOUND_CLOUD
            )}
            onClose={onControlClose}
          />
        )}
      </HStack>
      <Flex alignItems="center" mx="auto">
        <MidText>{µFooterbar.COPY_RIGHT}</MidText>
      </Flex>
      <HStack spacing="6">
        {µFooterbar.CONTACT_LINKS.map(ELE => {
          return (
            <Flex
              color={iconColor}
              cursor="pointer"
              _hover={{
                filter: 'invert(.5)',
              }}
              onClick={handleLinkClick.bind(null, ELE)}
              fontSize={[".8em", "1em"]}
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
