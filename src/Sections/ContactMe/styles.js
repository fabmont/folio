import styled from 'styled-components';
import img from '../../img/Contact-Us.png';

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
  @media (max-width: 425px) {
    margin-left: 25px;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 50px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const InfoCard = styled.div`
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  width: 40%;
  background-color: white;

  h2 {
    font-weight: 800;
    color: #5eb7b7;
    margin: 0;
  }
  p {
    color: #5eb7b7;
    margin: 0;
  }

  @media (max-width: 768px) {
    order: 1;
    width: 100%;
    margin-bottom: 100px;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;
`;

export const ImageContainer = styled.div`
  display: flex;
  flex: 1;
`;

export const Image = styled.img.attrs({ src: img })`
  height: 400px;
  width: 400px;
  @media (max-width: 768px) {
    order: 0;
    height: 250px;
    width: 250px;
  }
`;