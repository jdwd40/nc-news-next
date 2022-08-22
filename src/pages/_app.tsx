import { ChakraProvider, Flex } from '@chakra-ui/react';

import theme from '../theme';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction={'column'} minHeight={'100vh'} position={'relative'} p={3}>
        <Flex direction={'column'} minHeight={'100%'} pb="80px">
          <Component {...pageProps} />
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
