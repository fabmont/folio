import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import { Container, Title, BodyText, Card } from '../../pageStyles/projects';

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <Title>Projects</Title>
        <BodyText>
          Here's some projects that I have worked on.
          <br />
          Most of them was built using front-end technologies.
        </BodyText>
        <br />
        <br />
        <Card></Card>
      </Container>
    </Layout>
  );
}
