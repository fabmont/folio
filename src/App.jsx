import React from 'react';
import { Instagram, Linkedin, Facebook, GitHub } from 'react-feather';
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
        <div />
        <BottomButtonsHolder>
          <BottomButtons>
            <Linkedin size="25" />
          </BottomButtons>
          <BottomButtons>
            <GitHub size="25" />
          </BottomButtons>
          <BottomButtons>
            <Instagram size="25" />
          </BottomButtons>
          <BottomButtons>
            <Facebook size="25" />
          </BottomButtons>
        </BottomButtonsHolder>
      </StaticBottomPanel>
    </MainContainer>
  );
}
