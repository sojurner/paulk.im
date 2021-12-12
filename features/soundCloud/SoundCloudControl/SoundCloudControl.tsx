import React from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Flex,
} from '@chakra-ui/react';

import { IconWrapper, SoundCloudIcon } from '@/components/Icon';
import { useSettingsContext, µUseSettings } from '@/features/settings';
import { SoundCloudWidget, SoundCloudTag } from '@/features/soundCloud';

import { µSoundCloudControl } from '.';

export const SoundCloudControl: React.FC<µSoundCloudControl.Props> = props => {
  const { state, methods } = useSettingsContext();

  return (
    <Popover matchWidth placement="top" closeOnBlur={false} {...props}>
      <PopoverTrigger>
        <div>
          <IconWrapper
            px="1"
            cursor="pointer"
            fontSize="1.7em"
            _hover={{
              background: 'blackAlpha.100',
            }}
          >
            <SoundCloudIcon />
          </IconWrapper>
        </div>
      </PopoverTrigger>
      <PopoverContent height="450px" width={['100vw', '650px']} pos="relative">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader width="95%">
          <Flex flexWrap="wrap">
            {Object.entries(µSoundCloudControl.Enums.ScGenre).map(
              ([KEY, GENRE]) => {
                return (
                  <SoundCloudTag
                    key={KEY}
                    isActive={
                      state.soundCloud.value === GENRE ||
                      (!state.soundCloud.value &&
                        GENRE === µSoundCloudControl.Enums.ScGenre.LOFI)
                    }
                    onClick={() => {
                      methods.onSettingsUpdate(
                        µUseSettings.Enums.SettingsStorageKey.SOUND_CLOUD,
                        {
                          ...state.soundCloud,
                          value: GENRE,
                        }
                      );
                    }}
                    margin="1"
                  >
                    {KEY}
                  </SoundCloudTag>
                );
              }
            )}
          </Flex>
        </PopoverHeader>
        <PopoverBody>
          <SoundCloudWidget
            playlistUrl={
              state.soundCloud.value || µSoundCloudControl.Enums.ScGenre.LOFI
            }
          />
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
