import styled from 'styled-components';
import { Moon, Sun } from 'react-feather';
import { transparentize } from 'polished';

export const Container = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bodyBackground};
  color: ${({ theme }) => theme.textColor};
`;

export const MoonIcon = styled(Moon).attrs({
  size: 20,
})`
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  right: 0;
  @media (max-width: 1366px) {
    right: 18px;
  }
`;

export const SunIcon = styled(Sun).attrs({
  size: 20,
})`
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  position: absolute;
  right: 0;
  @media (max-width: 1366px) {
    right: 18px;
  }
`;

export const MenuBar = styled.div.attrs({
  className: 'menu-bar',
})`
  margin: 0 auto;
  max-width: 1366px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 56px;
  position: relative;

  .menu-link {
    color: ${({ theme }) => theme.titleColor};
    opacity: 0.3;
    text-decoration: none;
    letter-spacing: 1px;
    transition: 0.2s ease;
    &:hover {
      opacity: 0.5;
    }
    &:not(:last-child) {
      margin-right: 68px;
    }
    @media (max-width: 768px) {
      &:not(:last-child) {
        margin-right: 38px;
      }
    }
  }
  .menu-link-active {
    font-weight: bold;
    opacity: 1;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  @media (max-width: 1366px) {
    padding: 0 18px;
  }
`;

export const PageContent = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  width: 100%;
  flex-grow: 1;
  display: flex;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 30px 0;
  background-color: ${({ theme }) => theme.componentBackground};
`;

export const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 1366px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${({ theme }) => transparentize(0.7, theme.textColor)};
  font-size: 15px;
  .menu-link-active {
    font-weight: bold;
    opacity: 1;
  }
  @media (max-width: 768px) {
    justify-content: flex-start;
  }
  @media (max-width: 1366px) {
    padding: 0 18px;
  }
`;
