import '@fontsource/karla';
import '@fontsource/noto-serif-display';
import 'prismjs/themes/prism-tomorrow.css';
import '@/styles/globals.scss';

import { theme, Fonts } from '@/config/chakra';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { SettingsProvider } from '@/features/settings';
import { FavoritesProvider } from '@/features/favorites';
import { ResponsiveProvider } from '@/features/responsive';
import { DataProvider } from '@/features/data';

import { DesktopLayout } from '@/components/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <DataProvider>
        <SettingsProvider>
          <FavoritesProvider>
            <ResponsiveProvider>
              <DesktopLayout>
                <Component {...pageProps} />
              </DesktopLayout>
            </ResponsiveProvider>
          </FavoritesProvider>
        </SettingsProvider>
      </DataProvider>
    </ChakraProvider>
  );
}

export default App;
