import '@fontsource/karla';
import '@fontsource/noto-serif-display';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';
import { theme, Fonts } from '@/config/chakra';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { DesktopLayout } from '@/components/Layout';
import { SettingsProvider } from '@/features/settings';
import { FavoritesProvider } from '@/features/favorites';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <SettingsProvider>
        <FavoritesProvider>
          <DesktopLayout>
            <Component {...pageProps} />
          </DesktopLayout>
        </FavoritesProvider>
      </SettingsProvider>
    </ChakraProvider>
  );
}

export default MyApp;
