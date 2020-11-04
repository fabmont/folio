import Head from 'next/head';
import { Linkedin, Github, Instagram, Youtube } from 'styled-icons/fa-brands';
import { Envelope } from 'styled-icons/fa-solid';

import Layout from '../components/Layout';
import {
  Container,
  MeImg,
  TextContainer,
  IconsContainer,
} from '../styles/pages';

const Home: React.FC = () => (
  <Layout>
    <Head>
      <title>Home • fabmont</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Container>
      <MeImg />
      <TextContainer>
        <h1>Olá!</h1>
        <p>
          Meu nome é <b>Fabrício Monteiro</b>, sou engenheiro de software com
          especialidade em Javascript / NodeJS / React / React Native.
          <br />
          <br />
          Adoro aprender e me propor novos desafios, com isso comecei a me
          aventurar na tecnologia quando tinha 14 anos, buscando em guias,
          tutoriais e cursos na web para criar pequenos programas e sistemas.
          <br />
          <br />
          Minha paixão pela tecnologia me fez criar esse espaço, para
          compartilhar minhas experiências, conhecimentos e interações com
          vocês!
        </p>
        <IconsContainer>
          <a
            href="https://linkedin.com/in/fabmont"
            target="_blank"
            rel="noopener noreferrer"
            className="linkedin-icon"
          >
            <Linkedin size={30} />
          </a>
          <a
            href="https://github.com/fabmont"
            target="_blank"
            rel="noopener noreferrer"
            className="github-icon"
          >
            <Github size={30} />
          </a>
          <a
            href="https://instagram.com/fab_mont"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-icon"
          >
            <Instagram size={30} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCiJHIHP-suKBwZnJRJ47fwA"
            target="_blank"
            rel="noopener noreferrer"
            className="youtube-icon"
          >
            <Youtube size={30} />
          </a>
          <a href="mailto:fabriciosantos47@gmail.com" className="mail-icon">
            <Envelope size={30} />
          </a>
        </IconsContainer>
      </TextContainer>
    </Container>
  </Layout>
);

export default Home;
