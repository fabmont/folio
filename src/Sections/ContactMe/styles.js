import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #5eb7b7;
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 800;
  color: white;
  font-size: 50px;
  margin-top: 50px;
  margin-left: 100px;
  text-shadow: 0 0 8px #2b2b28;
  @media (max-width: 425px) {
    margin-left: 25px;
  }
`;