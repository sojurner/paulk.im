import React, { ChangeEvent, ChangeEventHandler } from 'react';
import { Flex, Grid, GridItem, Switch } from '@chakra-ui/react';

import {
  useSettingsContext,
  µSettingsProvider,
  SettingsItem,
} from '@/features/settings';

import { MidText, RegularText, SubHeading } from '@/components/Typography';
import {
  SoundCloudIcon,
  FavoritesCartIcon,
  OpenWeatherIcon,
} from '@/components/Icon';

import { µSettingsRoot } from './types';

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
    <Flex flexDir="column" alignItems="center" {...props}>
      <SubHeading>Settings</SubHeading>
      <RegularText>Adjust settings for this site</RegularText>
      <SettingsItem
        my="2"
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
        my="2"
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
        my="2"
        isEnabled={settingsContext.state.favorites.enabled}
        content={[
          'Favorite List',
          'Allows you to store a post/meme to a favorites list.',
        ]}
        onChange={forwardOnSettingsChange(
          µSettingsProvider.Enums.SettingsStorageKey.FAVORITES
        )}
        Icon={
          <FavoritesCartIcon
            fontSize={'1.5em'}
            isActive={settingsContext.state.favorites.enabled}
          />
        }
      ></SettingsItem>
    </Flex>
  );
};
