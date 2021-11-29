import '@fontsource/karla';
import '@fontsource/noto-serif-display';
import '@/styles/globals.scss';
import { theme, Fonts } from '@/config/chakra';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { DesktopLayout } from '@/components/Layout';
import { SettingsProvider } from '@/features/settings';
import { FavoritesProvider } from '@/features/favorites';
import { ResponsiveProvider } from '@/features/responsive';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SettingsProvider>
        <FavoritesProvider>
          <ResponsiveProvider>
            <DesktopLayout>
              <Component {...pageProps} />
            </DesktopLayout>
          </ResponsiveProvider>
        </FavoritesProvider>
      </SettingsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
