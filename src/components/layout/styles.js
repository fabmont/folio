import styled, { createGlobalStyle } from 'styled-components';

export const burgerStyle = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)'
  }
};


export const Container = styled.div`
  min-height: 100vh;
  grid-template-columns: 0.5fr 4fr;
  display: grid;
  background-color: ${({ theme }) => theme.bodyBackground};

  @media (min-width: 1200px) {
    grid-template-columns: 1.35fr 4fr;
  }

  @media (min-width: 750px) {
    grid-template-columns: 1.25fr 4fr;
  }
`;

export const PageContent = styled.div`
  margin-top: 5rem;
  padding: 0 30px;

  @media (max-width: 425px) {
    padding: 0 16px;
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
