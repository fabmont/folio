import React from 'react';
import { Mail, Phone, Map } from 'react-feather';
import { Container, Title, Image, InfoContainer, InfoCard, Row } from './styles';

export default function ContactMe() {
  return (
    <Container>
      <Title>Contato</Title>
      <InfoContainer>
        <InfoCard>
          <Row>
            <Mail style={{ marginRight: 12, color: '#5eb7b7' }} />
            <h2>
              E-mail
            </h2>
          </Row>
          <p>fabriciosantos47@gmail.com</p>
          <br />
          <Row>
            <Phone style={{ marginRight: 12, color: '#5eb7b7' }} />
            <h2>
              Telefone
            </h2>
          </Row>
          <p>+55 (61) 98360-8622</p>
          <br />
          <Row>
            <Map style={{ marginRight: 12, color: '#5eb7b7' }} />
            <h2>Estado</h2>
          </Row>
          <p>Brasília, Distrito Federal</p>
        </InfoCard>
        <Image />
      </InfoContainer>
    </Container>
  );
}
