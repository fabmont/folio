import React from 'react';
import { Briefcase } from 'react-feather';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Container, Title } from './styles';

export default function AboutMe() {
  const baloonBlue = '#054975';

  return (
    <Container>
      <Title>Projetos</Title>
      <br />
      <VerticalTimeline layout="1-column">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: baloonBlue, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid  ${baloonBlue}` }}
          date="React Native • Firebase"
          iconStyle={{ background: baloonBlue, color: '#fff' }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">Onde Joga? (2018)</h3>
          <h4 className="vertical-timeline-element-subtitle">Lacis/UnB</h4>
          <p>
          Aplicativo mobile que auxilia a comunidade nos reportes de
          resíduos sólidos espalhados pela cidade, assim como pontos de coleta voluntária.
          A idéia é que esses reportes feitos pela comunidade sirvam como mapa de calor para
          os responsáveis públicos, para que, com essas informações, eles saibam onde aplicar
          mais esforços. Neste projeto, foi utilizado o React Native para o front-end da
          aplicação e o Firebase como back-end.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: baloonBlue, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid  ${baloonBlue}` }}
          date="ReactJS • Redux • CSS"
          iconStyle={{ background: baloonBlue, color: '#fff' }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">Sistema de Bolsas (IPEA)</h3>
          <h4 className="vertical-timeline-element-subtitle">Coopersystem (2018 - 2019)</h4>
          <p>
            Este sistema tem como finalidade permitir que os administradores gerenciem e mantenham
            as bolsas de pesquisas do instituto, assim como permitir que os candidatos e bolsistas
            interajam e gerenciem suas respectivas bolsas de pesquisa. Neste projeto, o front-end
            foi desenvolvido usando ReactJS consumindo uma API REST.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: baloonBlue, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid  ${baloonBlue}` }}
          date="ReactJS • Ant Design • High Order Components"
          iconStyle={{ background: baloonBlue, color: '#fff' }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">Sistema de Gestão de Pessoas (IPEA)</h3>
          <h4 className="vertical-timeline-element-subtitle">Coopersystem (2019)</h4>
          <p>
            Contribui na criação do front-end do sistema de gestão de pessoas do IPEA. Ajudando na
            implementação da arquitetura do ReactJS e componentizando elementos da UI. O projeto
            consumia uma API Restful através da lib Axios.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: baloonBlue, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid  ${baloonBlue}` }}
          date="React Native"
          iconStyle={{ background: baloonBlue, color: '#fff' }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">14º Congresso Brasileiro do Cooperativismo (14º CBC)</h3>
          <h4 className="vertical-timeline-element-subtitle">Coopersystem (2019)</h4>
          <p>
          Aplicativo móvel em que os participantes do evento poderiam se inscrever em palestras de seu
          interesse, fazer anotações e participar das votações para definir as diretrizes que o cooperativismo
          deve seguir. O app foi inteiramente desenvolvido em React Native, fazendo consultas a uma API REST.
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: baloonBlue, color: '#fff' }}
          contentArrowStyle={{ borderRight: `7px solid  ${baloonBlue}` }}
          date="React Native"
          iconStyle={{ background: baloonBlue, color: '#fff' }}
          icon={<Briefcase />}
        >
          <h3 className="vertical-timeline-element-title">Na Palma da Mão - SEBRAE</h3>
          <h4 className="vertical-timeline-element-subtitle">Connect DF (2019)</h4>
          <p>
            App desenvolvido para o SEBRAE para auxiliar empreendedores na realização de suas atividades, como:
            pagamentos de boletos de MEI; listar dicas importantes para que o crescimento do empreendedor seja mais
            fácil e eficaz; explorar cursos e eventos, assim como conteúdos para seu crescimento; assistência para \
            dúvidas; etc.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </Container>
  );
}
