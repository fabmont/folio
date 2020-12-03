import { transparentize } from 'polished';
import styled from 'styled-components';

import { ThemeInterface } from '../theme';

interface ThemeProps {
  theme: ThemeInterface;
  projectLength: number;
}

export const Container = styled.div<ThemeProps>`
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(
    ${(props) => props.projectLength / 2},
    minmax(500px, 1fr)
  );
  padding-bottom: 36px;
  padding-top: 36px;

  @media (max-width: 1024px) {
    margin: 0 18px;
  }

  @media (max-width: 768px) {
    margin: 0 18px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(
      ${(props) => props.projectLength},
      minmax(500px, 1fr)
    );
  }
`;

export const Card = styled.div`
  border: 1px solid ${(props: ThemeProps) => props.theme.disabledColor};
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

export const CardPic = styled.div<{ imgSrc: string }>`
  width: 100%;
  height: 70%;
  background-image: url(${({ imgSrc }) => imgSrc});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 30%;
  padding: 14px;
  background: ${(props: ThemeProps) => props.theme.componentBackground};

  h2 {
    margin-bottom: 8px;
  }
`;

export const TechBadge = styled.span`
  background: ${(props: ThemeProps) =>
    transparentize(0.8, props.theme.primaryColor)};
  color: ${(props: ThemeProps) => props.theme.primaryColor};
  padding: 8px 12px;
  font-size: 12px;

  &:not(:last-child) {
    margin-right: 8px;
  }
`;
