import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: 100vh;
  width: 100%;
`;

export const StaticBottomPanel = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin: 0 30px;
  padding: 18px 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans';

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const BottomButtonsHolder = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  background-color: #000000;
  opacity: 0.75;
  border-radius: 100px;
  box-shadow: 0 0 6px #2b2b28;
`;

export const BottomButtons = styled.button`
  padding: 6px 14px;
  color: white;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  border: 0;

  :hover {
    color: #a3f7bf;
  }
`;
