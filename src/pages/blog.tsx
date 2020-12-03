import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/Layout';
import { Container } from '../styles/pages';

const Blog: React.FC = () => (
  <Layout>
    <Head>
      <title>blog • fabmont</title>
    </Head>
    <Container>
      <Image
        draggable={false}
        src="/under_constructions.png"
        width={500}
        height={430}
      />
    </Container>
  </Layout>
);

export default Blog;
