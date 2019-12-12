import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import { Container, Title, Paragraph } from './styles';

export default function AboutMe() {
  return (
    <Container>
      <Title>Sobre mim</Title>
      <Timeline>
        <TimelineItem
          key="1"
          dateText="O início"
          style={{ color: '#e86971' }}
        >
          <Paragraph>
            Tudo começa em 2012. Enquanto eu cursava o 6º ano do ensino fundamental, conheci um amigo
            que me introduziu no mundo da programação. Juntos, começamos a programar pequenos softwares
            em C++. Depois começamos a desenvolver apps Windows Forms com VB.NET e C#.NET.
          </Paragraph>
        </TimelineItem>
        <TimelineItem
          key="2"
          dateText="Coopersystem"
          style={{ color: '#e86971' }}
        >
          <Paragraph>
            <h3>Instituto de Pesquisa Econômica Aplicada (IPEA)</h3>
          </Paragraph>
          <br />
          <Paragraph>
            <h4>Sistema de Bolsas</h4>
          </Paragraph>
          <Paragraph>
            Contribuí no desenvolvimento front-end do sistema de bolsas do IPEA, em que pessoas de todo o Brasil
            poderiam se cadidatar a bolsas de pesquisa fornecidas pelo instituto.
            <br />
            <span style={{ color: '#64b2cd' }}>ES6 • ReactJS • Redux</span>
          </Paragraph>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
