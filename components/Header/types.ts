import { CSSObject } from '@chakra-ui/react';

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
