import NextLink from 'next/link';
import { Flex, useColorModeValue } from '@chakra-ui/react';

import { RegularText, SubTitle } from '@/components/Typography';
import { Footerbar } from '@/components/Footerbar';

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
        <SubTitle color={h2Color} my="4">About Me...</SubTitle>
        <RegularText fontSize={'1.2em'}>
          Hello, My name is Paul.  Im a full-stack developer based in Colorado.
        </RegularText>
        <RegularText mt="3" fontSize={'1.2em'}>
          Here is my current list of tech know-hows:
        </RegularText>

        <Skillset />

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
        <Footerbar pos="fixed" width="100vw" left="0" height="30px" bottom={0} />
      </Flex>
    </Flex>
  );
};
