import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Share Tech Mono';

  @media (max-width: 425px) {
    flex-direction: column;
    padding-bottom: 30px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 80px;
  text-shadow: ${({ theme }) => theme.textColor} -8px 4px;
`;

export const TextBody = styled.span`
  color: ${({ theme }) => theme.textColor};
  text-align: center;
`;

export const GhostButton = styled.button`
  font-family: 'Share Tech Mono';
  color: ${({ theme }) => theme.primaryColor};
  font-size: 16px;
  font-weight: bold;
  background: transparent;
  padding: 0;
  border: 0;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: 0;
  }
`;