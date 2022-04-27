import NextLink from 'next/link';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { RegularText, SubTitle } from '@/components/Typography';

import { RandomFacts } from './RandomFacts';
import { Skillset } from './Skillset';
import { Resources } from './Resources';
import { Following } from './Following';

export const AboutRoot = () => {
  const h2Color =  useColorModeValue('pink.400', 'pink.300')
  return (
    <Flex
      overflow="auto"
      flexDirection="column"
      p="4"
      alignItems="center"
      gridArea="body"
      sx={{
        strong: {
          color: 'purple.400',
        },
        h2: {
          fontSize: '1.8em',
        },
      }}
    >
      <Flex flexDirection="column" width={['95%', '560px']}>
        <SubTitle color={h2Color} my="4">About Mi...</SubTitle>
        <RegularText fontSize={'1.2em'}>
          Hello, Im Paul. A developer based in Colorado.
        </RegularText>
        <RegularText fontSize={'1.2em'}>
          Here is my current list of tech know-hows:
        </RegularText>

        <Skillset />

        <SubTitle color={h2Color} mt="10" mb="6">
          Some Random Facts...
        </SubTitle>
        <RandomFacts />

        <SubTitle color={h2Color} mt="10" mb="6">
          Favorite Resources...
        </SubTitle>
        <Resources />

        <SubTitle color={h2Color} mt="10" mb="6">
          Following...
        </SubTitle>
        <Following />
      </Flex>
    </Flex>
  );
};
