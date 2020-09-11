import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { Container, MeImg } from './styles';

export default function Fabs() {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <MeImg />
      </Container>
    </Layout>
  );
}
