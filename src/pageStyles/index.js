import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Photo = styled.div`
  height: 350px;
  width: 220px;
  background-image: url(https://avatars1.githubusercontent.com/u/43193827?s=460&v=4);
  background-position: center;
  background-size: cover;
  box-shadow: -10px 10px 0 ${({ theme }) => theme.primaryColor};
  border: 3px solid ${({ theme }) => theme.primaryColor};
  margin-right: 50px;
`;

export const BodyHolder = styled.div`
  width: 30%;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 700;
  color: ${({ theme }) => theme.primaryColor};
`;

export const TextBody = styled.span`
  max-width: 100px;
  font-family: 'Share Tech Mono';
  font-weight: 400;
  color: ${({ theme }) => theme.textColor};

  b {
    color: ${({ theme }) => theme.primaryColor};
  }
`;
