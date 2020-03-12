import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  background-color: #272B2F;
  color: white;
  z-index: 100;
`;

export const NavMenu = styled.nav`
  ol {
    bottom: 0;
    font-family: "Share Tech Mono";
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
