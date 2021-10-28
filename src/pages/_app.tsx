import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import Layout from '../components/Layout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps, router }) => (
  <ChakraProvider resetCSS theme={theme}>
    <GlobalStyles />
    <Layout router={router}>
      <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
);

export default MyApp;
