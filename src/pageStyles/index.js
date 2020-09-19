import styled from 'styled-components';

import MePhoto from '../images/me.jpg';

export const Container = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MeImg = styled.div`
  width: 300px;
  height: 500px;
  background-image: url(${MePhoto});
  background-size: auto 140%;
  background-position: 52% 10%;
  background-repeat: no-repeat;
  box-shadow: -12px 12px 0 ${({ theme }) => theme.titleColor};

  @media (max-width: 728px) {
    width: 250px;
    height: 400px;
    margin-top: 50px;
  }

  @media (max-width: 425px) {
    width: 200px;
    height: 300px;
  }
`;

export const TextContainer = styled.div`
  max-width: 350px;
  margin-left: 35px;

  h1 {
    color: ${({ theme }) => theme.titleColor};
  }

  p {
    font-size: 15px;
    color: ${({ theme }) => theme.textColor};
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 20px 0 50px 0;
  }
`;

export const IconsContainer = styled.div`
  max-width: 350px;
  display: flex;
  flex-direction: row;
  margin-top: 30px;

  a {
    color: ${({ theme }) => theme.titleColor};
    transition: 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
    &:not(:last-child) {
      margin-right: 24px;
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
