import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  font-family: 'Share Tech Mono';

  @media (max-width: 425px) {
    flex-direction: column;
    padding-bottom: 30px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
`;

export const BodyText = styled.span`
  color: ${({ theme }) => theme.textColor};
`;

export const Card = styled.div`
  width: 50%;
  height: 300px;
  background-color: ${({ theme }) => theme.componentBackground};
  box-shadow: 0 0 16px ${transparentize(0.9, '#000')};
  border-radius: 4px;

  &:hover {
    animation-name: shadowhover;
    animation-duration: 0.5s;
    animation-fill-mode: forwards;
    cursor: pointer;

    @keyframes shadowhover {
      0% {
        box-shadow: 0 0 16px ${transparentize(0.9, '#000')};
      }
      
      100% {
        box-shadow: 0 0 16px ${transparentize(0.5, '#000')};
      }
    }
  }
`;