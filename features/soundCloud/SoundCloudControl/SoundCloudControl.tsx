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
  useColorModeValue,
} from '@chakra-ui/react';

import { IconWrapper, SoundCloudIcon } from '@/components/Icon';
import { useSettingsContext, µUseSettings } from '@/features/settings';
import { SoundCloudWidget, SoundCloudTag } from '@/features/soundCloud';

import { µSoundCloudControl } from '.';

export const SoundCloudControl: React.FC<µSoundCloudControl.Types.Props> =
  props => {
    const { state, methods } = useSettingsContext();
    const iconFill = useColorModeValue('orange.500', 'orange.400');

    return (
      <Popover matchWidth placement="top" closeOnBlur={false} {...props}>
        <PopoverTrigger>
          <div>
            <IconWrapper
              px="1"
              cursor="pointer"
              fontSize="1.7em"
              color={iconFill}
              _hover={{
                background: 'blackAlpha.100',
              }}
            >
              <SoundCloudIcon />
            </IconWrapper>
          </div>
        </PopoverTrigger>
        <PopoverContent
          zIndex="modal"
          height="450px"
          width={['100vw', '650px']}
          pos="relative"
        >
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader width="95%">
            <Flex flexWrap="wrap">
              {Object.entries(µSoundCloudControl.Enums.MusicGenre).map(
                ([KEY, GENRE]) => {
                  return (
                    <SoundCloudTag
                      key={KEY}
                      isActive={
                        state?.soundCloud?.value === GENRE ||
                        (!state.soundCloud.value &&
                          GENRE === µSoundCloudControl.Enums.MusicGenre.LOFI)
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
                state.soundCloud.value ||
                µSoundCloudControl.Enums.MusicGenre.LOFI
              }
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    );
  };
