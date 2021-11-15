import { CSSObject } from '@chakra-ui/react';
import { µHeader } from './types';

export namespace çHeader {
  export const _linkHover: CSSObject = {
    textShadow:
      '0 0 15px #fff, 0 0 15px #fff, 0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff, 0 0 25px #fff',
    a: {
      textDecoration: 'none'
    }
  };

  export const headerLinksLeft = [
    {
      key: µHeader.Link.POSTS,
      path: '/posts',
      label: 'Blog',
      color: 'teal.500',
    },
    {
      key: µHeader.Link.MEMES,
      path: '/memes',
      label: 'Memes',
      color: 'blue.500',
    },
  ];

  export const headerLinksRight = [
    {
      key: µHeader.Link.ABOUT,
      path: '/about',
      label: 'About',
      color: 'purple.500',
    },
    {
      key: µHeader.Link.CONTACT,
      path: '/contact',
      label: 'Contact',
      color: 'pink.500',
    },
  ];
}
