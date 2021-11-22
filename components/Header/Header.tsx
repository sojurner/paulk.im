import React from 'react';

import NextLink from 'next/link';
import { Box, Flex, Link, HStack, CSSObject } from '@chakra-ui/react';
import Logo from '@/assets/icons/Logo.svg';
import BrushStroke from '@/assets/icons/BrushStroke.svg';

export interface Props {}

export class Styles {
  static _linkHover: CSSObject = {
    textShadow:
      '0 0 15px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff',
    a: {
      textDecoration: 'none',
    },
  };
}

export class Constants {
  static LINKS_LEFT = [
    {
      key: '/posts',
      path: '/posts',
      label: 'Blog',
      color: 'teal.500',
    },
    {
      key: '/memes',
      path: '/memes',
      label: 'Memes',
      color: 'blue.500',
    },
  ];

  static LINKS_RIGHT = [
    {
      key: '/search',
      path: '/search',
      label: 'Search',
      color: 'purple.500',
    },
    {
      key: '/settings',
      path: '/settings',
      label: 'Settings',
      color: 'pink.500',
    },
  ];
}

export const Header: React.FC<Props> = () => {
  return (
    <HStack
      position="relative"
      mx="auto"
      padding={['0', '4', '4', '4']}
      spacing={['3', '7', '7', '9']}
    >
      <Box
        opacity=".6"
        position="absolute"
        zIndex="0"
        left={['-100px', '-70px', '-85px', '-55px']}
        top="57%"
        transform="translate(0, -50%) rotate(1deg)"
        fontSize={['40em', '48em', '48em', '48em']}
      >
        <BrushStroke />
      </Box>
      {Constants.LINKS_LEFT.map(LINK => {
        return (
          <Box
            minWidth="70px"
            zIndex="1"
            key={LINK.path}
            _hover={Styles._linkHover}
          >
            <NextLink href={LINK.path}>
              <Link
                fontFamily="Noto Serif Display"
                fontWeight="900"
                transition=".3s"
                color={LINK.color}
                fontSize={['1em', '1.2rem']}
              >
                {LINK.label}
              </Link>
            </NextLink>
          </Box>
        );
      })}
      <Flex
        cursor="pointer"
        filter="drop-shadow(0px 0px 5px var(--chakra-colors-white))"
        zIndex="10"
        justifyContent="center"
        minWidth={['100px', '140px', '120px', '140px']}
        fontSize={['3.5rem', '4rem']}
      >
        <Logo />
      </Flex>

      {Constants.LINKS_RIGHT.map(LINK => {
        return (
          <Box
            minWidth="70px"
            zIndex="1"
            key={LINK.path}
            _hover={Styles._linkHover}
            fontSize={['1em', '1.2rem']}
          >
            <NextLink key={LINK.path} href={LINK.path}>
              <Link
                fontFamily="Noto Serif Display"
                fontWeight="900"
                transition=".3s"
                color={LINK.color}
              >
                {LINK.label}
              </Link>
            </NextLink>
          </Box>
        );
      })}
    </HStack>
  );
};
