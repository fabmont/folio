import styled, { createGlobalStyle } from 'styled-components';
import { Menu } from 'react-feather';

export const Container = styled.div`
  min-height: 100vh;
  grid-template-columns: 0 4fr;
  display: grid;
  background-color: ${({ theme }) => theme.bodyBackground};

  @media (min-width: 1200px) {
    grid-template-columns: 1.35fr 4fr;
  }

  @media (min-width: 750px) {
    grid-template-columns: 1.25fr 4fr;
  }
`;

export const MenuIcon = styled(Menu).attrs({
  size: 30,
})`
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
`;

export const MenuBar = styled.div.attrs({
  className: 'menu-bar',
})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 6rem;
`;

export const PageContent = styled.div`
  padding: 10%;

  .menu-bar {
    display: none;
  }

  @media (max-width: 750px) {
    .menu-bar {
      display: flex;
    }

    padding: 0 16px 16px 16px;
  }
`;

export const GlobalStyles = createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: -apple-system,
    "Open Sans", BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
  }

  code {
    font-family: 'Open Sans',
    source-code-pro,
    Menlo, Monaco,
    Consolas,
    "Courier New",
    monospace;
  }
`;
