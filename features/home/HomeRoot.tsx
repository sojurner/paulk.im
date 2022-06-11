import { Box, Code, Flex, HStack, useColorModeValue } from '@chakra-ui/react';

import { Title } from '@/components/Typography';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { IconWrapper, PkAvatar } from '@/components/Icon';

import { Skillset } from '@/features/about/Skillset';
import { particleOptions } from './consts';
import { IconPageLink } from './components';

export const HomeRoot = () => {
  const background = useColorModeValue('#FFF', '#19202C');

  return (
    <Flex
      overflow="auto"
      flexDirection="column"
      pt="12"
      alignItems="center"
      gridArea="body"
    >
      <Flex
        id="content-container"
        flexDirection="column"
        width={['95%', '560px']}
      >
        <Box zIndex="tooltip" pos="relative">
          <Flex>
            <IconWrapper
              height={['150px', '210px']}
              width={['149px', '209px']}
              borderRadius="full"
              border="3px solid"
              borderColor="blackAlpha.500"
              overflow="hidden"
              fontSize={['9em', '13em']}
            >
              <PkAvatar />
            </IconWrapper>
            <Flex bg={'#FF00860'} ml="4" flexDir="column" mt="4">
              <HStack>
                <Title
                  sx={{
                    '::first-letter': {
                      fontSize: '1.5em',
                      color: 'blue.500',
                    },
                  }}
                  color="blue.300"
                  fontSize={['4xl', '5xl']}
                >
                  Paul{' '}
                </Title>
                <Title
                  sx={{
                    '::first-letter': {
                      fontSize: '1.5em',
                      color: 'purple.500',
                    },
                  }}
                  color="purple.300"
                  fontSize={['4xl', '5xl']}
                >
                  Kim
                </Title>
              </HStack>
              <Code mt="2" width="max-content" fontSize={['xs', 'md']}>
                {'<'} Software {'/'} Developer {'>'}
              </Code>
            </Flex>
          </Flex>
          <Box m="auto" width={['70%', '60%']} pos="relative">
            <Skillset />
          </Box>
          <HStack
            mt="10"
            spacing="4"
            justifyContent="center"
            alignItems="flex-start"
          >
            <IconPageLink href="/posts" variant={'Media Feed'} />
            <IconPageLink href="/tils" variant={'Today I Learned'} />
            <IconPageLink href="/about" variant={'About'} />
          </HStack>
        </Box>
        <Particles
          id="tsparticles"
          init={loadFull}
          options={particleOptions(background)}
        />
      </Flex>
    </Flex>
  );
};
