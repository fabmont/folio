import React from 'react';
import { Instagram, Linkedin, Facebook, GitHub } from 'react-feather';
import { StaticBottomPanel, MainContainer, BottomButtons } from './styles';
import GettingStarted from './Sections/GettingStarted';
import AboutMe from './Sections/AboutMe';

export default function App() {
  return (
    <MainContainer>
      <GettingStarted />
      <AboutMe />
      <StaticBottomPanel>
        <div />
        <div>
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
        </div>
      </StaticBottomPanel>
    </MainContainer>
  );
}
