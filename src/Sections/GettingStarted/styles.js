import styled from 'styled-components';
import DotBackground from '../../img/dot_bg.png';
import Me from '../../img/me.jpeg';

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url(${DotBackground});
  background-color: #393e46;
  font-family: 'Open Sans';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 8px #2b2b28;
  text-align: center;
`;

export const ProfileImage = styled.img.attrs({ src: Me })`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  margin-bottom: 20px;
  border-width: 6px;
  border-style: solid;
  border-color: white;
`;

export const Title = styled.span`
  font-weight: 800;
  font-size: 50px;
  color: white;
`;

export const Subtitle = styled.span`
  font-size: 18px;
  color: #a9a9a9;
`;