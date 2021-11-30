import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { Flex, VStack, Box } from '@chakra-ui/react';

import {
  useSettingsContext,
  µSettingsProvider,
  SettingsItem,
} from '@/features/settings';

import { MidText, RegularText, SubHeading } from '@/components/Typography';
import {
  SoundCloudIcon,
  BookmarkIcon,
  OpenWeatherIcon,
} from '@/components/Icon';

import { µSettingsRoot } from '.';

export const SettingsRoot: React.FC<µSettingsRoot.Props> = props => {
  const settingsContext = useSettingsContext();

  const forwardOnSettingsChange = (
    settingType: µSettingsProvider.Enums.SettingsStorageKey
  ): ChangeEventHandler<HTMLInputElement> => {
    return ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
      settingsContext.methods.onSettingsUpdate(settingType, {
        ...settingsContext.state[settingType],
        enabled: currentTarget.checked,
      });
    };
  };

  return (
    <Flex py="10" flexDir="column" alignItems="center" {...props}>
      <SubHeading mb="8">Settings</SubHeading>
      <VStack spacing="5">
        <SettingsItem
          isEnabled={settingsContext.state.soundCloud.enabled}
          content={['Sound Cloud', 'Listen to my sound cloud playlists']}
          onChange={forwardOnSettingsChange(
            µSettingsProvider.Enums.SettingsStorageKey.SOUND_CLOUD
          )}
          Icon={
            <SoundCloudIcon
              fontSize={'2em'}
              isActive={settingsContext.state.soundCloud.enabled}
            />
          }
        ></SettingsItem>
        <SettingsItem
          isEnabled={settingsContext.state.openWeather.enabled}
          content={['Open Weather', 'View your local weather forecast']}
          onChange={forwardOnSettingsChange(
            µSettingsProvider.Enums.SettingsStorageKey.OPEN_WEATHER
          )}
          Icon={
            <OpenWeatherIcon
              fontSize={'2.2em'}
              isActive={settingsContext.state.openWeather.enabled}
            />
          }
        ></SettingsItem>
        <SettingsItem
          isEnabled={settingsContext.state.favorites.enabled}
          content={['Bookmarks', 'Bookmark your favorite posts/memes.']}
          onChange={forwardOnSettingsChange(
            µSettingsProvider.Enums.SettingsStorageKey.FAVORITES
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
        ></SettingsItem>
      </VStack>
    </Flex>
  );
};
