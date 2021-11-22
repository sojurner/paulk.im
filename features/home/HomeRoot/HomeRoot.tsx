import React from 'react';
import NextImage from 'next/image';
import { Box, Flex, Grid, GridItem, VStack } from '@chakra-ui/layout';

import { µHomeRoot } from './types';
import { LandingImage } from '@/assets/images';
import { LandingCurvedText, LandingName } from '@/features/home';
import { SubTitle, LargeHeading, Title } from '@/components/Typography';
import { Wings } from '@/assets/icons';
import { Header } from '@/components/Header';

export const HomeRoot: React.FC<µHomeRoot.Props> = props => {
  return (
    <Flex
      height="100%"
      width="100%"
      flexDir="column"
      overflow="auto"
      background="linear-gradient(180deg, var(--chakra-colors-blue-50) 0%, var(--chakra-colors-purple-50) 20%, var(--chakra-colors-pink-50) 40%, var(--chakra-colors-red-50) 60%, var(--chakra-colors-green-50) 80%, var(--chakra-colors-cyan-50) 100%)"
      {...props}
    >
      <Header />

      <Grid
        mt="5%"
        mb="5%"
        width="75%"
        minW="1000px"
        bg="white"
        gridTemplateAreas={`
          "intro image"
        `}
        gridTemplateColumns={'1fr 1fr'}
        padding="2em"
        pos="relative"
        alignContent="center"
        borderTop="1px solid"
        borderRight="1px solid"
        borderBottom="1px solid"
        borderColor="gray.100"
        borderRadius="0 10px 10px 0"
      >
        <GridItem gridArea="intro" alignSelf="center" justifySelf="center">
          <Box p="3" height="100%" mt="-20%">
            <LargeHeading color="blackAlpha.800">Welcome!</LargeHeading>
            <Title my="1" color="blackAlpha.700" letterSpacing="0">
              Im Paul,
            </Title>
            <SubTitle mt="3" color="blackAlpha.600" letterSpacing="0">
              And this is my website
            </SubTitle>
          </Box>
        </GridItem>
        <GridItem
          gridArea="image"
          height="max-content"
          justifySelf="center"
          alignSelf="flex-start"
          position="relative"
        >
          <NextImage src={LandingImage} height="400px" width="300px" />
          <LandingCurvedText.Component />
          <LandingName.Component />
        </GridItem>
      </Grid>

      <Grid
        my="5%"
        width="75%"
        minW="1000px"
        bg="white"
        gridTemplateAreas={`
          "intro image"
        `}
        gridTemplateColumns={'1fr 1fr'}
        padding="2em"
        pos="relative"
        alignContent="center"
        alignSelf="flex-end"
        borderTop="1px solid"
        borderLeft="1px solid"
        borderBottom="1px solid"
        borderColor="gray.100"
        borderRadius="10px 0 0 10px"
      >
        <GridItem gridArea="intro" alignSelf="center" justifySelf="center">
          <VStack
            alignItems="flex-start"
            p="3"
            spacing="5"
            height="100%"
            mt="-20%"
          >
            <SubTitle
              mt="3"
              lineHeight="40px"
              color="blackAlpha.600"
              letterSpacing="0"
            >
              {`The UI/UX design was inspired by Tania Rascia's website.`}
            </SubTitle>
            <SubTitle
              mt="3"
              lineHeight="40px"
              color="blackAlpha.600"
              letterSpacing="0"
            >{`Thanks to Tania!`}</SubTitle>
          </VStack>
        </GridItem>

        <GridItem
          gridArea="image"
          height="max-content"
          justifySelf="center"
          alignSelf="flex-start"
          position="relative"
        >
          <NextImage src={LandingImage} height="400px" width="300px" />
          <LandingCurvedText.Component />
          <LandingName.Component />
        </GridItem>
      </Grid>
      {/* <Box
        pos="relative"
        _after={{
          position: 'absolute',
          content: "''",
          height: '250%',
          width: '250%',
          borderBottom: '2px solid',
          borderLeft: '2px solid',
          borderColor: 'var(--chakra-colors-gray-300)',
          top: '-250%',
          transform: 'translateY(20%)',
          left: '-260%',
        }}
        _before={{
          position: 'absolute',
          content: "''",
          height: '250%',
          width: '250%',
          borderTop: '2px solid',
          borderRight: '2px solid',
          borderColor: 'var(--chakra-colors-gray-300)',
          bottom: '-250%',
          transform: 'translateY(-20%)',
          right: '-260%',
        }}
        alignSelf="center"
        fontSize="10em"
      >
        <Wings />
      </Box> */}
      <Box
        pos="relative"
        _after={{
          position: 'absolute',
          content: "''",
          width: '30vw',
          borderBottom: '2px solid',
          borderColor: 'var(--chakra-colors-gray-300)',
          top: '50%',
          right: '-30vw',
        }}
        _before={{
          position: 'absolute',
          content: "''",
          width: '30vw',
          borderBottom: '2px solid',
          borderColor: 'var(--chakra-colors-gray-300)',
          top: '50%',
          left: '-30vw',
        }}
        alignSelf="center"
        fontSize="10em"
      >
        <Wings />
      </Box>
    </Flex>
  );
};
