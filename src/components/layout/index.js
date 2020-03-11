import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Container, GlobalStyles, PageContent } from './styles';
import theme from '../../constants/theme';
import Sider from '../sider';

export default function Layout({ children }) {
  const { light } = theme;

  return (
    <ThemeProvider theme={light}>
      <Container>
        <GlobalStyles />
        <Sider />
        <PageContent>{children}</PageContent>
      </Container>
    </ThemeProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
