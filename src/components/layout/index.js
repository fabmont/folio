import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import {
  Container,
  GlobalStyles,
  PageContent,
  MenuBar,
  MenuIcon,
} from './styles';
import theme from '../../constants/theme';
import Sider from '../sider';
import FullscreenMenu from './fullscreenMenu';

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

  const [drawerVisible, setDrawerVisible] = useState(false);
  const [darkModeActiveted, setDarkModeActiveted] = useState(getStorageTheme());
  const { dark, light } = theme;

  const openModal = () => setDrawerVisible(true);

  const closeModal = () => setDrawerVisible(false);

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
            href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <FullscreenMenu drawerVisible={drawerVisible} closeModal={closeModal} />
        <Container>
          <GlobalStyles />
          <Sider />
          <PageContent>
            <MenuBar>
              <MenuIcon onClick={openModal} />
            </MenuBar>
            {children}
          </PageContent>
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
