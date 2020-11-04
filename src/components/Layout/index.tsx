import { useState, useEffect, createContext } from 'react';
import { ThemeProvider } from 'styled-components';

import {
  Container,
  PageContent,
  MenuBar,
  MoonIcon,
  SunIcon,
  Footer,
  FooterContainer,
} from './styles';
import theme from '../../styles/theme';
import MenuLink from '../../components/Link';

interface ThemeContextInterface {
  darkModeActiveted: boolean;
  toggleDarkMode: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
  darkModeActiveted: false,
  toggleDarkMode: () => null,
});

export default function Layout({ children }) {
  const [darkModeActiveted, setDarkModeActiveted] = useState<boolean>(false);
  const { dark, light } = theme;

  const toggleDarkMode = () => {
    setDarkModeActiveted((prev) => !prev);
  };

  const contextParams = {
    darkModeActiveted,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={contextParams}>
      <ThemeProvider theme={darkModeActiveted ? dark : light}>
        <Container>
          <MenuBar>
            <MenuLink
              href="/"
              className="menu-link"
              activeClassName="menu-link-active"
            >
              Fabs
            </MenuLink>
            <MenuLink
              href="/work"
              className="menu-link"
              activeClassName="menu-link-active"
            >
              Work
            </MenuLink>
            <MenuLink
              href="/blog"
              className="menu-link"
              activeClassName="menu-link-active"
            >
              Blog
            </MenuLink>
            {darkModeActiveted ? (
              <SunIcon onClick={toggleDarkMode} />
            ) : (
              <MoonIcon onClick={toggleDarkMode} />
            )}
          </MenuBar>
          <PageContent>{children}</PageContent>
          <Footer>
            <FooterContainer>designed & developed by @fabmont</FooterContainer>
          </Footer>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
