import React from 'react';
import {
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  HStack,
} from '@chakra-ui/react';
import { IconWrapper, SoundCloudIcon } from '@/components/Icon';
import { useSettingsContext, µUseSettings } from '@/features/settings';
import { SoundCloudWidget, SoundCloudTag } from '@/features/soundCloud';

import { µSoundCloudControl } from '.';

export const SoundCloudControl: React.FC<µSoundCloudControl.Props> = props => {
  const { state, methods } = useSettingsContext();

  return (
    <Popover matchWidth closeOnBlur={false} {...props}>
      <PopoverTrigger>
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
      </PopoverTrigger>
      <PopoverContent height="450px" width={['100vw', '650px']} pos="relative">
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>
          <HStack>
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
                  >
                    {KEY}
                  </SoundCloudTag>
                );
              }
            )}
          </HStack>
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
