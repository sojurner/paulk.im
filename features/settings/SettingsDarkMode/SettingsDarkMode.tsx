import { Flex, Box } from '@chakra-ui/layout';
import React from 'react';

import { µSettingsDarkMode } from '.';

export const SunRay: React.FC<{ index: number; enabled: boolean }> = ({
  index,
  enabled,
}) => {
  return (
    <Box
      width="2px"
      background="orange.300"
      display="block"
      height="125%"
      position="absolute"
      zIndex="-1"
      transition="0.4s all, height 0.3s ease-in-out"
      transform={`rotate(calc(${index} * calc(360deg / ${12})))`}
      {...(enabled && {
        height: 0,
        transition: '0.4s, transform 0.4s, height 0.2s 0.1s',
        transform: `calc(calc(${index} * calc(360deg / 12)) - 45deg)`,
      })}
    />
  );
};

export const SettingsDarkMode: React.FC<µSettingsDarkMode.Props> =
  props => {
    return (
      <Flex
        height="25px"
        width="25px"
        alignItems="center"
        justifyContent="center"
        position="relative"
        {...(props.enabled && {
          background: 'gray.900',
        })}
      >
        <Box
          height="18px"
          width="18px"
          position="absolute"

          borderRadius="50%"
          top="0"
          right="0"
          transform="scale(0) translate(25%, -25%)"
          zIndex="docked"
          transition=".4s transform"
          transformOrigin="right"
          {...(props.enabled && {
            transform: 'scale(1) translate(10%, -10%)',
            background: 'gray.900',
          })}
        />
        <Box
          background="orange.300"
          width="24px"
          height="24px"
          borderRadius="50%"
          border="4px solid"
          borderColor="orange.50"
          {...(props.enabled && {
            backgroundColor: 'pink.400',
            borderColor: 'gray.900',
          })}
        />
        <SunRay enabled={props.enabled} index={0} />
        <SunRay enabled={props.enabled} index={1} />
        <SunRay enabled={props.enabled} index={2} />
        <SunRay enabled={props.enabled} index={3} />
        <SunRay enabled={props.enabled} index={4} />
        <SunRay enabled={props.enabled} index={5} />
        <SunRay enabled={props.enabled} index={6} />
      </Flex>
    );
  };
