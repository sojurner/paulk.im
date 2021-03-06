import React from 'react';
import {
  VStack,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  ModalHeader,
  useColorModeValue,
} from '@chakra-ui/react';
import { SubHeading } from '@/components/Typography';
import {
  useSettingsContext,
  µUseSettings,
  SettingsItem,
} from '@/features/settings';

import { NightSkyStars } from '@/components/NightSkyStars';
import {
  SoundCloudIcon,
  BookmarkIcon,
  OpenWeatherIcon,
  IconWrapper,
} from '@/components/Icon';

import { µSettingsModal } from '.';

export const SettingsModal: React.FC<µSettingsModal.Props> = props => {
  const settingsContext = useSettingsContext();
  const iconFill = useColorModeValue('orange.500', 'orange.400');

  const forwardOnSettingsChange: µSettingsModal.Methods['forwardOnSettingsChange'] =
    settingType => {
      return ({ currentTarget }) => {
        settingsContext.methods.onSettingsUpdate(settingType, {
          ...settingsContext.state[settingType],
          enabled: currentTarget.checked,
        });
      };
    };

  return (
    <Modal size="lg" {...props}>
      <NightSkyStars />
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <SubHeading fontWeight="normal" textAlign="center">
            Settings
          </SubHeading>
        </ModalHeader>
        <ModalCloseButton size="lg" />
        <ModalBody>
          <VStack mb="5" spacing="5">
            <SettingsItem
              isEnabled={settingsContext.state.soundCloud.enabled}
              content={['Sound Cloud', 'Listen to my sound cloud playlists']}
              onChange={forwardOnSettingsChange(
                µUseSettings.SettingsStorageKey.SOUND_CLOUD
              )}
              Icon={
                <IconWrapper
                  isActive={settingsContext.state.soundCloud.enabled}
                  color={iconFill}
                >
                  <SoundCloudIcon fontSize={'2em'} />
                </IconWrapper>
              }
            />

            <SettingsItem
              isEnabled={settingsContext.state.favorites.enabled}
              content={['Bookmarks', 'Bookmark your favorite posts/memes.']}
              onChange={forwardOnSettingsChange(
                µUseSettings.SettingsStorageKey.FAVORITES
              )}
              Icon={
                <Box
                  fontSize="1.5em"
                  {...(!settingsContext.state.favorites.enabled && {
                    filter: 'grayscale(1)',
                  })}
                >
                  <BookmarkIcon />
                </Box>
              }
            />

            <SettingsItem
              pointerEvents="none"
              isEnabled={settingsContext.state.openWeather.enabled}
              content={['Open Weather', 'coming soon']}
              onChange={forwardOnSettingsChange(
                µUseSettings.SettingsStorageKey.OPEN_WEATHER
              )}
              Icon={
                <IconWrapper
                  isActive={settingsContext.state.openWeather.enabled}
                >
                  <OpenWeatherIcon fontSize={'2.2em'} />
                </IconWrapper>
              }
            />
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
