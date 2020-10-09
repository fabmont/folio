import React from 'react';

import { CardBody, Container, MoreButton, Thumb } from './styles';

export default function Card({ src, title, shortDesc }) {
  return (
    <Container>
      <Thumb src={src} />
      <CardBody>
        <h2>{title}</h2>
        <p>{shortDesc}</p>
        <MoreButton>Saiba mais</MoreButton>
      </CardBody>
    </Container>
  );
}
