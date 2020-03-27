import React, { useState } from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";
import Helmet from 'react-helmet';
import { Container, GlobalStyles, PageContent, MenuBar, MenuIcon } from "./styles";
import theme from "../../constants/theme";
import Sider from "../sider";
import FullscreenMenu from "./fullscreenMenu";

export default function Layout({ children }) {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const { dark } = theme;

  const openModal = () => setDrawerVisible(true);
  const closeModal = () => setDrawerVisible(false);

  return (
    <ThemeProvider theme={dark}>
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
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};
