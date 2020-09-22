import React from 'react';

import Layout from '../../components/layout';
import { Container } from './styles';
import Card from '../../components/card';
import worklist from './worklist';

export default function Work() {
  return (
    <Layout>
      <Container>
        {worklist.map((item) => (
          <Card src={item.src} title={item.title} />
        ))}
      </Container>
    </Layout>
  );
}
