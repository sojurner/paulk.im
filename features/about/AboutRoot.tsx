import { Flex, useColorModeValue } from '@chakra-ui/react';

import { SubTitle } from '@/components/Typography';

import { Intro } from './Intro';
import { Explained } from './Explained';
import { RandomFacts } from './RandomFacts';
import { Resources } from './Resources';
import { Following } from './Following';

export const AboutRoot = () => {
  const h2Color = useColorModeValue('pink.400', 'pink.300');
  return (
    <Flex
      overflow="auto"
      flexDirection="column"
      p="4"
      pb="10"
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
        <SubTitle color={h2Color} my="4">
          About Me...
        </SubTitle>
        <Intro />
        <SubTitle color={h2Color} mt="10" mb="6">
          Website, Explained...
        </SubTitle>
        <Explained />

        <SubTitle color={h2Color} mt="10" mb="6">
          Some Random Facts...
        </SubTitle>
        <RandomFacts />

        <SubTitle color={h2Color} mt="10" mb="6">
          Some Resources...
        </SubTitle>
        <Resources />

        <SubTitle color={h2Color} mt="10" mb="6">
          Currently Following...
        </SubTitle>
        <Following />
      </Flex>
    </Flex>
  );
};
