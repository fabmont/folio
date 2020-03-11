import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Container, Photo, Title, TextBody, BodyHolder } from "../pageStyles";

export default function IndexPage() {
  return (
    <Layout>
      <Container>
        <SEO title="Home" />
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Photo />
        <BodyHolder>
          <Title>Hey!</Title>
          <TextBody>
            My name is <b>Fabrício Monteiro</b> and I'm a systems analyst and a
            web/mobile developer.
            <br />
            I've built this web page to share my interests and some projects I'm
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
