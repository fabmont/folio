import styled from 'styled-components';

export const MenuDrawer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  padding: 20% 0;
  background-color: #272b2f;
  transition: 0.3s;
  right: ${({ drawerVisible }) => drawerVisible ? 0 : '100%'};
  height: 100vh;
  width: 100vw;
  z-index: 999;
`;

export const NavMenu = styled.nav`
  ol {
    font-family: 'Share Tech Mono';
    font-weight: bold;
    font-size: 2rem;
    list-style: none;
    padding: 0;
    text-align: center;
  }

  li {
    margin-bottom: 1.5rem;
  }

  .link {
    text-decoration: none;
    color: white;
  }

  .link-active {
    color: #29c7ac;
  }
`;

export const IconsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 50%;

  .link-icon {
    color: white;

    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }
`;
