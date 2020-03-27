import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Container, Photo, Title, TextBody, BodyHolder } from "../pageStyles";

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <SEO title="Home" />
        <Photo />
        <BodyHolder>
          <Title>Hey!</Title>
          <TextBody>
            My name is <b>Fabrício Monteiro</b> and I&apos;m a systems analyst and a
            web/mobile developer.
            <br />
            I&apos;ve built this web page to share my interests and some projects I&apos;m
            working on.
            <br />
            <br />
            My main experiences turn around <b>front-end</b> technologies such
            as <b>Javascript</b>, <b>React</b> and <b>React Native</b>.
            <br />
            <br />
            Currently studying <b>Dart</b> and <b>Flutter</b>.
          </TextBody>
        </BodyHolder>
      </Container>
    </Layout>
  );
}
