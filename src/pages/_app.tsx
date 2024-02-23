import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Layout from '../components/Layout';
import theme from '../styles/theme';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <ChakraProvider resetCSS theme={theme}>
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
