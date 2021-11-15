import '@fontsource/karla';
import '@fontsource/noto-serif-display';
import '@/styles/globals.scss';
import { useRouter } from 'next/router';
import { theme } from '@/config/chakra/theme';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { DesktopLayout } from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router =  useRouter()

  return (
    <ChakraProvider theme={theme}>
      <DesktopLayout showBg={router.route.split('/')[1] === 'posts'}>
        <Component {...pageProps} />
      </DesktopLayout>
    </ChakraProvider>
  );
}

export default MyApp;
