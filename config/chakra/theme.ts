import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react';
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "501px",
  md: "700px",
  lg: "1000px",
  xl: "1200px",
  "2xl": "1536px",
})

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
  },
  breakpoints,
});
