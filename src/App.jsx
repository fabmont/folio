import React from 'react';
import { Instagram, Linkedin, Facebook, GitHub, MessageCircle } from 'react-feather';
import { StaticBottomPanel, MainContainer, BottomButtons, BottomButtonsHolder } from './styles';
import GettingStarted from './Sections/GettingStarted';
import AboutMe from './Sections/AboutMe';
import ContactMe from './Sections/ContactMe';

export default function App() {
  return (
    <MainContainer>
      <GettingStarted />
      <AboutMe />
      <ContactMe />
      <StaticBottomPanel>
        <BottomButtonsHolder>
          <BottomButtons onClick={() => window.open(
            'https://www.linkedin.com/in/fabmont/',
            '_blank',
            'noopener',
          )}>
            <Linkedin size="25" />
          </BottomButtons>
          <BottomButtons onClick={() => window.open(
            'https://github.com/fabmont',
            '_blank',
            'noopener',
          )}>
            <GitHub size="25" />
          </BottomButtons>
          <BottomButtons onClick={() => window.open(
            'https://www.instagram.com/fab_mont/',
            '_blank',
            'noopener',
          )}>
            <Instagram size="25" />
          </BottomButtons>
          <BottomButtons onClick={() => window.open(
            'https://www.facebook.com/fabsanmont/',
            '_blank',
            'noopener',
          )}>
            <Facebook size="25" />
          </BottomButtons>
          <BottomButtons onClick={() => window.open(
            'https://api.whatsapp.com/send?phone=+5561983608622&text=Olá, Fabrício!',
            '_blank',
            'noopener',
          )}>
            <MessageCircle size="25" />
          </BottomButtons>
        </BottomButtonsHolder>
      </StaticBottomPanel>
    </MainContainer>
  );
}
