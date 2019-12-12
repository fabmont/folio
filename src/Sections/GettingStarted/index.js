import React from 'react';
import { Container, ProfileImage, Title, Subtitle } from './styles';

export default function GettingStarted() {
  return (
    <Container>
      <ProfileImage />
      <Title>Fabrício Monteiro</Title>
      <Subtitle>Software Engineer</Subtitle>
      <br />
      <Subtitle>Javascript • ReactJS • React Native • NodeJS</Subtitle>
    </Container>
  );
}
