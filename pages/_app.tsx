import '@fontsource/karla';
import '@fontsource/noto-serif-display';
import 'prismjs/themes/prism-tomorrow.css';
import '@/styles/globals.scss';

import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { AppProviders } from '@/components/AppProviders';
import { theme, Fonts } from '@/config/chakra';
import { DesktopLayout } from '@/components/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <AppProviders>
        <DesktopLayout>
          <Component {...pageProps} />
        </DesktopLayout>
      </AppProviders>
    </ChakraProvider>
  );
}

export default App;
