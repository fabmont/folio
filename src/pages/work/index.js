import React from 'react';

import Layout from '../../components/layout';
import { Container } from '../../pageStyles/work';
import Card from '../../components/card';
import worklist from '../../constants/worklist';

export default function Work() {
  return (
    <Layout>
      <Container>
        {worklist.map((item) => (
          <Card src={item.src} title={item.title} shortDesc={item.shortDesc} />
        ))}
      </Container>
    </Layout>
  );
}
