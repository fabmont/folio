import React from "react";
import { navigate } from 'gatsby';
import Layout from "../../components/layout";
import SEO from "../../components/seo";
import {
  Container,
  Title,
  BodyText,
  Card,
  ThumbImg,
  CardContent,
  CardTitle,
  IconsHolder,
  CardDescription
} from "../../pageStyles/projects";
import projects from "../../constants/projects";

export default function Projects() {
  return (
    <Layout>
      <SEO title="Projects" />
      <Container>
        <Title>Projects</Title>
        <BodyText>
          Here&apos;s some projects that I have worked on.
          <br />
          Most of them was built using front-end technologies.
        </BodyText>
        <br />
        <br />
        {projects.map(card => (
          <Card onClick={() => navigate('/projects/ocb/')}>
            <ThumbImg src={card.thumb} />
            <CardContent>
              <div>
                <CardTitle>{card.name}</CardTitle>
                <br />
                <br />
                <CardDescription>{card.description}</CardDescription>
              </div>
              <br />
              <br />
              <IconsHolder>{card.techs.map(icon => icon)}</IconsHolder>
            </CardContent>
          </Card>
        ))}
      </Container>
    </Layout>
  );
}
