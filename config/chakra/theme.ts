import { extendTheme } from '@chakra-ui/react';
export const theme = extendTheme({
  fonts: {
    heading: 'Noto Serif Display',
    body: 'Karla',
  },
  initialColorMode: 'light',
  useSystemColorMode: false,
  breakpoints: ['500px', '700px', '1000px', '80em'],
});
