import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import {
  Container,
  GlobalStyles,
  PageContent,
  MenuBar,
  MoonIcon,
  SunIcon,
  MenuLink,
  Footer,
  FooterContainer,
} from './styles';
import theme from '../../constants/theme';

export const ThemeContext = React.createContext();

export default function Layout({ children }) {
  const getStorageTheme = () => {
    if (localStorage.getItem('themeDark') === 'true') {
      return true;
    }

    if (localStorage.getItem('themeDark') === 'false') {
      return false;
    }

    return true;
  };

  const [darkModeActiveted, setDarkModeActiveted] = useState(getStorageTheme());
  const { dark, light } = theme;

  const toggleDarkMode = () => {
    const currentTheme = getStorageTheme();

    setDarkModeActiveted((prev) => !prev);
    localStorage.setItem('themeDark', !currentTheme);
  };

  const contextParams = {
    darkModeActiveted,
    toggleDarkMode,
  };

  useEffect(() => {
    if (!localStorage.getItem('themeDark')) {
      localStorage.setItem('themeDark', true);
    }
  }, []);

  return (
    <ThemeContext.Provider value={contextParams}>
      <ThemeProvider theme={darkModeActiveted ? dark : light}>
        <Helmet>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Container>
          <GlobalStyles />
          <MenuBar>
            <MenuLink to="/" activeClassName="menu-link-active">
              Fabs
            </MenuLink>
            <MenuLink to="/work" activeClassName="menu-link-active">
              Work
            </MenuLink>
            <MenuLink to="/blog" activeClassName="menu-link-active">
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
            <FooterContainer>Designed & developed by @fabmont</FooterContainer>
          </Footer>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
