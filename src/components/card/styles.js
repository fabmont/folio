import styled from 'styled-components';
import { transparentize } from 'polished';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 250px;
  background: ${({ theme }) => transparentize(0.98, theme.titleColor)};
  border: 2px solid ${({ theme }) => transparentize(0.96, theme.titleColor)};
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 16px
      ${({ theme }) => transparentize(0.92, theme.titleColor)};
  }
`;
