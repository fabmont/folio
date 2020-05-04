import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: #272b2f;
  color: white;
  z-index: 100;
`;

export const ThemeContainer = styled.div`
  position: absolute;
  top: 18px;
  left: 18px;
  display: flex;
  flex-direction: row;

  .toggle-btn {
    background-color: transparent;
    border: 0;
    padding: 12px;
    color: ${({ theme }) => theme.primaryColor};
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: 750px) {
    display: none;
  }
`;

export const NavMenu = styled.nav`
  ol {
    bottom: 0;
    font-family: 'Share Tech Mono';
    font-weight: bold;
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
    display: none;
  }

  .link {
    text-decoration: none;
    color: white;
  }

  .link-active {
    color: #29c7ac;
  }

  @media (min-width: 750px) {
    li {
      display: inherit;
      font-size: 3.5vw;
      line-height: 1.1;
    }
  }

  @media (min-width: 1200px) {
    li {
      display: inherit;
      font-size: 3.5em;
      line-height: 1.2;
    }
  }
`;

export const IconsHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 3rem 0;

  .link-icon {
    color: white;

    &:hover {
      color: ${({ theme }) => theme.primaryColor};
    }

    &:not(:last-child) {
      margin-right: 30px;
    }

    @media (max-width: 768px) {
      #nav-icon {
        height: 20px;
        width: 20px;
      }

      &:not(:last-child) {
        margin-right: 12px;
      }
    }
  }
`;
