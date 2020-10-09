import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 250px;
  background: ${({ theme }) => transparentize(0.98, theme.titleColor)};
  border: 2px solid ${({ theme }) => transparentize(0.96, theme.titleColor)};
`;

export const Thumb = styled.div`
  height: 100%;
  width: 35%;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-position: 45%;
`;

export const CardBody = styled.div`
  flex: 1;
  padding: 12px;
  position: relative;

  h2 {
    margin: 0;
  }

  p {
    color: ${({ theme }) => theme.textColor};
    font-size: 14px;
    margin-bottom: 100px;
    opacity: 0.7;
  }
`;

export const MoreButton = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: transparent;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1.25px;
  color: ${({ theme }) => theme.textColor};
  padding: 12px 18px;
  transition: 0.3s ease-in-out;
  border: 0;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => transparentize(0.9, theme.textColor)};
  }

  &:active,
  &:focus {
    outline: none;
  }
`;
