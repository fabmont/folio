import Head from 'next/head';
import Image from 'next/image';

import Section from '../components/Section';
import { Container } from '../styles/pages';

const Blog: React.FC = () => (
  <Section>
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
  </Section>
);

export default Blog;
