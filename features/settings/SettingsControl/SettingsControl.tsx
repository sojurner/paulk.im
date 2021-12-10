import React, { ChangeEvent, ChangeEventHandler } from 'react';
import {
  Flex,
  VStack,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverProps,
  PopoverCloseButton,
} from '@chakra-ui/react';
import { SidebarTab } from '@/components/Tab';

import {
  useSettingsContext,
  µUseSettings,
  SettingsItem,
} from '@/features/settings';

import { SubHeading } from '@/components/Typography';
import {
  SoundCloudIcon,
  BookmarkIcon,
  OpenWeatherIcon,
  IconWrapper,
} from '@/components/Icon';

interface Props extends PopoverProps {}

export const SettingsControl: React.FC<Props> = ({ children, ...props }) => {
  const settingsContext = useSettingsContext();

  const forwardOnSettingsChange = (
    settingType: µUseSettings.Enums.SettingsStorageKey
  ): ChangeEventHandler<HTMLInputElement> => {
    return ({ currentTarget }: ChangeEvent<HTMLInputElement>) => {
      settingsContext.methods.onSettingsUpdate(settingType, {
        ...settingsContext.state[settingType],
        enabled: currentTarget.checked,
      });
    };
  };

  return (
    <Popover placement="end-end" {...props}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent height="450px" width={['100vw', '650px']}>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody height="450px">
          <Flex flexDir="column" alignItems="center">
            <SubHeading mb="8">Settings</SubHeading>
            <VStack spacing="5">
              <SettingsItem
                isEnabled={settingsContext.state.soundCloud.enabled}
                content={['Sound Cloud', 'Listen to my sound cloud playlists']}
                onChange={forwardOnSettingsChange(
                  µUseSettings.Enums.SettingsStorageKey.SOUND_CLOUD
                )}
                Icon={
                  <IconWrapper
                    isActive={settingsContext.state.soundCloud.enabled}
                  >
                    <SoundCloudIcon fontSize={'2em'} />
                  </IconWrapper>
                }
              ></SettingsItem>
              <SettingsItem
                isEnabled={settingsContext.state.openWeather.enabled}
                content={['Open Weather', 'View your local weather forecast']}
                onChange={forwardOnSettingsChange(
                  µUseSettings.Enums.SettingsStorageKey.OPEN_WEATHER
                )}
                Icon={
                  <IconWrapper
                    isActive={settingsContext.state.openWeather.enabled}
                  >
                    <OpenWeatherIcon fontSize={'2.2em'} />
                  </IconWrapper>
                }
              ></SettingsItem>
              <SettingsItem
                isEnabled={settingsContext.state.favorites.enabled}
                content={['Bookmarks', 'Bookmark your favorite posts/memes.']}
                onChange={forwardOnSettingsChange(
                  µUseSettings.Enums.SettingsStorageKey.FAVORITES
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
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
