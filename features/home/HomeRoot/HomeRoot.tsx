import React from 'react';
import { Divider, Flex, useColorModeValue, VStack } from '@chakra-ui/react';

import { useResponsiveContext } from '@/features/responsive';

import { SubTitle } from '@/components/Typography';
import { LatestSoundcloud } from '@/features/home/LatestSoundcloud';
import { LatestYoutube } from '@/features/home/LatestYoutube';
import { LatestImgur } from '@/features/home/LatestImgur';

import { µHomeRoot } from '.';

export const HomeRoot: React.FC<µHomeRoot.Props> = ({ results, ...props }) => {
  const { collapsible, mediaQueries } = useResponsiveContext();
  const dateRangeDivider = useColorModeValue('gray', 'pink');

  return (
    <VStack
      alignItems="center"
      flexDir="column"
      overflowX="hidden"
      overflowY="auto"
      py="2.5em"
      spacing={12}
      {...(!collapsible.state.collapsed &&
        !mediaQueries.state.isLargerThan500 && {
          onClick: collapsible.methods.toggleCollapsed,
        })}
      {...props}
    >
      <SubTitle fontSize={'2em'}>Discoveries of the Week</SubTitle>
      {results.map(COW => {
        return (
          <VStack width={['95%', 540]} key={COW.weekRange} spacing="5">
            <Flex width="100%" justifyContent={'center'} alignItems="center">
              <Divider borderColor={dateRangeDivider} />
              <SubTitle
                mx="5"
                fontSize="1.3em"
                minWidth="180px"
                textAlign={'center'}
              >
                {COW.weekRange}
              </SubTitle>
              <Divider borderColor={dateRangeDivider} />
            </Flex>

            <LatestYoutube url={COW.youtubeUrl} />

            <Divider />

            <LatestImgur
              id={COW.imgurId}
              isLargerThan500={mediaQueries.state.isLargerThan500}
            />
            <Divider />

            <LatestSoundcloud url={COW.soundCloudUrl} />

            <Divider />

            {/* <LatestImgur url={COW.imgurUrl} /> */}
          </VStack>
        );
      })}
    </VStack>
  );
};
