import Head from 'next/head';
import { NextRouter } from 'next/router';
import { Box, Container } from '@chakra-ui/react';
import Header from '../Header';
import Footer from '../Footer';

const Layout: React.FC<{ router: NextRouter }> = ({ children, router }) => (
  <Box as="main" minH="100%">
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Fabrício's homepage" />
      <meta name="author" content="Fabrício Monteiro" />
      <meta name="author" content="fabmont" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@fabsmont" />
      <meta name="twitter:creator" content="@fabsmont" />
      <meta name="twitter:image" content="/card.png" />
      <meta property="og:site_name" content="Fabrício Monteiro's Homepage" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/card.png" />
      <title>Fabrício Monteiro - Homepage</title>
    </Head>

    <Header path={router?.asPath} />
    <Container maxW="container.md" pt={14}>
      {children}
      <Footer />
    </Container>
  </Box>
);

export default Layout;
