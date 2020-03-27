import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Share Tech Mono";

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
  box-shadow: 0 0 16px ${transparentize(0.9, "#000")};
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  overflow: hidden;

  &:hover {
    animation-name: shadowhover;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    cursor: pointer;

    @keyframes shadowhover {
      0% {
        box-shadow: 0 0 16px ${transparentize(0.9, "#000")};
      }

      100% {
        box-shadow: 0 0 16px ${transparentize(0.7, "#000")};
      }
    }
  }

  &:not(:hover) {
    animation-name: shadowleave;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;

    @keyframes shadowleave {
      0% {
        box-shadow: 0 0 16px ${transparentize(0.7, "#000")};
      }

      100% {
        box-shadow: 0 0 16px ${transparentize(0.9, "#000")};
      }
    }
  }
`;

export const ThumbImg = styled.div`
  width: 40%;
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
`;

export const CardContent = styled.div`
  width: 60%;
  padding: 5%;
  font-family: "Share Tech Mono";
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
`;

export const CardTitle = styled.span`
  color: ${({ theme }) => theme.textColor};
  font-size: 34px;
`;

export const CardDescription = styled.span`
  color: ${({ theme }) => transparentize(0.5, theme.textColor)};
`;

export const IconsHolder = styled.div`
  bottom: 10px;
  left: 10px;
`;
