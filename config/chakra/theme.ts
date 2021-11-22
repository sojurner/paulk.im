import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  fonts: {
    heading: 'Noto Serif Display',
    body: 'Karla',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
    colors: {
      appbar: {
        100: '#c3cee1',
      },
    },
    breakpoints: ['500px', '700px', '1000px', '80em'],
  },
});
